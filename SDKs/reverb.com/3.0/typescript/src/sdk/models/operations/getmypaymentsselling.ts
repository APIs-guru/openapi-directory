import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetMyPaymentsSellingQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=created_end_date" })
  createdEndDate?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=created_start_date" })
  createdStartDate?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=order_id" })
  orderId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=updated_end_date" })
  updatedEndDate?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=updated_start_date" })
  updatedStartDate?: string;
}


export class GetMyPaymentsSellingSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class GetMyPaymentsSellingRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetMyPaymentsSellingQueryParams;

  @Metadata()
  security: GetMyPaymentsSellingSecurity;
}


export class GetMyPaymentsSellingResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
