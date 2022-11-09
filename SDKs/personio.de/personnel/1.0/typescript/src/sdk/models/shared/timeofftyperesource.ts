import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class TimeOffTypeResourceAttributes extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;
}

export enum TimeOffTypeResourceTypeEnum {
    TimeOffType = "TimeOffType"
}


export class TimeOffTypeResource extends SpeakeasyBase {
  @Metadata({ data: "json, name=attributes" })
  attributes?: TimeOffTypeResourceAttributes;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=type" })
  type?: TimeOffTypeResourceTypeEnum;
}
