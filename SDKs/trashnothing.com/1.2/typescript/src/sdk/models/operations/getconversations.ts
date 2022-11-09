import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetConversationsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=category" })
  category?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=device_pixel_ratio" })
  devicePixelRatio?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=include_num_unread" })
  includeNumUnread?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=num_messages" })
  numMessages?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}


export class GetConversationsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetConversationsQueryParams;
}


export class GetConversations200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=conversations", elemType: shared.Conversation })
  conversations?: shared.Conversation[];

  @Metadata({ data: "json, name=num_unread" })
  numUnread?: number;

  @Metadata({ data: "json, name=page" })
  page?: number;

  @Metadata({ data: "json, name=per_page" })
  perPage?: number;
}


export class GetConversationsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getConversations200ApplicationJsonObject?: GetConversations200ApplicationJson;
}
