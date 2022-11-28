import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetMapVersionNumberStaticimagePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=versionNumber" })
  versionNumber: number;
}

export enum GetMapVersionNumberStaticimageFormatEnum {
    Png = "png",
    Jpg = "jpg",
    Jpeg = "jpeg"
}

export enum GetMapVersionNumberStaticimageLayerEnum {
    Basic = "basic",
    Hybrid = "hybrid",
    Labels = "labels"
}

export enum GetMapVersionNumberStaticimageStyleEnum {
    Main = "main",
    Night = "night"
}

export enum GetMapVersionNumberStaticimageViewEnum {
    Unified = "Unified",
    In = "IN"
}


export class GetMapVersionNumberStaticimageQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=bbox" })
  bbox?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=center" })
  center?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=format" })
  format?: GetMapVersionNumberStaticimageFormatEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=height" })
  height?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=layer" })
  layer?: GetMapVersionNumberStaticimageLayerEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=style" })
  style?: GetMapVersionNumberStaticimageStyleEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=view" })
  view?: GetMapVersionNumberStaticimageViewEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=width" })
  width?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=zoom" })
  zoom?: number;
}


export class GetMapVersionNumberStaticimageRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetMapVersionNumberStaticimagePathParams;

  @SpeakeasyMetadata()
  queryParams: GetMapVersionNumberStaticimageQueryParams;
}


export class GetMapVersionNumberStaticimageResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
