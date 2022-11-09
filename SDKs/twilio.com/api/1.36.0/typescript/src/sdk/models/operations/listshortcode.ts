import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTSHORTCODE_SERVERS = [
	"https://api.twilio.com",
];



export class ListShortCodePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" })
  accountSid: string;
}


export class ListShortCodeQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=FriendlyName" })
  friendlyName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ShortCode" })
  shortCode?: string;
}


export class ListShortCodeSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListShortCodeRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: ListShortCodePathParams;

  @Metadata()
  queryParams: ListShortCodeQueryParams;

  @Metadata()
  security: ListShortCodeSecurity;
}


export class ListShortCodeListShortCodeResponse extends SpeakeasyBase {
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

  @Metadata({ data: "json, name=short_codes", elemType: shared.ApiV2010AccountShortCode })
  shortCodes?: shared.ApiV2010AccountShortCode[];

  @Metadata({ data: "json, name=start" })
  start?: number;

  @Metadata({ data: "json, name=uri" })
  uri?: string;
}


export class ListShortCodeResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listShortCodeResponse?: ListShortCodeListShortCodeResponse;

  @Metadata()
  statusCode: number;
}
