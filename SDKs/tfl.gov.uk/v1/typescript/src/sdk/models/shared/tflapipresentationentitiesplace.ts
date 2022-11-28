import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TflApiPresentationEntitiesAdditionalProperties } from "./tflapipresentationentitiesadditionalproperties";



export class TflApiPresentationEntitiesPlace extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=additionalProperties", elemType: TflApiPresentationEntitiesAdditionalProperties })
  additionalProperties?: TflApiPresentationEntitiesAdditionalProperties[];

  @SpeakeasyMetadata({ data: "json, name=children", elemType: TflApiPresentationEntitiesPlace })
  children?: TflApiPresentationEntitiesPlace[];

  @SpeakeasyMetadata({ data: "json, name=childrenUrls" })
  childrenUrls?: string[];

  @SpeakeasyMetadata({ data: "json, name=commonName" })
  commonName?: string;

  @SpeakeasyMetadata({ data: "json, name=distance" })
  distance?: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=lat" })
  lat?: number;

  @SpeakeasyMetadata({ data: "json, name=lon" })
  lon?: number;

  @SpeakeasyMetadata({ data: "json, name=placeType" })
  placeType?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
