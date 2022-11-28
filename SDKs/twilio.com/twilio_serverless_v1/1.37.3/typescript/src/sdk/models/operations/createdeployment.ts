import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const CreateDeploymentServerList = [
	"https://serverless.twilio.com",
] as const;


export class CreateDeploymentPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=EnvironmentSid" })
  environmentSid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" })
  serviceSid: string;
}


export class CreateDeploymentCreateDeploymentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=BuildSid;" })
  buildSid?: string;
}


export class CreateDeploymentSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateDeploymentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: CreateDeploymentPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateDeploymentCreateDeploymentRequest;

  @SpeakeasyMetadata()
  security: CreateDeploymentSecurity;
}


export class CreateDeploymentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  serverlessV1ServiceEnvironmentDeployment?: shared.ServerlessV1ServiceEnvironmentDeployment;
}
