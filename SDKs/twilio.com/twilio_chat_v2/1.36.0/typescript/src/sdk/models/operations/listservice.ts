import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTSERVICE_SERVERS = [
	"https://chat.twilio.com",
];



export class ListServiceQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListServiceSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListServiceRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  queryParams: ListServiceQueryParams;

  @Metadata()
  security: ListServiceSecurity;
}


export class ListServiceListServiceResponseMeta extends SpeakeasyBase {
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


export class ListServiceListServiceResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=meta" })
  meta?: ListServiceListServiceResponseMeta;

  @Metadata({ data: "json, name=services", elemType: shared.ChatV2Service })
  services?: shared.ChatV2Service[];
}


export class ListServiceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listServiceResponse?: ListServiceListServiceResponse;

  @Metadata()
  statusCode: number;
}
