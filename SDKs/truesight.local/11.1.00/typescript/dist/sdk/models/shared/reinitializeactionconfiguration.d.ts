import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The deserialized form of the <b>Reinitialize</b> service's request payload.
**/
export declare class ReinitializeActionConfiguration extends SpeakeasyBase {
    resetAlertActions?: number;
    resetAlertAfterNTimes?: number;
    resetDebugMode?: number;
    resetDiscoveryAndPollingIntervals?: number;
    resetJavaSettings?: number;
    resetOtherAlertSettings?: number;
    resetRemovedPausedObjectList?: number;
    resetReportSettings?: number;
    resetThresholds?: number;
}
