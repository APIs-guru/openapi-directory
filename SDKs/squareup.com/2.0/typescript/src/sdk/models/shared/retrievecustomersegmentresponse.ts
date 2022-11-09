import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Error } from "./error";
import { CustomerSegment } from "./customersegment";


// RetrieveCustomerSegmentResponse
/** 
 * Defines the fields that are included in the response body for requests to the `RetrieveCustomerSegment` endpoint.
 * 
 * Either `errors` or `segment` is present in a given response (never both).
**/
export class RetrieveCustomerSegmentResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.Error })
  errors?: Error[];

  @Metadata({ data: "json, name=segment" })
  segment?: CustomerSegment;
}
