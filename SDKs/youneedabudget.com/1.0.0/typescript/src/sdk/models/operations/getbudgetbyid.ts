import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetBudgetByIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=budget_id" })
  budgetId: string;
}


export class GetBudgetByIdQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=last_knowledge_of_server" })
  lastKnowledgeOfServer?: number;
}


export class GetBudgetByIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetBudgetByIdPathParams;

  @Metadata()
  queryParams: GetBudgetByIdQueryParams;
}


export class GetBudgetByIdResponse extends SpeakeasyBase {
  @Metadata()
  budgetDetailResponse?: shared.BudgetDetailResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;
}
