import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetWordListByPermalinkPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=permalink" })
  permalink: string;
}


export class GetWordListByPermalinkHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=auth_token" })
  authToken: string;
}


export class GetWordListByPermalinkRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetWordListByPermalinkPathParams;

  @Metadata()
  headers: GetWordListByPermalinkHeaders;
}


export class GetWordListByPermalinkResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
