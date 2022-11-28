import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetNodeCompliancePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=nodeId" })
  nodeId: string;
}


export class GetNodeComplianceQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=level" })
  level?: number;
}

export enum GetNodeCompliance200ApplicationJsonActionEnum {
    GetNodeCompliance = "getNodeCompliance"
}


export class GetNodeCompliance200ApplicationJsonDataNodesComplianceDetails extends SpeakeasyBase {
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

export enum GetNodeCompliance200ApplicationJsonDataNodesModeEnum {
    FullCompliance = "full-compliance",
    ChangesOnly = "changes-only",
    ReportsDisabled = "reports-disabled"
}


export class GetNodeCompliance200ApplicationJsonDataNodes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=compliance" })
  compliance: number;

  @SpeakeasyMetadata({ data: "json, name=complianceDetails" })
  complianceDetails: GetNodeCompliance200ApplicationJsonDataNodesComplianceDetails;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=mode" })
  mode: GetNodeCompliance200ApplicationJsonDataNodesModeEnum;
}


export class GetNodeCompliance200ApplicationJsonData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nodes", elemType: GetNodeCompliance200ApplicationJsonDataNodes })
  nodes: GetNodeCompliance200ApplicationJsonDataNodes[];
}

export enum GetNodeCompliance200ApplicationJsonResultEnum {
    Success = "success",
    Error = "error"
}


export class GetNodeCompliance200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action: GetNodeCompliance200ApplicationJsonActionEnum;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data: GetNodeCompliance200ApplicationJsonData;

  @SpeakeasyMetadata({ data: "json, name=result" })
  result: GetNodeCompliance200ApplicationJsonResultEnum;
}


export class GetNodeComplianceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetNodeCompliancePathParams;

  @SpeakeasyMetadata()
  queryParams: GetNodeComplianceQueryParams;
}


export class GetNodeComplianceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getNodeCompliance200ApplicationJsonObject?: GetNodeCompliance200ApplicationJson;
}
