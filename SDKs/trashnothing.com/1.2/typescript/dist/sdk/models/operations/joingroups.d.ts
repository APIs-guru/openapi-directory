import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class JoinGroupsRequestBody extends SpeakeasyBase {
    groupIds: string;
}
export declare class JoinGroups200ApplicationJson extends SpeakeasyBase {
    groups?: shared.Group[];
    overGroupLimit?: boolean;
}
export declare class JoinGroupsRequest extends SpeakeasyBase {
    request: JoinGroupsRequestBody;
}
export declare class JoinGroupsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    joinGroups200ApplicationJsonObject?: JoinGroups200ApplicationJson;
}
