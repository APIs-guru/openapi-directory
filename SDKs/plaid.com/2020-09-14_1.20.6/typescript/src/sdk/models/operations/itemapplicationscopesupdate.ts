import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ItemApplicationScopesUpdateRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ItemApplicationScopesUpdateRequest;
}


export class ItemApplicationScopesUpdateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  error?: Map<string, any>;

  @Metadata()
  itemApplicationScopesUpdateResponse?: shared.ItemApplicationScopesUpdateResponse;

  @Metadata()
  statusCode: number;
}
