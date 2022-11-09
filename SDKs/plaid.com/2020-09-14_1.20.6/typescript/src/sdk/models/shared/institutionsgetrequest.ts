import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CountryCodeEnum } from "./countrycodeenum";
import { InstitutionsGetRequestOptions } from "./institutionsgetrequestoptions";


// InstitutionsGetRequest
/** 
 * InstitutionsGetRequest defines the request schema for `/institutions/get`
**/
export class InstitutionsGetRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=client_id" })
  clientId?: string;

  @Metadata({ data: "json, name=count" })
  count: number;

  @Metadata({ data: "json, name=country_codes" })
  countryCodes: CountryCodeEnum[];

  @Metadata({ data: "json, name=offset" })
  offset: number;

  @Metadata({ data: "json, name=options" })
  options?: InstitutionsGetRequestOptions;

  @Metadata({ data: "json, name=secret" })
  secret?: string;
}
