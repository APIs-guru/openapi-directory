import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetScriptsInventoryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponseContent?: shared.ErrorResponseContent;

  @SpeakeasyMetadata({ elemType: shared.InventoryScriptInfo })
  inventoryScriptInfos?: shared.InventoryScriptInfo[];

  @SpeakeasyMetadata()
  statusCode: number;
}
