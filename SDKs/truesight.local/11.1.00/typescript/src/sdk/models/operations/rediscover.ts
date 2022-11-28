import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RediscoverPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=deviceId" })
  deviceId: number;
}


export class RediscoverRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RediscoverPathParams;
}


export class RediscoverResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
