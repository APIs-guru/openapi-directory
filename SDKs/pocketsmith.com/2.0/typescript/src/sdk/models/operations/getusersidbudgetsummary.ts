import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetUsersIdBudgetSummaryPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}

export enum GetUsersIdBudgetSummaryPeriodEnum {
    Weeks = "weeks"
,    Months = "months"
,    Years = "years"
,    Event = "event"
}


export class GetUsersIdBudgetSummaryQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=end_date" })
  endDate: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=interval" })
  interval: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=period" })
  period: GetUsersIdBudgetSummaryPeriodEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=start_date" })
  startDate: string;
}


export class GetUsersIdBudgetSummaryRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetUsersIdBudgetSummaryPathParams;

  @Metadata()
  queryParams: GetUsersIdBudgetSummaryQueryParams;
}


export class GetUsersIdBudgetSummaryResponse extends SpeakeasyBase {
  @Metadata({ elemType: shared.BudgetAnalysisPackage })
  budgetAnalysisPackages?: shared.BudgetAnalysisPackage[];

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
