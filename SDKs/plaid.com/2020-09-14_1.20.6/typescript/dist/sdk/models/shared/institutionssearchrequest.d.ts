import { SpeakeasyBase } from "../../../internal/utils/utils";
import { CountryCodeEnum } from "./countrycodeenum";
import { InstitutionsSearchRequestOptions } from "./institutionssearchrequestoptions";
import { ProductsEnum } from "./productsenum";
/**
 * InstitutionsSearchRequest defines the request schema for `/institutions/search`
**/
export declare class InstitutionsSearchRequest extends SpeakeasyBase {
    clientId?: string;
    countryCodes: CountryCodeEnum[];
    options?: InstitutionsSearchRequestOptions;
    products: ProductsEnum[];
    query: string;
    secret?: string;
}
