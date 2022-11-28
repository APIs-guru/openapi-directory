import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ProductsEnum } from "./productsenum";



// InstitutionsGetRequestOptions
/** 
 * An optional object to filter `/institutions/get` results.
**/
export class InstitutionsGetRequestOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=include_optional_metadata" })
  includeOptionalMetadata?: boolean;

  @SpeakeasyMetadata({ data: "json, name=include_payment_initiation_metadata" })
  includePaymentInitiationMetadata?: boolean;

  @SpeakeasyMetadata({ data: "json, name=oauth" })
  oauth?: boolean;

  @SpeakeasyMetadata({ data: "json, name=products" })
  products?: ProductsEnum[];

  @SpeakeasyMetadata({ data: "json, name=routing_numbers" })
  routingNumbers?: string[];
}
