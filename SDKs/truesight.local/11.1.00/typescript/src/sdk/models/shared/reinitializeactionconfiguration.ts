import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ReinitializeActionConfiguration
/** 
 * The deserialized form of the <b>Reinitialize</b> service's request payload.
**/
export class ReinitializeActionConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=resetAlertActions" })
  resetAlertActions?: number;

  @SpeakeasyMetadata({ data: "json, name=resetAlertAfterNTimes" })
  resetAlertAfterNTimes?: number;

  @SpeakeasyMetadata({ data: "json, name=resetDebugMode" })
  resetDebugMode?: number;

  @SpeakeasyMetadata({ data: "json, name=resetDiscoveryAndPollingIntervals" })
  resetDiscoveryAndPollingIntervals?: number;

  @SpeakeasyMetadata({ data: "json, name=resetJavaSettings" })
  resetJavaSettings?: number;

  @SpeakeasyMetadata({ data: "json, name=resetOtherAlertSettings" })
  resetOtherAlertSettings?: number;

  @SpeakeasyMetadata({ data: "json, name=resetRemovedPausedObjectList" })
  resetRemovedPausedObjectList?: number;

  @SpeakeasyMetadata({ data: "json, name=resetReportSettings" })
  resetReportSettings?: number;

  @SpeakeasyMetadata({ data: "json, name=resetThresholds" })
  resetThresholds?: number;
}
