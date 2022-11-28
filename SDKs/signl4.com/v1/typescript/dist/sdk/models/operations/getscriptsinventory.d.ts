import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetScriptsInventoryResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    errorResponseContent?: shared.ErrorResponseContent;
    inventoryScriptInfos?: shared.InventoryScriptInfo[];
    statusCode: number;
}
