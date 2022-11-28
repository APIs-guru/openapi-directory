import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CollectedData } from "./collecteddata";



export class HeartBeatBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=agentVersion" })
  agentVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=collectedDataList", elemType: CollectedData })
  collectedDataList?: CollectedData[];

  @SpeakeasyMetadata({ data: "json, name=environmentId" })
  environmentId?: string;

  @SpeakeasyMetadata({ data: "json, name=resourceId" })
  resourceId?: string;

  @SpeakeasyMetadata({ data: "json, name=timeStamp" })
  timeStamp?: Date;
}
