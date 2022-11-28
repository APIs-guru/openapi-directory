import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TransferFundsPathParams extends SpeakeasyBase {
    sourceAccountId: string;
}
export declare class TransferFundsRequest extends SpeakeasyBase {
    pathParams: TransferFundsPathParams;
    request: shared.TransferRequest;
}
export declare class TransferFundsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    inlineResponse400?: any;
    inlineResponse401?: any;
    inlineResponse403?: any;
    inlineResponse404?: any;
}
