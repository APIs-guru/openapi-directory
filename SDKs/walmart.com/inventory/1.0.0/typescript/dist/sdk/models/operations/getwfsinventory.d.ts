import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetWfsInventoryQueryParams extends SpeakeasyBase {
    fromModifiedDate?: string;
    limit?: string;
    offset?: string;
    sku?: string;
    toModifiedDate?: string;
}
export declare class GetWfsInventoryHeaders extends SpeakeasyBase {
    authorization: string;
    wmConsumerChannelType: string;
    wmQosCorrelationId: string;
    wmSecAccessToken: string;
    wmSvcName: string;
}
export declare class GetWfsInventory200ApplicationJsonHeaders extends SpeakeasyBase {
    limit?: number;
    offset?: number;
    totalCount?: number;
}
export declare class GetWfsInventory200ApplicationJsonPayloadInventoryShipNodes extends SpeakeasyBase {
    availToSellQty?: number;
    modifiedDate?: string;
    onHandQty?: number;
    shipNodeType?: string;
}
export declare class GetWfsInventory200ApplicationJsonPayloadInventory extends SpeakeasyBase {
    shipNodes?: GetWfsInventory200ApplicationJsonPayloadInventoryShipNodes[];
    sku?: string;
}
export declare class GetWfsInventory200ApplicationJsonPayload extends SpeakeasyBase {
    inventory?: GetWfsInventory200ApplicationJsonPayloadInventory[];
}
export declare class GetWfsInventory200ApplicationJson extends SpeakeasyBase {
    headers?: GetWfsInventory200ApplicationJsonHeaders;
    payload?: GetWfsInventory200ApplicationJsonPayload;
}
export declare class GetWfsInventoryRequest extends SpeakeasyBase {
    queryParams: GetWfsInventoryQueryParams;
    headers: GetWfsInventoryHeaders;
}
export declare class GetWfsInventoryResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getWfsInventory200ApplicationJsonObject?: GetWfsInventory200ApplicationJson;
}
