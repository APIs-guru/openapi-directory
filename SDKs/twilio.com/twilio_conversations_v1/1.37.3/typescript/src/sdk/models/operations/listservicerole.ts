import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const ListServiceRoleServerList = [
	"https://conversations.twilio.com",
] as const;


export class ListServiceRolePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ChatServiceSid" })
  chatServiceSid: string;
}


export class ListServiceRoleQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListServiceRoleSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListServiceRoleListServiceRoleResponseMeta extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=first_page_url" })
  firstPageUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "json, name=next_page_url" })
  nextPageUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "json, name=page_size" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "json, name=previous_page_url" })
  previousPageUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}


export class ListServiceRoleListServiceRoleResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: ListServiceRoleListServiceRoleResponseMeta;

  @SpeakeasyMetadata({ data: "json, name=roles", elemType: shared.ConversationsV1ServiceServiceRole })
  roles?: shared.ConversationsV1ServiceServiceRole[];
}


export class ListServiceRoleRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: ListServiceRolePathParams;

  @SpeakeasyMetadata()
  queryParams: ListServiceRoleQueryParams;

  @SpeakeasyMetadata()
  security: ListServiceRoleSecurity;
}


export class ListServiceRoleResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listServiceRoleResponse?: ListServiceRoleListServiceRoleResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
