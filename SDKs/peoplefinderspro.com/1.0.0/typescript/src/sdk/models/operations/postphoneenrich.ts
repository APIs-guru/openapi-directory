import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostPhoneEnrichHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=galaxy-ap-name" })
  galaxyApName?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=galaxy-ap-password" })
  galaxyApPassword?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=galaxy-search-type" })
  galaxySearchType?: string;
}


export class PostPhoneEnrichRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Phone" })
  phone?: string;
}


export class PostPhoneEnrichRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: PostPhoneEnrichHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PostPhoneEnrichRequestBody;
}


export class PostPhoneEnrichResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
