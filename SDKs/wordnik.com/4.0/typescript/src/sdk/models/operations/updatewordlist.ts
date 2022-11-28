import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateWordListPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=permalink" })
  permalink: string;
}


export class UpdateWordListHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=auth_token" })
  authToken: string;
}


export class UpdateWordListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateWordListPathParams;

  @SpeakeasyMetadata()
  headers: UpdateWordListHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: any;
}


export class UpdateWordListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
