import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetMapVersionNumberCopyrightsMinLonMinLatMaxLonMaxLatFormatFormatEnum {
    Json = "json",
    Jsonp = "jsonp",
    Xml = "xml"
}
export declare class GetMapVersionNumberCopyrightsMinLonMinLatMaxLonMaxLatFormatPathParams extends SpeakeasyBase {
    format: GetMapVersionNumberCopyrightsMinLonMinLatMaxLonMaxLatFormatFormatEnum;
    maxLat: number;
    maxLon: number;
    minLat: number;
    minLon: number;
    versionNumber: number;
}
export declare class GetMapVersionNumberCopyrightsMinLonMinLatMaxLonMaxLatFormatQueryParams extends SpeakeasyBase {
    callback?: string;
}
export declare class GetMapVersionNumberCopyrightsMinLonMinLatMaxLonMaxLatFormatRequest extends SpeakeasyBase {
    pathParams: GetMapVersionNumberCopyrightsMinLonMinLatMaxLonMaxLatFormatPathParams;
    queryParams: GetMapVersionNumberCopyrightsMinLonMinLatMaxLonMaxLatFormatQueryParams;
}
export declare class GetMapVersionNumberCopyrightsMinLonMinLatMaxLonMaxLatFormatResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
