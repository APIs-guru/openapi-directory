import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TflApiPresentationEntitiesServiceFrequency extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=highestFrequency" })
  highestFrequency?: number;

  @SpeakeasyMetadata({ data: "json, name=lowestFrequency" })
  lowestFrequency?: number;
}
