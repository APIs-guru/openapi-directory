import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const UPDATECOMPOSITIONHOOK_SERVERS = [
	"https://video.twilio.com",
];



export class UpdateCompositionHookPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}

export enum UpdateCompositionHookUpdateCompositionHookRequestStatusCallbackMethodEnum {
    Head = "HEAD"
,    Get = "GET"
,    Post = "POST"
,    Patch = "PATCH"
,    Put = "PUT"
,    Delete = "DELETE"
}


export class UpdateCompositionHookUpdateCompositionHookRequest extends SpeakeasyBase {
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
  statusCallbackMethod?: UpdateCompositionHookUpdateCompositionHookRequestStatusCallbackMethodEnum;

  @Metadata({ data: "form, name=Trim;" })
  trim?: boolean;

  @Metadata({ data: "form, name=VideoLayout;" })
  videoLayout?: any;
}


export class UpdateCompositionHookSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateCompositionHookRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: UpdateCompositionHookPathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateCompositionHookUpdateCompositionHookRequest;

  @Metadata()
  security: UpdateCompositionHookSecurity;
}


export class UpdateCompositionHookResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  videoV1CompositionHook?: shared.VideoV1CompositionHook;
}
