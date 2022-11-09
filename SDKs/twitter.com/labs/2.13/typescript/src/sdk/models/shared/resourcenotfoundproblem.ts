import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ResourceNotFoundProblemResourceTypeEnum {
    User = "user"
,    Tweet = "tweet"
,    Media = "media"
}


// ResourceNotFoundProblem
/** 
 * A problem that indicates that a given Tweet, User, etc. does not exist.
**/
export class ResourceNotFoundProblem extends SpeakeasyBase {
  @Metadata({ data: "json, name=detail" })
  detail: string;

  @Metadata({ data: "json, name=parameter" })
  parameter: string;

  @Metadata({ data: "json, name=resource_id" })
  resourceId: string;

  @Metadata({ data: "json, name=resource_type" })
  resourceType: ResourceNotFoundProblemResourceTypeEnum;

  @Metadata({ data: "json, name=title" })
  title: string;

  @Metadata({ data: "json, name=type" })
  type: string;

  @Metadata({ data: "json, name=value" })
  value: any;
}
