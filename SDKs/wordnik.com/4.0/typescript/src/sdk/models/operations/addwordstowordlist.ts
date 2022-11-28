import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AddWordsToWordListPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=permalink" })
  permalink: string;
}


export class AddWordsToWordListHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=auth_token" })
  authToken: string;
}


export class AddWordsToWordListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AddWordsToWordListPathParams;

  @SpeakeasyMetadata()
  headers: AddWordsToWordListHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: any[];
}


export class AddWordsToWordListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
