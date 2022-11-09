import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum DisallowedResourceProblemResourceTypeEnum {
    Tweet = "tweet",
    Media = "media"
}
export declare enum DisallowedResourceProblemSectionEnum {
    Data = "data",
    Includes = "includes"
}
/**
 * A problem that indicates that the resource requested violates the precepts of this API.
**/
export declare class DisallowedResourceProblem extends SpeakeasyBase {
    detail: string;
    resourceId: string;
    resourceType: DisallowedResourceProblemResourceTypeEnum;
    section: DisallowedResourceProblemSectionEnum;
    title: string;
    type: string;
}
