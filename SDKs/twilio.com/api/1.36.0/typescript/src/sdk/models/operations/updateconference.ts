import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const UPDATECONFERENCE_SERVERS = [
	"https://api.twilio.com",
];



export class UpdateConferencePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" })
  accountSid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}

export enum UpdateConferenceUpdateConferenceRequestAnnounceMethodEnum {
    Head = "HEAD"
,    Get = "GET"
,    Post = "POST"
,    Patch = "PATCH"
,    Put = "PUT"
,    Delete = "DELETE"
}


export class UpdateConferenceUpdateConferenceRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=AnnounceMethod;" })
  announceMethod?: UpdateConferenceUpdateConferenceRequestAnnounceMethodEnum;

  @Metadata({ data: "form, name=AnnounceUrl;" })
  announceUrl?: string;

  @Metadata({ data: "form, name=Status;" })
  status?: shared.ConferenceEnumUpdateStatusEnum;
}


export class UpdateConferenceSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateConferenceRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: UpdateConferencePathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateConferenceUpdateConferenceRequest;

  @Metadata()
  security: UpdateConferenceSecurity;
}


export class UpdateConferenceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  apiV2010AccountConference?: shared.ApiV2010AccountConference;
}
