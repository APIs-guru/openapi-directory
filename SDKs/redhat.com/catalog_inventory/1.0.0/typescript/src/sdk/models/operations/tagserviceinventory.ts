import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class TagServiceInventoryPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class TagServiceInventoryRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: TagServiceInventoryPathParams;

  @Metadata({ data: "request, media_type=application/json", elemType: shared.Tag })
  request: shared.Tag[];
}


export class TagServiceInventoryResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.Tag })
  tags?: shared.Tag[];
}
