import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ApiStatusAppVersion } from "./apistatusappversion";



export class ApiStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=android" })
  android: ApiStatusAppVersion;

  @SpeakeasyMetadata({ data: "json, name=current_season" })
  currentSeason: number;

  @SpeakeasyMetadata({ data: "json, name=down_events" })
  downEvents: string[];

  @SpeakeasyMetadata({ data: "json, name=ios" })
  ios: ApiStatusAppVersion;

  @SpeakeasyMetadata({ data: "json, name=is_datafeed_down" })
  isDatafeedDown: boolean;

  @SpeakeasyMetadata({ data: "json, name=max_season" })
  maxSeason: number;
}
