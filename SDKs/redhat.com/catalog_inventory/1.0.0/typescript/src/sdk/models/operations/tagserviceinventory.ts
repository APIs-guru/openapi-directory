import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class TagServiceInventoryPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class TagServiceInventoryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: TagServiceInventoryPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json", elemType: shared.Tag })
  request: shared.Tag[];
}


export class TagServiceInventoryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.Tag })
  tags?: shared.Tag[];
}
