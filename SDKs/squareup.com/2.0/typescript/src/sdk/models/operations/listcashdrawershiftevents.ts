import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListCashDrawerShiftEventsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=shift_id" })
  shiftId: string;
}


export class ListCashDrawerShiftEventsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=cursor" })
  cursor?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=location_id" })
  locationId: string;
}


export class ListCashDrawerShiftEventsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class ListCashDrawerShiftEventsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ListCashDrawerShiftEventsPathParams;

  @Metadata()
  queryParams: ListCashDrawerShiftEventsQueryParams;

  @Metadata()
  security: ListCashDrawerShiftEventsSecurity;
}


export class ListCashDrawerShiftEventsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listCashDrawerShiftEventsResponse?: shared.ListCashDrawerShiftEventsResponse;

  @Metadata()
  statusCode: number;
}
