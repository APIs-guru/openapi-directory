import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetBudgetMonthPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=budget_id" })
  budgetId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=month" })
  month: Date;
}


export class GetBudgetMonthRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetBudgetMonthPathParams;
}


export class GetBudgetMonthResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  monthDetailResponse?: shared.MonthDetailResponse;

  @Metadata()
  statusCode: number;
}
