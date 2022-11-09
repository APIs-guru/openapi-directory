import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetStopPointIdPlaceTypesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetStopPointIdPlaceTypesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=placeTypes" })
  placeTypes: string[];
}


export class GetStopPointIdPlaceTypesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetStopPointIdPlaceTypesPathParams;

  @Metadata()
  queryParams: GetStopPointIdPlaceTypesQueryParams;
}


export class GetStopPointIdPlaceTypesResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.TflApiPresentationEntitiesPlace })
  tflApiPresentationEntitiesPlaces?: shared.TflApiPresentationEntitiesPlace[];
}
