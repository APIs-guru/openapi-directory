import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetUsersIdTrendAnalysisPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}

export enum GetUsersIdTrendAnalysisPeriodEnum {
    Weeks = "weeks",
    Months = "months",
    Years = "years",
    Event = "event"
}


export class GetUsersIdTrendAnalysisQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=categories" })
  categories: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=end_date" })
  endDate: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=interval" })
  interval: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=period" })
  period: GetUsersIdTrendAnalysisPeriodEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=scenarios" })
  scenarios: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start_date" })
  startDate: string;
}


export class GetUsersIdTrendAnalysisRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetUsersIdTrendAnalysisPathParams;

  @SpeakeasyMetadata()
  queryParams: GetUsersIdTrendAnalysisQueryParams;
}


export class GetUsersIdTrendAnalysisResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: shared.BudgetAnalysisPackage })
  budgetAnalysisPackages?: shared.BudgetAnalysisPackage[];

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
