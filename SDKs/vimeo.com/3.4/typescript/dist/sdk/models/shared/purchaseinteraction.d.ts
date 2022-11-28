import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information on purchasing this video.
**/
export declare class PurchaseInteractionBuy extends SpeakeasyBase {
    drm?: boolean;
}
export declare enum PurchaseInteractionSubscribeStreamEnum {
    Available = "available",
    Purchased = "purchased",
    Restricted = "restricted",
    Unavailable = "unavailable"
}
/**
 * Information on subscribing to this video.
**/
export declare class PurchaseInteractionSubscribe extends SpeakeasyBase {
    drm?: boolean;
    expiresTime?: string;
    link?: string;
    purchaseTime?: string;
    stream?: PurchaseInteractionSubscribeStreamEnum;
    uri?: string;
}
export declare class PurchaseInteraction extends SpeakeasyBase {
    buy?: PurchaseInteractionBuy;
    rent?: Map<string, any>;
    subscribe?: PurchaseInteractionSubscribe;
}
