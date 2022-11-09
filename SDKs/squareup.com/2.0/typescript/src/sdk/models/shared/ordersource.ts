import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// OrderSource
/** 
 * Represents the origination details of an order.
**/
export class OrderSource extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;
}
