import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListPaymentRefundsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=begin_time" })
  beginTime?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=cursor" })
  cursor?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=end_time" })
  endTime?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=location_id" })
  locationId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort_order" })
  sortOrder?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=source_type" })
  sourceType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=status" })
  status?: string;
}


export class ListPaymentRefundsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class ListPaymentRefundsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListPaymentRefundsQueryParams;

  @Metadata()
  security: ListPaymentRefundsSecurity;
}


export class ListPaymentRefundsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listPaymentRefundsResponse?: shared.ListPaymentRefundsResponse;

  @Metadata()
  statusCode: number;
}
