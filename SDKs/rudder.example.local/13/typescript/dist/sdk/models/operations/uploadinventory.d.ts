import { SpeakeasyBase } from "../../../internal/utils";
export declare class UploadInventoryRequestBodyFile extends SpeakeasyBase {
    content: Uint8Array;
    file: string;
}
export declare class UploadInventoryRequestBodySignature extends SpeakeasyBase {
    content: Uint8Array;
    signature: string;
}
export declare class UploadInventoryRequestBody extends SpeakeasyBase {
    file?: UploadInventoryRequestBodyFile;
    signature?: UploadInventoryRequestBodySignature;
}
export declare enum UploadInventory200ApplicationJsonActionEnum {
    UploadInventory = "uploadInventory"
}
export declare enum UploadInventory200ApplicationJsonResultEnum {
    Success = "success",
    Error = "error"
}
export declare class UploadInventory200ApplicationJson extends SpeakeasyBase {
    action: UploadInventory200ApplicationJsonActionEnum;
    data: string;
    result: UploadInventory200ApplicationJsonResultEnum;
}
export declare class UploadInventoryRequest extends SpeakeasyBase {
    request?: UploadInventoryRequestBody;
}
export declare class UploadInventoryResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    uploadInventory200ApplicationJsonObject?: UploadInventory200ApplicationJson;
}
