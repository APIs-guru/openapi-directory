import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetScriptsInventoryParsedQueryParams extends SpeakeasyBase {
    language?: string;
}
export declare class GetScriptsInventoryParsedRequest extends SpeakeasyBase {
    queryParams: GetScriptsInventoryParsedQueryParams;
}
export declare class GetScriptsInventoryParsedResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    errorResponseContent?: shared.ErrorResponseContent;
    inventoryScriptInfos?: shared.InventoryScriptInfo[];
    statusCode: number;
}
