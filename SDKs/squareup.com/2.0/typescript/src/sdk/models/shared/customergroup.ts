import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CustomerGroup
/** 
 * Represents a group of customer profiles. 
 * 
 * Customer groups can be created, be modified, and have their membership defined using 
 * the Customers API or within the Customer Directory in the Square Seller Dashboard or Point of Sale.
**/
export class CustomerGroup extends SpeakeasyBase {
  @Metadata({ data: "json, name=created_at" })
  createdAt?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=updated_at" })
  updatedAt?: string;
}
