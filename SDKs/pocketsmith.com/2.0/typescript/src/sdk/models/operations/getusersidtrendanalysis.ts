import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetUsersIdTrendAnalysisPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}

export enum GetUsersIdTrendAnalysisPeriodEnum {
    Weeks = "weeks"
,    Months = "months"
,    Years = "years"
,    Event = "event"
}


export class GetUsersIdTrendAnalysisQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=categories" })
  categories: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=end_date" })
  endDate: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=interval" })
  interval: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=period" })
  period: GetUsersIdTrendAnalysisPeriodEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=scenarios" })
  scenarios: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=start_date" })
  startDate: string;
}


export class GetUsersIdTrendAnalysisRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetUsersIdTrendAnalysisPathParams;

  @Metadata()
  queryParams: GetUsersIdTrendAnalysisQueryParams;
}


export class GetUsersIdTrendAnalysisResponse extends SpeakeasyBase {
  @Metadata({ elemType: shared.BudgetAnalysisPackage })
  budgetAnalysisPackages?: shared.BudgetAnalysisPackage[];

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
