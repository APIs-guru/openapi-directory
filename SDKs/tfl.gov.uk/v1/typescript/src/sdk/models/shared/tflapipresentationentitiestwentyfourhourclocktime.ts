import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class TflApiPresentationEntitiesTwentyFourHourClockTime extends SpeakeasyBase {
  @Metadata({ data: "json, name=hour" })
  hour?: string;

  @Metadata({ data: "json, name=minute" })
  minute?: string;
}
