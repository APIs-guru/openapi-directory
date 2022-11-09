import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Error } from "./error";
import { Merchant } from "./merchant";


// RetrieveMerchantResponse
/** 
 * The response object returned by the [RetrieveMerchant](https://developer.squareup.com/reference/square_2021-08-18/merchants-api/retrieve-merchant) endpoint.
**/
export class RetrieveMerchantResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.Error })
  errors?: Error[];

  @Metadata({ data: "json, name=merchant" })
  merchant?: Merchant;
}
