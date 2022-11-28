import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const CreateRoleServerList = [
	"https://conversations.twilio.com",
] as const;


export class CreateRoleCreateRoleRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=FriendlyName;" })
  friendlyName: string;

  @SpeakeasyMetadata({ data: "form, name=Permission;" })
  permission: string[];

  @SpeakeasyMetadata({ data: "form, name=Type;" })
  type: shared.RoleEnumRoleTypeEnum;
}


export class CreateRoleSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateRoleRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateRoleCreateRoleRequest;

  @SpeakeasyMetadata()
  security: CreateRoleSecurity;
}


export class CreateRoleResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  conversationsV1Role?: shared.ConversationsV1Role;
}
