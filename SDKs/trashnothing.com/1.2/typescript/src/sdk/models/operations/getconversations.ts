import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetConversationsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=category" })
  category?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=device_pixel_ratio" })
  devicePixelRatio?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include_num_unread" })
  includeNumUnread?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=num_messages" })
  numMessages?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}


export class GetConversations200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=conversations", elemType: shared.Conversation })
  conversations?: shared.Conversation[];

  @SpeakeasyMetadata({ data: "json, name=num_unread" })
  numUnread?: number;

  @SpeakeasyMetadata({ data: "json, name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "json, name=per_page" })
  perPage?: number;
}


export class GetConversationsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetConversationsQueryParams;
}


export class GetConversationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getConversations200ApplicationJsonObject?: GetConversations200ApplicationJson;
}
