import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetScriptsInventoryResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  errorResponseContent?: shared.ErrorResponseContent;

  @Metadata({ elemType: shared.InventoryScriptInfo })
  inventoryScriptInfos?: shared.InventoryScriptInfo[];

  @Metadata()
  statusCode: number;
}
