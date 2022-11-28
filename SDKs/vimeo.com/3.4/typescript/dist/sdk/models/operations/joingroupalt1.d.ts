import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class JoinGroupAlt1PathParams extends SpeakeasyBase {
    groupId: number;
}
export declare class JoinGroupAlt1Security extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class JoinGroupAlt1Request extends SpeakeasyBase {
    pathParams: JoinGroupAlt1PathParams;
    security: JoinGroupAlt1Security;
}
export declare class JoinGroupAlt1Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    legacyError?: shared.LegacyError;
}
