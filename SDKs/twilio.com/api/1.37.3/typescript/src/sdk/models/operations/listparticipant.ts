import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const ListParticipantServerList = [
	"https://api.twilio.com",
] as const;


export class ListParticipantPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" })
  accountSid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ConferenceSid" })
  conferenceSid: string;
}


export class ListParticipantQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Coaching" })
  coaching?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Hold" })
  hold?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Muted" })
  muted?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListParticipantSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListParticipantListParticipantResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=end" })
  end?: number;

  @SpeakeasyMetadata({ data: "json, name=first_page_uri" })
  firstPageUri?: string;

  @SpeakeasyMetadata({ data: "json, name=next_page_uri" })
  nextPageUri?: string;

  @SpeakeasyMetadata({ data: "json, name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "json, name=page_size" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "json, name=participants", elemType: shared.ApiV2010AccountConferenceParticipant })
  participants?: shared.ApiV2010AccountConferenceParticipant[];

  @SpeakeasyMetadata({ data: "json, name=previous_page_uri" })
  previousPageUri?: string;

  @SpeakeasyMetadata({ data: "json, name=start" })
  start?: number;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri?: string;
}


export class ListParticipantRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: ListParticipantPathParams;

  @SpeakeasyMetadata()
  queryParams: ListParticipantQueryParams;

  @SpeakeasyMetadata()
  security: ListParticipantSecurity;
}


export class ListParticipantResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listParticipantResponse?: ListParticipantListParticipantResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
