import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateGroupCategoryRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.GroupCategory;
}

export enum CreateGroupCategory200ApplicationJsonActionEnum {
    CreateGroupCategory = "CreateGroupCategory"
}


export class CreateGroupCategory200ApplicationJsonData extends SpeakeasyBase {
  @Metadata({ data: "json, name=groupCategories", elemType: shared.GroupCategory })
  groupCategories: shared.GroupCategory[];
}

export enum CreateGroupCategory200ApplicationJsonResultEnum {
    Success = "success"
,    Error = "error"
}


export class CreateGroupCategory200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action: CreateGroupCategory200ApplicationJsonActionEnum;

  @Metadata({ data: "json, name=data" })
  data: CreateGroupCategory200ApplicationJsonData;

  @Metadata({ data: "json, name=result" })
  result: CreateGroupCategory200ApplicationJsonResultEnum;
}


export class CreateGroupCategoryResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  createGroupCategory200ApplicationJsonObject?: CreateGroupCategory200ApplicationJson;

  @Metadata()
  statusCode: number;
}
