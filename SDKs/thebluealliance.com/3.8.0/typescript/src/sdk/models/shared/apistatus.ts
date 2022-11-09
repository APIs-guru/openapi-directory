import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ApiStatusAppVersion } from "./apistatusappversion";
import { ApiStatusAppVersion } from "./apistatusappversion";


export class ApiStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=android" })
  android: ApiStatusAppVersion;

  @Metadata({ data: "json, name=current_season" })
  currentSeason: number;

  @Metadata({ data: "json, name=down_events" })
  downEvents: string[];

  @Metadata({ data: "json, name=ios" })
  ios: ApiStatusAppVersion;

  @Metadata({ data: "json, name=is_datafeed_down" })
  isDatafeedDown: boolean;

  @Metadata({ data: "json, name=max_season" })
  maxSeason: number;
}
