import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ProductsEnum } from "./productsenum";


// InstitutionsGetRequestOptions
/** 
 * An optional object to filter `/institutions/get` results.
**/
export class InstitutionsGetRequestOptions extends SpeakeasyBase {
  @Metadata({ data: "json, name=include_optional_metadata" })
  includeOptionalMetadata?: boolean;

  @Metadata({ data: "json, name=include_payment_initiation_metadata" })
  includePaymentInitiationMetadata?: boolean;

  @Metadata({ data: "json, name=oauth" })
  oauth?: boolean;

  @Metadata({ data: "json, name=products" })
  products?: ProductsEnum[];

  @Metadata({ data: "json, name=routing_numbers" })
  routingNumbers?: string[];
}
