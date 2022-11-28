import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const UpdateConferenceServerList = [
	"https://api.twilio.com",
] as const;


export class UpdateConferencePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" })
  accountSid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}

export enum UpdateConferenceUpdateConferenceRequestAnnounceMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}


export class UpdateConferenceUpdateConferenceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=AnnounceMethod;" })
  announceMethod?: UpdateConferenceUpdateConferenceRequestAnnounceMethodEnum;

  @SpeakeasyMetadata({ data: "form, name=AnnounceUrl;" })
  announceUrl?: string;

  @SpeakeasyMetadata({ data: "form, name=Status;" })
  status?: shared.ConferenceEnumUpdateStatusEnum;
}


export class UpdateConferenceSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateConferenceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: UpdateConferencePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateConferenceUpdateConferenceRequest;

  @SpeakeasyMetadata()
  security: UpdateConferenceSecurity;
}


export class UpdateConferenceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  apiV2010AccountConference?: shared.ApiV2010AccountConference;
}
