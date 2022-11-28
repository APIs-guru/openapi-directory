import { SpeakeasyBase } from "../../../internal/utils";
export declare class AddImageWatermarkV1RequestBodyFile extends SpeakeasyBase {
    content: Uint8Array;
    file: string;
}
export declare class AddImageWatermarkV1RequestBodyImage extends SpeakeasyBase {
    content: Uint8Array;
    image: string;
}
export declare class AddImageWatermarkV1RequestBody extends SpeakeasyBase {
    file: AddImageWatermarkV1RequestBodyFile;
    image: AddImageWatermarkV1RequestBodyImage;
    margin?: number;
    transparency?: number;
}
export declare class AddImageWatermarkV14XxApplicationProblemPlusJson extends SpeakeasyBase {
    errors?: Map<string, any>;
    status?: number;
    title?: string;
    type?: string;
}
export declare class AddImageWatermarkV1Request extends SpeakeasyBase {
    request: AddImageWatermarkV1RequestBody;
}
export declare class AddImageWatermarkV1Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    addImageWatermarkV1200ApplicationPdfBinaryString?: Uint8Array;
    addImageWatermarkV14XxApplicationProblemPlusJsonObject?: AddImageWatermarkV14XxApplicationProblemPlusJson;
}
