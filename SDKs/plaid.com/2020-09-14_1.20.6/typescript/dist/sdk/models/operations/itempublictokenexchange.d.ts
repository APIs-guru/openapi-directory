import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ItemPublicTokenExchangeRequest extends SpeakeasyBase {
    request: shared.ItemPublicTokenExchangeRequest;
}
export declare class ItemPublicTokenExchangeResponse extends SpeakeasyBase {
    contentType: string;
    itemPublicTokenExchangeResponse?: Map<string, any>;
    statusCode: number;
}
