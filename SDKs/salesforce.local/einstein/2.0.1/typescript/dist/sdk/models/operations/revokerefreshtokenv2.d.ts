import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class RevokeRefreshTokenV2PathParams extends SpeakeasyBase {
    token: string;
}
export declare class RevokeRefreshTokenV2Security extends SpeakeasyBase {
    bearerToken: shared.SchemeBearerToken;
}
export declare class RevokeRefreshTokenV2Request extends SpeakeasyBase {
    pathParams: RevokeRefreshTokenV2PathParams;
    security: RevokeRefreshTokenV2Security;
}
export declare class RevokeRefreshTokenV2Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
