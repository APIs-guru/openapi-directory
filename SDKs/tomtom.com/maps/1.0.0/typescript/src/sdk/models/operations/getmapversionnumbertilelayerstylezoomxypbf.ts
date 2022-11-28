import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetMapVersionNumberTileLayerStyleZoomXYPbfLayerEnum {
    Basic = "basic",
    Hybrid = "hybrid",
    Labels = "labels"
}

export enum GetMapVersionNumberTileLayerStyleZoomXYPbfStyleEnum {
    Main = "main"
}


export class GetMapVersionNumberTileLayerStyleZoomXYPbfPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=X" })
  x: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Y" })
  y: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=layer" })
  layer: GetMapVersionNumberTileLayerStyleZoomXYPbfLayerEnum;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=style" })
  style: GetMapVersionNumberTileLayerStyleZoomXYPbfStyleEnum;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=versionNumber" })
  versionNumber: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=zoom" })
  zoom: number;
}

export enum GetMapVersionNumberTileLayerStyleZoomXYPbfViewEnum {
    Unified = "Unified",
    Il = "IL",
    In = "IN"
}


export class GetMapVersionNumberTileLayerStyleZoomXYPbfQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=language" })
  language?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=view" })
  view?: GetMapVersionNumberTileLayerStyleZoomXYPbfViewEnum;
}


export class GetMapVersionNumberTileLayerStyleZoomXYPbfRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetMapVersionNumberTileLayerStyleZoomXYPbfPathParams;

  @SpeakeasyMetadata()
  queryParams: GetMapVersionNumberTileLayerStyleZoomXYPbfQueryParams;
}


export class GetMapVersionNumberTileLayerStyleZoomXYPbfResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
