import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { TflApiPresentationEntitiesAdditionalProperties } from "./tflapipresentationentitiesadditionalproperties";
import { TflApiPresentationEntitiesPlace } from "./tflapipresentationentitiesplace";


export class TflApiPresentationEntitiesPlace extends SpeakeasyBase {
  @Metadata({ data: "json, name=additionalProperties", elemType: shared.TflApiPresentationEntitiesAdditionalProperties })
  additionalProperties?: TflApiPresentationEntitiesAdditionalProperties[];

  @Metadata({ data: "json, name=children", elemType: shared.TflApiPresentationEntitiesPlace })
  children?: TflApiPresentationEntitiesPlace[];

  @Metadata({ data: "json, name=childrenUrls" })
  childrenUrls?: string[];

  @Metadata({ data: "json, name=commonName" })
  commonName?: string;

  @Metadata({ data: "json, name=distance" })
  distance?: number;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=lat" })
  lat?: number;

  @Metadata({ data: "json, name=lon" })
  lon?: number;

  @Metadata({ data: "json, name=placeType" })
  placeType?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
