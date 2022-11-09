import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutMyAccountRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=currency" })
  currency?: string;

  @Metadata({ data: "json, name=first_name" })
  firstName?: string;

  @Metadata({ data: "json, name=last_name" })
  lastName?: string;

  @Metadata({ data: "json, name=locale_code" })
  localeCode?: string;

  @Metadata({ data: "json, name=shipping_region_code" })
  shippingRegionCode?: string;

  @Metadata({ data: "json, name=third_party_ad_data_consent" })
  thirdPartyAdDataConsent?: boolean;
}


export class PutMyAccountSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class PutMyAccountRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: PutMyAccountRequestBody;

  @Metadata()
  security: PutMyAccountSecurity;
}


export class PutMyAccountResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
