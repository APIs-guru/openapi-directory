import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum CreateTimeOffPeriodResponseDataTypeEnum {
    TimeOffPeriod = "TimeOffPeriod"
}


export class CreateTimeOffPeriodResponseData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attributes" })
  attributes?: any;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: CreateTimeOffPeriodResponseDataTypeEnum;
}


export class CreateTimeOffPeriodResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data: CreateTimeOffPeriodResponseData;

  @SpeakeasyMetadata({ data: "json, name=success" })
  success: boolean;
}
