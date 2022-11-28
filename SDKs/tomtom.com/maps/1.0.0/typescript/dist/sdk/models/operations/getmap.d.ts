import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetMapPathParams extends SpeakeasyBase {
    versionNumber: number;
}
export declare enum GetMapFormatEnum {
    ImageJpeg = "image/jpeg",
    ImagePng = "image/png"
}
export declare enum GetMapLayersEnum {
    Basic = "basic"
}
export declare enum GetMapRequestEnum {
    GetMap = "GetMap"
}
export declare enum GetMapServiceEnum {
    Wms = "WMS"
}
export declare enum GetMapSrsEnum {
    Epsg3857 = "EPSG:3857",
    Epsg4326 = "EPSG:4326"
}
export declare enum GetMapStylesEnum {
    Unknown = ""
}
export declare enum GetMapVersionEnum {
    One11 = "1.1.1"
}
export declare class GetMapQueryParams extends SpeakeasyBase {
    bbox: string;
    format: GetMapFormatEnum;
    height: number;
    layers: GetMapLayersEnum;
    request: GetMapRequestEnum;
    service?: GetMapServiceEnum;
    srs: GetMapSrsEnum;
    styles?: GetMapStylesEnum;
    version: GetMapVersionEnum;
    width: number;
}
export declare class GetMapRequest extends SpeakeasyBase {
    pathParams: GetMapPathParams;
    queryParams: GetMapQueryParams;
}
export declare class GetMapResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
