import { SpeakeasyBase } from "../../../internal/utils";
export declare class SvgconvertFileToConvertFile extends SpeakeasyBase {
    content: Uint8Array;
    file: string;
}
export declare class SvgconvertFileToConvert extends SpeakeasyBase {
    file?: SvgconvertFileToConvertFile;
}
export declare class SvgconvertFileUrl extends SpeakeasyBase {
    blobName?: string;
    blobUrl?: string;
}
export declare class SvgconvertRequest extends SpeakeasyBase {
    request: SvgconvertFileToConvert;
}
export declare class SvgconvertResponse extends SpeakeasyBase {
    contentType: string;
    fileUrl?: SvgconvertFileUrl;
    statusCode: number;
}
