import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ItemCreatePublicTokenRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.ItemPublicTokenCreateRequest;
}


export class ItemCreatePublicTokenResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  itemPublicTokenCreateResponse?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
