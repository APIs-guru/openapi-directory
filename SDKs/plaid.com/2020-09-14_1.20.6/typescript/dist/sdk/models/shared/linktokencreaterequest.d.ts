import { SpeakeasyBase } from "../../../internal/utils/utils";
import { LinkTokenCreateRequestAuth } from "./linktokencreaterequestauth";
import { CountryCodeEnum } from "./countrycodeenum";
import { LinkTokenCreateRequestDepositSwitch } from "./linktokencreaterequestdepositswitch";
import { LinkTokenEuConfig } from "./linktokeneuconfig";
import { LinkTokenCreateRequestIncomeVerification } from "./linktokencreaterequestincomeverification";
import { LinkTokenCreateRequestPaymentInitiation } from "./linktokencreaterequestpaymentinitiation";
import { ProductsEnum } from "./productsenum";
import { LinkTokenCreateRequestUser } from "./linktokencreaterequestuser";
/**
 * LinkTokenCreateRequest defines the request schema for `/link/token/create`
**/
export declare class LinkTokenCreateRequest extends SpeakeasyBase {
    accessToken?: string;
    accountFilters?: Map<string, any>;
    androidPackageName?: string;
    auth?: LinkTokenCreateRequestAuth;
    clientId?: string;
    clientName: string;
    countryCodes: CountryCodeEnum[];
    depositSwitch?: LinkTokenCreateRequestDepositSwitch;
    euConfig?: LinkTokenEuConfig;
    incomeVerification?: LinkTokenCreateRequestIncomeVerification;
    institutionId?: string;
    language: string;
    linkCustomizationName?: string;
    paymentInitiation?: LinkTokenCreateRequestPaymentInitiation;
    products?: ProductsEnum[];
    redirectUri?: string;
    secret?: string;
    user: LinkTokenCreateRequestUser;
    webhook?: string;
}
