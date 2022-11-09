import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTAVAILABLEPHONENUMBERSHAREDCOST_SERVERS = [
	"https://api.twilio.com",
];



export class ListAvailablePhoneNumberSharedCostPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" })
  accountSid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=CountryCode" })
  countryCode: string;
}


export class ListAvailablePhoneNumberSharedCostQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=AreaCode" })
  areaCode?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Beta" })
  beta?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Contains" })
  contains?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Distance" })
  distance?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ExcludeAllAddressRequired" })
  excludeAllAddressRequired?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ExcludeForeignAddressRequired" })
  excludeForeignAddressRequired?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ExcludeLocalAddressRequired" })
  excludeLocalAddressRequired?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=FaxEnabled" })
  faxEnabled?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=InLata" })
  inLata?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=InLocality" })
  inLocality?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=InPostalCode" })
  inPostalCode?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=InRateCenter" })
  inRateCenter?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=InRegion" })
  inRegion?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=MmsEnabled" })
  mmsEnabled?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NearLatLong" })
  nearLatLong?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NearNumber" })
  nearNumber?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=SmsEnabled" })
  smsEnabled?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=VoiceEnabled" })
  voiceEnabled?: boolean;
}


export class ListAvailablePhoneNumberSharedCostSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListAvailablePhoneNumberSharedCostRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: ListAvailablePhoneNumberSharedCostPathParams;

  @Metadata()
  queryParams: ListAvailablePhoneNumberSharedCostQueryParams;

  @Metadata()
  security: ListAvailablePhoneNumberSharedCostSecurity;
}


export class ListAvailablePhoneNumberSharedCostListAvailablePhoneNumberSharedCostResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=available_phone_numbers", elemType: shared.ApiV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberSharedCost })
  availablePhoneNumbers?: shared.ApiV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberSharedCost[];

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


export class ListAvailablePhoneNumberSharedCostResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listAvailablePhoneNumberSharedCostResponse?: ListAvailablePhoneNumberSharedCostListAvailablePhoneNumberSharedCostResponse;

  @Metadata()
  statusCode: number;
}
