import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ItemAccessTokenInvalidateRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ItemAccessTokenInvalidateRequest;
}


export class ItemAccessTokenInvalidateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  itemAccessTokenInvalidateResponse?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
