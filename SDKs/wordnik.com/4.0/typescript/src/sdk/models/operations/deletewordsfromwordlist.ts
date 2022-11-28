import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteWordsFromWordListPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=permalink" })
  permalink: string;
}


export class DeleteWordsFromWordListHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=auth_token" })
  authToken: string;
}


export class DeleteWordsFromWordListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteWordsFromWordListPathParams;

  @SpeakeasyMetadata()
  headers: DeleteWordsFromWordListHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: any[];
}


export class DeleteWordsFromWordListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
