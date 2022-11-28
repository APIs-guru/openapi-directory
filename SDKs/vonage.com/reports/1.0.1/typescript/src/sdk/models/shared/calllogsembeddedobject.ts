import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CallLog } from "./calllog";



export class CallLogsEmbeddedObject extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=call_logs", elemType: CallLog })
  callLogs?: CallLog[];
}
