import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetPayeeByIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=budget_id" })
  budgetId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=payee_id" })
  payeeId: string;
}


export class GetPayeeByIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetPayeeByIdPathParams;
}


export class GetPayeeByIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  payeeResponse?: shared.PayeeResponse;

  @Metadata()
  statusCode: number;
}
