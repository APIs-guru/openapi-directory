import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetScheduledTransactionsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=budget_id" })
  budgetId: string;
}


export class GetScheduledTransactionsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=last_knowledge_of_server" })
  lastKnowledgeOfServer?: number;
}


export class GetScheduledTransactionsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetScheduledTransactionsPathParams;

  @Metadata()
  queryParams: GetScheduledTransactionsQueryParams;
}


export class GetScheduledTransactionsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  scheduledTransactionsResponse?: shared.ScheduledTransactionsResponse;

  @Metadata()
  statusCode: number;
}
