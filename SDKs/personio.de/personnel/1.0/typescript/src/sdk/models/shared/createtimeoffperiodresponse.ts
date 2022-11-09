import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum CreateTimeOffPeriodResponseDataTypeEnum {
    TimeOffPeriod = "TimeOffPeriod"
}


export class CreateTimeOffPeriodResponseData extends SpeakeasyBase {
  @Metadata({ data: "json, name=attributes" })
  attributes?: any;

  @Metadata({ data: "json, name=type" })
  type?: CreateTimeOffPeriodResponseDataTypeEnum;
}


export class CreateTimeOffPeriodResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data: CreateTimeOffPeriodResponseData;

  @Metadata({ data: "json, name=success" })
  success: boolean;
}
