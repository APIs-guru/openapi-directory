import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutMyAccountRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency?: string;

  @SpeakeasyMetadata({ data: "json, name=first_name" })
  firstName?: string;

  @SpeakeasyMetadata({ data: "json, name=last_name" })
  lastName?: string;

  @SpeakeasyMetadata({ data: "json, name=locale_code" })
  localeCode?: string;

  @SpeakeasyMetadata({ data: "json, name=shipping_region_code" })
  shippingRegionCode?: string;

  @SpeakeasyMetadata({ data: "json, name=third_party_ad_data_consent" })
  thirdPartyAdDataConsent?: boolean;
}


export class PutMyAccountSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class PutMyAccountRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PutMyAccountRequestBody;

  @SpeakeasyMetadata()
  security: PutMyAccountSecurity;
}


export class PutMyAccountResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
