import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class FareEstimateGetFareEstimateByZonePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=maxZone" })
  maxZone: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=minZone" })
  minZone: number;
}


export class FareEstimateGetFareEstimateByZoneQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=devid" })
  devid?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=is_journey_in_free_tram_zone" })
  isJourneyInFreeTramZone?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=journey_touch_off_utc" })
  journeyTouchOffUtc?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=journey_touch_on_utc" })
  journeyTouchOnUtc?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=signature" })
  signature?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=token" })
  token?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=travelled_route_types" })
  travelledRouteTypes?: number[];
}


export class FareEstimateGetFareEstimateByZoneRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: FareEstimateGetFareEstimateByZonePathParams;

  @Metadata()
  queryParams: FareEstimateGetFareEstimateByZoneQueryParams;
}


export class FareEstimateGetFareEstimateByZoneResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  v3ErrorResponse?: shared.V3ErrorResponse;

  @Metadata()
  v3FareEstimateResponse?: any;
}
