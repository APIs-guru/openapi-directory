import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateWordListPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=permalink" })
  permalink: string;
}


export class UpdateWordListHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=auth_token" })
  authToken: string;
}


export class UpdateWordListRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateWordListPathParams;

  @Metadata()
  headers: UpdateWordListHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request?: any;
}


export class UpdateWordListResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
