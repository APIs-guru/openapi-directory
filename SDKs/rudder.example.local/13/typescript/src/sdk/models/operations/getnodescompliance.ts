import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetNodesComplianceQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=level" })
  level?: number;
}


export class GetNodesComplianceRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetNodesComplianceQueryParams;
}

export enum GetNodesCompliance200ApplicationJsonActionEnum {
    GetNodesCompliance = "getNodesCompliance"
}


export class GetNodesCompliance200ApplicationJsonDataNodesComplianceDetails extends SpeakeasyBase {
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

export enum GetNodesCompliance200ApplicationJsonDataNodesModeEnum {
    FullCompliance = "full-compliance"
,    ChangesOnly = "changes-only"
,    ReportsDisabled = "reports-disabled"
}


export class GetNodesCompliance200ApplicationJsonDataNodes extends SpeakeasyBase {
  @Metadata({ data: "json, name=compliance" })
  compliance: number;

  @Metadata({ data: "json, name=complianceDetails" })
  complianceDetails: GetNodesCompliance200ApplicationJsonDataNodesComplianceDetails;

  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=mode" })
  mode: GetNodesCompliance200ApplicationJsonDataNodesModeEnum;
}


export class GetNodesCompliance200ApplicationJsonData extends SpeakeasyBase {
  @Metadata({ data: "json, name=nodes", elemType: operations.GetNodesCompliance200ApplicationJsonDataNodes })
  nodes: GetNodesCompliance200ApplicationJsonDataNodes[];
}

export enum GetNodesCompliance200ApplicationJsonResultEnum {
    Success = "success"
,    Error = "error"
}


export class GetNodesCompliance200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action: GetNodesCompliance200ApplicationJsonActionEnum;

  @Metadata({ data: "json, name=data" })
  data: GetNodesCompliance200ApplicationJsonData;

  @Metadata({ data: "json, name=result" })
  result: GetNodesCompliance200ApplicationJsonResultEnum;
}


export class GetNodesComplianceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getNodesCompliance200ApplicationJsonObject?: GetNodesCompliance200ApplicationJson;
}
