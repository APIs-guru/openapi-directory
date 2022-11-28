import { SpeakeasyBase } from "../../../internal/utils";
export declare class WithdrawPayoutV3PathParams extends SpeakeasyBase {
    payoutId: string;
}
export declare class WithdrawPayoutV3Request extends SpeakeasyBase {
    pathParams: WithdrawPayoutV3PathParams;
}
export declare class WithdrawPayoutV3Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    inlineResponse400?: any;
    inlineResponse401?: any;
    inlineResponse403?: any;
    inlineResponse404?: any;
}
