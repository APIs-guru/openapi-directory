import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetPayeeByIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=budget_id" })
  budgetId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=payee_id" })
  payeeId: string;
}


export class GetPayeeByIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetPayeeByIdPathParams;
}


export class GetPayeeByIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  payeeResponse?: shared.PayeeResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
