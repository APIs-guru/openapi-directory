import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ResourceUnauthorizedProblemResourceTypeEnum {
    Tweet = "tweet",
    User = "user",
    Media = "media"
}

export enum ResourceUnauthorizedProblemSectionEnum {
    Data = "data",
    Includes = "includes"
}


// ResourceUnauthorizedProblem
/** 
 * A problem that indicates you are not allowed to see a particular Tweet, User, etc.
**/
export class ResourceUnauthorizedProblem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail: string;

  @SpeakeasyMetadata({ data: "json, name=resource_id" })
  resourceId: string;

  @SpeakeasyMetadata({ data: "json, name=resource_type" })
  resourceType: ResourceUnauthorizedProblemResourceTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=section" })
  section: ResourceUnauthorizedProblemSectionEnum;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}
