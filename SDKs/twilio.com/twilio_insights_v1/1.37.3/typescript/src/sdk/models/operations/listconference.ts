import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const ListConferenceServerList = [
	"https://insights.twilio.com",
] as const;


export class ListConferenceQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ConferenceSid" })
  conferenceSid?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=CreatedAfter" })
  createdAfter?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=CreatedBefore" })
  createdBefore?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DetectedIssues" })
  detectedIssues?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=EndReason" })
  endReason?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=FriendlyName" })
  friendlyName?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MixerRegion" })
  mixerRegion?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Status" })
  status?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Subaccount" })
  subaccount?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Tags" })
  tags?: string;
}


export class ListConferenceSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListConferenceListConferenceResponseMeta extends SpeakeasyBase {
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


export class ListConferenceListConferenceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=conferences", elemType: shared.InsightsV1Conference })
  conferences?: shared.InsightsV1Conference[];

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: ListConferenceListConferenceResponseMeta;
}


export class ListConferenceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  queryParams: ListConferenceQueryParams;

  @SpeakeasyMetadata()
  security: ListConferenceSecurity;
}


export class ListConferenceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listConferenceResponse?: ListConferenceListConferenceResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
