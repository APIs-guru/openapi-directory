import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetMapVersionNumberCopyrightsFormatFormatEnum {
    Json = "json",
    Jsonp = "jsonp",
    Xml = "xml"
}
export declare class GetMapVersionNumberCopyrightsFormatPathParams extends SpeakeasyBase {
    format: GetMapVersionNumberCopyrightsFormatFormatEnum;
    versionNumber: number;
}
export declare class GetMapVersionNumberCopyrightsFormatQueryParams extends SpeakeasyBase {
    callback?: string;
}
export declare class GetMapVersionNumberCopyrightsFormatRequest extends SpeakeasyBase {
    pathParams: GetMapVersionNumberCopyrightsFormatPathParams;
    queryParams: GetMapVersionNumberCopyrightsFormatQueryParams;
}
export declare class GetMapVersionNumberCopyrightsFormatResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
