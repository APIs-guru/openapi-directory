import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Error } from "./error";
import { Merchant } from "./merchant";


// ListMerchantsResponse
/** 
 * The response object returned by the [ListMerchant](https://developer.squareup.com/reference/square_2021-08-18/merchants-api/list-merchants) endpoint.
**/
export class ListMerchantsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=cursor" })
  cursor?: number;

  @Metadata({ data: "json, name=errors", elemType: shared.Error })
  errors?: Error[];

  @Metadata({ data: "json, name=merchant", elemType: shared.Merchant })
  merchant?: Merchant[];
}
