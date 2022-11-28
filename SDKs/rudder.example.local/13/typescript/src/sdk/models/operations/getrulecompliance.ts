import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetRuleCompliancePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ruleId" })
  ruleId: string;
}


export class GetRuleComplianceQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=level" })
  level?: number;
}

export enum GetRuleCompliance200ApplicationJsonActionEnum {
    GetRuleCompliance = "getRuleCompliance"
}


export class GetRuleCompliance200ApplicationJsonDataRulesComplianceDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: number;

  @SpeakeasyMetadata({ data: "json, name=noReport" })
  noReport?: number;

  @SpeakeasyMetadata({ data: "json, name=successAlreadyOK" })
  successAlreadyOk?: number;

  @SpeakeasyMetadata({ data: "json, name=successNotApplicable" })
  successNotApplicable?: number;

  @SpeakeasyMetadata({ data: "json, name=successRepaired" })
  successRepaired?: number;

  @SpeakeasyMetadata({ data: "json, name=unexpectedMissingComponent" })
  unexpectedMissingComponent?: number;

  @SpeakeasyMetadata({ data: "json, name=unexpectedUnknownComponent" })
  unexpectedUnknownComponent?: number;
}

export enum GetRuleCompliance200ApplicationJsonDataRulesModeEnum {
    FullCompliance = "full-compliance",
    ChangesOnly = "changes-only",
    ReportsDisabled = "reports-disabled"
}


export class GetRuleCompliance200ApplicationJsonDataRules extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=compliance" })
  compliance: number;

  @SpeakeasyMetadata({ data: "json, name=complianceDetails" })
  complianceDetails: GetRuleCompliance200ApplicationJsonDataRulesComplianceDetails;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=mode" })
  mode: GetRuleCompliance200ApplicationJsonDataRulesModeEnum;
}


export class GetRuleCompliance200ApplicationJsonData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=rules", elemType: GetRuleCompliance200ApplicationJsonDataRules })
  rules: GetRuleCompliance200ApplicationJsonDataRules[];
}

export enum GetRuleCompliance200ApplicationJsonResultEnum {
    Success = "success",
    Error = "error"
}


export class GetRuleCompliance200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action: GetRuleCompliance200ApplicationJsonActionEnum;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data: GetRuleCompliance200ApplicationJsonData;

  @SpeakeasyMetadata({ data: "json, name=result" })
  result: GetRuleCompliance200ApplicationJsonResultEnum;
}


export class GetRuleComplianceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetRuleCompliancePathParams;

  @SpeakeasyMetadata()
  queryParams: GetRuleComplianceQueryParams;
}


export class GetRuleComplianceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getRuleCompliance200ApplicationJsonObject?: GetRuleCompliance200ApplicationJson;
}
