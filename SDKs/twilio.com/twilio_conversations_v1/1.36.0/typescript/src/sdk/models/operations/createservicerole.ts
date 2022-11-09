import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const CREATESERVICEROLE_SERVERS = [
	"https://conversations.twilio.com",
];



export class CreateServiceRolePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ChatServiceSid" })
  chatServiceSid: string;
}


export class CreateServiceRoleCreateServiceRoleRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=FriendlyName;" })
  friendlyName: string;

  @Metadata({ data: "form, name=Permission;" })
  permission: string[];

  @Metadata({ data: "form, name=Type;" })
  type: shared.ServiceRoleEnumRoleTypeEnum;
}


export class CreateServiceRoleSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateServiceRoleRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: CreateServiceRolePathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateServiceRoleCreateServiceRoleRequest;

  @Metadata()
  security: CreateServiceRoleSecurity;
}


export class CreateServiceRoleResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  conversationsV1ServiceServiceRole?: shared.ConversationsV1ServiceServiceRole;
}
