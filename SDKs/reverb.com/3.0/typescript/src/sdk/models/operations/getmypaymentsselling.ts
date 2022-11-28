import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetMyPaymentsSellingQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=created_end_date" })
  createdEndDate?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=created_start_date" })
  createdStartDate?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=order_id" })
  orderId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=updated_end_date" })
  updatedEndDate?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=updated_start_date" })
  updatedStartDate?: string;
}


export class GetMyPaymentsSellingSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class GetMyPaymentsSellingRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetMyPaymentsSellingQueryParams;

  @SpeakeasyMetadata()
  security: GetMyPaymentsSellingSecurity;
}


export class GetMyPaymentsSellingResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
