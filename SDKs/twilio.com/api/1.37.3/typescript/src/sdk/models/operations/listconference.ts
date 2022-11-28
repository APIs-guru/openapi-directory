import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const ListConferenceServerList = [
	"https://api.twilio.com",
] as const;


export class ListConferencePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" })
  accountSid: string;
}


export class ListConferenceQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DateCreated" })
  dateCreated?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DateCreated<" })
  dateCreatedLessThan?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DateCreated>" })
  dateCreatedGreaterThan?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DateUpdated" })
  dateUpdated?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DateUpdated<" })
  dateUpdatedLessThan?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DateUpdated>" })
  dateUpdatedGreaterThan?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=FriendlyName" })
  friendlyName?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Status" })
  status?: shared.ConferenceEnumStatusEnum;
}


export class ListConferenceSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListConferenceListConferenceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=conferences", elemType: shared.ApiV2010AccountConference })
  conferences?: shared.ApiV2010AccountConference[];

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

  @SpeakeasyMetadata({ data: "json, name=previous_page_uri" })
  previousPageUri?: string;

  @SpeakeasyMetadata({ data: "json, name=start" })
  start?: number;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri?: string;
}


export class ListConferenceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: ListConferencePathParams;

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
