import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTDATASESSION_SERVERS = [
	"https://wireless.twilio.com",
];



export class ListDataSessionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=SimSid" })
  simSid: string;
}


export class ListDataSessionQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListDataSessionSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListDataSessionRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: ListDataSessionPathParams;

  @Metadata()
  queryParams: ListDataSessionQueryParams;

  @Metadata()
  security: ListDataSessionSecurity;
}


export class ListDataSessionListDataSessionResponseMeta extends SpeakeasyBase {
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


export class ListDataSessionListDataSessionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=data_sessions", elemType: shared.WirelessV1SimDataSession })
  dataSessions?: shared.WirelessV1SimDataSession[];

  @Metadata({ data: "json, name=meta" })
  meta?: ListDataSessionListDataSessionResponseMeta;
}


export class ListDataSessionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listDataSessionResponse?: ListDataSessionListDataSessionResponse;

  @Metadata()
  statusCode: number;
}
