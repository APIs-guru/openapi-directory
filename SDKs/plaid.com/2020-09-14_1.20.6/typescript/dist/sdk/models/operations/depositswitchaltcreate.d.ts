import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class DepositSwitchAltCreateRequest extends SpeakeasyBase {
    request: shared.DepositSwitchAltCreateRequest;
}
export declare class DepositSwitchAltCreateResponse extends SpeakeasyBase {
    contentType: string;
    depositSwitchAltCreateResponse?: Map<string, any>;
    statusCode: number;
}
