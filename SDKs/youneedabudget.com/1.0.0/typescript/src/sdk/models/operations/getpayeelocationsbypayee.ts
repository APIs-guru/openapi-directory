import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetPayeeLocationsByPayeePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=budget_id" })
  budgetId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=payee_id" })
  payeeId: string;
}


export class GetPayeeLocationsByPayeeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetPayeeLocationsByPayeePathParams;
}


export class GetPayeeLocationsByPayeeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  payeeLocationsResponse?: shared.PayeeLocationsResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
