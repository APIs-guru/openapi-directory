import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetMapVersionNumberStaticimagePathParams extends SpeakeasyBase {
    versionNumber: number;
}
export declare enum GetMapVersionNumberStaticimageFormatEnum {
    Png = "png",
    Jpg = "jpg",
    Jpeg = "jpeg"
}
export declare enum GetMapVersionNumberStaticimageLayerEnum {
    Basic = "basic",
    Hybrid = "hybrid",
    Labels = "labels"
}
export declare enum GetMapVersionNumberStaticimageStyleEnum {
    Main = "main",
    Night = "night"
}
export declare enum GetMapVersionNumberStaticimageViewEnum {
    Unified = "Unified",
    In = "IN"
}
export declare class GetMapVersionNumberStaticimageQueryParams extends SpeakeasyBase {
    bbox?: string;
    center?: string;
    format?: GetMapVersionNumberStaticimageFormatEnum;
    height?: number;
    layer?: GetMapVersionNumberStaticimageLayerEnum;
    style?: GetMapVersionNumberStaticimageStyleEnum;
    view?: GetMapVersionNumberStaticimageViewEnum;
    width?: number;
    zoom?: number;
}
export declare class GetMapVersionNumberStaticimageRequest extends SpeakeasyBase {
    pathParams: GetMapVersionNumberStaticimagePathParams;
    queryParams: GetMapVersionNumberStaticimageQueryParams;
}
export declare class GetMapVersionNumberStaticimageResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
