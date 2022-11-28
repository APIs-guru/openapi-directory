import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetMapVersionNumberTileLayerStyleZoomXYFormatFormatEnum {
    Jpg = "jpg",
    Png = "png"
}

export enum GetMapVersionNumberTileLayerStyleZoomXYFormatLayerEnum {
    Basic = "basic",
    Hybrid = "hybrid",
    Labels = "labels"
}

export enum GetMapVersionNumberTileLayerStyleZoomXYFormatStyleEnum {
    Main = "main",
    Night = "night"
}


export class GetMapVersionNumberTileLayerStyleZoomXYFormatPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=X" })
  x: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Y" })
  y: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: GetMapVersionNumberTileLayerStyleZoomXYFormatFormatEnum;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=layer" })
  layer: GetMapVersionNumberTileLayerStyleZoomXYFormatLayerEnum;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=style" })
  style: GetMapVersionNumberTileLayerStyleZoomXYFormatStyleEnum;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=versionNumber" })
  versionNumber: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=zoom" })
  zoom: number;
}

export enum GetMapVersionNumberTileLayerStyleZoomXYFormatViewEnum {
    Unified = "Unified",
    In = "IN"
}


export class GetMapVersionNumberTileLayerStyleZoomXYFormatQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tileSize" })
  tileSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=view" })
  view?: GetMapVersionNumberTileLayerStyleZoomXYFormatViewEnum;
}


export class GetMapVersionNumberTileLayerStyleZoomXYFormatRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetMapVersionNumberTileLayerStyleZoomXYFormatPathParams;

  @SpeakeasyMetadata()
  queryParams: GetMapVersionNumberTileLayerStyleZoomXYFormatQueryParams;
}


export class GetMapVersionNumberTileLayerStyleZoomXYFormatResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
