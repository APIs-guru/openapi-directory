import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// InstitutionsSearchRequestOptions
/** 
 * An optional object to filter `/institutions/search` results.
**/
export class InstitutionsSearchRequestOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=include_optional_metadata" })
  includeOptionalMetadata?: boolean;

  @SpeakeasyMetadata({ data: "json, name=include_payment_initiation_metadata" })
  includePaymentInitiationMetadata?: boolean;

  @SpeakeasyMetadata({ data: "json, name=oauth" })
  oauth?: boolean;

  @SpeakeasyMetadata({ data: "json, name=payment_initiation" })
  paymentInitiation?: Map<string, any>;
}
