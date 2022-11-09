import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTSERVICEROLE_SERVERS = [
	"https://conversations.twilio.com",
];



export class ListServiceRolePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ChatServiceSid" })
  chatServiceSid: string;
}


export class ListServiceRoleQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListServiceRoleSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListServiceRoleRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: ListServiceRolePathParams;

  @Metadata()
  queryParams: ListServiceRoleQueryParams;

  @Metadata()
  security: ListServiceRoleSecurity;
}


export class ListServiceRoleListServiceRoleResponseMeta extends SpeakeasyBase {
  @Metadata({ data: "json, name=first_page_url" })
  firstPageUrl?: string;

  @Metadata({ data: "json, name=key" })
  key?: string;

  @Metadata({ data: "json, name=next_page_url" })
  nextPageUrl?: string;

  @Metadata({ data: "json, name=page" })
  page?: number;

  @Metadata({ data: "json, name=page_size" })
  pageSize?: number;

  @Metadata({ data: "json, name=previous_page_url" })
  previousPageUrl?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}


export class ListServiceRoleListServiceRoleResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=meta" })
  meta?: ListServiceRoleListServiceRoleResponseMeta;

  @Metadata({ data: "json, name=roles", elemType: shared.ConversationsV1ServiceServiceRole })
  roles?: shared.ConversationsV1ServiceServiceRole[];
}


export class ListServiceRoleResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listServiceRoleResponse?: ListServiceRoleListServiceRoleResponse;

  @Metadata()
  statusCode: number;
}
