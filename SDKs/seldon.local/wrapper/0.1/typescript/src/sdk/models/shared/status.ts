import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StatusStatusFlagEnum } from "./statusstatusflagenum";



export class Status extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=info" })
  info?: string;

  @SpeakeasyMetadata({ data: "json, name=reason" })
  reason?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: StatusStatusFlagEnum;
}
