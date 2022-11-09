import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetMapVersionNumberTileLayerStyleZoomXYFormatFormatEnum {
    Jpg = "jpg"
,    Png = "png"
}

export enum GetMapVersionNumberTileLayerStyleZoomXYFormatLayerEnum {
    Basic = "basic"
,    Hybrid = "hybrid"
,    Labels = "labels"
}

export enum GetMapVersionNumberTileLayerStyleZoomXYFormatStyleEnum {
    Main = "main"
,    Night = "night"
}


export class GetMapVersionNumberTileLayerStyleZoomXYFormatPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=X" })
  x: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=Y" })
  y: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: GetMapVersionNumberTileLayerStyleZoomXYFormatFormatEnum;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=layer" })
  layer: GetMapVersionNumberTileLayerStyleZoomXYFormatLayerEnum;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=style" })
  style: GetMapVersionNumberTileLayerStyleZoomXYFormatStyleEnum;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=versionNumber" })
  versionNumber: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=zoom" })
  zoom: number;
}

export enum GetMapVersionNumberTileLayerStyleZoomXYFormatViewEnum {
    Unified = "Unified"
,    In = "IN"
}


export class GetMapVersionNumberTileLayerStyleZoomXYFormatQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=tileSize" })
  tileSize?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=view" })
  view?: GetMapVersionNumberTileLayerStyleZoomXYFormatViewEnum;
}


export class GetMapVersionNumberTileLayerStyleZoomXYFormatRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetMapVersionNumberTileLayerStyleZoomXYFormatPathParams;

  @Metadata()
  queryParams: GetMapVersionNumberTileLayerStyleZoomXYFormatQueryParams;
}


export class GetMapVersionNumberTileLayerStyleZoomXYFormatResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
