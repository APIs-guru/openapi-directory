import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const CreateFunctionServerList = [
	"https://serverless.twilio.com",
] as const;


export class CreateFunctionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" })
  serviceSid: string;
}


export class CreateFunctionCreateFunctionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=FriendlyName;" })
  friendlyName: string;
}


export class CreateFunctionSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateFunctionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: CreateFunctionPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateFunctionCreateFunctionRequest;

  @SpeakeasyMetadata()
  security: CreateFunctionSecurity;
}


export class CreateFunctionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  serverlessV1ServiceFunction?: shared.ServerlessV1ServiceFunction;
}
