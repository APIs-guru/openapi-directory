import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const CREATEBUILD_SERVERS = [
	"https://serverless.twilio.com",
];



export class CreateBuildPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" })
  serviceSid: string;
}


export class CreateBuildCreateBuildRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=AssetVersions;" })
  assetVersions?: string[];

  @Metadata({ data: "form, name=Dependencies;" })
  dependencies?: string;

  @Metadata({ data: "form, name=FunctionVersions;" })
  functionVersions?: string[];

  @Metadata({ data: "form, name=Runtime;" })
  runtime?: string;
}


export class CreateBuildSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateBuildRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: CreateBuildPathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateBuildCreateBuildRequest;

  @Metadata()
  security: CreateBuildSecurity;
}


export class CreateBuildResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  serverlessV1ServiceBuild?: shared.ServerlessV1ServiceBuild;
}
