import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetGroupCategoryDetailsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=groupCategoryId" })
  groupCategoryId: string;
}

export enum GetGroupCategoryDetails200ApplicationJsonActionEnum {
    GetGroupCategoryDetails = "GetGroupCategoryDetails"
}


export class GetGroupCategoryDetails200ApplicationJsonData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=groupCategories", elemType: shared.GroupCategory })
  groupCategories: shared.GroupCategory[];
}

export enum GetGroupCategoryDetails200ApplicationJsonResultEnum {
    Success = "success",
    Error = "error"
}


export class GetGroupCategoryDetails200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action: GetGroupCategoryDetails200ApplicationJsonActionEnum;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data: GetGroupCategoryDetails200ApplicationJsonData;

  @SpeakeasyMetadata({ data: "json, name=result" })
  result: GetGroupCategoryDetails200ApplicationJsonResultEnum;
}


export class GetGroupCategoryDetailsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetGroupCategoryDetailsPathParams;
}


export class GetGroupCategoryDetailsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getGroupCategoryDetails200ApplicationJsonObject?: GetGroupCategoryDetails200ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
