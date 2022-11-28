import { SpeakeasyBase } from "../../../internal/utils";
export declare class RotatePagesV1RequestBodyFile extends SpeakeasyBase {
    content: Uint8Array;
    file: string;
}
export declare class RotatePagesV1RequestBody extends SpeakeasyBase {
    angle: number;
    file: RotatePagesV1RequestBodyFile;
    firstPage?: number;
    lastPage?: number;
}
export declare class RotatePagesV14XxApplicationProblemPlusJson extends SpeakeasyBase {
    errors?: Map<string, any>;
    status?: number;
    title?: string;
    type?: string;
}
export declare class RotatePagesV1Request extends SpeakeasyBase {
    request: RotatePagesV1RequestBody;
}
export declare class RotatePagesV1Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rotatePagesV1200ApplicationPdfBinaryString?: Uint8Array;
    rotatePagesV14XxApplicationProblemPlusJsonObject?: RotatePagesV14XxApplicationProblemPlusJson;
}
