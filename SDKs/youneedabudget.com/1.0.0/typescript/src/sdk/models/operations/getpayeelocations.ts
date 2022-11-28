import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetPayeeLocationsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=budget_id" })
  budgetId: string;
}


export class GetPayeeLocationsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetPayeeLocationsPathParams;
}


export class GetPayeeLocationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  payeeLocationsResponse?: shared.PayeeLocationsResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
