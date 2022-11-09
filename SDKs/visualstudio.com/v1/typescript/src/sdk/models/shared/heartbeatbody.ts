import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CollectedData } from "./collecteddata";


export class HeartBeatBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=agentVersion" })
  agentVersion?: string;

  @Metadata({ data: "json, name=collectedDataList", elemType: shared.CollectedData })
  collectedDataList?: CollectedData[];

  @Metadata({ data: "json, name=environmentId" })
  environmentId?: string;

  @Metadata({ data: "json, name=resourceId" })
  resourceId?: string;

  @Metadata({ data: "json, name=timeStamp" })
  timeStamp?: Date;
}
