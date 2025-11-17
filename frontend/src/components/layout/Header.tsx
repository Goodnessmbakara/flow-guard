import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Wallet, LogOut } from 'lucide-react';
import { Button } from '../ui/Button';
import { Logo } from '../ui/Logo';
import { ThemeToggle } from '../ui/ThemeToggle';
import { useWallet } from '../../hooks/useWallet';
import { useWalletModal } from '../../hooks/useWalletModal';

/**
 * Header component with FlowGuard branding and navigation
 * Includes mobile menu, wallet connection, and dark mode support
 */
export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const wallet = useWallet();
  const { openModal } = useWalletModal();

  return (
    <header className="border-b border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-[#1a1a1a]/80 sticky top-0 z-50 backdrop-blur-md backdrop-saturate-150 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16 md:h-20">
          {/* Logo and nav grouped together on the left */}
          <div className="flex items-center gap-8 lg:gap-12">
            <Logo variant="default" />

            <nav className="hidden md:flex space-x-6 lg:space-x-8">
              <Link
                to="/vaults"
                className="text-gray-600 dark:text-gray-300 hover:text-[#b2ac88] dark:hover:text-[#b2ac88] transition-colors font-medium"
              >
                Vaults
              </Link>
              <Link
                to="/proposals"
                className="text-gray-600 dark:text-gray-300 hover:text-[#b2ac88] dark:hover:text-[#b2ac88] transition-colors font-medium"
              >
                Proposals
              </Link>
              <Link
                to="/docs"
                className="text-gray-600 dark:text-gray-300 hover:text-[#b2ac88] dark:hover:text-[#b2ac88] transition-colors font-medium"
              >
                Docs
              </Link>
            </nav>
          </div>

          {/* Right side - Theme toggle, Wallet, and Launch App button */}
          <div className="flex items-center gap-2 sm:gap-4 ml-auto">
            <ThemeToggle />

            {/* Wallet Connection */}
            {wallet.isConnected ? (
              <div className="flex items-center gap-2">
                {wallet.balance && (
                  <div className="hidden lg:flex items-center gap-2 px-3 py-2 bg-[#b2ac88]/10 rounded-lg">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      {wallet.balance.bch.toFixed(4)} BCH
                    </span>
                  </div>
                )}
                <div className="hidden sm:flex items-center gap-2 px-3 py-2 bg-[#b2ac88]/10 rounded-lg">
                  <Wallet className="w-4 h-4 text-[#b2ac88]" />
                  <span className="text-sm font-mono text-gray-700 dark:text-gray-300">
                    {wallet.address?.slice(0, 6)}...{wallet.address?.slice(-4)}
                  </span>
                </div>
                <button
                  onClick={() => wallet.disconnect()}
                  className="p-2 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors group"
                  title="Disconnect Wallet"
                >
                  <LogOut className="w-4 h-4 text-gray-500 group-hover:text-red-600" />
                </button>
              </div>
            ) : (
              <Button
                variant="outline"
                size="sm"
                onClick={openModal}
                className="hidden sm:flex items-center gap-2"
              >
                <Wallet className="w-4 h-4" />
                Connect Wallet
              </Button>
            )}

            <Link to="/vaults" className="hidden sm:block">
              <Button variant="primary" size="sm">
                Launch App →
              </Button>
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6 text-gray-600 dark:text-gray-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 dark:border-gray-700 backdrop-blur-md">
            <nav className="flex flex-col space-y-4">
              <Link
                to="/vaults"
                className="text-gray-600 dark:text-gray-300 hover:text-[#b2ac88] transition-colors font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Vaults
              </Link>
              <Link
                to="/proposals"
                className="text-gray-600 dark:text-gray-300 hover:text-[#b2ac88] transition-colors font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Proposals
              </Link>
              <Link
                to="/docs"
                className="text-gray-600 dark:text-gray-300 hover:text-[#b2ac88] transition-colors font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Docs
              </Link>
              {wallet.isConnected ? (
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-[#b2ac88]/10 rounded-lg">
                    <div className="flex items-center gap-2">
                      <Wallet className="w-4 h-4 text-[#b2ac88]" />
                      <span className="text-sm font-mono text-gray-700 dark:text-gray-300">
                        {wallet.address?.slice(0, 8)}...{wallet.address?.slice(-6)}
                      </span>
                    </div>
                    <button
                      onClick={() => {
                        wallet.disconnect();
                        setMobileMenuOpen(false);
                      }}
                      className="p-1.5 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"
                    >
                      <LogOut className="w-4 h-4 text-red-600" />
                    </button>
                  </div>
                  {wallet.balance && (
                    <div className="text-sm text-gray-600 dark:text-gray-400 text-center">
                      Balance: {wallet.balance.bch.toFixed(4)} BCH
                    </div>
                  )}
                </div>
              ) : (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    openModal();
                    setMobileMenuOpen(false);
                  }}
                  className="w-full flex items-center justify-center gap-2"
                >
                  <Wallet className="w-4 h-4" />
                  Connect Wallet
                </Button>
              )}
              <Link to="/vaults" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="primary" size="sm" className="w-full sm:w-auto">
                  Launch App →
                </Button>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

