import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTENTITY_SERVERS = [
	"https://verify.twilio.com",
];



export class ListEntityPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" })
  serviceSid: string;
}


export class ListEntityQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListEntitySecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListEntityRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: ListEntityPathParams;

  @Metadata()
  queryParams: ListEntityQueryParams;

  @Metadata()
  security: ListEntitySecurity;
}


export class ListEntityListEntityResponseMeta extends SpeakeasyBase {
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


export class ListEntityListEntityResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=entities", elemType: shared.VerifyV2ServiceEntity })
  entities?: shared.VerifyV2ServiceEntity[];

  @Metadata({ data: "json, name=meta" })
  meta?: ListEntityListEntityResponseMeta;
}


export class ListEntityResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listEntityResponse?: ListEntityListEntityResponse;

  @Metadata()
  statusCode: number;
}
