import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const CREATEMESSAGEINTERACTION_SERVERS = [
	"https://proxy.twilio.com",
];



export class CreateMessageInteractionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ParticipantSid" })
  participantSid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" })
  serviceSid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=SessionSid" })
  sessionSid: string;
}


export class CreateMessageInteractionCreateMessageInteractionRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=Body;" })
  body?: string;

  @Metadata({ data: "form, name=MediaUrl;" })
  mediaUrl?: string[];
}


export class CreateMessageInteractionSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateMessageInteractionRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: CreateMessageInteractionPathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateMessageInteractionCreateMessageInteractionRequest;

  @Metadata()
  security: CreateMessageInteractionSecurity;
}


export class CreateMessageInteractionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  proxyV1ServiceSessionParticipantMessageInteraction?: shared.ProxyV1ServiceSessionParticipantMessageInteraction;
}
