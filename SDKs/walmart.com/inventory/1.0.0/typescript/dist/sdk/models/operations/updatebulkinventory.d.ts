import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateBulkInventoryQueryParams extends SpeakeasyBase {
    feedType: string;
    shipNode?: string;
}
export declare class UpdateBulkInventoryHeaders extends SpeakeasyBase {
    authorization: string;
    wmConsumerChannelType: string;
    wmQosCorrelationId: string;
    wmSecAccessToken: string;
    wmSvcName: string;
}
export declare class UpdateBulkInventoryRequestBodyFile extends SpeakeasyBase {
    content: Uint8Array;
    file: string;
}
export declare class UpdateBulkInventoryRequestBody extends SpeakeasyBase {
    file?: UpdateBulkInventoryRequestBodyFile;
}
export declare class UpdateBulkInventory200ApplicationJson extends SpeakeasyBase {
    additionalAttributes?: Map<string, any>;
    errors?: Map<string, any>;
    feedId?: string;
}
export declare class UpdateBulkInventoryRequest extends SpeakeasyBase {
    queryParams: UpdateBulkInventoryQueryParams;
    headers: UpdateBulkInventoryHeaders;
    request: UpdateBulkInventoryRequestBody;
}
export declare class UpdateBulkInventoryResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    updateBulkInventory200ApplicationJsonObject?: UpdateBulkInventory200ApplicationJson;
}
