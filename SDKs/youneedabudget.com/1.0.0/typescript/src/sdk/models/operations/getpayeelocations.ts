import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetPayeeLocationsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=budget_id" })
  budgetId: string;
}


export class GetPayeeLocationsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetPayeeLocationsPathParams;
}


export class GetPayeeLocationsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  payeeLocationsResponse?: shared.PayeeLocationsResponse;

  @Metadata()
  statusCode: number;
}
