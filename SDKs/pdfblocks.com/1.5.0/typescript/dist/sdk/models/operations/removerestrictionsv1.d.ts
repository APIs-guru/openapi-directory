import { SpeakeasyBase } from "../../../internal/utils";
export declare class RemoveRestrictionsV1RequestBodyFile extends SpeakeasyBase {
    content: Uint8Array;
    file: string;
}
export declare class RemoveRestrictionsV1RequestBody extends SpeakeasyBase {
    file: RemoveRestrictionsV1RequestBodyFile;
}
export declare class RemoveRestrictionsV14XxApplicationProblemPlusJson extends SpeakeasyBase {
    errors?: Map<string, any>;
    status?: number;
    title?: string;
    type?: string;
}
export declare class RemoveRestrictionsV1Request extends SpeakeasyBase {
    request: RemoveRestrictionsV1RequestBody;
}
export declare class RemoveRestrictionsV1Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    removeRestrictionsV1200ApplicationPdfBinaryString?: Uint8Array;
    removeRestrictionsV14XxApplicationProblemPlusJsonObject?: RemoveRestrictionsV14XxApplicationProblemPlusJson;
}
