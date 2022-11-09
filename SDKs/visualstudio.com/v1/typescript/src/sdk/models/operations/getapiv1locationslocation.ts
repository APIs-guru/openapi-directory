import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetApiV1LocationsLocationPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=location" })
  location: string;
}


export class GetApiV1LocationsLocationQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=planId" })
  planId?: string;
}


export class GetApiV1LocationsLocationRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetApiV1LocationsLocationPathParams;

  @Metadata()
  queryParams: GetApiV1LocationsLocationQueryParams;
}


export class GetApiV1LocationsLocationResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  locationInfoResult?: shared.LocationInfoResult;

  @Metadata()
  problemDetails?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
