import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const UPDATEPARTICIPANT_SERVERS = [
	"https://api.twilio.com",
];



export class UpdateParticipantPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" })
  accountSid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=CallSid" })
  callSid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=ConferenceSid" })
  conferenceSid: string;
}

export enum UpdateParticipantUpdateParticipantRequestAnnounceMethodEnum {
    Head = "HEAD"
,    Get = "GET"
,    Post = "POST"
,    Patch = "PATCH"
,    Put = "PUT"
,    Delete = "DELETE"
}

export enum UpdateParticipantUpdateParticipantRequestHoldMethodEnum {
    Head = "HEAD"
,    Get = "GET"
,    Post = "POST"
,    Patch = "PATCH"
,    Put = "PUT"
,    Delete = "DELETE"
}

export enum UpdateParticipantUpdateParticipantRequestWaitMethodEnum {
    Head = "HEAD"
,    Get = "GET"
,    Post = "POST"
,    Patch = "PATCH"
,    Put = "PUT"
,    Delete = "DELETE"
}


export class UpdateParticipantUpdateParticipantRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=AnnounceMethod;" })
  announceMethod?: UpdateParticipantUpdateParticipantRequestAnnounceMethodEnum;

  @Metadata({ data: "form, name=AnnounceUrl;" })
  announceUrl?: string;

  @Metadata({ data: "form, name=BeepOnExit;" })
  beepOnExit?: boolean;

  @Metadata({ data: "form, name=CallSidToCoach;" })
  callSidToCoach?: string;

  @Metadata({ data: "form, name=Coaching;" })
  coaching?: boolean;

  @Metadata({ data: "form, name=EndConferenceOnExit;" })
  endConferenceOnExit?: boolean;

  @Metadata({ data: "form, name=Hold;" })
  hold?: boolean;

  @Metadata({ data: "form, name=HoldMethod;" })
  holdMethod?: UpdateParticipantUpdateParticipantRequestHoldMethodEnum;

  @Metadata({ data: "form, name=HoldUrl;" })
  holdUrl?: string;

  @Metadata({ data: "form, name=Muted;" })
  muted?: boolean;

  @Metadata({ data: "form, name=WaitMethod;" })
  waitMethod?: UpdateParticipantUpdateParticipantRequestWaitMethodEnum;

  @Metadata({ data: "form, name=WaitUrl;" })
  waitUrl?: string;
}


export class UpdateParticipantSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateParticipantRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: UpdateParticipantPathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateParticipantUpdateParticipantRequest;

  @Metadata()
  security: UpdateParticipantSecurity;
}


export class UpdateParticipantResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  apiV2010AccountConferenceParticipant?: shared.ApiV2010AccountConferenceParticipant;
}
