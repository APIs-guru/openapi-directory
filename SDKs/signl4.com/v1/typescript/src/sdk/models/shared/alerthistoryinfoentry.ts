import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AlertHistoryInfoEntry extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=timestamp" })
  timestamp?: Date;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: number;

  @SpeakeasyMetadata({ data: "json, name=userId" })
  userId?: string;
}
