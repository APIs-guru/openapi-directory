import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ItemApplicationScopesUpdateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.ItemApplicationScopesUpdateRequest;
}


export class ItemApplicationScopesUpdateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: Map<string, any>;

  @SpeakeasyMetadata()
  itemApplicationScopesUpdateResponse?: shared.ItemApplicationScopesUpdateResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
