import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetNodesComplianceQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=level" })
  level?: number;
}

export enum GetNodesCompliance200ApplicationJsonActionEnum {
    GetNodesCompliance = "getNodesCompliance"
}


export class GetNodesCompliance200ApplicationJsonDataNodesComplianceDetails extends SpeakeasyBase {
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

export enum GetNodesCompliance200ApplicationJsonDataNodesModeEnum {
    FullCompliance = "full-compliance",
    ChangesOnly = "changes-only",
    ReportsDisabled = "reports-disabled"
}


export class GetNodesCompliance200ApplicationJsonDataNodes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=compliance" })
  compliance: number;

  @SpeakeasyMetadata({ data: "json, name=complianceDetails" })
  complianceDetails: GetNodesCompliance200ApplicationJsonDataNodesComplianceDetails;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=mode" })
  mode: GetNodesCompliance200ApplicationJsonDataNodesModeEnum;
}


export class GetNodesCompliance200ApplicationJsonData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nodes", elemType: GetNodesCompliance200ApplicationJsonDataNodes })
  nodes: GetNodesCompliance200ApplicationJsonDataNodes[];
}

export enum GetNodesCompliance200ApplicationJsonResultEnum {
    Success = "success",
    Error = "error"
}


export class GetNodesCompliance200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action: GetNodesCompliance200ApplicationJsonActionEnum;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data: GetNodesCompliance200ApplicationJsonData;

  @SpeakeasyMetadata({ data: "json, name=result" })
  result: GetNodesCompliance200ApplicationJsonResultEnum;
}


export class GetNodesComplianceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetNodesComplianceQueryParams;
}


export class GetNodesComplianceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getNodesCompliance200ApplicationJsonObject?: GetNodesCompliance200ApplicationJson;
}
