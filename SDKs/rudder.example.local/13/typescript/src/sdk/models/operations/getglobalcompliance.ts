import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetGlobalCompliance200ApplicationJsonActionEnum {
    GetGlobalCompliance = "getGlobalCompliance"
}


export class GetGlobalCompliance200ApplicationJsonDataGlobalComplianceComplianceDetails extends SpeakeasyBase {
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


export class GetGlobalCompliance200ApplicationJsonDataGlobalCompliance extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=compliance" })
  compliance: number;

  @SpeakeasyMetadata({ data: "json, name=complianceDetails" })
  complianceDetails?: GetGlobalCompliance200ApplicationJsonDataGlobalComplianceComplianceDetails;
}


export class GetGlobalCompliance200ApplicationJsonData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=globalCompliance" })
  globalCompliance: GetGlobalCompliance200ApplicationJsonDataGlobalCompliance;
}

export enum GetGlobalCompliance200ApplicationJsonResultEnum {
    Success = "success",
    Error = "error"
}


export class GetGlobalCompliance200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action: GetGlobalCompliance200ApplicationJsonActionEnum;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data: GetGlobalCompliance200ApplicationJsonData;

  @SpeakeasyMetadata({ data: "json, name=result" })
  result: GetGlobalCompliance200ApplicationJsonResultEnum;
}


export class GetGlobalComplianceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getGlobalCompliance200ApplicationJsonObject?: GetGlobalCompliance200ApplicationJson;
}
