import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * An optional object to filter `/institutions/search` results.
**/
export declare class InstitutionsSearchRequestOptions extends SpeakeasyBase {
    includeOptionalMetadata?: boolean;
    includePaymentInitiationMetadata?: boolean;
    oauth?: boolean;
    paymentInitiation?: Map<string, any>;
}
