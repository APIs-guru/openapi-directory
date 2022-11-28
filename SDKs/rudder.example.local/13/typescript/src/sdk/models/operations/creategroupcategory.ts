import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum CreateGroupCategory200ApplicationJsonActionEnum {
    CreateGroupCategory = "CreateGroupCategory"
}


export class CreateGroupCategory200ApplicationJsonData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=groupCategories", elemType: shared.GroupCategory })
  groupCategories: shared.GroupCategory[];
}

export enum CreateGroupCategory200ApplicationJsonResultEnum {
    Success = "success",
    Error = "error"
}


export class CreateGroupCategory200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action: CreateGroupCategory200ApplicationJsonActionEnum;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data: CreateGroupCategory200ApplicationJsonData;

  @SpeakeasyMetadata({ data: "json, name=result" })
  result: CreateGroupCategory200ApplicationJsonResultEnum;
}


export class CreateGroupCategoryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.GroupCategory;
}


export class CreateGroupCategoryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  createGroupCategory200ApplicationJsonObject?: CreateGroupCategory200ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
