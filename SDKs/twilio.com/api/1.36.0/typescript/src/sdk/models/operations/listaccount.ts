import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTACCOUNT_SERVERS = [
	"https://api.twilio.com",
];



export class ListAccountQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=FriendlyName" })
  friendlyName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Status" })
  status?: shared.AccountEnumStatusEnum;
}


export class ListAccountSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListAccountRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  queryParams: ListAccountQueryParams;

  @Metadata()
  security: ListAccountSecurity;
}


export class ListAccountListAccountResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=accounts", elemType: shared.ApiV2010Account })
  accounts?: shared.ApiV2010Account[];

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


export class ListAccountResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listAccountResponse?: ListAccountListAccountResponse;

  @Metadata()
  statusCode: number;
}
