import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetRuleCompliancePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ruleId" })
  ruleId: string;
}


export class GetRuleComplianceQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=level" })
  level?: number;
}


export class GetRuleComplianceRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetRuleCompliancePathParams;

  @Metadata()
  queryParams: GetRuleComplianceQueryParams;
}

export enum GetRuleCompliance200ApplicationJsonActionEnum {
    GetRuleCompliance = "getRuleCompliance"
}


export class GetRuleCompliance200ApplicationJsonDataRulesComplianceDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: number;

  @Metadata({ data: "json, name=noReport" })
  noReport?: number;

  @Metadata({ data: "json, name=successAlreadyOK" })
  successAlreadyOk?: number;

  @Metadata({ data: "json, name=successNotApplicable" })
  successNotApplicable?: number;

  @Metadata({ data: "json, name=successRepaired" })
  successRepaired?: number;

  @Metadata({ data: "json, name=unexpectedMissingComponent" })
  unexpectedMissingComponent?: number;

  @Metadata({ data: "json, name=unexpectedUnknownComponent" })
  unexpectedUnknownComponent?: number;
}

export enum GetRuleCompliance200ApplicationJsonDataRulesModeEnum {
    FullCompliance = "full-compliance"
,    ChangesOnly = "changes-only"
,    ReportsDisabled = "reports-disabled"
}


export class GetRuleCompliance200ApplicationJsonDataRules extends SpeakeasyBase {
  @Metadata({ data: "json, name=compliance" })
  compliance: number;

  @Metadata({ data: "json, name=complianceDetails" })
  complianceDetails: GetRuleCompliance200ApplicationJsonDataRulesComplianceDetails;

  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=mode" })
  mode: GetRuleCompliance200ApplicationJsonDataRulesModeEnum;
}


export class GetRuleCompliance200ApplicationJsonData extends SpeakeasyBase {
  @Metadata({ data: "json, name=rules", elemType: operations.GetRuleCompliance200ApplicationJsonDataRules })
  rules: GetRuleCompliance200ApplicationJsonDataRules[];
}

export enum GetRuleCompliance200ApplicationJsonResultEnum {
    Success = "success"
,    Error = "error"
}


export class GetRuleCompliance200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action: GetRuleCompliance200ApplicationJsonActionEnum;

  @Metadata({ data: "json, name=data" })
  data: GetRuleCompliance200ApplicationJsonData;

  @Metadata({ data: "json, name=result" })
  result: GetRuleCompliance200ApplicationJsonResultEnum;
}


export class GetRuleComplianceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getRuleCompliance200ApplicationJsonObject?: GetRuleCompliance200ApplicationJson;
}
