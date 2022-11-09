import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ConversationsFetchAllPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=accountId" })
  accountId: string;
}


export class ConversationsFetchAllQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;
}


export class ConversationsFetchAllSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  sakariAuth: shared.SchemeSakariAuth;
}


export class ConversationsFetchAllRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ConversationsFetchAllPathParams;

  @Metadata()
  queryParams: ConversationsFetchAllQueryParams;

  @Metadata()
  security: ConversationsFetchAllSecurity;
}


export class ConversationsFetchAllResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  conversationsResponse?: shared.ConversationsResponse;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;
}
