import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetUserByIdV2PathParams extends SpeakeasyBase {
    userId: string;
}
export declare class GetUserByIdV2Request extends SpeakeasyBase {
    pathParams: GetUserByIdV2PathParams;
}
export declare class GetUserByIdV2Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    userResponse?: shared.UserResponse;
    inlineResponse401?: any;
    inlineResponse403?: any;
    inlineResponse404?: any;
}
