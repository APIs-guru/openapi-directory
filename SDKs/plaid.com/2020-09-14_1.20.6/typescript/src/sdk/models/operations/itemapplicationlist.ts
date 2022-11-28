import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ItemApplicationListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.ItemApplicationListRequest;
}


export class ItemApplicationListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: Map<string, any>;

  @SpeakeasyMetadata()
  itemApplicationListResponse?: shared.ItemApplicationListResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
