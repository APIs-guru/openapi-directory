import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostAddressAutocompleteHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=galaxy-ap-name" })
  galaxyApName?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=galaxy-ap-password" })
  galaxyApPassword?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=galaxy-search-type" })
  galaxySearchType?: string;
}


export class PostAddressAutocompleteRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=Input" })
  input?: string;
}


export class PostAddressAutocompleteRequest extends SpeakeasyBase {
  @Metadata()
  headers: PostAddressAutocompleteHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request?: PostAddressAutocompleteRequestBody;
}


export class PostAddressAutocompleteResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
