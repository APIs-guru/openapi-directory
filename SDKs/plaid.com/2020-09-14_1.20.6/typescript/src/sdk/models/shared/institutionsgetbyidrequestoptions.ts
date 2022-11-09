import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// InstitutionsGetByIdRequestOptions
/** 
 * Specifies optional parameters for `/institutions/get_by_id`. If provided, must not be `null`.
**/
export class InstitutionsGetByIdRequestOptions extends SpeakeasyBase {
  @Metadata({ data: "json, name=include_optional_metadata" })
  includeOptionalMetadata?: boolean;

  @Metadata({ data: "json, name=include_payment_initiation_metadata" })
  includePaymentInitiationMetadata?: boolean;

  @Metadata({ data: "json, name=include_status" })
  includeStatus?: boolean;
}
