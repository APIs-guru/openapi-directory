import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CountryCodeEnum } from "./countrycodeenum";
import { InstitutionsGetByIdRequestOptions } from "./institutionsgetbyidrequestoptions";


// InstitutionsGetByIdRequest
/** 
 * InstitutionsGetByIdRequest defines the request schema for `/institutions/get_by_id`
**/
export class InstitutionsGetByIdRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=client_id" })
  clientId?: string;

  @Metadata({ data: "json, name=country_codes" })
  countryCodes: CountryCodeEnum[];

  @Metadata({ data: "json, name=institution_id" })
  institutionId: string;

  @Metadata({ data: "json, name=options" })
  options?: InstitutionsGetByIdRequestOptions;

  @Metadata({ data: "json, name=secret" })
  secret?: string;
}
