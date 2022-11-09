import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetMapVersionNumberStaticimagePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=versionNumber" })
  versionNumber: number;
}

export enum GetMapVersionNumberStaticimageFormatEnum {
    Png = "png"
,    Jpg = "jpg"
,    Jpeg = "jpeg"
}

export enum GetMapVersionNumberStaticimageLayerEnum {
    Basic = "basic"
,    Hybrid = "hybrid"
,    Labels = "labels"
}

export enum GetMapVersionNumberStaticimageStyleEnum {
    Main = "main"
,    Night = "night"
}

export enum GetMapVersionNumberStaticimageViewEnum {
    Unified = "Unified"
,    In = "IN"
}


export class GetMapVersionNumberStaticimageQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=bbox" })
  bbox?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=center" })
  center?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=format" })
  format?: GetMapVersionNumberStaticimageFormatEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=height" })
  height?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=layer" })
  layer?: GetMapVersionNumberStaticimageLayerEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=style" })
  style?: GetMapVersionNumberStaticimageStyleEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=view" })
  view?: GetMapVersionNumberStaticimageViewEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=width" })
  width?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=zoom" })
  zoom?: number;
}


export class GetMapVersionNumberStaticimageRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetMapVersionNumberStaticimagePathParams;

  @Metadata()
  queryParams: GetMapVersionNumberStaticimageQueryParams;
}


export class GetMapVersionNumberStaticimageResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
