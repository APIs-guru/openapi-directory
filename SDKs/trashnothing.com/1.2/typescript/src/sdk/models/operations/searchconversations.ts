import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class SearchConversationsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=device_pixel_ratio" })
  devicePixelRatio?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search" })
  search: string;
}


export class SearchConversations200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=conversations", elemType: shared.Conversation })
  conversations?: shared.Conversation[];

  @SpeakeasyMetadata({ data: "json, name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "json, name=per_page" })
  perPage?: number;

  @SpeakeasyMetadata({ data: "json, name=search" })
  search?: string;
}


export class SearchConversationsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: SearchConversationsQueryParams;
}


export class SearchConversationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  searchConversations200ApplicationJsonObject?: SearchConversations200ApplicationJson;
}
