import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteWordListPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=permalink" })
  permalink: string;
}


export class DeleteWordListHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=auth_token" })
  authToken: string;
}


export class DeleteWordListRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteWordListPathParams;

  @Metadata()
  headers: DeleteWordListHeaders;
}


export class DeleteWordListResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
