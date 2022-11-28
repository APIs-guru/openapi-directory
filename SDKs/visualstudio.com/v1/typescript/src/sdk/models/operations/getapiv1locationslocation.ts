import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetApiV1LocationsLocationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=location" })
  location: string;
}


export class GetApiV1LocationsLocationQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=planId" })
  planId?: string;
}


export class GetApiV1LocationsLocationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetApiV1LocationsLocationPathParams;

  @SpeakeasyMetadata()
  queryParams: GetApiV1LocationsLocationQueryParams;
}


export class GetApiV1LocationsLocationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  locationInfoResult?: shared.LocationInfoResult;

  @SpeakeasyMetadata()
  problemDetails?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
