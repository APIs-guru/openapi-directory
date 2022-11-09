import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTFAX_SERVERS = [
	"https://fax.twilio.com",
];



export class ListFaxQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=DateCreatedAfter" })
  dateCreatedAfter?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DateCreatedOnOrBefore" })
  dateCreatedOnOrBefore?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=From" })
  from?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=To" })
  to?: string;
}


export class ListFaxSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListFaxRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  queryParams: ListFaxQueryParams;

  @Metadata()
  security: ListFaxSecurity;
}


export class ListFaxListFaxResponseMeta extends SpeakeasyBase {
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


export class ListFaxListFaxResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=faxes", elemType: shared.FaxV1Fax })
  faxes?: shared.FaxV1Fax[];

  @Metadata({ data: "json, name=meta" })
  meta?: ListFaxListFaxResponseMeta;
}


export class ListFaxResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listFaxResponse?: ListFaxListFaxResponse;

  @Metadata()
  statusCode: number;
}
