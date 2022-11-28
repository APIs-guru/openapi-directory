import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateInventoryForAnItemQueryParams extends SpeakeasyBase {
    shipNode?: string;
    sku: string;
}
export declare class UpdateInventoryForAnItemHeaders extends SpeakeasyBase {
    authorization: string;
    wmConsumerChannelType: string;
    wmQosCorrelationId: string;
    wmSecAccessToken: string;
    wmSvcName: string;
}
export declare enum UpdateInventoryForAnItemApplicationJsonQuantityUnitEnum {
    Each = "EACH"
}
export declare class UpdateInventoryForAnItemApplicationJsonQuantity extends SpeakeasyBase {
    amount: number;
    unit: UpdateInventoryForAnItemApplicationJsonQuantityUnitEnum;
}
export declare class UpdateInventoryForAnItemApplicationJson extends SpeakeasyBase {
    quantity: UpdateInventoryForAnItemApplicationJsonQuantity;
    sku: string;
}
export declare class UpdateInventoryForAnItemRequests extends SpeakeasyBase {
    applicationXml: Uint8Array;
    object?: UpdateInventoryForAnItemApplicationJson;
}
export declare enum UpdateInventoryForAnItem200ApplicationJsonQuantityUnitEnum {
    Each = "EACH"
}
export declare class UpdateInventoryForAnItem200ApplicationJsonQuantity extends SpeakeasyBase {
    amount: number;
    unit: UpdateInventoryForAnItem200ApplicationJsonQuantityUnitEnum;
}
export declare class UpdateInventoryForAnItem200ApplicationJson extends SpeakeasyBase {
    quantity: UpdateInventoryForAnItem200ApplicationJsonQuantity;
    sku: string;
}
export declare class UpdateInventoryForAnItemRequest extends SpeakeasyBase {
    queryParams: UpdateInventoryForAnItemQueryParams;
    headers: UpdateInventoryForAnItemHeaders;
    request: UpdateInventoryForAnItemRequests;
}
export declare class UpdateInventoryForAnItemResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    updateInventoryForAnItem200ApplicationJsonObject?: UpdateInventoryForAnItem200ApplicationJson;
}
