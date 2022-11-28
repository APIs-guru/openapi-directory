import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetBudgetMonthPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=budget_id" })
  budgetId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=month" })
  month: Date;
}


export class GetBudgetMonthRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetBudgetMonthPathParams;
}


export class GetBudgetMonthResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  monthDetailResponse?: shared.MonthDetailResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
