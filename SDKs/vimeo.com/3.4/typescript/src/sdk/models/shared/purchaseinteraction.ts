import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PurchaseInteractionBuy
/** 
 * Information on purchasing this video.
**/
export class PurchaseInteractionBuy extends SpeakeasyBase {
  @Metadata({ data: "json, name=drm" })
  drm?: boolean;
}

export enum PurchaseInteractionSubscribeStreamEnum {
    Available = "available"
,    Purchased = "purchased"
,    Restricted = "restricted"
,    Unavailable = "unavailable"
}


// PurchaseInteractionSubscribe
/** 
 * Information on subscribing to this video.
**/
export class PurchaseInteractionSubscribe extends SpeakeasyBase {
  @Metadata({ data: "json, name=drm" })
  drm?: boolean;

  @Metadata({ data: "json, name=expires_time" })
  expiresTime?: string;

  @Metadata({ data: "json, name=link" })
  link?: string;

  @Metadata({ data: "json, name=purchase_time" })
  purchaseTime?: string;

  @Metadata({ data: "json, name=stream" })
  stream?: PurchaseInteractionSubscribeStreamEnum;

  @Metadata({ data: "json, name=uri" })
  uri?: string;
}


export class PurchaseInteraction extends SpeakeasyBase {
  @Metadata({ data: "json, name=buy" })
  buy?: PurchaseInteractionBuy;

  @Metadata({ data: "json, name=rent" })
  rent?: Map<string, any>;

  @Metadata({ data: "json, name=subscribe" })
  subscribe?: PurchaseInteractionSubscribe;
}
