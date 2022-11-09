import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class OutletsGetOutletsByGeolocationPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=latitude" })
  latitude: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=longitude" })
  longitude: number;
}


export class OutletsGetOutletsByGeolocationQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=devid" })
  devid?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=max_distance" })
  maxDistance?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=max_results" })
  maxResults?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=signature" })
  signature?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=token" })
  token?: string;
}


export class OutletsGetOutletsByGeolocationRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: OutletsGetOutletsByGeolocationPathParams;

  @Metadata()
  queryParams: OutletsGetOutletsByGeolocationQueryParams;
}


export class OutletsGetOutletsByGeolocationResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  v3ErrorResponse?: shared.V3ErrorResponse;

  @Metadata()
  v3OutletGeolocationResponse?: shared.V3OutletGeolocationResponse;
}
