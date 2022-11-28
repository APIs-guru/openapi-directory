import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DevicesPutPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class DevicesPutQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=switchNumber" })
  switchNumber?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=switchState" })
  switchState: boolean;
}


export class DevicesPutRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DevicesPutPathParams;

  @SpeakeasyMetadata()
  queryParams: DevicesPutQueryParams;
}


export class DevicesPutResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  object?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
