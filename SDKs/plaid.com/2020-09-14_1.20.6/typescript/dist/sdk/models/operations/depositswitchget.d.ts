import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DepositSwitchGetRequest extends SpeakeasyBase {
    request: shared.DepositSwitchGetRequest;
}
export declare class DepositSwitchGetResponse extends SpeakeasyBase {
    contentType: string;
    depositSwitchGetResponse?: Map<string, any>;
    statusCode: number;
}
