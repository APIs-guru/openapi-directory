import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const UpdateUserServerList = [
	"https://frontline-api.twilio.com",
] as const;


export class UpdateUserPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}


export class UpdateUserUpdateUserRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=Avatar;" })
  avatar?: string;

  @SpeakeasyMetadata({ data: "form, name=FriendlyName;" })
  friendlyName?: string;

  @SpeakeasyMetadata({ data: "form, name=IsAvailable;" })
  isAvailable?: boolean;

  @SpeakeasyMetadata({ data: "form, name=State;" })
  state?: shared.UserEnumStateTypeEnum;
}


export class UpdateUserSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateUserRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: UpdateUserPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateUserUpdateUserRequest;

  @SpeakeasyMetadata()
  security: UpdateUserSecurity;
}


export class UpdateUserResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  frontlineV1User?: shared.FrontlineV1User;
}
