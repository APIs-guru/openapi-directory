import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { TflApiPresentationEntitiesInterval } from "./tflapipresentationentitiesinterval";


export class TflApiPresentationEntitiesStationInterval extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=intervals", elemType: shared.TflApiPresentationEntitiesInterval })
  intervals?: TflApiPresentationEntitiesInterval[];
}
