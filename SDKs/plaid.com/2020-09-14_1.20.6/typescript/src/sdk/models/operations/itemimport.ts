import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ItemImportRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ItemImportRequest;
}


export class ItemImportResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  itemImportResponse?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
