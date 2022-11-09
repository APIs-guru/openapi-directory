import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AlertHistoryInfoEntry } from "./alerthistoryinfoentry";


export class AlertHistoryInfoDetailed extends SpeakeasyBase {
  @Metadata({ data: "json, name=acknowledged" })
  acknowledged?: Date;

  @Metadata({ data: "json, name=acknowledgedgements" })
  acknowledgedgements?: string[];

  @Metadata({ data: "json, name=closed" })
  closed?: Date;

  @Metadata({ data: "json, name=closedBy" })
  closedBy?: string;

  @Metadata({ data: "json, name=created" })
  created?: Date;

  @Metadata({ data: "json, name=historyEntries", elemType: shared.AlertHistoryInfoEntry })
  historyEntries?: AlertHistoryInfoEntry[];
}
