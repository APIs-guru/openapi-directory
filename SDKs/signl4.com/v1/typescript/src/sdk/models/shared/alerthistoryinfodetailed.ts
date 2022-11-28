import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AlertHistoryInfoEntry } from "./alerthistoryinfoentry";



export class AlertHistoryInfoDetailed extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=acknowledged" })
  acknowledged?: Date;

  @SpeakeasyMetadata({ data: "json, name=acknowledgedgements" })
  acknowledgedgements?: string[];

  @SpeakeasyMetadata({ data: "json, name=closed" })
  closed?: Date;

  @SpeakeasyMetadata({ data: "json, name=closedBy" })
  closedBy?: string;

  @SpeakeasyMetadata({ data: "json, name=created" })
  created?: Date;

  @SpeakeasyMetadata({ data: "json, name=historyEntries", elemType: AlertHistoryInfoEntry })
  historyEntries?: AlertHistoryInfoEntry[];
}
