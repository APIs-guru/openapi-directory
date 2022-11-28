import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class InvestmentsHoldingsGetRequest extends SpeakeasyBase {
    request: shared.InvestmentsHoldingsGetRequest;
}
export declare class InvestmentsHoldingsGetResponse extends SpeakeasyBase {
    contentType: string;
    investmentsHoldingsGetResponse?: Map<string, any>;
    statusCode: number;
}
