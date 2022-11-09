import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTROLE_SERVERS = [
	"https://chat.twilio.com",
];



export class ListRolePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" })
  serviceSid: string;
}


export class ListRoleQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListRoleSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListRoleRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: ListRolePathParams;

  @Metadata()
  queryParams: ListRoleQueryParams;

  @Metadata()
  security: ListRoleSecurity;
}


export class ListRoleListRoleResponseMeta extends SpeakeasyBase {
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


export class ListRoleListRoleResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=meta" })
  meta?: ListRoleListRoleResponseMeta;

  @Metadata({ data: "json, name=roles", elemType: shared.ChatV1ServiceRole })
  roles?: shared.ChatV1ServiceRole[];
}


export class ListRoleResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listRoleResponse?: ListRoleListRoleResponse;

  @Metadata()
  statusCode: number;
}
