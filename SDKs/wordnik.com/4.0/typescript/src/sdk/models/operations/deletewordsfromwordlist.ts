import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteWordsFromWordListPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=permalink" })
  permalink: string;
}


export class DeleteWordsFromWordListHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=auth_token" })
  authToken: string;
}


export class DeleteWordsFromWordListRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteWordsFromWordListPathParams;

  @Metadata()
  headers: DeleteWordsFromWordListHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request?: any[];
}


export class DeleteWordsFromWordListResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
