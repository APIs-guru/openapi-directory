import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class TflApiPresentationEntitiesKnownJourney extends SpeakeasyBase {
  @Metadata({ data: "json, name=hour" })
  hour?: string;

  @Metadata({ data: "json, name=intervalId" })
  intervalId?: number;

  @Metadata({ data: "json, name=minute" })
  minute?: string;
}
