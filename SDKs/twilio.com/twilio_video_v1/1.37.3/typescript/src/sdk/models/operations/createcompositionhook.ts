import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const CreateCompositionHookServerList = [
	"https://video.twilio.com",
] as const;

export enum CreateCompositionHookCreateCompositionHookRequestStatusCallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}


export class CreateCompositionHookCreateCompositionHookRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=AudioSources;" })
  audioSources?: string[];

  @SpeakeasyMetadata({ data: "form, name=AudioSourcesExcluded;" })
  audioSourcesExcluded?: string[];

  @SpeakeasyMetadata({ data: "form, name=Enabled;" })
  enabled?: boolean;

  @SpeakeasyMetadata({ data: "form, name=Format;" })
  format?: shared.CompositionHookEnumFormatEnum;

  @SpeakeasyMetadata({ data: "form, name=FriendlyName;" })
  friendlyName: string;

  @SpeakeasyMetadata({ data: "form, name=Resolution;" })
  resolution?: string;

  @SpeakeasyMetadata({ data: "form, name=StatusCallback;" })
  statusCallback?: string;

  @SpeakeasyMetadata({ data: "form, name=StatusCallbackMethod;" })
  statusCallbackMethod?: CreateCompositionHookCreateCompositionHookRequestStatusCallbackMethodEnum;

  @SpeakeasyMetadata({ data: "form, name=Trim;" })
  trim?: boolean;

  @SpeakeasyMetadata({ data: "form, name=VideoLayout;" })
  videoLayout?: any;
}


export class CreateCompositionHookSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateCompositionHookRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateCompositionHookCreateCompositionHookRequest;

  @SpeakeasyMetadata()
  security: CreateCompositionHookSecurity;
}


export class CreateCompositionHookResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  videoV1CompositionHook?: shared.VideoV1CompositionHook;
}
