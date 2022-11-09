import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CountryCodeEnum } from "./countrycodeenum";
import { InstitutionsSearchRequestOptions } from "./institutionssearchrequestoptions";
import { ProductsEnum } from "./productsenum";


// InstitutionsSearchRequest
/** 
 * InstitutionsSearchRequest defines the request schema for `/institutions/search`
**/
export class InstitutionsSearchRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=client_id" })
  clientId?: string;

  @Metadata({ data: "json, name=country_codes" })
  countryCodes: CountryCodeEnum[];

  @Metadata({ data: "json, name=options" })
  options?: InstitutionsSearchRequestOptions;

  @Metadata({ data: "json, name=products" })
  products: ProductsEnum[];

  @Metadata({ data: "json, name=query" })
  query: string;

  @Metadata({ data: "json, name=secret" })
  secret?: string;
}
