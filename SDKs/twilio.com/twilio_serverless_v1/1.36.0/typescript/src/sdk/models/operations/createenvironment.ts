import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const CREATEENVIRONMENT_SERVERS = [
	"https://serverless.twilio.com",
];



export class CreateEnvironmentPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" })
  serviceSid: string;
}


export class CreateEnvironmentCreateEnvironmentRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=DomainSuffix;" })
  domainSuffix?: string;

  @Metadata({ data: "form, name=UniqueName;" })
  uniqueName: string;
}


export class CreateEnvironmentSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateEnvironmentRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: CreateEnvironmentPathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateEnvironmentCreateEnvironmentRequest;

  @Metadata()
  security: CreateEnvironmentSecurity;
}


export class CreateEnvironmentResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  serverlessV1ServiceEnvironment?: shared.ServerlessV1ServiceEnvironment;
}
