import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTENDUSER_SERVERS = [
	"https://trusthub.twilio.com",
];



export class ListEndUserQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListEndUserSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListEndUserRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  queryParams: ListEndUserQueryParams;

  @Metadata()
  security: ListEndUserSecurity;
}


export class ListEndUserListEndUserResponseMeta extends SpeakeasyBase {
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


export class ListEndUserListEndUserResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=meta" })
  meta?: ListEndUserListEndUserResponseMeta;

  @Metadata({ data: "json, name=results", elemType: shared.TrusthubV1EndUser })
  results?: shared.TrusthubV1EndUser[];
}


export class ListEndUserResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listEndUserResponse?: ListEndUserListEndUserResponse;

  @Metadata()
  statusCode: number;
}
