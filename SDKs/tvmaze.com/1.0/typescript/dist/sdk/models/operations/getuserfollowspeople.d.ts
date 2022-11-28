import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetUserFollowsPeopleEmbedEnum {
    Person = "person"
}
export declare class GetUserFollowsPeopleQueryParams extends SpeakeasyBase {
    embed?: GetUserFollowsPeopleEmbedEnum;
}
export declare class GetUserFollowsPeopleRequest extends SpeakeasyBase {
    queryParams: GetUserFollowsPeopleQueryParams;
}
export declare class GetUserFollowsPeopleResponse extends SpeakeasyBase {
    contentType: string;
    personFollows?: shared.PersonFollow[];
    statusCode: number;
}
