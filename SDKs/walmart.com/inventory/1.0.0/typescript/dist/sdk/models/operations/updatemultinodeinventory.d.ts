import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateMultiNodeInventoryPathParams extends SpeakeasyBase {
    sku: string;
}
export declare class UpdateMultiNodeInventoryHeaders extends SpeakeasyBase {
    authorization: string;
    wmConsumerChannelType: string;
    wmQosCorrelationId: string;
    wmSecAccessToken: string;
    wmSvcName: string;
}
export declare enum UpdateMultiNodeInventoryRequestBodyInventoriesNodesInputQtyUnitEnum {
    Each = "EACH"
}
export declare class UpdateMultiNodeInventoryRequestBodyInventoriesNodesInputQty extends SpeakeasyBase {
    amount: number;
    unit: UpdateMultiNodeInventoryRequestBodyInventoriesNodesInputQtyUnitEnum;
}
export declare class UpdateMultiNodeInventoryRequestBodyInventoriesNodes extends SpeakeasyBase {
    inputQty: UpdateMultiNodeInventoryRequestBodyInventoriesNodesInputQty;
    shipNode: string;
}
export declare class UpdateMultiNodeInventoryRequestBodyInventories extends SpeakeasyBase {
    nodes: UpdateMultiNodeInventoryRequestBodyInventoriesNodes[];
}
export declare class UpdateMultiNodeInventoryRequestBody extends SpeakeasyBase {
    inventories: UpdateMultiNodeInventoryRequestBodyInventories;
}
export declare enum UpdateMultiNodeInventory200ApplicationJsonNodesErrorsCategoryEnum {
    Application = "APPLICATION",
    System = "SYSTEM",
    Request = "REQUEST",
    Data = "DATA"
}
export declare class UpdateMultiNodeInventory200ApplicationJsonNodesErrorsCauses extends SpeakeasyBase {
    code?: string;
    description?: string;
    field?: string;
    type?: string;
}
export declare enum UpdateMultiNodeInventory200ApplicationJsonNodesErrorsSeverityEnum {
    Info = "INFO",
    Warn = "WARN",
    Error = "ERROR"
}
/**
 * Node Update Error description.
**/
export declare class UpdateMultiNodeInventory200ApplicationJsonNodesErrors extends SpeakeasyBase {
    category?: UpdateMultiNodeInventory200ApplicationJsonNodesErrorsCategoryEnum;
    causes?: UpdateMultiNodeInventory200ApplicationJsonNodesErrorsCauses[];
    code: string;
    description?: string;
    errorIdentifiers?: Map<string, Map<string, any>>;
    field?: string;
    info?: string;
    severity?: UpdateMultiNodeInventory200ApplicationJsonNodesErrorsSeverityEnum;
}
export declare class UpdateMultiNodeInventory200ApplicationJsonNodes extends SpeakeasyBase {
    errors?: UpdateMultiNodeInventory200ApplicationJsonNodesErrors[];
    shipNode?: string;
    status?: string;
}
export declare class UpdateMultiNodeInventory200ApplicationJson extends SpeakeasyBase {
    nodes?: UpdateMultiNodeInventory200ApplicationJsonNodes[];
    sku?: string;
}
export declare class UpdateMultiNodeInventoryRequest extends SpeakeasyBase {
    pathParams: UpdateMultiNodeInventoryPathParams;
    headers: UpdateMultiNodeInventoryHeaders;
    request: UpdateMultiNodeInventoryRequestBody;
}
export declare class UpdateMultiNodeInventoryResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    updateMultiNodeInventory200ApplicationJsonObject?: UpdateMultiNodeInventory200ApplicationJson;
}
