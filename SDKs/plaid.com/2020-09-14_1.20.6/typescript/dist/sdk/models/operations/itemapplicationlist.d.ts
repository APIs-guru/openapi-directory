import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ItemApplicationListRequest extends SpeakeasyBase {
    request: shared.ItemApplicationListRequest;
}
export declare class ItemApplicationListResponse extends SpeakeasyBase {
    contentType: string;
    error?: Map<string, any>;
    itemApplicationListResponse?: shared.ItemApplicationListResponse;
    statusCode: number;
}
