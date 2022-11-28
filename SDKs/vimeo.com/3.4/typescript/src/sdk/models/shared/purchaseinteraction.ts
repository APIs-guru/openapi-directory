import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PurchaseInteractionBuy
/** 
 * Information on purchasing this video.
**/
export class PurchaseInteractionBuy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=drm" })
  drm?: boolean;
}

export enum PurchaseInteractionSubscribeStreamEnum {
    Available = "available",
    Purchased = "purchased",
    Restricted = "restricted",
    Unavailable = "unavailable"
}


// PurchaseInteractionSubscribe
/** 
 * Information on subscribing to this video.
**/
export class PurchaseInteractionSubscribe extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=drm" })
  drm?: boolean;

  @SpeakeasyMetadata({ data: "json, name=expires_time" })
  expiresTime?: string;

  @SpeakeasyMetadata({ data: "json, name=link" })
  link?: string;

  @SpeakeasyMetadata({ data: "json, name=purchase_time" })
  purchaseTime?: string;

  @SpeakeasyMetadata({ data: "json, name=stream" })
  stream?: PurchaseInteractionSubscribeStreamEnum;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri?: string;
}


export class PurchaseInteraction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=buy" })
  buy?: PurchaseInteractionBuy;

  @SpeakeasyMetadata({ data: "json, name=rent" })
  rent?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=subscribe" })
  subscribe?: PurchaseInteractionSubscribe;
}
