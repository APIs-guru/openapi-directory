import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const CREATEROLE_SERVERS = [
	"https://conversations.twilio.com",
];



export class CreateRoleCreateRoleRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=FriendlyName;" })
  friendlyName: string;

  @Metadata({ data: "form, name=Permission;" })
  permission: string[];

  @Metadata({ data: "form, name=Type;" })
  type: shared.RoleEnumRoleTypeEnum;
}


export class CreateRoleSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateRoleRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateRoleCreateRoleRequest;

  @Metadata()
  security: CreateRoleSecurity;
}


export class CreateRoleResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  conversationsV1Role?: shared.ConversationsV1Role;
}
