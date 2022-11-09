import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
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
  @Metadata({ data: "json, name=access_token" })
  accessToken?: string;

  @Metadata({ data: "json, name=account_filters" })
  accountFilters?: Map<string, any>;

  @Metadata({ data: "json, name=android_package_name" })
  androidPackageName?: string;

  @Metadata({ data: "json, name=auth" })
  auth?: LinkTokenCreateRequestAuth;

  @Metadata({ data: "json, name=client_id" })
  clientId?: string;

  @Metadata({ data: "json, name=client_name" })
  clientName: string;

  @Metadata({ data: "json, name=country_codes" })
  countryCodes: CountryCodeEnum[];

  @Metadata({ data: "json, name=deposit_switch" })
  depositSwitch?: LinkTokenCreateRequestDepositSwitch;

  @Metadata({ data: "json, name=eu_config" })
  euConfig?: LinkTokenEuConfig;

  @Metadata({ data: "json, name=income_verification" })
  incomeVerification?: LinkTokenCreateRequestIncomeVerification;

  @Metadata({ data: "json, name=institution_id" })
  institutionId?: string;

  @Metadata({ data: "json, name=language" })
  language: string;

  @Metadata({ data: "json, name=link_customization_name" })
  linkCustomizationName?: string;

  @Metadata({ data: "json, name=payment_initiation" })
  paymentInitiation?: LinkTokenCreateRequestPaymentInitiation;

  @Metadata({ data: "json, name=products" })
  products?: ProductsEnum[];

  @Metadata({ data: "json, name=redirect_uri" })
  redirectUri?: string;

  @Metadata({ data: "json, name=secret" })
  secret?: string;

  @Metadata({ data: "json, name=user" })
  user: LinkTokenCreateRequestUser;

  @Metadata({ data: "json, name=webhook" })
  webhook?: string;
}
