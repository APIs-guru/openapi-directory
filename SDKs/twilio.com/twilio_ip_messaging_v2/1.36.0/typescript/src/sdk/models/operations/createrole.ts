import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const CREATEROLE_SERVERS = [
	"https://ip-messaging.twilio.com",
];



export class CreateRolePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" })
  serviceSid: string;
}


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

  @Metadata()
  pathParams: CreateRolePathParams;

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
  ipMessagingV2ServiceRole?: shared.IpMessagingV2ServiceRole;
}
