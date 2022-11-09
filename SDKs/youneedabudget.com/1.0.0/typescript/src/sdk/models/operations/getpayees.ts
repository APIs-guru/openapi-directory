import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetPayeesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=budget_id" })
  budgetId: string;
}


export class GetPayeesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=last_knowledge_of_server" })
  lastKnowledgeOfServer?: number;
}


export class GetPayeesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetPayeesPathParams;

  @Metadata()
  queryParams: GetPayeesQueryParams;
}


export class GetPayeesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  payeesResponse?: shared.PayeesResponse;

  @Metadata()
  statusCode: number;
}
