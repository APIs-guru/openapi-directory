import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ResourceNotFoundProblemResourceTypeEnum {
    User = "user",
    Tweet = "tweet"
}
/**
 * A problem that indicates that a given Tweet, User, etc. does not exist.
**/
export declare class ResourceNotFoundProblem extends SpeakeasyBase {
    detail: string;
    parameter: string;
    resourceType: ResourceNotFoundProblemResourceTypeEnum;
    title: string;
    type: string;
    value: any;
}
