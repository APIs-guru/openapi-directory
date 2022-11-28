import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RecordingEnumRecordingModeEnum } from "./recordingenumrecordingmodeenum";
import { RecordingEnumRecordingTrimEnum } from "./recordingenumrecordingtrimenum";



export class TrunkingV1TrunkRecording extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=mode" })
  mode?: RecordingEnumRecordingModeEnum;

  @SpeakeasyMetadata({ data: "json, name=trim" })
  trim?: RecordingEnumRecordingTrimEnum;
}
