import { SpeakeasyBase } from "../../../internal/utils";
export declare class EnableUserV2PathParams extends SpeakeasyBase {
    userId: string;
}
export declare class EnableUserV2Request extends SpeakeasyBase {
    pathParams: EnableUserV2PathParams;
}
export declare class EnableUserV2Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    inlineResponse400?: any;
    inlineResponse401?: any;
    inlineResponse403?: any;
    inlineResponse404?: any;
}
