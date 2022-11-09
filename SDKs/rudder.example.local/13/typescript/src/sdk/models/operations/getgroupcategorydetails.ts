import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetGroupCategoryDetailsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=groupCategoryId" })
  groupCategoryId: string;
}


export class GetGroupCategoryDetailsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetGroupCategoryDetailsPathParams;
}

export enum GetGroupCategoryDetails200ApplicationJsonActionEnum {
    GetGroupCategoryDetails = "GetGroupCategoryDetails"
}


export class GetGroupCategoryDetails200ApplicationJsonData extends SpeakeasyBase {
  @Metadata({ data: "json, name=groupCategories", elemType: shared.GroupCategory })
  groupCategories: shared.GroupCategory[];
}

export enum GetGroupCategoryDetails200ApplicationJsonResultEnum {
    Success = "success"
,    Error = "error"
}


export class GetGroupCategoryDetails200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action: GetGroupCategoryDetails200ApplicationJsonActionEnum;

  @Metadata({ data: "json, name=data" })
  data: GetGroupCategoryDetails200ApplicationJsonData;

  @Metadata({ data: "json, name=result" })
  result: GetGroupCategoryDetails200ApplicationJsonResultEnum;
}


export class GetGroupCategoryDetailsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getGroupCategoryDetails200ApplicationJsonObject?: GetGroupCategoryDetails200ApplicationJson;

  @Metadata()
  statusCode: number;
}
