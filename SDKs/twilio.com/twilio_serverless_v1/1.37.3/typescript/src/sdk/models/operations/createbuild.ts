import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const CreateBuildServerList = [
	"https://serverless.twilio.com",
] as const;


export class CreateBuildPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" })
  serviceSid: string;
}


export class CreateBuildCreateBuildRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=AssetVersions;" })
  assetVersions?: string[];

  @SpeakeasyMetadata({ data: "form, name=Dependencies;" })
  dependencies?: string;

  @SpeakeasyMetadata({ data: "form, name=FunctionVersions;" })
  functionVersions?: string[];

  @SpeakeasyMetadata({ data: "form, name=Runtime;" })
  runtime?: string;
}


export class CreateBuildSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateBuildRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: CreateBuildPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateBuildCreateBuildRequest;

  @SpeakeasyMetadata()
  security: CreateBuildSecurity;
}


export class CreateBuildResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  serverlessV1ServiceBuild?: shared.ServerlessV1ServiceBuild;
}
