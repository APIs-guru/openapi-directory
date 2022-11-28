import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetWordListByPermalinkPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=permalink" })
  permalink: string;
}


export class GetWordListByPermalinkHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=auth_token" })
  authToken: string;
}


export class GetWordListByPermalinkRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetWordListByPermalinkPathParams;

  @SpeakeasyMetadata()
  headers: GetWordListByPermalinkHeaders;
}


export class GetWordListByPermalinkResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
