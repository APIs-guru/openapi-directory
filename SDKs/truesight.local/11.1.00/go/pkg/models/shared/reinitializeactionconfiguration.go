package shared



type ReinitializeActionConfiguration struct {
    ResetAlertActions *int32 `json:"resetAlertActions,omitempty"`
    ResetAlertAfterNTimes *int32 `json:"resetAlertAfterNTimes,omitempty"`
    ResetDebugMode *int32 `json:"resetDebugMode,omitempty"`
    ResetDiscoveryAndPollingIntervals *int32 `json:"resetDiscoveryAndPollingIntervals,omitempty"`
    ResetJavaSettings *int32 `json:"resetJavaSettings,omitempty"`
    ResetOtherAlertSettings *int32 `json:"resetOtherAlertSettings,omitempty"`
    ResetRemovedPausedObjectList *int32 `json:"resetRemovedPausedObjectList,omitempty"`
    ResetReportSettings *int32 `json:"resetReportSettings,omitempty"`
    ResetThresholds *int32 `json:"resetThresholds,omitempty"`
    
}

