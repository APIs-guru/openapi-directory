import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UnlikeVideoAlt1PathParams extends SpeakeasyBase {
    videoId: number;
}
export declare class UnlikeVideoAlt1Security extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class UnlikeVideoAlt1Request extends SpeakeasyBase {
    pathParams: UnlikeVideoAlt1PathParams;
    security: UnlikeVideoAlt1Security;
}
export declare class UnlikeVideoAlt1Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    legacyError?: shared.LegacyError;
}
