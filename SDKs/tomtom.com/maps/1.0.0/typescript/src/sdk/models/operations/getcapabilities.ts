import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetCapabilitiesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=versionNumber" })
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
  @Metadata({ data: "queryParam, style=form;explode=true;name=request" })
  request: GetCapabilitiesRequestEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=service" })
  service: GetCapabilitiesServiceEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=version" })
  version?: GetCapabilitiesVersionEnum;
}


export class GetCapabilitiesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetCapabilitiesPathParams;

  @Metadata()
  queryParams: GetCapabilitiesQueryParams;
}


export class GetCapabilitiesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
