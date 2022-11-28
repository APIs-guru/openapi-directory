import { SpeakeasyBase } from "../../../internal/utils";
export declare enum TwitterHandleEnum {
    AtATwitterHandle = "@a Twitter handle"
}
/**
 * Twitter data
**/
export declare class Twitter extends SpeakeasyBase {
    handle?: TwitterHandleEnum;
    hashtags?: string[];
}
