import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ShowServiceInventoryPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class ShowServiceInventoryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ShowServiceInventoryPathParams;
}


export class ShowServiceInventoryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorNotFound?: shared.ErrorNotFound;

  @SpeakeasyMetadata()
  serviceInventory?: shared.ServiceInventory;

  @SpeakeasyMetadata()
  statusCode: number;
}
