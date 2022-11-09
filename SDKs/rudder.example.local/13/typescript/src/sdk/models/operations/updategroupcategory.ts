import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateGroupCategoryPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=groupCategoryId" })
  groupCategoryId: string;
}


export class UpdateGroupCategoryRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateGroupCategoryPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.GroupCategoryUpdate;
}

export enum UpdateGroupCategory200ApplicationJsonActionEnum {
    UpdateGroupCategory = "UpdateGroupCategory"
}


export class UpdateGroupCategory200ApplicationJsonData extends SpeakeasyBase {
  @Metadata({ data: "json, name=groupCategories", elemType: shared.GroupCategory })
  groupCategories: shared.GroupCategory[];
}

export enum UpdateGroupCategory200ApplicationJsonResultEnum {
    Success = "success"
,    Error = "error"
}


export class UpdateGroupCategory200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action: UpdateGroupCategory200ApplicationJsonActionEnum;

  @Metadata({ data: "json, name=data" })
  data: UpdateGroupCategory200ApplicationJsonData;

  @Metadata({ data: "json, name=result" })
  result: UpdateGroupCategory200ApplicationJsonResultEnum;
}


export class UpdateGroupCategoryResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateGroupCategory200ApplicationJsonObject?: UpdateGroupCategory200ApplicationJson;
}
