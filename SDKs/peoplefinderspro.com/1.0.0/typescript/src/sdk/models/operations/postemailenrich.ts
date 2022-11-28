import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostEmailEnrichHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=galaxy-ap-name" })
  galaxyApName?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=galaxy-ap-password" })
  galaxyApPassword?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=galaxy-search-type" })
  galaxySearchType?: string;
}


export class PostEmailEnrichRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Email" })
  email?: string;
}


export class PostEmailEnrichRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: PostEmailEnrichHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PostEmailEnrichRequestBody;
}


export class PostEmailEnrichResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
