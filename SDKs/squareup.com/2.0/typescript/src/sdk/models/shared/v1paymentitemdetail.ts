import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// V1PaymentItemDetail
/** 
 * V1PaymentItemDetail
**/
export class V1PaymentItemDetail extends SpeakeasyBase {
  @Metadata({ data: "json, name=category_name" })
  categoryName?: string;

  @Metadata({ data: "json, name=item_id" })
  itemId?: string;

  @Metadata({ data: "json, name=item_variation_id" })
  itemVariationId?: string;

  @Metadata({ data: "json, name=sku" })
  sku?: string;
}
