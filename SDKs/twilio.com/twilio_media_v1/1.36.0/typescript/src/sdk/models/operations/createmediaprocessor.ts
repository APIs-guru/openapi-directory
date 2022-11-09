import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const CREATEMEDIAPROCESSOR_SERVERS = [
	"https://media.twilio.com",
];


export enum CreateMediaProcessorCreateMediaProcessorRequestStatusCallbackMethodEnum {
    Head = "HEAD"
,    Get = "GET"
,    Post = "POST"
,    Patch = "PATCH"
,    Put = "PUT"
,    Delete = "DELETE"
}


export class CreateMediaProcessorCreateMediaProcessorRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=Extension;" })
  extension: string;

  @Metadata({ data: "form, name=ExtensionContext;" })
  extensionContext: string;

  @Metadata({ data: "form, name=ExtensionEnvironment;" })
  extensionEnvironment?: any;

  @Metadata({ data: "form, name=MaxDuration;" })
  maxDuration?: number;

  @Metadata({ data: "form, name=StatusCallback;" })
  statusCallback?: string;

  @Metadata({ data: "form, name=StatusCallbackMethod;" })
  statusCallbackMethod?: CreateMediaProcessorCreateMediaProcessorRequestStatusCallbackMethodEnum;
}


export class CreateMediaProcessorSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateMediaProcessorRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateMediaProcessorCreateMediaProcessorRequest;

  @Metadata()
  security: CreateMediaProcessorSecurity;
}


export class CreateMediaProcessorResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  mediaV1MediaProcessor?: shared.MediaV1MediaProcessor;
}
