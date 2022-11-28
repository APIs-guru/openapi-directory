import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const UpdateParticipantServerList = [
	"https://api.twilio.com",
] as const;


export class UpdateParticipantPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" })
  accountSid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=CallSid" })
  callSid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ConferenceSid" })
  conferenceSid: string;
}

export enum UpdateParticipantUpdateParticipantRequestAnnounceMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}

export enum UpdateParticipantUpdateParticipantRequestHoldMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}

export enum UpdateParticipantUpdateParticipantRequestWaitMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}


export class UpdateParticipantUpdateParticipantRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=AnnounceMethod;" })
  announceMethod?: UpdateParticipantUpdateParticipantRequestAnnounceMethodEnum;

  @SpeakeasyMetadata({ data: "form, name=AnnounceUrl;" })
  announceUrl?: string;

  @SpeakeasyMetadata({ data: "form, name=BeepOnExit;" })
  beepOnExit?: boolean;

  @SpeakeasyMetadata({ data: "form, name=CallSidToCoach;" })
  callSidToCoach?: string;

  @SpeakeasyMetadata({ data: "form, name=Coaching;" })
  coaching?: boolean;

  @SpeakeasyMetadata({ data: "form, name=EndConferenceOnExit;" })
  endConferenceOnExit?: boolean;

  @SpeakeasyMetadata({ data: "form, name=Hold;" })
  hold?: boolean;

  @SpeakeasyMetadata({ data: "form, name=HoldMethod;" })
  holdMethod?: UpdateParticipantUpdateParticipantRequestHoldMethodEnum;

  @SpeakeasyMetadata({ data: "form, name=HoldUrl;" })
  holdUrl?: string;

  @SpeakeasyMetadata({ data: "form, name=Muted;" })
  muted?: boolean;

  @SpeakeasyMetadata({ data: "form, name=WaitMethod;" })
  waitMethod?: UpdateParticipantUpdateParticipantRequestWaitMethodEnum;

  @SpeakeasyMetadata({ data: "form, name=WaitUrl;" })
  waitUrl?: string;
}


export class UpdateParticipantSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateParticipantRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: UpdateParticipantPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateParticipantUpdateParticipantRequest;

  @SpeakeasyMetadata()
  security: UpdateParticipantSecurity;
}


export class UpdateParticipantResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  apiV2010AccountConferenceParticipant?: shared.ApiV2010AccountConferenceParticipant;
}
