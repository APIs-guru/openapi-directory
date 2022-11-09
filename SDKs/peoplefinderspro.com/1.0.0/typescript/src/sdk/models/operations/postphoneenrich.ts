import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostPhoneEnrichHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=galaxy-ap-name" })
  galaxyApName?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=galaxy-ap-password" })
  galaxyApPassword?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=galaxy-search-type" })
  galaxySearchType?: string;
}


export class PostPhoneEnrichRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=Phone" })
  phone?: string;
}


export class PostPhoneEnrichRequest extends SpeakeasyBase {
  @Metadata()
  headers: PostPhoneEnrichHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request?: PostPhoneEnrichRequestBody;
}


export class PostPhoneEnrichResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
