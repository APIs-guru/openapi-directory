import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const CreateMediaProcessorServerList = [
	"https://media.twilio.com",
] as const;

export enum CreateMediaProcessorCreateMediaProcessorRequestStatusCallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}


export class CreateMediaProcessorCreateMediaProcessorRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=Extension;" })
  extension: string;

  @SpeakeasyMetadata({ data: "form, name=ExtensionContext;" })
  extensionContext: string;

  @SpeakeasyMetadata({ data: "form, name=ExtensionEnvironment;" })
  extensionEnvironment?: any;

  @SpeakeasyMetadata({ data: "form, name=MaxDuration;" })
  maxDuration?: number;

  @SpeakeasyMetadata({ data: "form, name=StatusCallback;" })
  statusCallback?: string;

  @SpeakeasyMetadata({ data: "form, name=StatusCallbackMethod;" })
  statusCallbackMethod?: CreateMediaProcessorCreateMediaProcessorRequestStatusCallbackMethodEnum;
}


export class CreateMediaProcessorSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateMediaProcessorRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateMediaProcessorCreateMediaProcessorRequest;

  @SpeakeasyMetadata()
  security: CreateMediaProcessorSecurity;
}


export class CreateMediaProcessorResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  mediaV1MediaProcessor?: shared.MediaV1MediaProcessor;
}
