import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum ResourceUnauthorizedProblemResourceTypeEnum {
    Tweet = "tweet",
    User = "user",
    Media = "media"
}
export declare enum ResourceUnauthorizedProblemSectionEnum {
    Data = "data",
    Includes = "includes"
}
/**
 * A problem that indicates you are not allowed to see a particular Tweet, User, etc.
**/
export declare class ResourceUnauthorizedProblem extends SpeakeasyBase {
    detail: string;
    resourceId: string;
    resourceType: ResourceUnauthorizedProblemResourceTypeEnum;
    section: ResourceUnauthorizedProblemSectionEnum;
    title: string;
    type: string;
}
