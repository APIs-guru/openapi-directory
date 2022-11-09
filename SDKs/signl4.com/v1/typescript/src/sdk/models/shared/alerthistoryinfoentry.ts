import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AlertHistoryInfoEntry extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=timestamp" })
  timestamp?: Date;

  @Metadata({ data: "json, name=type" })
  type?: number;

  @Metadata({ data: "json, name=userId" })
  userId?: string;
}
