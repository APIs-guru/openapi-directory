import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const FETCHFUNCTIONVERSIONCONTENT_SERVERS = [
	"https://serverless.twilio.com",
];



export class FetchFunctionVersionContentPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=FunctionSid" })
  functionSid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" })
  serviceSid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}


export class FetchFunctionVersionContentSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class FetchFunctionVersionContentRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: FetchFunctionVersionContentPathParams;

  @Metadata()
  security: FetchFunctionVersionContentSecurity;
}


export class FetchFunctionVersionContentResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  serverlessV1ServiceFunctionFunctionVersionFunctionVersionContent?: shared.ServerlessV1ServiceFunctionFunctionVersionFunctionVersionContent;
}
