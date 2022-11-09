import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// InstitutionsSearchRequestOptions
/** 
 * An optional object to filter `/institutions/search` results.
**/
export class InstitutionsSearchRequestOptions extends SpeakeasyBase {
  @Metadata({ data: "json, name=include_optional_metadata" })
  includeOptionalMetadata?: boolean;

  @Metadata({ data: "json, name=include_payment_initiation_metadata" })
  includePaymentInitiationMetadata?: boolean;

  @Metadata({ data: "json, name=oauth" })
  oauth?: boolean;

  @Metadata({ data: "json, name=payment_initiation" })
  paymentInitiation?: Map<string, any>;
}
