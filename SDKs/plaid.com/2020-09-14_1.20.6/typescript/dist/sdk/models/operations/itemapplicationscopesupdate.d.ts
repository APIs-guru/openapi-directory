import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ItemApplicationScopesUpdateRequest extends SpeakeasyBase {
    request: shared.ItemApplicationScopesUpdateRequest;
}
export declare class ItemApplicationScopesUpdateResponse extends SpeakeasyBase {
    contentType: string;
    error?: Map<string, any>;
    itemApplicationScopesUpdateResponse?: shared.ItemApplicationScopesUpdateResponse;
    statusCode: number;
}
