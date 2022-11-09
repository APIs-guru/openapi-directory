import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum CheckStatusEnum {
    Critical = "Critical"
,    Warning = "Warning"
,    Ok = "Ok"
}


export class Check extends SpeakeasyBase {
  @Metadata({ data: "json, name=msg" })
  msg: string;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=status" })
  status: CheckStatusEnum;
}
