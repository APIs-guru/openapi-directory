import { SpeakeasyBase } from "../../../internal/utils";
import { CountryCodeEnum } from "./countrycodeenum";
import { InstitutionsGetRequestOptions } from "./institutionsgetrequestoptions";
/**
 * InstitutionsGetRequest defines the request schema for `/institutions/get`
**/
export declare class InstitutionsGetRequest extends SpeakeasyBase {
    clientId?: string;
    count: number;
    countryCodes: CountryCodeEnum[];
    offset: number;
    options?: InstitutionsGetRequestOptions;
    secret?: string;
}
