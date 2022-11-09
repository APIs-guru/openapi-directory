import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * Specifies optional parameters for `/institutions/get_by_id`. If provided, must not be `null`.
**/
export declare class InstitutionsGetByIdRequestOptions extends SpeakeasyBase {
    includeOptionalMetadata?: boolean;
    includePaymentInitiationMetadata?: boolean;
    includeStatus?: boolean;
}
