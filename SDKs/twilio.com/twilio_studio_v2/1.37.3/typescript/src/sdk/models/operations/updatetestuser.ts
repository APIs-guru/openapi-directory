import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const UpdateTestUserServerList = [
	"https://studio.twilio.com",
] as const;


export class UpdateTestUserPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}


export class UpdateTestUserUpdateTestUserRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=TestUsers;" })
  testUsers: string[];
}


export class UpdateTestUserSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateTestUserRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: UpdateTestUserPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateTestUserUpdateTestUserRequest;

  @SpeakeasyMetadata()
  security: UpdateTestUserSecurity;
}


export class UpdateTestUserResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  studioV2FlowTestUser?: shared.StudioV2FlowTestUser;
}
