import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const UPDATEROLE_SERVERS = [
	"https://conversations.twilio.com",
];



export class UpdateRolePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}


export class UpdateRoleUpdateRoleRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=Permission;" })
  permission: string[];
}


export class UpdateRoleSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateRoleRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: UpdateRolePathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateRoleUpdateRoleRequest;

  @Metadata()
  security: UpdateRoleSecurity;
}


export class UpdateRoleResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  conversationsV1Role?: shared.ConversationsV1Role;
}
