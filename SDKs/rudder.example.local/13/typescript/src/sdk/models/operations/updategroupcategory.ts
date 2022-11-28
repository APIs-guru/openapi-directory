import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateGroupCategoryPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=groupCategoryId" })
  groupCategoryId: string;
}

export enum UpdateGroupCategory200ApplicationJsonActionEnum {
    UpdateGroupCategory = "UpdateGroupCategory"
}


export class UpdateGroupCategory200ApplicationJsonData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=groupCategories", elemType: shared.GroupCategory })
  groupCategories: shared.GroupCategory[];
}

export enum UpdateGroupCategory200ApplicationJsonResultEnum {
    Success = "success",
    Error = "error"
}


export class UpdateGroupCategory200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action: UpdateGroupCategory200ApplicationJsonActionEnum;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data: UpdateGroupCategory200ApplicationJsonData;

  @SpeakeasyMetadata({ data: "json, name=result" })
  result: UpdateGroupCategory200ApplicationJsonResultEnum;
}


export class UpdateGroupCategoryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateGroupCategoryPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.GroupCategoryUpdate;
}


export class UpdateGroupCategoryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateGroupCategory200ApplicationJsonObject?: UpdateGroupCategory200ApplicationJson;
}
