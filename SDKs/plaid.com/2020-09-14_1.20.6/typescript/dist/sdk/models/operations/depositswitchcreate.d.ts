import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class DepositSwitchCreateRequest extends SpeakeasyBase {
    request: shared.DepositSwitchCreateRequest;
}
export declare class DepositSwitchCreateResponse extends SpeakeasyBase {
    contentType: string;
    depositSwitchCreateResponse?: Map<string, any>;
    statusCode: number;
}
