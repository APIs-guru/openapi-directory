import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const ListNetworkAccessProfileServerList = [
	"https://supersim.twilio.com",
] as const;


export class ListNetworkAccessProfileQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListNetworkAccessProfileSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListNetworkAccessProfileListNetworkAccessProfileResponseMeta extends SpeakeasyBase {
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


export class ListNetworkAccessProfileListNetworkAccessProfileResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: ListNetworkAccessProfileListNetworkAccessProfileResponseMeta;

  @SpeakeasyMetadata({ data: "json, name=network_access_profiles", elemType: shared.SupersimV1NetworkAccessProfile })
  networkAccessProfiles?: shared.SupersimV1NetworkAccessProfile[];
}


export class ListNetworkAccessProfileRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  queryParams: ListNetworkAccessProfileQueryParams;

  @SpeakeasyMetadata()
  security: ListNetworkAccessProfileSecurity;
}


export class ListNetworkAccessProfileResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listNetworkAccessProfileResponse?: ListNetworkAccessProfileListNetworkAccessProfileResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
