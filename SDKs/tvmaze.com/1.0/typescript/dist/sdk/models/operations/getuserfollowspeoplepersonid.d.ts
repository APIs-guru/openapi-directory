import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetUserFollowsPeoplePersonIdPathParams extends SpeakeasyBase {
    personId: number;
}
export declare class GetUserFollowsPeoplePersonIdRequest extends SpeakeasyBase {
    pathParams: GetUserFollowsPeoplePersonIdPathParams;
}
export declare class GetUserFollowsPeoplePersonIdResponse extends SpeakeasyBase {
    contentType: string;
    personFollow?: shared.PersonFollow;
    statusCode: number;
}
