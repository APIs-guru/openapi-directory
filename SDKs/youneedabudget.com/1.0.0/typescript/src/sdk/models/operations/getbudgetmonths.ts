import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetBudgetMonthsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=budget_id" })
  budgetId: string;
}


export class GetBudgetMonthsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=last_knowledge_of_server" })
  lastKnowledgeOfServer?: number;
}


export class GetBudgetMonthsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetBudgetMonthsPathParams;

  @SpeakeasyMetadata()
  queryParams: GetBudgetMonthsQueryParams;
}


export class GetBudgetMonthsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  monthSummariesResponse?: shared.MonthSummariesResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
