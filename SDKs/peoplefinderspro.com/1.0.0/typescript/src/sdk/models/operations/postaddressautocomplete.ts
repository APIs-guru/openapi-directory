import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostAddressAutocompleteHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=galaxy-ap-name" })
  galaxyApName?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=galaxy-ap-password" })
  galaxyApPassword?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=galaxy-search-type" })
  galaxySearchType?: string;
}


export class PostAddressAutocompleteRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Input" })
  input?: string;
}


export class PostAddressAutocompleteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: PostAddressAutocompleteHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PostAddressAutocompleteRequestBody;
}


export class PostAddressAutocompleteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
