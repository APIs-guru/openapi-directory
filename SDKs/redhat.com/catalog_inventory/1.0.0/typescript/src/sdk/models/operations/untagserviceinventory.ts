import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UntagServiceInventoryPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class UntagServiceInventoryRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UntagServiceInventoryPathParams;

  @Metadata({ data: "request, media_type=application/json", elemType: shared.Tag })
  request: shared.Tag[];
}


export class UntagServiceInventoryResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
