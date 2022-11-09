import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTCONFERENCE_SERVERS = [
	"https://api.twilio.com",
];



export class ListConferencePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" })
  accountSid: string;
}


export class ListConferenceQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=DateCreated" })
  dateCreated?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DateCreated<" })
  dateCreatedLessThan?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DateCreated>" })
  dateCreatedGreaterThan?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DateUpdated" })
  dateUpdated?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DateUpdated<" })
  dateUpdatedLessThan?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DateUpdated>" })
  dateUpdatedGreaterThan?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=FriendlyName" })
  friendlyName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Status" })
  status?: shared.ConferenceEnumStatusEnum;
}


export class ListConferenceSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListConferenceRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: ListConferencePathParams;

  @Metadata()
  queryParams: ListConferenceQueryParams;

  @Metadata()
  security: ListConferenceSecurity;
}


export class ListConferenceListConferenceResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=conferences", elemType: shared.ApiV2010AccountConference })
  conferences?: shared.ApiV2010AccountConference[];

  @Metadata({ data: "json, name=end" })
  end?: number;

  @Metadata({ data: "json, name=first_page_uri" })
  firstPageUri?: string;

  @Metadata({ data: "json, name=next_page_uri" })
  nextPageUri?: string;

  @Metadata({ data: "json, name=page" })
  page?: number;

  @Metadata({ data: "json, name=page_size" })
  pageSize?: number;

  @Metadata({ data: "json, name=previous_page_uri" })
  previousPageUri?: string;

  @Metadata({ data: "json, name=start" })
  start?: number;

  @Metadata({ data: "json, name=uri" })
  uri?: string;
}


export class ListConferenceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listConferenceResponse?: ListConferenceListConferenceResponse;

  @Metadata()
  statusCode: number;
}
