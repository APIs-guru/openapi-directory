import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetApiTokenStatusHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=api_key" })
  apiKey?: string;
}


export class GetApiTokenStatusRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: GetApiTokenStatusHeaders;
}


export class GetApiTokenStatusResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
