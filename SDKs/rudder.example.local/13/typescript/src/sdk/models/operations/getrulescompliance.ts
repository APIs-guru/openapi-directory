import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetRulesComplianceQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=level" })
  level?: number;
}


export class GetRulesComplianceRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetRulesComplianceQueryParams;
}

export enum GetRulesCompliance200ApplicationJsonActionEnum {
    GetRulesCompliance = "getRulesCompliance"
}


export class GetRulesCompliance200ApplicationJsonDataRulesComplianceDetails extends SpeakeasyBase {
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

export enum GetRulesCompliance200ApplicationJsonDataRulesModeEnum {
    FullCompliance = "full-compliance"
,    ChangesOnly = "changes-only"
,    ReportsDisabled = "reports-disabled"
}


export class GetRulesCompliance200ApplicationJsonDataRules extends SpeakeasyBase {
  @Metadata({ data: "json, name=compliance" })
  compliance: number;

  @Metadata({ data: "json, name=complianceDetails" })
  complianceDetails: GetRulesCompliance200ApplicationJsonDataRulesComplianceDetails;

  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=mode" })
  mode: GetRulesCompliance200ApplicationJsonDataRulesModeEnum;
}


export class GetRulesCompliance200ApplicationJsonData extends SpeakeasyBase {
  @Metadata({ data: "json, name=rules", elemType: operations.GetRulesCompliance200ApplicationJsonDataRules })
  rules: GetRulesCompliance200ApplicationJsonDataRules[];
}

export enum GetRulesCompliance200ApplicationJsonResultEnum {
    Success = "success"
,    Error = "error"
}


export class GetRulesCompliance200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action: GetRulesCompliance200ApplicationJsonActionEnum;

  @Metadata({ data: "json, name=data" })
  data: GetRulesCompliance200ApplicationJsonData;

  @Metadata({ data: "json, name=result" })
  result: GetRulesCompliance200ApplicationJsonResultEnum;
}


export class GetRulesComplianceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getRulesCompliance200ApplicationJsonObject?: GetRulesCompliance200ApplicationJson;
}
