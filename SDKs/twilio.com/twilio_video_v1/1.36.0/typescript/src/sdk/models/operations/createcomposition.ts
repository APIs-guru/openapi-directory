import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const CREATECOMPOSITION_SERVERS = [
	"https://video.twilio.com",
];


export enum CreateCompositionCreateCompositionRequestStatusCallbackMethodEnum {
    Head = "HEAD"
,    Get = "GET"
,    Post = "POST"
,    Patch = "PATCH"
,    Put = "PUT"
,    Delete = "DELETE"
}


export class CreateCompositionCreateCompositionRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=AudioSources;" })
  audioSources?: string[];

  @Metadata({ data: "form, name=AudioSourcesExcluded;" })
  audioSourcesExcluded?: string[];

  @Metadata({ data: "form, name=Format;" })
  format?: shared.CompositionEnumFormatEnum;

  @Metadata({ data: "form, name=Resolution;" })
  resolution?: string;

  @Metadata({ data: "form, name=RoomSid;" })
  roomSid: string;

  @Metadata({ data: "form, name=StatusCallback;" })
  statusCallback?: string;

  @Metadata({ data: "form, name=StatusCallbackMethod;" })
  statusCallbackMethod?: CreateCompositionCreateCompositionRequestStatusCallbackMethodEnum;

  @Metadata({ data: "form, name=Trim;" })
  trim?: boolean;

  @Metadata({ data: "form, name=VideoLayout;" })
  videoLayout?: any;
}


export class CreateCompositionSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateCompositionRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateCompositionCreateCompositionRequest;

  @Metadata()
  security: CreateCompositionSecurity;
}


export class CreateCompositionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  videoV1Composition?: shared.VideoV1Composition;
}
