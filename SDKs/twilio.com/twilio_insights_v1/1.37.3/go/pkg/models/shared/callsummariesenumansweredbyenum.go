package shared

type CallSummariesEnumAnsweredByEnum string

const (
	CallSummariesEnumAnsweredByEnumUnknown           CallSummariesEnumAnsweredByEnum = "unknown"
	CallSummariesEnumAnsweredByEnumMachineStart      CallSummariesEnumAnsweredByEnum = "machine_start"
	CallSummariesEnumAnsweredByEnumMachineEndBeep    CallSummariesEnumAnsweredByEnum = "machine_end_beep"
	CallSummariesEnumAnsweredByEnumMachineEndSilence CallSummariesEnumAnsweredByEnum = "machine_end_silence"
	CallSummariesEnumAnsweredByEnumMachineEndOther   CallSummariesEnumAnsweredByEnum = "machine_end_other"
	CallSummariesEnumAnsweredByEnumHuman             CallSummariesEnumAnsweredByEnum = "human"
	CallSummariesEnumAnsweredByEnumFax               CallSummariesEnumAnsweredByEnum = "fax"
)
