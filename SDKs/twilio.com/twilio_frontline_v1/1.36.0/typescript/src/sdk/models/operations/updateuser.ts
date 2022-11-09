import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const UPDATEUSER_SERVERS = [
	"https://frontline-api.twilio.com",
];



export class UpdateUserPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}


export class UpdateUserUpdateUserRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=Avatar;" })
  avatar?: string;

  @Metadata({ data: "form, name=FriendlyName;" })
  friendlyName?: string;

  @Metadata({ data: "form, name=IsAvailable;" })
  isAvailable?: boolean;

  @Metadata({ data: "form, name=State;" })
  state?: shared.UserEnumStateTypeEnum;
}


export class UpdateUserSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateUserRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: UpdateUserPathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateUserUpdateUserRequest;

  @Metadata()
  security: UpdateUserSecurity;
}


export class UpdateUserResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  frontlineV1User?: shared.FrontlineV1User;
}
