import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TflApiPresentationEntitiesBay } from "./tflapipresentationentitiesbay";



export class TflApiPresentationEntitiesCarParkOccupancy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bays", elemType: TflApiPresentationEntitiesBay })
  bays?: TflApiPresentationEntitiesBay[];

  @SpeakeasyMetadata({ data: "json, name=carParkDetailsUrl" })
  carParkDetailsUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
