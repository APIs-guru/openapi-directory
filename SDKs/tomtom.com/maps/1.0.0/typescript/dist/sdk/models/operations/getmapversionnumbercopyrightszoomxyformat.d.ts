import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetMapVersionNumberCopyrightsZoomXYFormatFormatEnum {
    Json = "json",
    Jsonp = "jsonp",
    Xml = "xml"
}
export declare class GetMapVersionNumberCopyrightsZoomXYFormatPathParams extends SpeakeasyBase {
    x: number;
    y: number;
    format: GetMapVersionNumberCopyrightsZoomXYFormatFormatEnum;
    versionNumber: number;
    zoom: number;
}
export declare class GetMapVersionNumberCopyrightsZoomXYFormatQueryParams extends SpeakeasyBase {
    callback?: string;
}
export declare class GetMapVersionNumberCopyrightsZoomXYFormatRequest extends SpeakeasyBase {
    pathParams: GetMapVersionNumberCopyrightsZoomXYFormatPathParams;
    queryParams: GetMapVersionNumberCopyrightsZoomXYFormatQueryParams;
}
export declare class GetMapVersionNumberCopyrightsZoomXYFormatResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
