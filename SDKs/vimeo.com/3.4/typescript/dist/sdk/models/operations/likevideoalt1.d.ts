import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class LikeVideoAlt1PathParams extends SpeakeasyBase {
    videoId: number;
}
export declare class LikeVideoAlt1Security extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class LikeVideoAlt1Request extends SpeakeasyBase {
    pathParams: LikeVideoAlt1PathParams;
    security: LikeVideoAlt1Security;
}
export declare class LikeVideoAlt1Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    legacyError?: shared.LegacyError;
}
