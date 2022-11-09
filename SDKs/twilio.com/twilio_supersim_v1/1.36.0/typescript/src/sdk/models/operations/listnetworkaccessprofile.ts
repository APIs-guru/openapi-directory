import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTNETWORKACCESSPROFILE_SERVERS = [
	"https://supersim.twilio.com",
];



export class ListNetworkAccessProfileQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListNetworkAccessProfileSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListNetworkAccessProfileRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  queryParams: ListNetworkAccessProfileQueryParams;

  @Metadata()
  security: ListNetworkAccessProfileSecurity;
}


export class ListNetworkAccessProfileListNetworkAccessProfileResponseMeta extends SpeakeasyBase {
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


export class ListNetworkAccessProfileListNetworkAccessProfileResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=meta" })
  meta?: ListNetworkAccessProfileListNetworkAccessProfileResponseMeta;

  @Metadata({ data: "json, name=network_access_profiles", elemType: shared.SupersimV1NetworkAccessProfile })
  networkAccessProfiles?: shared.SupersimV1NetworkAccessProfile[];
}


export class ListNetworkAccessProfileResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listNetworkAccessProfileResponse?: ListNetworkAccessProfileListNetworkAccessProfileResponse;

  @Metadata()
  statusCode: number;
}
