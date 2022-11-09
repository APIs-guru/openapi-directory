import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const CREATEPARTICIPANT_SERVERS = [
	"https://proxy.twilio.com",
];



export class CreateParticipantPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" })
  serviceSid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=SessionSid" })
  sessionSid: string;
}


export class CreateParticipantCreateParticipantRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=FailOnParticipantConflict;" })
  failOnParticipantConflict?: boolean;

  @Metadata({ data: "form, name=FriendlyName;" })
  friendlyName?: string;

  @Metadata({ data: "form, name=Identifier;" })
  identifier: string;

  @Metadata({ data: "form, name=ProxyIdentifier;" })
  proxyIdentifier?: string;

  @Metadata({ data: "form, name=ProxyIdentifierSid;" })
  proxyIdentifierSid?: string;
}


export class CreateParticipantSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateParticipantRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: CreateParticipantPathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateParticipantCreateParticipantRequest;

  @Metadata()
  security: CreateParticipantSecurity;
}


export class CreateParticipantResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  proxyV1ServiceSessionParticipant?: shared.ProxyV1ServiceSessionParticipant;
}
