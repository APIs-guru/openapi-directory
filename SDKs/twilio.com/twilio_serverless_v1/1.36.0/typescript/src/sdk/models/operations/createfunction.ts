import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const CREATEFUNCTION_SERVERS = [
	"https://serverless.twilio.com",
];



export class CreateFunctionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" })
  serviceSid: string;
}


export class CreateFunctionCreateFunctionRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=FriendlyName;" })
  friendlyName: string;
}


export class CreateFunctionSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateFunctionRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: CreateFunctionPathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateFunctionCreateFunctionRequest;

  @Metadata()
  security: CreateFunctionSecurity;
}


export class CreateFunctionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  serverlessV1ServiceFunction?: shared.ServerlessV1ServiceFunction;
}
