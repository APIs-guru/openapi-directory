import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteGroupPathParams extends SpeakeasyBase {
    groupId: number;
}
export declare class DeleteGroupSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class DeleteGroupRequest extends SpeakeasyBase {
    pathParams: DeleteGroupPathParams;
    security: DeleteGroupSecurity;
}
export declare class DeleteGroupResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    legacyError?: shared.LegacyError;
}
