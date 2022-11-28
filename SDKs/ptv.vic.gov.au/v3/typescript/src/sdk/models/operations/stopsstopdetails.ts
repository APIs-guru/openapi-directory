import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class StopsStopDetailsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=route_type" })
  routeType: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=stop_id" })
  stopId: number;
}


export class StopsStopDetailsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=devid" })
  devid?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=gtfs" })
  gtfs?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=signature" })
  signature?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=stop_accessibility" })
  stopAccessibility?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=stop_amenities" })
  stopAmenities?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=stop_contact" })
  stopContact?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=stop_disruptions" })
  stopDisruptions?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=stop_location" })
  stopLocation?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=stop_staffing" })
  stopStaffing?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=stop_ticket" })
  stopTicket?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=token" })
  token?: string;
}


export class StopsStopDetailsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: StopsStopDetailsPathParams;

  @SpeakeasyMetadata()
  queryParams: StopsStopDetailsQueryParams;
}


export class StopsStopDetailsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  v3ErrorResponse?: shared.V3ErrorResponse;

  @SpeakeasyMetadata()
  v3StopResponse?: shared.V3StopResponse;
}
