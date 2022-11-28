import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LinkTokenCreateRequestAuth } from "./linktokencreaterequestauth";
import { CountryCodeEnum } from "./countrycodeenum";
import { LinkTokenCreateRequestDepositSwitch } from "./linktokencreaterequestdepositswitch";
import { LinkTokenEuConfig } from "./linktokeneuconfig";
import { LinkTokenCreateRequestIncomeVerification } from "./linktokencreaterequestincomeverification";
import { LinkTokenCreateRequestPaymentInitiation } from "./linktokencreaterequestpaymentinitiation";
import { ProductsEnum } from "./productsenum";
import { LinkTokenCreateRequestUser } from "./linktokencreaterequestuser";



// LinkTokenCreateRequest
/** 
 * LinkTokenCreateRequest defines the request schema for `/link/token/create`
**/
export class LinkTokenCreateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=access_token" })
  accessToken?: string;

  @SpeakeasyMetadata({ data: "json, name=account_filters" })
  accountFilters?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=android_package_name" })
  androidPackageName?: string;

  @SpeakeasyMetadata({ data: "json, name=auth" })
  auth?: LinkTokenCreateRequestAuth;

  @SpeakeasyMetadata({ data: "json, name=client_id" })
  clientId?: string;

  @SpeakeasyMetadata({ data: "json, name=client_name" })
  clientName: string;

  @SpeakeasyMetadata({ data: "json, name=country_codes" })
  countryCodes: CountryCodeEnum[];

  @SpeakeasyMetadata({ data: "json, name=deposit_switch" })
  depositSwitch?: LinkTokenCreateRequestDepositSwitch;

  @SpeakeasyMetadata({ data: "json, name=eu_config" })
  euConfig?: LinkTokenEuConfig;

  @SpeakeasyMetadata({ data: "json, name=income_verification" })
  incomeVerification?: LinkTokenCreateRequestIncomeVerification;

  @SpeakeasyMetadata({ data: "json, name=institution_id" })
  institutionId?: string;

  @SpeakeasyMetadata({ data: "json, name=language" })
  language: string;

  @SpeakeasyMetadata({ data: "json, name=link_customization_name" })
  linkCustomizationName?: string;

  @SpeakeasyMetadata({ data: "json, name=payment_initiation" })
  paymentInitiation?: LinkTokenCreateRequestPaymentInitiation;

  @SpeakeasyMetadata({ data: "json, name=products" })
  products?: ProductsEnum[];

  @SpeakeasyMetadata({ data: "json, name=redirect_uri" })
  redirectUri?: string;

  @SpeakeasyMetadata({ data: "json, name=secret" })
  secret?: string;

  @SpeakeasyMetadata({ data: "json, name=user" })
  user: LinkTokenCreateRequestUser;

  @SpeakeasyMetadata({ data: "json, name=webhook" })
  webhook?: string;
}
