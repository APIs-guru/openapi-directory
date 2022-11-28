import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetBudgetByIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=budget_id" })
  budgetId: string;
}


export class GetBudgetByIdQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=last_knowledge_of_server" })
  lastKnowledgeOfServer?: number;
}


export class GetBudgetByIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetBudgetByIdPathParams;

  @SpeakeasyMetadata()
  queryParams: GetBudgetByIdQueryParams;
}


export class GetBudgetByIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  budgetDetailResponse?: shared.BudgetDetailResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
