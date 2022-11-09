import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateWordListHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=auth_token" })
  authToken: string;
}


export class CreateWordListRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateWordListHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request?: any;
}


export class CreateWordListResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
