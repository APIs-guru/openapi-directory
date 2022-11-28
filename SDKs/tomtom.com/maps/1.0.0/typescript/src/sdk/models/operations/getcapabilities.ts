import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetCapabilitiesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=versionNumber" })
  versionNumber: number;
}

export enum GetCapabilitiesRequestEnum {
    GetCapabilities = "GetCapabilities"
}

export enum GetCapabilitiesServiceEnum {
    Wms = "WMS"
}

export enum GetCapabilitiesVersionEnum {
    One11 = "1.1.1"
}


export class GetCapabilitiesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=request" })
  request: GetCapabilitiesRequestEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=service" })
  service: GetCapabilitiesServiceEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=version" })
  version?: GetCapabilitiesVersionEnum;
}


export class GetCapabilitiesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetCapabilitiesPathParams;

  @SpeakeasyMetadata()
  queryParams: GetCapabilitiesQueryParams;
}


export class GetCapabilitiesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
