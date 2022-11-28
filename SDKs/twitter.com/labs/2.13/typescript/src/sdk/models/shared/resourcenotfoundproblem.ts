import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ResourceNotFoundProblemResourceTypeEnum {
    User = "user",
    Tweet = "tweet",
    Media = "media"
}


// ResourceNotFoundProblem
/** 
 * A problem that indicates that a given Tweet, User, etc. does not exist.
**/
export class ResourceNotFoundProblem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail: string;

  @SpeakeasyMetadata({ data: "json, name=parameter" })
  parameter: string;

  @SpeakeasyMetadata({ data: "json, name=resource_id" })
  resourceId: string;

  @SpeakeasyMetadata({ data: "json, name=resource_type" })
  resourceType: ResourceNotFoundProblemResourceTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value: any;
}
