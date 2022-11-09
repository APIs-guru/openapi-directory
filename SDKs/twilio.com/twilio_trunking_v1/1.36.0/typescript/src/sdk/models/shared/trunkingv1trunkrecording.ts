import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RecordingEnumRecordingModeEnum } from "./recordingenumrecordingmodeenum";
import { RecordingEnumRecordingTrimEnum } from "./recordingenumrecordingtrimenum";


export class TrunkingV1TrunkRecording extends SpeakeasyBase {
  @Metadata({ data: "json, name=mode" })
  mode?: RecordingEnumRecordingModeEnum;

  @Metadata({ data: "json, name=trim" })
  trim?: RecordingEnumRecordingTrimEnum;
}
