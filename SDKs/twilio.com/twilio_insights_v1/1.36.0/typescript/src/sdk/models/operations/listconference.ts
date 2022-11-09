import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTCONFERENCE_SERVERS = [
	"https://insights.twilio.com",
];



export class ListConferenceQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=ConferenceSid" })
  conferenceSid?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=CreatedAfter" })
  createdAfter?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=CreatedBefore" })
  createdBefore?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DetectedIssues" })
  detectedIssues?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=EndReason" })
  endReason?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=FriendlyName" })
  friendlyName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=MixerRegion" })
  mixerRegion?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Status" })
  status?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Subaccount" })
  subaccount?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Tags" })
  tags?: string;
}


export class ListConferenceSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListConferenceRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  queryParams: ListConferenceQueryParams;

  @Metadata()
  security: ListConferenceSecurity;
}


export class ListConferenceListConferenceResponseMeta extends SpeakeasyBase {
  @Metadata({ data: "json, name=first_page_url" })
  firstPageUrl?: string;

  @Metadata({ data: "json, name=key" })
  key?: string;

  @Metadata({ data: "json, name=next_page_url" })
  nextPageUrl?: string;

  @Metadata({ data: "json, name=page" })
  page?: number;

  @Metadata({ data: "json, name=page_size" })
  pageSize?: number;

  @Metadata({ data: "json, name=previous_page_url" })
  previousPageUrl?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}


export class ListConferenceListConferenceResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=conferences", elemType: shared.InsightsV1Conference })
  conferences?: shared.InsightsV1Conference[];

  @Metadata({ data: "json, name=meta" })
  meta?: ListConferenceListConferenceResponseMeta;
}


export class ListConferenceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listConferenceResponse?: ListConferenceListConferenceResponse;

  @Metadata()
  statusCode: number;
}
