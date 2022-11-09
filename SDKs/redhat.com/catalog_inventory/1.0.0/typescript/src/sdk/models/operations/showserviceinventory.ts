import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ShowServiceInventoryPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class ShowServiceInventoryRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ShowServiceInventoryPathParams;
}


export class ShowServiceInventoryResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorNotFound?: shared.ErrorNotFound;

  @Metadata()
  serviceInventory?: shared.ServiceInventory;

  @Metadata()
  statusCode: number;
}
