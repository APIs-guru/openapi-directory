import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CountryCodeEnum } from "./countrycodeenum";
import { InstitutionsGetRequestOptions } from "./institutionsgetrequestoptions";



// InstitutionsGetRequest
/** 
 * InstitutionsGetRequest defines the request schema for `/institutions/get`
**/
export class InstitutionsGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=client_id" })
  clientId?: string;

  @SpeakeasyMetadata({ data: "json, name=count" })
  count: number;

  @SpeakeasyMetadata({ data: "json, name=country_codes" })
  countryCodes: CountryCodeEnum[];

  @SpeakeasyMetadata({ data: "json, name=offset" })
  offset: number;

  @SpeakeasyMetadata({ data: "json, name=options" })
  options?: InstitutionsGetRequestOptions;

  @SpeakeasyMetadata({ data: "json, name=secret" })
  secret?: string;
}
