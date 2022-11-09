import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CustomerSegment
/** 
 * Represents a group of customer profiles that match one or more predefined filter criteria. 
 * 
 * Segments (also known as Smart Groups) are defined and created within the Customer Directory in the
 * Square Seller Dashboard or Point of Sale.
**/
export class CustomerSegment extends SpeakeasyBase {
  @Metadata({ data: "json, name=created_at" })
  createdAt?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=updated_at" })
  updatedAt?: string;
}
