import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetMapVersionNumberTileLayerStyleZoomXYFormatFormatEnum {
    Jpg = "jpg",
    Png = "png"
}
export declare enum GetMapVersionNumberTileLayerStyleZoomXYFormatLayerEnum {
    Basic = "basic",
    Hybrid = "hybrid",
    Labels = "labels"
}
export declare enum GetMapVersionNumberTileLayerStyleZoomXYFormatStyleEnum {
    Main = "main",
    Night = "night"
}
export declare class GetMapVersionNumberTileLayerStyleZoomXYFormatPathParams extends SpeakeasyBase {
    x: number;
    y: number;
    format: GetMapVersionNumberTileLayerStyleZoomXYFormatFormatEnum;
    layer: GetMapVersionNumberTileLayerStyleZoomXYFormatLayerEnum;
    style: GetMapVersionNumberTileLayerStyleZoomXYFormatStyleEnum;
    versionNumber: number;
    zoom: number;
}
export declare enum GetMapVersionNumberTileLayerStyleZoomXYFormatViewEnum {
    Unified = "Unified",
    In = "IN"
}
export declare class GetMapVersionNumberTileLayerStyleZoomXYFormatQueryParams extends SpeakeasyBase {
    tileSize?: number;
    view?: GetMapVersionNumberTileLayerStyleZoomXYFormatViewEnum;
}
export declare class GetMapVersionNumberTileLayerStyleZoomXYFormatRequest extends SpeakeasyBase {
    pathParams: GetMapVersionNumberTileLayerStyleZoomXYFormatPathParams;
    queryParams: GetMapVersionNumberTileLayerStyleZoomXYFormatQueryParams;
}
export declare class GetMapVersionNumberTileLayerStyleZoomXYFormatResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
