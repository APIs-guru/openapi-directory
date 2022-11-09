import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTFAXMEDIA_SERVERS = [
	"https://fax.twilio.com",
];



export class ListFaxMediaPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=FaxSid" })
  faxSid: string;
}


export class ListFaxMediaQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListFaxMediaSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListFaxMediaRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: ListFaxMediaPathParams;

  @Metadata()
  queryParams: ListFaxMediaQueryParams;

  @Metadata()
  security: ListFaxMediaSecurity;
}


export class ListFaxMediaListFaxMediaResponseMeta extends SpeakeasyBase {
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


export class ListFaxMediaListFaxMediaResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=media", elemType: shared.FaxV1FaxFaxMedia })
  media?: shared.FaxV1FaxFaxMedia[];

  @Metadata({ data: "json, name=meta" })
  meta?: ListFaxMediaListFaxMediaResponseMeta;
}


export class ListFaxMediaResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listFaxMediaResponse?: ListFaxMediaListFaxMediaResponse;

  @Metadata()
  statusCode: number;
}
