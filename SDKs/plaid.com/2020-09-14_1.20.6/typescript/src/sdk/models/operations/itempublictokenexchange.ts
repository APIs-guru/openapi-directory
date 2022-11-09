import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ItemPublicTokenExchangeRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ItemPublicTokenExchangeRequest;
}


export class ItemPublicTokenExchangeResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  itemPublicTokenExchangeResponse?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
