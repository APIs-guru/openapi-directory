import { SpeakeasyBase } from "../../../internal/utils";
export declare enum AddTextWatermarkV1RequestBodyColorEnum {
    Red = "Red",
    Blue = "Blue",
    Gray = "Gray",
    Black = "Black"
}
export declare class AddTextWatermarkV1RequestBodyFile extends SpeakeasyBase {
    content: Uint8Array;
    file: string;
}
export declare class AddTextWatermarkV1RequestBody extends SpeakeasyBase {
    color?: AddTextWatermarkV1RequestBodyColorEnum;
    file: AddTextWatermarkV1RequestBodyFile;
    line1: string;
    line2?: string;
    line3?: string;
    margin?: number;
    template?: number;
    transparency?: number;
}
export declare class AddTextWatermarkV14XxApplicationProblemPlusJson extends SpeakeasyBase {
    errors?: Map<string, any>;
    status?: number;
    title?: string;
    type?: string;
}
export declare class AddTextWatermarkV1Request extends SpeakeasyBase {
    request: AddTextWatermarkV1RequestBody;
}
export declare class AddTextWatermarkV1Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    addTextWatermarkV1200ApplicationPdfBinaryString?: Uint8Array;
    addTextWatermarkV14XxApplicationProblemPlusJsonObject?: AddTextWatermarkV14XxApplicationProblemPlusJson;
}
