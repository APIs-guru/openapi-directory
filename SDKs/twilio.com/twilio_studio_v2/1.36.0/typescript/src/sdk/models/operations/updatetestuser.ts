import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const UPDATETESTUSER_SERVERS = [
	"https://studio.twilio.com",
];



export class UpdateTestUserPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}


export class UpdateTestUserUpdateTestUserRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=TestUsers;" })
  testUsers: string[];
}


export class UpdateTestUserSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateTestUserRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: UpdateTestUserPathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateTestUserUpdateTestUserRequest;

  @Metadata()
  security: UpdateTestUserSecurity;
}


export class UpdateTestUserResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  studioV2FlowTestUser?: shared.StudioV2FlowTestUser;
}
