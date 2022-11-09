import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PlaceGetByTypePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=types" })
  types: string[];
}


export class PlaceGetByTypeQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=activeOnly" })
  activeOnly?: boolean;
}


export class PlaceGetByTypeRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PlaceGetByTypePathParams;

  @Metadata()
  queryParams: PlaceGetByTypeQueryParams;
}


export class PlaceGetByTypeResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.TflApiPresentationEntitiesPlace })
  tflApiPresentationEntitiesPlaces?: shared.TflApiPresentationEntitiesPlace[];
}
