import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class TflApiPresentationEntitiesServiceFrequency extends SpeakeasyBase {
  @Metadata({ data: "json, name=highestFrequency" })
  highestFrequency?: number;

  @Metadata({ data: "json, name=lowestFrequency" })
  lowestFrequency?: number;
}
