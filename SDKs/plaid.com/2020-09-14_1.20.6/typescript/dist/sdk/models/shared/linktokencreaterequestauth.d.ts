import { SpeakeasyBase } from "../../../internal/utils";
export declare enum LinkTokenCreateRequestAuthFlowTypeEnum {
    FlexibleAuth = "FLEXIBLE_AUTH"
}
/**
 * Specifies options for initializing Link for use with the Auth product. This field is currently only required if using the Flexible Auth product (currently in closed beta).
**/
export declare class LinkTokenCreateRequestAuth extends SpeakeasyBase {
    flowType: LinkTokenCreateRequestAuthFlowTypeEnum;
}
