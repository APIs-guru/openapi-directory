import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetMapVersionNumberTileLayerStyleZoomXYPbfLayerEnum {
    Basic = "basic",
    Hybrid = "hybrid",
    Labels = "labels"
}
export declare enum GetMapVersionNumberTileLayerStyleZoomXYPbfStyleEnum {
    Main = "main"
}
export declare class GetMapVersionNumberTileLayerStyleZoomXYPbfPathParams extends SpeakeasyBase {
    x: number;
    y: number;
    layer: GetMapVersionNumberTileLayerStyleZoomXYPbfLayerEnum;
    style: GetMapVersionNumberTileLayerStyleZoomXYPbfStyleEnum;
    versionNumber: number;
    zoom: number;
}
export declare enum GetMapVersionNumberTileLayerStyleZoomXYPbfViewEnum {
    Unified = "Unified",
    Il = "IL",
    In = "IN"
}
export declare class GetMapVersionNumberTileLayerStyleZoomXYPbfQueryParams extends SpeakeasyBase {
    language?: string;
    view?: GetMapVersionNumberTileLayerStyleZoomXYPbfViewEnum;
}
export declare class GetMapVersionNumberTileLayerStyleZoomXYPbfRequest extends SpeakeasyBase {
    pathParams: GetMapVersionNumberTileLayerStyleZoomXYPbfPathParams;
    queryParams: GetMapVersionNumberTileLayerStyleZoomXYPbfQueryParams;
}
export declare class GetMapVersionNumberTileLayerStyleZoomXYPbfResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
