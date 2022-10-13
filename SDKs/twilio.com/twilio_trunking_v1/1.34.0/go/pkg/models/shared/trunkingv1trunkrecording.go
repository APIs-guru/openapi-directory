package shared

type TrunkingV1TrunkRecording struct {
	Mode *RecordingEnumRecordingModeEnum `json:"mode"`
	Trim *RecordingEnumRecordingTrimEnum `json:"trim"`
}
