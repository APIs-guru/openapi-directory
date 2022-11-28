import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TimeOffTypeResourceAttributes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}

export enum TimeOffTypeResourceTypeEnum {
    TimeOffType = "TimeOffType"
}


export class TimeOffTypeResource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attributes" })
  attributes?: TimeOffTypeResourceAttributes;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: TimeOffTypeResourceTypeEnum;
}
