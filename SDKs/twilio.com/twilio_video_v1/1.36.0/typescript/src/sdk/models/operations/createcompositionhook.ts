import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const CREATECOMPOSITIONHOOK_SERVERS = [
	"https://video.twilio.com",
];


export enum CreateCompositionHookCreateCompositionHookRequestStatusCallbackMethodEnum {
    Head = "HEAD"
,    Get = "GET"
,    Post = "POST"
,    Patch = "PATCH"
,    Put = "PUT"
,    Delete = "DELETE"
}


export class CreateCompositionHookCreateCompositionHookRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=AudioSources;" })
  audioSources?: string[];

  @Metadata({ data: "form, name=AudioSourcesExcluded;" })
  audioSourcesExcluded?: string[];

  @Metadata({ data: "form, name=Enabled;" })
  enabled?: boolean;

  @Metadata({ data: "form, name=Format;" })
  format?: shared.CompositionHookEnumFormatEnum;

  @Metadata({ data: "form, name=FriendlyName;" })
  friendlyName: string;

  @Metadata({ data: "form, name=Resolution;" })
  resolution?: string;

  @Metadata({ data: "form, name=StatusCallback;" })
  statusCallback?: string;

  @Metadata({ data: "form, name=StatusCallbackMethod;" })
  statusCallbackMethod?: CreateCompositionHookCreateCompositionHookRequestStatusCallbackMethodEnum;

  @Metadata({ data: "form, name=Trim;" })
  trim?: boolean;

  @Metadata({ data: "form, name=VideoLayout;" })
  videoLayout?: any;
}


export class CreateCompositionHookSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateCompositionHookRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateCompositionHookCreateCompositionHookRequest;

  @Metadata()
  security: CreateCompositionHookSecurity;
}


export class CreateCompositionHookResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  videoV1CompositionHook?: shared.VideoV1CompositionHook;
}
