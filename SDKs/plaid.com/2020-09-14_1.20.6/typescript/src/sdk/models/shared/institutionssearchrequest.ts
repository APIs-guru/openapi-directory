import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CountryCodeEnum } from "./countrycodeenum";
import { InstitutionsSearchRequestOptions } from "./institutionssearchrequestoptions";
import { ProductsEnum } from "./productsenum";



// InstitutionsSearchRequest
/** 
 * InstitutionsSearchRequest defines the request schema for `/institutions/search`
**/
export class InstitutionsSearchRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=client_id" })
  clientId?: string;

  @SpeakeasyMetadata({ data: "json, name=country_codes" })
  countryCodes: CountryCodeEnum[];

  @SpeakeasyMetadata({ data: "json, name=options" })
  options?: InstitutionsSearchRequestOptions;

  @SpeakeasyMetadata({ data: "json, name=products" })
  products: ProductsEnum[];

  @SpeakeasyMetadata({ data: "json, name=query" })
  query: string;

  @SpeakeasyMetadata({ data: "json, name=secret" })
  secret?: string;
}
