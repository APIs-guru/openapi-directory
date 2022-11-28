import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetMultiNodeInventoryForSkuAndAllShipnodesPathParams extends SpeakeasyBase {
    sku: string;
}
export declare class GetMultiNodeInventoryForSkuAndAllShipnodesQueryParams extends SpeakeasyBase {
    shipNode?: string;
}
export declare class GetMultiNodeInventoryForSkuAndAllShipnodesHeaders extends SpeakeasyBase {
    authorization: string;
    wmConsumerChannelType: string;
    wmQosCorrelationId: string;
    wmSecAccessToken: string;
    wmSvcName: string;
}
export declare enum GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJsonNodesAvailToSellQtyUnitEnum {
    Each = "EACH"
}
export declare class GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJsonNodesAvailToSellQty extends SpeakeasyBase {
    amount: number;
    unit: GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJsonNodesAvailToSellQtyUnitEnum;
}
export declare enum GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJsonNodesErrorsCategoryEnum {
    Application = "APPLICATION",
    System = "SYSTEM",
    Request = "REQUEST",
    Data = "DATA"
}
export declare class GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJsonNodesErrorsCauses extends SpeakeasyBase {
    code?: string;
    description?: string;
    field?: string;
    type?: string;
}
export declare enum GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJsonNodesErrorsSeverityEnum {
    Info = "INFO",
    Warn = "WARN",
    Error = "ERROR"
}
/**
 * Node Update Error description.
**/
export declare class GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJsonNodesErrors extends SpeakeasyBase {
    category?: GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJsonNodesErrorsCategoryEnum;
    causes?: GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJsonNodesErrorsCauses[];
    code: string;
    description?: string;
    errorIdentifiers?: Map<string, Map<string, any>>;
    field?: string;
    info?: string;
    severity?: GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJsonNodesErrorsSeverityEnum;
}
export declare enum GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJsonNodesInputQtyUnitEnum {
    Each = "EACH"
}
export declare class GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJsonNodesInputQty extends SpeakeasyBase {
    amount: number;
    unit: GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJsonNodesInputQtyUnitEnum;
}
export declare class GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJsonNodes extends SpeakeasyBase {
    availToSellQty?: GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJsonNodesAvailToSellQty;
    errors?: GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJsonNodesErrors[];
    inputQty?: GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJsonNodesInputQty;
    shipNode?: string;
}
export declare class GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJson extends SpeakeasyBase {
    nodes?: GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJsonNodes[];
    sku?: string;
}
export declare class GetMultiNodeInventoryForSkuAndAllShipnodesRequest extends SpeakeasyBase {
    pathParams: GetMultiNodeInventoryForSkuAndAllShipnodesPathParams;
    queryParams: GetMultiNodeInventoryForSkuAndAllShipnodesQueryParams;
    headers: GetMultiNodeInventoryForSkuAndAllShipnodesHeaders;
}
export declare class GetMultiNodeInventoryForSkuAndAllShipnodesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJsonObject?: GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJson;
}
