import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetPayeeLocationByIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=budget_id" })
  budgetId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=payee_location_id" })
  payeeLocationId: string;
}


export class GetPayeeLocationByIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetPayeeLocationByIdPathParams;
}


export class GetPayeeLocationByIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  payeeLocationResponse?: shared.PayeeLocationResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
