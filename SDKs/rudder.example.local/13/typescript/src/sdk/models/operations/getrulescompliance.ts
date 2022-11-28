import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetRulesComplianceQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=level" })
  level?: number;
}

export enum GetRulesCompliance200ApplicationJsonActionEnum {
    GetRulesCompliance = "getRulesCompliance"
}


export class GetRulesCompliance200ApplicationJsonDataRulesComplianceDetails extends SpeakeasyBase {
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

export enum GetRulesCompliance200ApplicationJsonDataRulesModeEnum {
    FullCompliance = "full-compliance",
    ChangesOnly = "changes-only",
    ReportsDisabled = "reports-disabled"
}


export class GetRulesCompliance200ApplicationJsonDataRules extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=compliance" })
  compliance: number;

  @SpeakeasyMetadata({ data: "json, name=complianceDetails" })
  complianceDetails: GetRulesCompliance200ApplicationJsonDataRulesComplianceDetails;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=mode" })
  mode: GetRulesCompliance200ApplicationJsonDataRulesModeEnum;
}


export class GetRulesCompliance200ApplicationJsonData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=rules", elemType: GetRulesCompliance200ApplicationJsonDataRules })
  rules: GetRulesCompliance200ApplicationJsonDataRules[];
}

export enum GetRulesCompliance200ApplicationJsonResultEnum {
    Success = "success",
    Error = "error"
}


export class GetRulesCompliance200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action: GetRulesCompliance200ApplicationJsonActionEnum;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data: GetRulesCompliance200ApplicationJsonData;

  @SpeakeasyMetadata({ data: "json, name=result" })
  result: GetRulesCompliance200ApplicationJsonResultEnum;
}


export class GetRulesComplianceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetRulesComplianceQueryParams;
}


export class GetRulesComplianceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getRulesCompliance200ApplicationJsonObject?: GetRulesCompliance200ApplicationJson;
}
