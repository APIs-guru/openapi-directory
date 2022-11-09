import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Error } from "./error";


// RegisterDomainResponse
/** 
 * Defines the fields that are included in the response body of
 * a request to the [RegisterDomain](https://developer.squareup.com/reference/square_2021-08-18/apple-pay-api/register-domain) endpoint.
 * 
 * Either `errors` or `status` are present in a given response (never both).
**/
export class RegisterDomainResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.Error })
  errors?: Error[];

  @Metadata({ data: "json, name=status" })
  status?: string;
}
