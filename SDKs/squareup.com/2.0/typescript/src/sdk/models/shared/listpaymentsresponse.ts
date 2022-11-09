import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Error } from "./error";
import { Payment } from "./payment";


// ListPaymentsResponse
/** 
 * Defines the response returned by [ListPayments](https://developer.squareup.com/reference/square_2021-08-18/payments-api/list-payments).
**/
export class ListPaymentsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=cursor" })
  cursor?: string;

  @Metadata({ data: "json, name=errors", elemType: shared.Error })
  errors?: Error[];

  @Metadata({ data: "json, name=payments", elemType: shared.Payment })
  payments?: Payment[];
}
