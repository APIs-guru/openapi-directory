import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetApiMembersIdRegisteredInterestsPathParams extends SpeakeasyBase {
    id: number;
}
export declare class GetApiMembersIdRegisteredInterestsRequest extends SpeakeasyBase {
    pathParams: GetApiMembersIdRegisteredInterestsPathParams;
}
export declare class GetApiMembersIdRegisteredInterestsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    registeredInterestCategoryListItem?: shared.RegisteredInterestCategoryListItem;
    statusCode: number;
}
