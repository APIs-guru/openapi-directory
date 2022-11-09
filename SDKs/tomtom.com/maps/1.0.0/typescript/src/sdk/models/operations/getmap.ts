import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetMapPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=versionNumber" })
  versionNumber: number;
}

export enum GetMapFormatEnum {
    ImageJpeg = "image/jpeg"
,    ImagePng = "image/png"
}

export enum GetMapLayersEnum {
    Basic = "basic"
}

export enum GetMapRequestEnum {
    GetMap = "GetMap"
}

export enum GetMapServiceEnum {
    Wms = "WMS"
}

export enum GetMapSrsEnum {
    Epsg3857 = "EPSG:3857"
,    Epsg4326 = "EPSG:4326"
}

export enum GetMapStylesEnum {
    Unknown = ""
}

export enum GetMapVersionEnum {
    One11 = "1.1.1"
}


export class GetMapQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=bbox" })
  bbox: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=format" })
  format: GetMapFormatEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=height" })
  height: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=layers" })
  layers: GetMapLayersEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=request" })
  request: GetMapRequestEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=service" })
  service?: GetMapServiceEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=srs" })
  srs: GetMapSrsEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=styles" })
  styles?: GetMapStylesEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=version" })
  version: GetMapVersionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=width" })
  width: number;
}


export class GetMapRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetMapPathParams;

  @Metadata()
  queryParams: GetMapQueryParams;
}


export class GetMapResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
