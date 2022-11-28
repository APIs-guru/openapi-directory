import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetInventoryQueryParams extends SpeakeasyBase {
    shipNode?: string;
    sku: string;
}
export declare class GetInventoryHeaders extends SpeakeasyBase {
    authorization: string;
    wmConsumerChannelType: string;
    wmQosCorrelationId: string;
    wmSecAccessToken: string;
    wmSvcName: string;
}
export declare enum GetInventory200ApplicationJsonQuantityUnitEnum {
    Each = "EACH"
}
export declare class GetInventory200ApplicationJsonQuantity extends SpeakeasyBase {
    amount: number;
    unit: GetInventory200ApplicationJsonQuantityUnitEnum;
}
export declare class GetInventory200ApplicationJson extends SpeakeasyBase {
    quantity: GetInventory200ApplicationJsonQuantity;
    sku: string;
}
export declare class GetInventoryRequest extends SpeakeasyBase {
    queryParams: GetInventoryQueryParams;
    headers: GetInventoryHeaders;
}
export declare class GetInventoryResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    getInventory200ApplicationJsonObject?: GetInventory200ApplicationJson;
}
