import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTAVAILABLEPHONENUMBERVOIP_SERVERS = [
	"https://api.twilio.com",
];



export class ListAvailablePhoneNumberVoipPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" })
  accountSid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=CountryCode" })
  countryCode: string;
}


export class ListAvailablePhoneNumberVoipQueryParams extends SpeakeasyBase {
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


export class ListAvailablePhoneNumberVoipSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListAvailablePhoneNumberVoipRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: ListAvailablePhoneNumberVoipPathParams;

  @Metadata()
  queryParams: ListAvailablePhoneNumberVoipQueryParams;

  @Metadata()
  security: ListAvailablePhoneNumberVoipSecurity;
}


export class ListAvailablePhoneNumberVoipListAvailablePhoneNumberVoipResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=available_phone_numbers", elemType: shared.ApiV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberVoip })
  availablePhoneNumbers?: shared.ApiV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberVoip[];

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


export class ListAvailablePhoneNumberVoipResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listAvailablePhoneNumberVoipResponse?: ListAvailablePhoneNumberVoipListAvailablePhoneNumberVoipResponse;

  @Metadata()
  statusCode: number;
}
