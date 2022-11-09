import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Error } from "./error";
import { CustomerSegment } from "./customersegment";


// ListCustomerSegmentsResponse
/** 
 * Defines the fields that are included in the response body for requests to the `ListCustomerSegments` endpoint.
 * 
 * Either `errors` or `segments` is present in a given response (never both).
**/
export class ListCustomerSegmentsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=cursor" })
  cursor?: string;

  @Metadata({ data: "json, name=errors", elemType: shared.Error })
  errors?: Error[];

  @Metadata({ data: "json, name=segments", elemType: shared.CustomerSegment })
  segments?: CustomerSegment[];
}
