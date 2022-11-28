import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum DisallowedResourceProblemResourceTypeEnum {
    Tweet = "tweet",
    Media = "media"
}

export enum DisallowedResourceProblemSectionEnum {
    Data = "data",
    Includes = "includes"
}


// DisallowedResourceProblem
/** 
 * A problem that indicates that the resource requested violates the precepts of this API.
**/
export class DisallowedResourceProblem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail: string;

  @SpeakeasyMetadata({ data: "json, name=resource_id" })
  resourceId: string;

  @SpeakeasyMetadata({ data: "json, name=resource_type" })
  resourceType: DisallowedResourceProblemResourceTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=section" })
  section: DisallowedResourceProblemSectionEnum;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}
