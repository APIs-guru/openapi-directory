import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ItemAccessTokenInvalidateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.ItemAccessTokenInvalidateRequest;
}


export class ItemAccessTokenInvalidateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  itemAccessTokenInvalidateResponse?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
