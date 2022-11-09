import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetPayeeLocationByIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=budget_id" })
  budgetId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=payee_location_id" })
  payeeLocationId: string;
}


export class GetPayeeLocationByIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetPayeeLocationByIdPathParams;
}


export class GetPayeeLocationByIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  payeeLocationResponse?: shared.PayeeLocationResponse;

  @Metadata()
  statusCode: number;
}
