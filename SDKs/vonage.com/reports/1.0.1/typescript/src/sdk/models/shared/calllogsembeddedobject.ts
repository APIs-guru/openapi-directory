import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CallLog } from "./calllog";


export class CallLogsEmbeddedObject extends SpeakeasyBase {
  @Metadata({ data: "json, name=call_logs", elemType: shared.CallLog })
  callLogs?: CallLog[];
}
