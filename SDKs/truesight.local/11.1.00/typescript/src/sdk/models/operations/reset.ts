import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ResetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=deviceId" })
  deviceId: number;
}


export class ResetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=monitorClass" })
  monitorClass: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=monitorSid" })
  monitorSid: string;
}


export class ResetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ResetPathParams;

  @SpeakeasyMetadata()
  queryParams: ResetQueryParams;
}


export class ResetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
