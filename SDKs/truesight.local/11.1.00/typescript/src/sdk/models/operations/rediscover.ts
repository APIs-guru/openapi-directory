import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class RediscoverPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=deviceId" })
  deviceId: number;
}


export class RediscoverRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RediscoverPathParams;
}


export class RediscoverResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
