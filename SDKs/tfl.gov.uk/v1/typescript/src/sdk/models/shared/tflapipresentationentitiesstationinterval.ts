import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TflApiPresentationEntitiesInterval } from "./tflapipresentationentitiesinterval";



export class TflApiPresentationEntitiesStationInterval extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=intervals", elemType: TflApiPresentationEntitiesInterval })
  intervals?: TflApiPresentationEntitiesInterval[];
}
