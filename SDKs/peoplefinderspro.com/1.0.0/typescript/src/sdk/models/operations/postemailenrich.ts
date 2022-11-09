import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostEmailEnrichHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=galaxy-ap-name" })
  galaxyApName?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=galaxy-ap-password" })
  galaxyApPassword?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=galaxy-search-type" })
  galaxySearchType?: string;
}


export class PostEmailEnrichRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=Email" })
  email?: string;
}


export class PostEmailEnrichRequest extends SpeakeasyBase {
  @Metadata()
  headers: PostEmailEnrichHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request?: PostEmailEnrichRequestBody;
}


export class PostEmailEnrichResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
