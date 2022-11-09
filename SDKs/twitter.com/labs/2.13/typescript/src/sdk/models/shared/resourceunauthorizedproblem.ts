import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ResourceUnauthorizedProblemResourceTypeEnum {
    Tweet = "tweet"
,    User = "user"
,    Media = "media"
}

export enum ResourceUnauthorizedProblemSectionEnum {
    Data = "data"
,    Includes = "includes"
}


// ResourceUnauthorizedProblem
/** 
 * A problem that indicates you are not allowed to see a particular Tweet, User, etc.
**/
export class ResourceUnauthorizedProblem extends SpeakeasyBase {
  @Metadata({ data: "json, name=detail" })
  detail: string;

  @Metadata({ data: "json, name=resource_id" })
  resourceId: string;

  @Metadata({ data: "json, name=resource_type" })
  resourceType: ResourceUnauthorizedProblemResourceTypeEnum;

  @Metadata({ data: "json, name=section" })
  section: ResourceUnauthorizedProblemSectionEnum;

  @Metadata({ data: "json, name=title" })
  title: string;

  @Metadata({ data: "json, name=type" })
  type: string;
}
