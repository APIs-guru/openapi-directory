import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetPayeeLocationsByPayeePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=budget_id" })
  budgetId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=payee_id" })
  payeeId: string;
}


export class GetPayeeLocationsByPayeeRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetPayeeLocationsByPayeePathParams;
}


export class GetPayeeLocationsByPayeeResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  payeeLocationsResponse?: shared.PayeeLocationsResponse;

  @Metadata()
  statusCode: number;
}
