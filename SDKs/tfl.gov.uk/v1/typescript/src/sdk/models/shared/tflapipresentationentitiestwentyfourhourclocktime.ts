import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TflApiPresentationEntitiesTwentyFourHourClockTime extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=hour" })
  hour?: string;

  @SpeakeasyMetadata({ data: "json, name=minute" })
  minute?: string;
}
