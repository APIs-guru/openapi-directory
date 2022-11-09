import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ProductsEnum } from "./productsenum";
/**
 * An optional object to filter `/institutions/get` results.
**/
export declare class InstitutionsGetRequestOptions extends SpeakeasyBase {
    includeOptionalMetadata?: boolean;
    includePaymentInitiationMetadata?: boolean;
    oauth?: boolean;
    products?: ProductsEnum[];
    routingNumbers?: string[];
}
