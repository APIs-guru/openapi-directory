import { SpeakeasyBase } from "../../../internal/utils/utils";
import { CountryCodeEnum } from "./countrycodeenum";
import { InstitutionsGetByIdRequestOptions } from "./institutionsgetbyidrequestoptions";
/**
 * InstitutionsGetByIdRequest defines the request schema for `/institutions/get_by_id`
**/
export declare class InstitutionsGetByIdRequest extends SpeakeasyBase {
    clientId?: string;
    countryCodes: CountryCodeEnum[];
    institutionId: string;
    options?: InstitutionsGetByIdRequestOptions;
    secret?: string;
}
