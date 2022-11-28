import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetBudgetsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include_accounts" })
  includeAccounts?: boolean;
}


export class GetBudgetsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetBudgetsQueryParams;
}


export class GetBudgetsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  budgetSummaryResponse?: shared.BudgetSummaryResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
