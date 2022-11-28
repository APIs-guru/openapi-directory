import { SpeakeasyBase } from "../../../internal/utils";
export declare class UnlockUserV2PathParams extends SpeakeasyBase {
    userId: string;
}
export declare class UnlockUserV2Request extends SpeakeasyBase {
    pathParams: UnlockUserV2PathParams;
}
export declare class UnlockUserV2Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    inlineResponse400?: any;
    inlineResponse401?: any;
    inlineResponse403?: any;
    inlineResponse404?: any;
}
