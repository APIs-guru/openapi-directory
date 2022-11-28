import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetScheduledTransactionsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=budget_id" })
  budgetId: string;
}


export class GetScheduledTransactionsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=last_knowledge_of_server" })
  lastKnowledgeOfServer?: number;
}


export class GetScheduledTransactionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetScheduledTransactionsPathParams;

  @SpeakeasyMetadata()
  queryParams: GetScheduledTransactionsQueryParams;
}


export class GetScheduledTransactionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  scheduledTransactionsResponse?: shared.ScheduledTransactionsResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
