import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const UPDATEENDUSER_SERVERS = [
	"https://numbers.twilio.com",
];



export class UpdateEndUserPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}


export class UpdateEndUserUpdateEndUserRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=Attributes;" })
  attributes?: any;

  @Metadata({ data: "form, name=FriendlyName;" })
  friendlyName?: string;
}


export class UpdateEndUserSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateEndUserRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: UpdateEndUserPathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateEndUserUpdateEndUserRequest;

  @Metadata()
  security: UpdateEndUserSecurity;
}


export class UpdateEndUserResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  numbersV2RegulatoryComplianceEndUser?: shared.NumbersV2RegulatoryComplianceEndUser;
}
