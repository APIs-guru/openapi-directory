import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PlaceGetByTypePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=types" })
  types: string[];
}


export class PlaceGetByTypeQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=activeOnly" })
  activeOnly?: boolean;
}


export class PlaceGetByTypeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PlaceGetByTypePathParams;

  @SpeakeasyMetadata()
  queryParams: PlaceGetByTypeQueryParams;
}


export class PlaceGetByTypeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.TflApiPresentationEntitiesPlace })
  tflApiPresentationEntitiesPlaces?: shared.TflApiPresentationEntitiesPlace[];
}
