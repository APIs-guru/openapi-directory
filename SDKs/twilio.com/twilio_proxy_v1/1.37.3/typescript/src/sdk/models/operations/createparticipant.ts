import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const CreateParticipantServerList = [
	"https://proxy.twilio.com",
] as const;


export class CreateParticipantPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" })
  serviceSid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=SessionSid" })
  sessionSid: string;
}


export class CreateParticipantCreateParticipantRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=FriendlyName;" })
  friendlyName?: string;

  @SpeakeasyMetadata({ data: "form, name=Identifier;" })
  identifier: string;

  @SpeakeasyMetadata({ data: "form, name=ProxyIdentifier;" })
  proxyIdentifier?: string;

  @SpeakeasyMetadata({ data: "form, name=ProxyIdentifierSid;" })
  proxyIdentifierSid?: string;
}


export class CreateParticipantSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateParticipantRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: CreateParticipantPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateParticipantCreateParticipantRequest;

  @SpeakeasyMetadata()
  security: CreateParticipantSecurity;
}


export class CreateParticipantResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  proxyV1ServiceSessionParticipant?: shared.ProxyV1ServiceSessionParticipant;
}
