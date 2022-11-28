import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RemovePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=deviceId" })
  deviceId: number;
}


export class RemoveQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=monitorClass" })
  monitorClass: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=monitorSid" })
  monitorSid: string;
}


export class RemoveRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RemovePathParams;

  @SpeakeasyMetadata()
  queryParams: RemoveQueryParams;
}


export class RemoveResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
