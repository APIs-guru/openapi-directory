import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetV2PaymentsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=begin_time" })
  beginTime?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=card_brand" })
  cardBrand?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=cursor" })
  cursor?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=end_time" })
  endTime?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=last_4" })
  last4?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=location_id" })
  locationId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort_order" })
  sortOrder?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=total" })
  total?: number;
}


export class GetV2PaymentsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class GetV2PaymentsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetV2PaymentsQueryParams;

  @Metadata()
  security: GetV2PaymentsSecurity;
}


export class GetV2PaymentsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listPaymentsResponse?: shared.ListPaymentsResponse;

  @Metadata()
  statusCode: number;
}
