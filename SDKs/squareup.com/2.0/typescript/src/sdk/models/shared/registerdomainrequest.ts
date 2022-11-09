import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// RegisterDomainRequest
/** 
 * Defines the parameters that can be included in the body of
 * a request to the [RegisterDomain](https://developer.squareup.com/reference/square_2021-08-18/apple-pay-api/register-domain) endpoint.
**/
export class RegisterDomainRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=domain_name" })
  domainName: string;
}
