import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class MessagesFetchAllPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=accountId" })
  accountId: string;
}


export class MessagesFetchAllQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=contactId" })
  contactId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=conversationId" })
  conversationId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;
}


export class MessagesFetchAllSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  sakariAuth: shared.SchemeSakariAuth;
}


export class MessagesFetchAllRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: MessagesFetchAllPathParams;

  @Metadata()
  queryParams: MessagesFetchAllQueryParams;

  @Metadata()
  security: MessagesFetchAllSecurity;
}


export class MessagesFetchAllResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  messagesResponse?: shared.MessagesResponse;

  @Metadata()
  statusCode: number;
}
