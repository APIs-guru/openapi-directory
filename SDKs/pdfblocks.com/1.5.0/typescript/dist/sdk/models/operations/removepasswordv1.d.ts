import { SpeakeasyBase } from "../../../internal/utils";
export declare class RemovePasswordV1RequestBodyFile extends SpeakeasyBase {
    content: Uint8Array;
    file: string;
}
export declare class RemovePasswordV1RequestBody extends SpeakeasyBase {
    file: RemovePasswordV1RequestBodyFile;
    password: string;
}
export declare class RemovePasswordV14XxApplicationProblemPlusJson extends SpeakeasyBase {
    errors?: Map<string, any>;
    status?: number;
    title?: string;
    type?: string;
}
export declare class RemovePasswordV1Request extends SpeakeasyBase {
    request: RemovePasswordV1RequestBody;
}
export declare class RemovePasswordV1Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    removePasswordV1200ApplicationPdfBinaryString?: Uint8Array;
    removePasswordV14XxApplicationProblemPlusJsonObject?: RemovePasswordV14XxApplicationProblemPlusJson;
}
