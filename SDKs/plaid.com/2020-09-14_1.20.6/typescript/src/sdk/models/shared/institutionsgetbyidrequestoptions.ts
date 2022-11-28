import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// InstitutionsGetByIdRequestOptions
/** 
 * Specifies optional parameters for `/institutions/get_by_id`. If provided, must not be `null`.
**/
export class InstitutionsGetByIdRequestOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=include_optional_metadata" })
  includeOptionalMetadata?: boolean;

  @SpeakeasyMetadata({ data: "json, name=include_payment_initiation_metadata" })
  includePaymentInitiationMetadata?: boolean;

  @SpeakeasyMetadata({ data: "json, name=include_status" })
  includeStatus?: boolean;
}
