import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetRuleCategoryDetailsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ruleCategoryId" })
  ruleCategoryId: string;
}


export class GetRuleCategoryDetailsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetRuleCategoryDetailsPathParams;
}

export enum GetRuleCategoryDetails200ApplicationJsonActionEnum {
    GetRuleCategoryDetails = "GetRuleCategoryDetails"
}


export class GetRuleCategoryDetails200ApplicationJsonData extends SpeakeasyBase {
  @Metadata({ data: "json, name=rulesCategories", elemType: shared.RuleCategory })
  rulesCategories: shared.RuleCategory[];
}

export enum GetRuleCategoryDetails200ApplicationJsonResultEnum {
    Success = "success"
,    Error = "error"
}


export class GetRuleCategoryDetails200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action: GetRuleCategoryDetails200ApplicationJsonActionEnum;

  @Metadata({ data: "json, name=data" })
  data: GetRuleCategoryDetails200ApplicationJsonData;

  @Metadata({ data: "json, name=result" })
  result: GetRuleCategoryDetails200ApplicationJsonResultEnum;
}


export class GetRuleCategoryDetailsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getRuleCategoryDetails200ApplicationJsonObject?: GetRuleCategoryDetails200ApplicationJson;

  @Metadata()
  statusCode: number;
}
