import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ItemRemoveRequest extends SpeakeasyBase {
    request: shared.ItemRemoveRequest;
}
export declare class ItemRemoveResponse extends SpeakeasyBase {
    contentType: string;
    error?: Map<string, any>;
    itemRemoveResponse?: Map<string, any>;
    statusCode: number;
}
