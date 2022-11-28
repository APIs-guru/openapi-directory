import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const ListEntityServerList = [
	"https://verify.twilio.com",
] as const;


export class ListEntityPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" })
  serviceSid: string;
}


export class ListEntityQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListEntitySecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListEntityListEntityResponseMeta extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=first_page_url" })
  firstPageUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "json, name=next_page_url" })
  nextPageUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "json, name=page_size" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "json, name=previous_page_url" })
  previousPageUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}


export class ListEntityListEntityResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=entities", elemType: shared.VerifyV2ServiceEntity })
  entities?: shared.VerifyV2ServiceEntity[];

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: ListEntityListEntityResponseMeta;
}


export class ListEntityRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: ListEntityPathParams;

  @SpeakeasyMetadata()
  queryParams: ListEntityQueryParams;

  @SpeakeasyMetadata()
  security: ListEntitySecurity;
}


export class ListEntityResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listEntityResponse?: ListEntityListEntityResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
