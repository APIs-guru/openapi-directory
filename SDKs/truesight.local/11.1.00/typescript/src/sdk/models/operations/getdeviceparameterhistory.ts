import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetDeviceParameterHistoryPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=deviceId" })
  deviceId: number;
}


export class GetDeviceParameterHistoryQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=from" })
  from?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=monitorSid" })
  monitorSid?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=monitorType" })
  monitorType: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=parameterName" })
  parameterName: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=to" })
  to?: number;
}


export class GetDeviceParameterHistoryRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetDeviceParameterHistoryPathParams;

  @Metadata()
  queryParams: GetDeviceParameterHistoryQueryParams;
}


export class GetDeviceParameterHistoryResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
