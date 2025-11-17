import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card } from '../components/ui/Card';
import { fetchVaults, fetchProposals } from '../utils/api';
import { useWallet } from '../hooks/useWallet';

export default function ProposalsPage() {
  const wallet = useWallet();
  const [proposals, setProposals] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadAllProposals = async () => {
      try {
        setLoading(true);

        // First get all vaults the user has access to
        const vaultsData = await fetchVaults(wallet.address || undefined);

        // Then fetch proposals from each vault
        const allProposals: any[] = [];
        for (const vault of vaultsData.all) {
          try {
            const vaultProposals = await fetchProposals(vault.id);
            // Add vault info to each proposal
            const proposalsWithVaultInfo = vaultProposals.map((p: any) => ({
              ...p,
              vaultId: vault.id,
              vaultName: vault.vaultId || `Vault ${vault.id.slice(0, 8)}`,
              approvalThreshold: vault.approvalThreshold,
            }));
            allProposals.push(...proposalsWithVaultInfo);
          } catch (err) {
            console.error(`Failed to load proposals for vault ${vault.id}:`, err);
          }
        }

        // Sort by creation date (most recent first)
        allProposals.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

        setProposals(allProposals);
        setError(null);
      } catch (err: any) {
        setError(err.message || 'Failed to load proposals');
      } finally {
        setLoading(false);
      }
    };

    loadAllProposals();
  }, [wallet.address]);

  if (loading) {
    return (
      <div className="section-spacious">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 section-bold">Proposals</h1>
          <Card padding="lg" className="text-center py-16">
            <p className="text-gray-600">Loading proposals...</p>
          </Card>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="section-spacious">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 section-bold">Proposals</h1>
          <Card padding="lg" className="text-center py-16 border-2 border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-900/20">
            <h2 className="text-2xl font-semibold mb-4 text-red-800 dark:text-red-200">Error loading proposals</h2>
            <p className="text-red-600 dark:text-red-300">{error}</p>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="section-spacious">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 section-bold">Proposals</h1>

        {proposals.length === 0 ? (
          <Card padding="lg" className="text-center">
            <h2 className="text-2xl font-semibold mb-4">No proposals yet</h2>
            <p className="text-gray-600">
              Proposals will appear here when they are created in your vaults
            </p>
          </Card>
        ) : (
          <div className="space-y-4">
            {proposals.map((proposal) => (
              <Link key={proposal.id} to={`/proposals/${proposal.id}`}>
                <Card padding="lg" className="hover:shadow-lg transition-shadow cursor-pointer">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold mb-1">{proposal.amount} BCH</h3>
                      <p className="text-gray-600">{proposal.reason}</p>
                      <p className="text-sm text-gray-500 mt-1">
                        From: <span className="font-medium">{proposal.vaultName}</span>
                      </p>
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        proposal.status === 'approved'
                          ? 'bg-green-100 text-green-800'
                          : proposal.status === 'executed'
                          ? 'bg-blue-100 text-blue-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}
                    >
                      {proposal.status}
                    </span>
                  </div>
                  
                  <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                    <div className="text-sm text-gray-600">
                      To: <span className="font-mono">{proposal.recipient}</span>
                    </div>
                    <div className="text-sm">
                      <span className="text-gray-600">Approvals: </span>
                      <span className="font-semibold">
                        {proposal.approvalCount || 0}/{proposal.approvalThreshold || 0}
                      </span>
                    </div>
                    <div className="text-sm text-gray-500">
                      {new Date(proposal.createdAt).toLocaleDateString()}
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

