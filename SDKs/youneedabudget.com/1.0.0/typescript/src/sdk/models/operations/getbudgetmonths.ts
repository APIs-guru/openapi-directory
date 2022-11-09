import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetBudgetMonthsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=budget_id" })
  budgetId: string;
}


export class GetBudgetMonthsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=last_knowledge_of_server" })
  lastKnowledgeOfServer?: number;
}


export class GetBudgetMonthsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetBudgetMonthsPathParams;

  @Metadata()
  queryParams: GetBudgetMonthsQueryParams;
}


export class GetBudgetMonthsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  monthSummariesResponse?: shared.MonthSummariesResponse;

  @Metadata()
  statusCode: number;
}
