import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetRuleCategoryDetailsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ruleCategoryId" })
  ruleCategoryId: string;
}

export enum GetRuleCategoryDetails200ApplicationJsonActionEnum {
    GetRuleCategoryDetails = "GetRuleCategoryDetails"
}


export class GetRuleCategoryDetails200ApplicationJsonData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=rulesCategories", elemType: shared.RuleCategory })
  rulesCategories: shared.RuleCategory[];
}

export enum GetRuleCategoryDetails200ApplicationJsonResultEnum {
    Success = "success",
    Error = "error"
}


export class GetRuleCategoryDetails200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action: GetRuleCategoryDetails200ApplicationJsonActionEnum;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data: GetRuleCategoryDetails200ApplicationJsonData;

  @SpeakeasyMetadata({ data: "json, name=result" })
  result: GetRuleCategoryDetails200ApplicationJsonResultEnum;
}


export class GetRuleCategoryDetailsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetRuleCategoryDetailsPathParams;
}


export class GetRuleCategoryDetailsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getRuleCategoryDetails200ApplicationJsonObject?: GetRuleCategoryDetails200ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
