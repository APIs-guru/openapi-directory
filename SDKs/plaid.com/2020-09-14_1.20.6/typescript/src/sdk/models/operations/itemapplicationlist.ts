import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ItemApplicationListRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ItemApplicationListRequest;
}


export class ItemApplicationListResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  error?: Map<string, any>;

  @Metadata()
  itemApplicationListResponse?: shared.ItemApplicationListResponse;

  @Metadata()
  statusCode: number;
}
