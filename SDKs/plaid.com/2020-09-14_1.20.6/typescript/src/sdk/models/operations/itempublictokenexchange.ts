import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ItemPublicTokenExchangeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.ItemPublicTokenExchangeRequest;
}


export class ItemPublicTokenExchangeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  itemPublicTokenExchangeResponse?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
