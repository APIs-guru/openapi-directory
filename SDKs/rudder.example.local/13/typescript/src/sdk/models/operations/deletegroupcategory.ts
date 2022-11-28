import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteGroupCategoryPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=groupCategoryId" })
  groupCategoryId: string;
}

export enum DeleteGroupCategory200ApplicationJsonActionEnum {
    DeleteGroupCategory = "DeleteGroupCategory"
}


export class DeleteGroupCategory200ApplicationJsonData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=groupCategories", elemType: shared.GroupCategory })
  groupCategories: shared.GroupCategory[];
}

export enum DeleteGroupCategory200ApplicationJsonResultEnum {
    Success = "success",
    Error = "error"
}


export class DeleteGroupCategory200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action: DeleteGroupCategory200ApplicationJsonActionEnum;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data: DeleteGroupCategory200ApplicationJsonData;

  @SpeakeasyMetadata({ data: "json, name=result" })
  result: DeleteGroupCategory200ApplicationJsonResultEnum;
}


export class DeleteGroupCategoryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteGroupCategoryPathParams;
}


export class DeleteGroupCategoryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  deleteGroupCategory200ApplicationJsonObject?: DeleteGroupCategory200ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
