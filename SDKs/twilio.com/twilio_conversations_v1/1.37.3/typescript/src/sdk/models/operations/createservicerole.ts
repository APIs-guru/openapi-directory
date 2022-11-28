import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const CreateServiceRoleServerList = [
	"https://conversations.twilio.com",
] as const;


export class CreateServiceRolePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ChatServiceSid" })
  chatServiceSid: string;
}


export class CreateServiceRoleCreateServiceRoleRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=FriendlyName;" })
  friendlyName: string;

  @SpeakeasyMetadata({ data: "form, name=Permission;" })
  permission: string[];

  @SpeakeasyMetadata({ data: "form, name=Type;" })
  type: shared.ServiceRoleEnumRoleTypeEnum;
}


export class CreateServiceRoleSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateServiceRoleRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: CreateServiceRolePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateServiceRoleCreateServiceRoleRequest;

  @SpeakeasyMetadata()
  security: CreateServiceRoleSecurity;
}


export class CreateServiceRoleResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  conversationsV1ServiceServiceRole?: shared.ConversationsV1ServiceServiceRole;
}
