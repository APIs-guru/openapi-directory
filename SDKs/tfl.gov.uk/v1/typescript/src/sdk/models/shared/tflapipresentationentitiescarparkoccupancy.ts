import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { TflApiPresentationEntitiesBay } from "./tflapipresentationentitiesbay";


export class TflApiPresentationEntitiesCarParkOccupancy extends SpeakeasyBase {
  @Metadata({ data: "json, name=bays", elemType: shared.TflApiPresentationEntitiesBay })
  bays?: TflApiPresentationEntitiesBay[];

  @Metadata({ data: "json, name=carParkDetailsUrl" })
  carParkDetailsUrl?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
