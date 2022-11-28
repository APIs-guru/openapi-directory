import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetMapVersionNumberCopyrightsCaptionFormatFormatEnum {
    Json = "json",
    Jsonp = "jsonp",
    Xml = "xml"
}
export declare class GetMapVersionNumberCopyrightsCaptionFormatPathParams extends SpeakeasyBase {
    format: GetMapVersionNumberCopyrightsCaptionFormatFormatEnum;
    versionNumber: number;
}
export declare class GetMapVersionNumberCopyrightsCaptionFormatQueryParams extends SpeakeasyBase {
    callback?: string;
}
export declare class GetMapVersionNumberCopyrightsCaptionFormatRequest extends SpeakeasyBase {
    pathParams: GetMapVersionNumberCopyrightsCaptionFormatPathParams;
    queryParams: GetMapVersionNumberCopyrightsCaptionFormatQueryParams;
}
export declare class GetMapVersionNumberCopyrightsCaptionFormatResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
