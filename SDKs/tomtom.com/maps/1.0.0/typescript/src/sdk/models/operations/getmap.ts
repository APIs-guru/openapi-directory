import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetMapPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=versionNumber" })
  versionNumber: number;
}

export enum GetMapFormatEnum {
    ImageJpeg = "image/jpeg",
    ImagePng = "image/png"
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
    Epsg3857 = "EPSG:3857",
    Epsg4326 = "EPSG:4326"
}

export enum GetMapStylesEnum {
    Unknown = ""
}

export enum GetMapVersionEnum {
    One11 = "1.1.1"
}


export class GetMapQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=bbox" })
  bbox: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=format" })
  format: GetMapFormatEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=height" })
  height: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=layers" })
  layers: GetMapLayersEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=request" })
  request: GetMapRequestEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=service" })
  service?: GetMapServiceEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=srs" })
  srs: GetMapSrsEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=styles" })
  styles?: GetMapStylesEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=version" })
  version: GetMapVersionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=width" })
  width: number;
}


export class GetMapRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetMapPathParams;

  @SpeakeasyMetadata()
  queryParams: GetMapQueryParams;
}


export class GetMapResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
