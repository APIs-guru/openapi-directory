import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const UpdateVariableServerList = [
	"https://serverless.twilio.com",
] as const;


export class UpdateVariablePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=EnvironmentSid" })
  environmentSid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" })
  serviceSid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}


export class UpdateVariableUpdateVariableRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=Key;" })
  key?: string;

  @SpeakeasyMetadata({ data: "form, name=Value;" })
  value?: string;
}


export class UpdateVariableSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateVariableRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: UpdateVariablePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateVariableUpdateVariableRequest;

  @SpeakeasyMetadata()
  security: UpdateVariableSecurity;
}


export class UpdateVariableResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  serverlessV1ServiceEnvironmentVariable?: shared.ServerlessV1ServiceEnvironmentVariable;
}
