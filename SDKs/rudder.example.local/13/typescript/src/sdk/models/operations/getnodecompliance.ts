import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetNodeCompliancePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=nodeId" })
  nodeId: string;
}


export class GetNodeComplianceQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=level" })
  level?: number;
}


export class GetNodeComplianceRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetNodeCompliancePathParams;

  @Metadata()
  queryParams: GetNodeComplianceQueryParams;
}

export enum GetNodeCompliance200ApplicationJsonActionEnum {
    GetNodeCompliance = "getNodeCompliance"
}


export class GetNodeCompliance200ApplicationJsonDataNodesComplianceDetails extends SpeakeasyBase {
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

export enum GetNodeCompliance200ApplicationJsonDataNodesModeEnum {
    FullCompliance = "full-compliance"
,    ChangesOnly = "changes-only"
,    ReportsDisabled = "reports-disabled"
}


export class GetNodeCompliance200ApplicationJsonDataNodes extends SpeakeasyBase {
  @Metadata({ data: "json, name=compliance" })
  compliance: number;

  @Metadata({ data: "json, name=complianceDetails" })
  complianceDetails: GetNodeCompliance200ApplicationJsonDataNodesComplianceDetails;

  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=mode" })
  mode: GetNodeCompliance200ApplicationJsonDataNodesModeEnum;
}


export class GetNodeCompliance200ApplicationJsonData extends SpeakeasyBase {
  @Metadata({ data: "json, name=nodes", elemType: operations.GetNodeCompliance200ApplicationJsonDataNodes })
  nodes: GetNodeCompliance200ApplicationJsonDataNodes[];
}

export enum GetNodeCompliance200ApplicationJsonResultEnum {
    Success = "success"
,    Error = "error"
}


export class GetNodeCompliance200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action: GetNodeCompliance200ApplicationJsonActionEnum;

  @Metadata({ data: "json, name=data" })
  data: GetNodeCompliance200ApplicationJsonData;

  @Metadata({ data: "json, name=result" })
  result: GetNodeCompliance200ApplicationJsonResultEnum;
}


export class GetNodeComplianceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getNodeCompliance200ApplicationJsonObject?: GetNodeCompliance200ApplicationJson;
}
