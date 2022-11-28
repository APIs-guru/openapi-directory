import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetMultiNodeInventoryForAllSkuAndAllShipNodesQueryParams extends SpeakeasyBase {
    limit?: string;
    nextCursor?: string;
}
export declare class GetMultiNodeInventoryForAllSkuAndAllShipNodesHeaders extends SpeakeasyBase {
    authorization: string;
    wmConsumerChannelType: string;
    wmQosCorrelationId: string;
    wmSecAccessToken: string;
    wmSvcName: string;
}
export declare enum GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJsonElementsInventoriesNodesAvailToSellQtyUnitEnum {
    Each = "EACH"
}
export declare class GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJsonElementsInventoriesNodesAvailToSellQty extends SpeakeasyBase {
    amount: number;
    unit: GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJsonElementsInventoriesNodesAvailToSellQtyUnitEnum;
}
export declare enum GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJsonElementsInventoriesNodesInputQtyUnitEnum {
    Each = "EACH"
}
export declare class GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJsonElementsInventoriesNodesInputQty extends SpeakeasyBase {
    amount: number;
    unit: GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJsonElementsInventoriesNodesInputQtyUnitEnum;
}
export declare class GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJsonElementsInventoriesNodes extends SpeakeasyBase {
    availToSellQty?: GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJsonElementsInventoriesNodesAvailToSellQty;
    inputQty?: GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJsonElementsInventoriesNodesInputQty;
    shipNode?: string;
}
export declare class GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJsonElementsInventories extends SpeakeasyBase {
    nodes?: GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJsonElementsInventoriesNodes[];
    sku?: string;
}
export declare class GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJsonElements extends SpeakeasyBase {
    inventories?: GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJsonElementsInventories[];
}
export declare class GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJsonMeta extends SpeakeasyBase {
    nextCursor?: string;
    totalCount?: number;
}
export declare class GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJson extends SpeakeasyBase {
    elements?: GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJsonElements;
    meta?: GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJsonMeta;
}
export declare class GetMultiNodeInventoryForAllSkuAndAllShipNodesRequest extends SpeakeasyBase {
    queryParams: GetMultiNodeInventoryForAllSkuAndAllShipNodesQueryParams;
    headers: GetMultiNodeInventoryForAllSkuAndAllShipNodesHeaders;
}
export declare class GetMultiNodeInventoryForAllSkuAndAllShipNodesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJsonObject?: GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJson;
}
