import { SpeakeasyBase } from "../../../internal/utils";
export declare class ReversePagesV1RequestBodyFile extends SpeakeasyBase {
    content: Uint8Array;
    file: string;
}
export declare class ReversePagesV1RequestBody extends SpeakeasyBase {
    file: ReversePagesV1RequestBodyFile;
}
export declare class ReversePagesV14XxApplicationProblemPlusJson extends SpeakeasyBase {
    errors?: Map<string, any>;
    status?: number;
    title?: string;
    type?: string;
}
export declare class ReversePagesV1Request extends SpeakeasyBase {
    request: ReversePagesV1RequestBody;
}
export declare class ReversePagesV1Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    reversePagesV1200ApplicationPdfBinaryString?: Uint8Array;
    reversePagesV14XxApplicationProblemPlusJsonObject?: ReversePagesV14XxApplicationProblemPlusJson;
}
