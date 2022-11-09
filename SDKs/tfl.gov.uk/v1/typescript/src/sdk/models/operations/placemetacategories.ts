import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PlaceMetaCategoriesResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.TflApiPresentationEntitiesPlaceCategory })
  tflApiPresentationEntitiesPlaceCategories?: shared.TflApiPresentationEntitiesPlaceCategory[];
}
