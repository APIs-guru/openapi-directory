import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTCUSTOMERPROFILE_SERVERS = [
	"https://trusthub.twilio.com",
];



export class ListCustomerProfileQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=FriendlyName" })
  friendlyName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=PolicySid" })
  policySid?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Status" })
  status?: shared.CustomerProfileEnumStatusEnum;
}


export class ListCustomerProfileSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListCustomerProfileRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  queryParams: ListCustomerProfileQueryParams;

  @Metadata()
  security: ListCustomerProfileSecurity;
}


export class ListCustomerProfileListCustomerProfileResponseMeta extends SpeakeasyBase {
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


export class ListCustomerProfileListCustomerProfileResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=meta" })
  meta?: ListCustomerProfileListCustomerProfileResponseMeta;

  @Metadata({ data: "json, name=results", elemType: shared.TrusthubV1CustomerProfile })
  results?: shared.TrusthubV1CustomerProfile[];
}


export class ListCustomerProfileResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listCustomerProfileResponse?: ListCustomerProfileListCustomerProfileResponse;

  @Metadata()
  statusCode: number;
}
