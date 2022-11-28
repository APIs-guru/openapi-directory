import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const ListServiceServerList = [
	"https://verify.twilio.com",
] as const;


export class ListServiceQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListServiceSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListServiceListServiceResponseMeta extends SpeakeasyBase {
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


export class ListServiceListServiceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: ListServiceListServiceResponseMeta;

  @SpeakeasyMetadata({ data: "json, name=services", elemType: shared.VerifyV2Service })
  services?: shared.VerifyV2Service[];
}


export class ListServiceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  queryParams: ListServiceQueryParams;

  @SpeakeasyMetadata()
  security: ListServiceSecurity;
}


export class ListServiceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listServiceResponse?: ListServiceListServiceResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
