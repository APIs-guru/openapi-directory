import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TransferFundsV3PathParams extends SpeakeasyBase {
    sourceAccountId: string;
}
export declare class TransferFundsV3Request extends SpeakeasyBase {
    pathParams: TransferFundsV3PathParams;
    request: shared.TransferRequest2;
}
export declare class TransferFundsV3Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    inlineResponse400?: any;
    inlineResponse401?: any;
    inlineResponse403?: any;
    inlineResponse404?: any;
}
