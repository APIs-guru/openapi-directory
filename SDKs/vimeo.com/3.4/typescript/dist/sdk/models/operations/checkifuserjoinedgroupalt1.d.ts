import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CheckIfUserJoinedGroupAlt1PathParams extends SpeakeasyBase {
    groupId: number;
}
export declare class CheckIfUserJoinedGroupAlt1Request extends SpeakeasyBase {
    pathParams: CheckIfUserJoinedGroupAlt1PathParams;
}
export declare class CheckIfUserJoinedGroupAlt1Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    legacyError?: shared.LegacyError;
}
