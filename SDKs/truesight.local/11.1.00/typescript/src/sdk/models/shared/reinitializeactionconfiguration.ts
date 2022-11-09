import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ReinitializeActionConfiguration
/** 
 * The deserialized form of the <b>Reinitialize</b> service's request payload.
**/
export class ReinitializeActionConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=resetAlertActions" })
  resetAlertActions?: number;

  @Metadata({ data: "json, name=resetAlertAfterNTimes" })
  resetAlertAfterNTimes?: number;

  @Metadata({ data: "json, name=resetDebugMode" })
  resetDebugMode?: number;

  @Metadata({ data: "json, name=resetDiscoveryAndPollingIntervals" })
  resetDiscoveryAndPollingIntervals?: number;

  @Metadata({ data: "json, name=resetJavaSettings" })
  resetJavaSettings?: number;

  @Metadata({ data: "json, name=resetOtherAlertSettings" })
  resetOtherAlertSettings?: number;

  @Metadata({ data: "json, name=resetRemovedPausedObjectList" })
  resetRemovedPausedObjectList?: number;

  @Metadata({ data: "json, name=resetReportSettings" })
  resetReportSettings?: number;

  @Metadata({ data: "json, name=resetThresholds" })
  resetThresholds?: number;
}
