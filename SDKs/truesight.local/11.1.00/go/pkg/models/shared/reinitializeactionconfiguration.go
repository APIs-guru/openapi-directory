package shared

type ReinitializeActionConfiguration struct {
	ResetAlertActions                 *int32 `json:"resetAlertActions"`
	ResetAlertAfterNTimes             *int32 `json:"resetAlertAfterNTimes"`
	ResetDebugMode                    *int32 `json:"resetDebugMode"`
	ResetDiscoveryAndPollingIntervals *int32 `json:"resetDiscoveryAndPollingIntervals"`
	ResetJavaSettings                 *int32 `json:"resetJavaSettings"`
	ResetOtherAlertSettings           *int32 `json:"resetOtherAlertSettings"`
	ResetRemovedPausedObjectList      *int32 `json:"resetRemovedPausedObjectList"`
	ResetReportSettings               *int32 `json:"resetReportSettings"`
	ResetThresholds                   *int32 `json:"resetThresholds"`
}
