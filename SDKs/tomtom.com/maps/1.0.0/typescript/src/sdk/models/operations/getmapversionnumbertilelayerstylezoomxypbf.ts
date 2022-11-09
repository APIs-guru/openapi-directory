import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetMapVersionNumberTileLayerStyleZoomXYPbfLayerEnum {
    Basic = "basic"
,    Hybrid = "hybrid"
,    Labels = "labels"
}

export enum GetMapVersionNumberTileLayerStyleZoomXYPbfStyleEnum {
    Main = "main"
}


export class GetMapVersionNumberTileLayerStyleZoomXYPbfPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=X" })
  x: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=Y" })
  y: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=layer" })
  layer: GetMapVersionNumberTileLayerStyleZoomXYPbfLayerEnum;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=style" })
  style: GetMapVersionNumberTileLayerStyleZoomXYPbfStyleEnum;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=versionNumber" })
  versionNumber: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=zoom" })
  zoom: number;
}

export enum GetMapVersionNumberTileLayerStyleZoomXYPbfViewEnum {
    Unified = "Unified"
,    Il = "IL"
,    In = "IN"
}


export class GetMapVersionNumberTileLayerStyleZoomXYPbfQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=language" })
  language?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=view" })
  view?: GetMapVersionNumberTileLayerStyleZoomXYPbfViewEnum;
}


export class GetMapVersionNumberTileLayerStyleZoomXYPbfRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetMapVersionNumberTileLayerStyleZoomXYPbfPathParams;

  @Metadata()
  queryParams: GetMapVersionNumberTileLayerStyleZoomXYPbfQueryParams;
}


export class GetMapVersionNumberTileLayerStyleZoomXYPbfResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
