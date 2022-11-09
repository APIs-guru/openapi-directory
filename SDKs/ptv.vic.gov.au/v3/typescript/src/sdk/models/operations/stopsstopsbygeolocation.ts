import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class StopsStopsByGeolocationPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=latitude" })
  latitude: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=longitude" })
  longitude: number;
}


export class StopsStopsByGeolocationQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=devid" })
  devid?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=max_distance" })
  maxDistance?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=max_results" })
  maxResults?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=route_types" })
  routeTypes?: number[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=signature" })
  signature?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=stop_disruptions" })
  stopDisruptions?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=token" })
  token?: string;
}


export class StopsStopsByGeolocationRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: StopsStopsByGeolocationPathParams;

  @Metadata()
  queryParams: StopsStopsByGeolocationQueryParams;
}


export class StopsStopsByGeolocationResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  v3ErrorResponse?: shared.V3ErrorResponse;

  @Metadata()
  v3StopsByDistanceResponse?: shared.V3StopsByDistanceResponse;
}
