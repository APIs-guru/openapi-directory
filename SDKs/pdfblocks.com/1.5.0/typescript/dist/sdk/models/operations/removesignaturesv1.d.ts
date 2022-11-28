import { SpeakeasyBase } from "../../../internal/utils";
export declare class RemoveSignaturesV1RequestBodyFile extends SpeakeasyBase {
    content: Uint8Array;
    file: string;
}
export declare class RemoveSignaturesV1RequestBody extends SpeakeasyBase {
    file: RemoveSignaturesV1RequestBodyFile;
}
export declare class RemoveSignaturesV14XxApplicationProblemPlusJson extends SpeakeasyBase {
    errors?: Map<string, any>;
    status?: number;
    title?: string;
    type?: string;
}
export declare class RemoveSignaturesV1Request extends SpeakeasyBase {
    request: RemoveSignaturesV1RequestBody;
}
export declare class RemoveSignaturesV1Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    removeSignaturesV1200ApplicationPdfBinaryString?: Uint8Array;
    removeSignaturesV14XxApplicationProblemPlusJsonObject?: RemoveSignaturesV14XxApplicationProblemPlusJson;
}
