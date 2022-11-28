import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class MessagesFetchAllPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" })
  accountId: string;
}


export class MessagesFetchAllQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=contactId" })
  contactId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=conversationId" })
  conversationId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;
}


export class MessagesFetchAllSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  sakariAuth: shared.SchemeSakariAuth;
}


export class MessagesFetchAllRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: MessagesFetchAllPathParams;

  @SpeakeasyMetadata()
  queryParams: MessagesFetchAllQueryParams;

  @SpeakeasyMetadata()
  security: MessagesFetchAllSecurity;
}


export class MessagesFetchAllResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  messagesResponse?: shared.MessagesResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
