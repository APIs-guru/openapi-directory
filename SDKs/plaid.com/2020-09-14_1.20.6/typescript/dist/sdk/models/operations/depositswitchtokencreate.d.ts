import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DepositSwitchTokenCreateRequest extends SpeakeasyBase {
    request: shared.DepositSwitchTokenCreateRequest;
}
export declare class DepositSwitchTokenCreateResponse extends SpeakeasyBase {
    contentType: string;
    depositSwitchTokenCreateResponse?: Map<string, any>;
    statusCode: number;
}
