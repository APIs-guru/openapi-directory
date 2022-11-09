import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ItemAccessTokenInvalidateRequest extends SpeakeasyBase {
    request: shared.ItemAccessTokenInvalidateRequest;
}
export declare class ItemAccessTokenInvalidateResponse extends SpeakeasyBase {
    contentType: string;
    itemAccessTokenInvalidateResponse?: Map<string, any>;
    statusCode: number;
}
