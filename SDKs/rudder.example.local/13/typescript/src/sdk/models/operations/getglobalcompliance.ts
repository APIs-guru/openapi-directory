import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetGlobalCompliance200ApplicationJsonActionEnum {
    GetGlobalCompliance = "getGlobalCompliance"
}


export class GetGlobalCompliance200ApplicationJsonDataGlobalComplianceComplianceDetails extends SpeakeasyBase {
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


export class GetGlobalCompliance200ApplicationJsonDataGlobalCompliance extends SpeakeasyBase {
  @Metadata({ data: "json, name=compliance" })
  compliance: number;

  @Metadata({ data: "json, name=complianceDetails" })
  complianceDetails?: GetGlobalCompliance200ApplicationJsonDataGlobalComplianceComplianceDetails;
}


export class GetGlobalCompliance200ApplicationJsonData extends SpeakeasyBase {
  @Metadata({ data: "json, name=globalCompliance" })
  globalCompliance: GetGlobalCompliance200ApplicationJsonDataGlobalCompliance;
}

export enum GetGlobalCompliance200ApplicationJsonResultEnum {
    Success = "success"
,    Error = "error"
}


export class GetGlobalCompliance200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action: GetGlobalCompliance200ApplicationJsonActionEnum;

  @Metadata({ data: "json, name=data" })
  data: GetGlobalCompliance200ApplicationJsonData;

  @Metadata({ data: "json, name=result" })
  result: GetGlobalCompliance200ApplicationJsonResultEnum;
}


export class GetGlobalComplianceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getGlobalCompliance200ApplicationJsonObject?: GetGlobalCompliance200ApplicationJson;
}
