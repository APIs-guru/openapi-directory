import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const ListDependentPhoneNumberServerList = [
	"https://api.twilio.com",
] as const;


export class ListDependentPhoneNumberPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" })
  accountSid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=AddressSid" })
  addressSid: string;
}


export class ListDependentPhoneNumberQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListDependentPhoneNumberSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListDependentPhoneNumberListDependentPhoneNumberResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dependent_phone_numbers", elemType: shared.ApiV2010AccountAddressDependentPhoneNumber })
  dependentPhoneNumbers?: shared.ApiV2010AccountAddressDependentPhoneNumber[];

  @SpeakeasyMetadata({ data: "json, name=end" })
  end?: number;

  @SpeakeasyMetadata({ data: "json, name=first_page_uri" })
  firstPageUri?: string;

  @SpeakeasyMetadata({ data: "json, name=next_page_uri" })
  nextPageUri?: string;

  @SpeakeasyMetadata({ data: "json, name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "json, name=page_size" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "json, name=previous_page_uri" })
  previousPageUri?: string;

  @SpeakeasyMetadata({ data: "json, name=start" })
  start?: number;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri?: string;
}


export class ListDependentPhoneNumberRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: ListDependentPhoneNumberPathParams;

  @SpeakeasyMetadata()
  queryParams: ListDependentPhoneNumberQueryParams;

  @SpeakeasyMetadata()
  security: ListDependentPhoneNumberSecurity;
}


export class ListDependentPhoneNumberResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listDependentPhoneNumberResponse?: ListDependentPhoneNumberListDependentPhoneNumberResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
