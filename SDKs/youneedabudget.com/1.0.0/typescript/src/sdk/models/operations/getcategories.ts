import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetCategoriesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=budget_id" })
  budgetId: string;
}


export class GetCategoriesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=last_knowledge_of_server" })
  lastKnowledgeOfServer?: number;
}


export class GetCategoriesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetCategoriesPathParams;

  @SpeakeasyMetadata()
  queryParams: GetCategoriesQueryParams;
}


export class GetCategoriesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  categoriesResponse?: shared.CategoriesResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
