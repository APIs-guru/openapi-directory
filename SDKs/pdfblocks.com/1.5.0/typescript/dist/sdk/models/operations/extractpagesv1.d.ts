import { SpeakeasyBase } from "../../../internal/utils";
export declare class ExtractPagesV1RequestBodyFile extends SpeakeasyBase {
    content: Uint8Array;
    file: string;
}
export declare class ExtractPagesV1RequestBody extends SpeakeasyBase {
    file: ExtractPagesV1RequestBodyFile;
    firstPage?: number;
    lastPage?: number;
}
export declare class ExtractPagesV14XxApplicationProblemPlusJson extends SpeakeasyBase {
    errors?: Map<string, any>;
    status?: number;
    title?: string;
    type?: string;
}
export declare class ExtractPagesV1Request extends SpeakeasyBase {
    request: ExtractPagesV1RequestBody;
}
export declare class ExtractPagesV1Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    extractPagesV1200ApplicationPdfBinaryString?: Uint8Array;
    extractPagesV14XxApplicationProblemPlusJsonObject?: ExtractPagesV14XxApplicationProblemPlusJson;
}
