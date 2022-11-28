import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutUserFollowsPeoplePersonIdPathParams extends SpeakeasyBase {
    personId: number;
}
export declare class PutUserFollowsPeoplePersonIdRequest extends SpeakeasyBase {
    pathParams: PutUserFollowsPeoplePersonIdPathParams;
}
export declare class PutUserFollowsPeoplePersonIdResponse extends SpeakeasyBase {
    contentType: string;
    personFollow?: shared.PersonFollow;
    statusCode: number;
}
