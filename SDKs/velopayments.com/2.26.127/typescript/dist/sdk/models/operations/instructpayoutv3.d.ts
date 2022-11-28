import { SpeakeasyBase } from "../../../internal/utils";
export declare class InstructPayoutV3PathParams extends SpeakeasyBase {
    payoutId: string;
}
export declare class InstructPayoutV3Request extends SpeakeasyBase {
    pathParams: InstructPayoutV3PathParams;
}
export declare class InstructPayoutV3Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    inlineResponse400?: any;
    inlineResponse401?: any;
    inlineResponse403?: any;
    inlineResponse404?: any;
    inlineResponse409?: any;
}
