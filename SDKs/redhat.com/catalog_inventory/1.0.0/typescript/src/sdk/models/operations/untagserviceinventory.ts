import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UntagServiceInventoryPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class UntagServiceInventoryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UntagServiceInventoryPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json", elemType: shared.Tag })
  request: shared.Tag[];
}


export class UntagServiceInventoryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
