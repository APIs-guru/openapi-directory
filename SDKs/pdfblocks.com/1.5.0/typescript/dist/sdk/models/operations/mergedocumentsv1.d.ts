import { SpeakeasyBase } from "../../../internal/utils";
export declare class MergeDocumentsV1RequestBodyFile extends SpeakeasyBase {
    content: Uint8Array;
    file: string;
}
export declare class MergeDocumentsV1RequestBody extends SpeakeasyBase {
    file?: MergeDocumentsV1RequestBodyFile[];
}
export declare class MergeDocumentsV14XxApplicationProblemPlusJson extends SpeakeasyBase {
    errors?: Map<string, any>;
    status?: number;
    title?: string;
    type?: string;
}
export declare class MergeDocumentsV1Request extends SpeakeasyBase {
    request: MergeDocumentsV1RequestBody;
}
export declare class MergeDocumentsV1Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    mergeDocumentsV1200ApplicationPdfBinaryString?: Uint8Array;
    mergeDocumentsV14XxApplicationProblemPlusJsonObject?: MergeDocumentsV14XxApplicationProblemPlusJson;
}
