import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CountryCodeEnum } from "./countrycodeenum";
import { InstitutionsGetByIdRequestOptions } from "./institutionsgetbyidrequestoptions";



// InstitutionsGetByIdRequest
/** 
 * InstitutionsGetByIdRequest defines the request schema for `/institutions/get_by_id`
**/
export class InstitutionsGetByIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=client_id" })
  clientId?: string;

  @SpeakeasyMetadata({ data: "json, name=country_codes" })
  countryCodes: CountryCodeEnum[];

  @SpeakeasyMetadata({ data: "json, name=institution_id" })
  institutionId: string;

  @SpeakeasyMetadata({ data: "json, name=options" })
  options?: InstitutionsGetByIdRequestOptions;

  @SpeakeasyMetadata({ data: "json, name=secret" })
  secret?: string;
}
