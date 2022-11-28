import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class LeaveGroupAlt1PathParams extends SpeakeasyBase {
    groupId: number;
}
export declare class LeaveGroupAlt1Security extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class LeaveGroupAlt1Request extends SpeakeasyBase {
    pathParams: LeaveGroupAlt1PathParams;
    security: LeaveGroupAlt1Security;
}
export declare class LeaveGroupAlt1Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    legacyError?: shared.LegacyError;
}
