import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const CREATEPLAYERSTREAMER_SERVERS = [
	"https://media.twilio.com",
];


export enum CreatePlayerStreamerCreatePlayerStreamerRequestStatusCallbackMethodEnum {
    Head = "HEAD"
,    Get = "GET"
,    Post = "POST"
,    Patch = "PATCH"
,    Put = "PUT"
,    Delete = "DELETE"
}


export class CreatePlayerStreamerCreatePlayerStreamerRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=MaxDuration;" })
  maxDuration?: number;

  @Metadata({ data: "form, name=StatusCallback;" })
  statusCallback?: string;

  @Metadata({ data: "form, name=StatusCallbackMethod;" })
  statusCallbackMethod?: CreatePlayerStreamerCreatePlayerStreamerRequestStatusCallbackMethodEnum;

  @Metadata({ data: "form, name=Video;" })
  video?: boolean;
}


export class CreatePlayerStreamerSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreatePlayerStreamerRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreatePlayerStreamerCreatePlayerStreamerRequest;

  @Metadata()
  security: CreatePlayerStreamerSecurity;
}


export class CreatePlayerStreamerResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  mediaV1PlayerStreamer?: shared.MediaV1PlayerStreamer;
}
