import { SpeakeasyBase } from "../../../internal/utils";
export declare class DisableUserV2PathParams extends SpeakeasyBase {
    userId: string;
}
export declare class DisableUserV2Request extends SpeakeasyBase {
    pathParams: DisableUserV2PathParams;
}
export declare class DisableUserV2Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    inlineResponse400?: any;
    inlineResponse401?: any;
    inlineResponse403?: any;
    inlineResponse404?: any;
}
