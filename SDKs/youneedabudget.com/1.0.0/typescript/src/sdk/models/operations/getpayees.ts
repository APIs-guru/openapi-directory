import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetPayeesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=budget_id" })
  budgetId: string;
}


export class GetPayeesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=last_knowledge_of_server" })
  lastKnowledgeOfServer?: number;
}


export class GetPayeesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetPayeesPathParams;

  @SpeakeasyMetadata()
  queryParams: GetPayeesQueryParams;
}


export class GetPayeesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  payeesResponse?: shared.PayeesResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
