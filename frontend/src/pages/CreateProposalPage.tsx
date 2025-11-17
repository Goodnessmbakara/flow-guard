import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { useWallet } from '../hooks/useWallet';
import { createProposal } from '../utils/api';

export default function CreateProposalPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const wallet = useWallet();
  const [formData, setFormData] = useState({
    recipient: '',
    amount: '',
    reason: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async () => {
    if (!wallet.address) {
      setError('Please connect your wallet first');
      return;
    }

    if (!id) {
      setError('Vault ID is missing');
      return;
    }

    setIsSubmitting(true);
    setError(null);

    try {
      // Validate form
      if (!formData.recipient) {
        throw new Error('Recipient address is required');
      }
      if (!formData.amount || parseFloat(formData.amount) <= 0) {
        throw new Error('Amount must be greater than 0');
      }
      if (!formData.reason) {
        throw new Error('Reason is required');
      }

      // Create proposal via API
      const proposalData = {
        recipient: formData.recipient,
        amount: parseFloat(formData.amount),
        reason: formData.reason,
      };

      await createProposal(id, proposalData, wallet.address);

      // Navigate back to vault detail page
      navigate(`/vaults/${id}`);
    } catch (err: any) {
      setError(err.message || 'Failed to create proposal');
      setIsSubmitting(false);
    }
  };

  return (
    <div className="section-spacious">
      <div className="max-w-2xl mx-auto">
        <div className="mb-8">
          <Link to={`/vaults/${id}`} className="text-[--color-primary] hover:underline">
            ← Back to Vault
          </Link>
        </div>

        <h1 className="text-4xl font-bold mb-8 section-bold">Create Proposal</h1>

        {error && (
          <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
            <p className="text-red-800 dark:text-red-200">{error}</p>
          </div>
        )}

        <Card padding="lg">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Recipient Address</label>
              <input
                type="text"
                value={formData.recipient}
                onChange={(e) => handleInputChange('recipient', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary font-mono"
                placeholder="0x..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Amount (BCH)</label>
              <input
                type="number"
                value={formData.amount}
                onChange={(e) => handleInputChange('amount', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary"
                placeholder="0.00"
                step="0.01"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Reason / Description</label>
              <textarea
                value={formData.reason}
                onChange={(e) => handleInputChange('reason', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary"
                rows={4}
                placeholder="Describe the purpose of this payment..."
              />
            </div>

            <div className="flex justify-end gap-4 pt-6 border-t border-gray-200">
              <Link to={`/vaults/${id}`}>
                <Button variant="outline" disabled={isSubmitting}>Cancel</Button>
              </Link>
              <Button onClick={handleSubmit} disabled={isSubmitting}>
                {isSubmitting ? 'Creating Proposal...' : 'Create Proposal'}
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}

