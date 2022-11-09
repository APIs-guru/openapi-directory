import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListCashDrawerShiftsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=begin_time" })
  beginTime?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=cursor" })
  cursor?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=end_time" })
  endTime?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=location_id" })
  locationId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort_order" })
  sortOrder?: string;
}


export class ListCashDrawerShiftsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class ListCashDrawerShiftsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListCashDrawerShiftsQueryParams;

  @Metadata()
  security: ListCashDrawerShiftsSecurity;
}


export class ListCashDrawerShiftsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listCashDrawerShiftsResponse?: shared.ListCashDrawerShiftsResponse;

  @Metadata()
  statusCode: number;
}
