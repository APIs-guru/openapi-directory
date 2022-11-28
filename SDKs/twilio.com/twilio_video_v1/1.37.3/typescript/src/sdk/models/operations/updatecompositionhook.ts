import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const UpdateCompositionHookServerList = [
	"https://video.twilio.com",
] as const;


export class UpdateCompositionHookPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}

export enum UpdateCompositionHookUpdateCompositionHookRequestStatusCallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}


export class UpdateCompositionHookUpdateCompositionHookRequest extends SpeakeasyBase {
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
  statusCallbackMethod?: UpdateCompositionHookUpdateCompositionHookRequestStatusCallbackMethodEnum;

  @SpeakeasyMetadata({ data: "form, name=Trim;" })
  trim?: boolean;

  @SpeakeasyMetadata({ data: "form, name=VideoLayout;" })
  videoLayout?: any;
}


export class UpdateCompositionHookSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateCompositionHookRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: UpdateCompositionHookPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateCompositionHookUpdateCompositionHookRequest;

  @SpeakeasyMetadata()
  security: UpdateCompositionHookSecurity;
}


export class UpdateCompositionHookResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  videoV1CompositionHook?: shared.VideoV1CompositionHook;
}
