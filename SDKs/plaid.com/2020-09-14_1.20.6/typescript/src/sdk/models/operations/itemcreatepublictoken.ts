import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ItemCreatePublicTokenRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ItemPublicTokenCreateRequest;
}


export class ItemCreatePublicTokenResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  itemPublicTokenCreateResponse?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
