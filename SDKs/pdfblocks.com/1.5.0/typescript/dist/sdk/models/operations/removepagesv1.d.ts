import { SpeakeasyBase } from "../../../internal/utils";
export declare class RemovePagesV1RequestBodyFile extends SpeakeasyBase {
    content: Uint8Array;
    file: string;
}
export declare class RemovePagesV1RequestBody extends SpeakeasyBase {
    file: RemovePagesV1RequestBodyFile;
    firstPage?: number;
    lastPage?: number;
}
export declare class RemovePagesV14XxApplicationProblemPlusJson extends SpeakeasyBase {
    errors?: Map<string, any>;
    status?: number;
    title?: string;
    type?: string;
}
export declare class RemovePagesV1Request extends SpeakeasyBase {
    request: RemovePagesV1RequestBody;
}
export declare class RemovePagesV1Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    removePagesV1200ApplicationPdfBinaryString?: Uint8Array;
    removePagesV14XxApplicationProblemPlusJsonObject?: RemovePagesV14XxApplicationProblemPlusJson;
}
