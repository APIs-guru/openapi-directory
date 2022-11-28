import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TflApiPresentationEntitiesKnownJourney extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=hour" })
  hour?: string;

  @SpeakeasyMetadata({ data: "json, name=intervalId" })
  intervalId?: number;

  @SpeakeasyMetadata({ data: "json, name=minute" })
  minute?: string;
}
