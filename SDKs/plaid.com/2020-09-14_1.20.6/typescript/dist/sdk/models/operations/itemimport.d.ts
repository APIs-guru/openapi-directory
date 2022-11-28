import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ItemImportRequest extends SpeakeasyBase {
    request: shared.ItemImportRequest;
}
export declare class ItemImportResponse extends SpeakeasyBase {
    contentType: string;
    itemImportResponse?: Map<string, any>;
    statusCode: number;
}
