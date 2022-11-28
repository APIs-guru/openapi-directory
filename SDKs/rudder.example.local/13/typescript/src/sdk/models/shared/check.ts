import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum CheckStatusEnum {
    Critical = "Critical",
    Warning = "Warning",
    Ok = "Ok"
}


export class Check extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=msg" })
  msg: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: CheckStatusEnum;
}
