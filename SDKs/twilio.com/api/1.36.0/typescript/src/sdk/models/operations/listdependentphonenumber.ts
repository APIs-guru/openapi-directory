import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTDEPENDENTPHONENUMBER_SERVERS = [
	"https://api.twilio.com",
];



export class ListDependentPhoneNumberPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" })
  accountSid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=AddressSid" })
  addressSid: string;
}


export class ListDependentPhoneNumberQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListDependentPhoneNumberSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListDependentPhoneNumberRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: ListDependentPhoneNumberPathParams;

  @Metadata()
  queryParams: ListDependentPhoneNumberQueryParams;

  @Metadata()
  security: ListDependentPhoneNumberSecurity;
}


export class ListDependentPhoneNumberListDependentPhoneNumberResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=dependent_phone_numbers", elemType: shared.ApiV2010AccountAddressDependentPhoneNumber })
  dependentPhoneNumbers?: shared.ApiV2010AccountAddressDependentPhoneNumber[];

  @Metadata({ data: "json, name=end" })
  end?: number;

  @Metadata({ data: "json, name=first_page_uri" })
  firstPageUri?: string;

  @Metadata({ data: "json, name=next_page_uri" })
  nextPageUri?: string;

  @Metadata({ data: "json, name=page" })
  page?: number;

  @Metadata({ data: "json, name=page_size" })
  pageSize?: number;

  @Metadata({ data: "json, name=previous_page_uri" })
  previousPageUri?: string;

  @Metadata({ data: "json, name=start" })
  start?: number;

  @Metadata({ data: "json, name=uri" })
  uri?: string;
}


export class ListDependentPhoneNumberResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listDependentPhoneNumberResponse?: ListDependentPhoneNumberListDependentPhoneNumberResponse;

  @Metadata()
  statusCode: number;
}
