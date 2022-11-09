import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetBudgetsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=include_accounts" })
  includeAccounts?: boolean;
}


export class GetBudgetsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetBudgetsQueryParams;
}


export class GetBudgetsResponse extends SpeakeasyBase {
  @Metadata()
  budgetSummaryResponse?: shared.BudgetSummaryResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;
}
