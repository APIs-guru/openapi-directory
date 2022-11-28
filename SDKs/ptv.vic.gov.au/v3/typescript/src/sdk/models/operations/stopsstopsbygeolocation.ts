import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class StopsStopsByGeolocationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=latitude" })
  latitude: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=longitude" })
  longitude: number;
}


export class StopsStopsByGeolocationQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=devid" })
  devid?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max_distance" })
  maxDistance?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max_results" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=route_types" })
  routeTypes?: number[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=signature" })
  signature?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=stop_disruptions" })
  stopDisruptions?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=token" })
  token?: string;
}


export class StopsStopsByGeolocationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: StopsStopsByGeolocationPathParams;

  @SpeakeasyMetadata()
  queryParams: StopsStopsByGeolocationQueryParams;
}


export class StopsStopsByGeolocationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  v3ErrorResponse?: shared.V3ErrorResponse;

  @SpeakeasyMetadata()
  v3StopsByDistanceResponse?: shared.V3StopsByDistanceResponse;
}
