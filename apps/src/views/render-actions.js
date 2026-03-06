export function buildRenderActions({
  updateAccountSort,
  handleOpenUsageModal,
  setManualPreferredAccount,
  syncAccountToCodexApp,
  deleteAccount,
  toggleApiKeyStatus,
  deleteApiKey,
  updateApiKeyModel,
  copyApiKey,
}) {
  return {
    onUpdateSort: updateAccountSort,
    onOpenUsage: handleOpenUsageModal,
    onSetCurrentAccount: setManualPreferredAccount,
    onSyncCodexApp: syncAccountToCodexApp,
    onDeleteAccount: deleteAccount,
    onToggleApiKeyStatus: toggleApiKeyStatus,
    onDeleteApiKey: deleteApiKey,
    onUpdateApiKeyModel: updateApiKeyModel,
    onCopyApiKey: copyApiKey,
  };
}
