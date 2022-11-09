import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SearchConversationsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=device_pixel_ratio" })
  devicePixelRatio?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search" })
  search: string;
}


export class SearchConversationsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: SearchConversationsQueryParams;
}


export class SearchConversations200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=conversations", elemType: shared.Conversation })
  conversations?: shared.Conversation[];

  @Metadata({ data: "json, name=page" })
  page?: number;

  @Metadata({ data: "json, name=per_page" })
  perPage?: number;

  @Metadata({ data: "json, name=search" })
  search?: string;
}


export class SearchConversationsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  searchConversations200ApplicationJsonObject?: SearchConversations200ApplicationJson;
}
