import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class StopsStopDetailsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=route_type" })
  routeType: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=stop_id" })
  stopId: number;
}


export class StopsStopDetailsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=devid" })
  devid?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=gtfs" })
  gtfs?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=signature" })
  signature?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=stop_accessibility" })
  stopAccessibility?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=stop_amenities" })
  stopAmenities?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=stop_contact" })
  stopContact?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=stop_disruptions" })
  stopDisruptions?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=stop_location" })
  stopLocation?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=stop_staffing" })
  stopStaffing?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=stop_ticket" })
  stopTicket?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=token" })
  token?: string;
}


export class StopsStopDetailsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: StopsStopDetailsPathParams;

  @Metadata()
  queryParams: StopsStopDetailsQueryParams;
}


export class StopsStopDetailsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  v3ErrorResponse?: shared.V3ErrorResponse;

  @Metadata()
  v3StopResponse?: shared.V3StopResponse;
}
