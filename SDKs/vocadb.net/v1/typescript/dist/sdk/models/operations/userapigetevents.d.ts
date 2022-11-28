import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UserApiGetEventsPathParams extends SpeakeasyBase {
    id: number;
}
export declare enum UserApiGetEventsRelationshipTypeEnum {
    Interested = "Interested",
    Attending = "Attending"
}
export declare class UserApiGetEventsQueryParams extends SpeakeasyBase {
    relationshipType: UserApiGetEventsRelationshipTypeEnum;
}
export declare class UserApiGetEventsRequest extends SpeakeasyBase {
    pathParams: UserApiGetEventsPathParams;
    queryParams: UserApiGetEventsQueryParams;
}
export declare class UserApiGetEventsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    releaseEventForApiContracts?: shared.ReleaseEventForApiContract[];
    statusCode: number;
}
