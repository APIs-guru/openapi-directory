import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum DisallowedResourceProblemResourceTypeEnum {
    Tweet = "tweet"
}

export enum DisallowedResourceProblemSectionEnum {
    Data = "data"
,    Includes = "includes"
}


// DisallowedResourceProblem
/** 
 * A problem that indicates that the resource requested violates the precepts of this API.
**/
export class DisallowedResourceProblem extends SpeakeasyBase {
  @Metadata({ data: "json, name=detail" })
  detail: string;

  @Metadata({ data: "json, name=resource_id" })
  resourceId: string;

  @Metadata({ data: "json, name=resource_type" })
  resourceType: DisallowedResourceProblemResourceTypeEnum;

  @Metadata({ data: "json, name=section" })
  section: DisallowedResourceProblemSectionEnum;

  @Metadata({ data: "json, name=title" })
  title: string;

  @Metadata({ data: "json, name=type" })
  type: string;
}
