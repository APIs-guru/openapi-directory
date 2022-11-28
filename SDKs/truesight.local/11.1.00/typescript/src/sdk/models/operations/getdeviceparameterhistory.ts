import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetDeviceParameterHistoryPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=deviceId" })
  deviceId: number;
}


export class GetDeviceParameterHistoryQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=from" })
  from?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=monitorSid" })
  monitorSid?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=monitorType" })
  monitorType: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=parameterName" })
  parameterName: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=to" })
  to?: number;
}


export class GetDeviceParameterHistoryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetDeviceParameterHistoryPathParams;

  @SpeakeasyMetadata()
  queryParams: GetDeviceParameterHistoryQueryParams;
}


export class GetDeviceParameterHistoryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
