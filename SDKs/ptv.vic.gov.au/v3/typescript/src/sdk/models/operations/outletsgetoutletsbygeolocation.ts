import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class OutletsGetOutletsByGeolocationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=latitude" })
  latitude: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=longitude" })
  longitude: number;
}


export class OutletsGetOutletsByGeolocationQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=devid" })
  devid?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max_distance" })
  maxDistance?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max_results" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=signature" })
  signature?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=token" })
  token?: string;
}


export class OutletsGetOutletsByGeolocationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: OutletsGetOutletsByGeolocationPathParams;

  @SpeakeasyMetadata()
  queryParams: OutletsGetOutletsByGeolocationQueryParams;
}


export class OutletsGetOutletsByGeolocationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  v3ErrorResponse?: shared.V3ErrorResponse;

  @SpeakeasyMetadata()
  v3OutletGeolocationResponse?: shared.V3OutletGeolocationResponse;
}
