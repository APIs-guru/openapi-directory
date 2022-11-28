import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetStopPointIdPlaceTypesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetStopPointIdPlaceTypesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=placeTypes" })
  placeTypes: string[];
}


export class GetStopPointIdPlaceTypesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetStopPointIdPlaceTypesPathParams;

  @SpeakeasyMetadata()
  queryParams: GetStopPointIdPlaceTypesQueryParams;
}


export class GetStopPointIdPlaceTypesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.TflApiPresentationEntitiesPlace })
  tflApiPresentationEntitiesPlaces?: shared.TflApiPresentationEntitiesPlace[];
}
