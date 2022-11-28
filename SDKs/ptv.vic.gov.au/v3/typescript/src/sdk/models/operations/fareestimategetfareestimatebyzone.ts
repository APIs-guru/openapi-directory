import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class FareEstimateGetFareEstimateByZonePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=maxZone" })
  maxZone: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=minZone" })
  minZone: number;
}


export class FareEstimateGetFareEstimateByZoneQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=devid" })
  devid?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=is_journey_in_free_tram_zone" })
  isJourneyInFreeTramZone?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=journey_touch_off_utc" })
  journeyTouchOffUtc?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=journey_touch_on_utc" })
  journeyTouchOnUtc?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=signature" })
  signature?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=token" })
  token?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=travelled_route_types" })
  travelledRouteTypes?: number[];
}


export class FareEstimateGetFareEstimateByZoneRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: FareEstimateGetFareEstimateByZonePathParams;

  @SpeakeasyMetadata()
  queryParams: FareEstimateGetFareEstimateByZoneQueryParams;
}


export class FareEstimateGetFareEstimateByZoneResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  v3ErrorResponse?: shared.V3ErrorResponse;

  @SpeakeasyMetadata()
  v3FareEstimateResponse?: any;
}
