import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const ListConferenceParticipantServerList = [
	"https://insights.twilio.com",
] as const;


export class ListConferenceParticipantPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ConferenceSid" })
  conferenceSid: string;
}


export class ListConferenceParticipantQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Events" })
  events?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Label" })
  label?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ParticipantSid" })
  participantSid?: string;
}


export class ListConferenceParticipantSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListConferenceParticipantListConferenceParticipantResponseMeta extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=first_page_url" })
  firstPageUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "json, name=next_page_url" })
  nextPageUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "json, name=page_size" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "json, name=previous_page_url" })
  previousPageUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}


export class ListConferenceParticipantListConferenceParticipantResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: ListConferenceParticipantListConferenceParticipantResponseMeta;

  @SpeakeasyMetadata({ data: "json, name=participants", elemType: shared.InsightsV1ConferenceConferenceParticipant })
  participants?: shared.InsightsV1ConferenceConferenceParticipant[];
}


export class ListConferenceParticipantRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: ListConferenceParticipantPathParams;

  @SpeakeasyMetadata()
  queryParams: ListConferenceParticipantQueryParams;

  @SpeakeasyMetadata()
  security: ListConferenceParticipantSecurity;
}


export class ListConferenceParticipantResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listConferenceParticipantResponse?: ListConferenceParticipantListConferenceParticipantResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
