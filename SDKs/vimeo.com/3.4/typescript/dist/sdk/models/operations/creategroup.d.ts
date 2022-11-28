import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateGroupRequestBody extends SpeakeasyBase {
    description?: string;
    name: string;
}
export declare class CreateGroupSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class CreateGroupRequest extends SpeakeasyBase {
    request: CreateGroupRequestBody;
    security: CreateGroupSecurity;
}
export declare class CreateGroupResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    group?: shared.Group;
    legacyError?: shared.LegacyError;
}
