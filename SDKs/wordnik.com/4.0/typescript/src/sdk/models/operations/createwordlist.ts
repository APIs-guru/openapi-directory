import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateWordListHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=auth_token" })
  authToken: string;
}


export class CreateWordListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: CreateWordListHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: any;
}


export class CreateWordListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
