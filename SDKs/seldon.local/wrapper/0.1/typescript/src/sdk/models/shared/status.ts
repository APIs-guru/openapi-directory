import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { StatusStatusFlagEnum } from "./statusstatusflagenum";


export class Status extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=info" })
  info?: string;

  @Metadata({ data: "json, name=reason" })
  reason?: string;

  @Metadata({ data: "json, name=status" })
  status?: StatusStatusFlagEnum;
}
