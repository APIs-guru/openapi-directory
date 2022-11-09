import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteGroupCategoryPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=groupCategoryId" })
  groupCategoryId: string;
}


export class DeleteGroupCategoryRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteGroupCategoryPathParams;
}

export enum DeleteGroupCategory200ApplicationJsonActionEnum {
    DeleteGroupCategory = "DeleteGroupCategory"
}


export class DeleteGroupCategory200ApplicationJsonData extends SpeakeasyBase {
  @Metadata({ data: "json, name=groupCategories", elemType: shared.GroupCategory })
  groupCategories: shared.GroupCategory[];
}

export enum DeleteGroupCategory200ApplicationJsonResultEnum {
    Success = "success"
,    Error = "error"
}


export class DeleteGroupCategory200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action: DeleteGroupCategory200ApplicationJsonActionEnum;

  @Metadata({ data: "json, name=data" })
  data: DeleteGroupCategory200ApplicationJsonData;

  @Metadata({ data: "json, name=result" })
  result: DeleteGroupCategory200ApplicationJsonResultEnum;
}


export class DeleteGroupCategoryResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  deleteGroupCategory200ApplicationJsonObject?: DeleteGroupCategory200ApplicationJson;

  @Metadata()
  statusCode: number;
}
