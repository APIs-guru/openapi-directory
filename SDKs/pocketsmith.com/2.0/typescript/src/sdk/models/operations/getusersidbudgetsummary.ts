import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetUsersIdBudgetSummaryPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}

export enum GetUsersIdBudgetSummaryPeriodEnum {
    Weeks = "weeks",
    Months = "months",
    Years = "years",
    Event = "event"
}


export class GetUsersIdBudgetSummaryQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=end_date" })
  endDate: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=interval" })
  interval: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=period" })
  period: GetUsersIdBudgetSummaryPeriodEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start_date" })
  startDate: string;
}


export class GetUsersIdBudgetSummaryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetUsersIdBudgetSummaryPathParams;

  @SpeakeasyMetadata()
  queryParams: GetUsersIdBudgetSummaryQueryParams;
}


export class GetUsersIdBudgetSummaryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: shared.BudgetAnalysisPackage })
  budgetAnalysisPackages?: shared.BudgetAnalysisPackage[];

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
