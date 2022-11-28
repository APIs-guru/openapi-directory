package shared

type SummaryEnumAnsweredByEnum string

const (
	SummaryEnumAnsweredByEnumUnknown           SummaryEnumAnsweredByEnum = "unknown"
	SummaryEnumAnsweredByEnumMachineStart      SummaryEnumAnsweredByEnum = "machine_start"
	SummaryEnumAnsweredByEnumMachineEndBeep    SummaryEnumAnsweredByEnum = "machine_end_beep"
	SummaryEnumAnsweredByEnumMachineEndSilence SummaryEnumAnsweredByEnum = "machine_end_silence"
	SummaryEnumAnsweredByEnumMachineEndOther   SummaryEnumAnsweredByEnum = "machine_end_other"
	SummaryEnumAnsweredByEnumHuman             SummaryEnumAnsweredByEnum = "human"
	SummaryEnumAnsweredByEnumFax               SummaryEnumAnsweredByEnum = "fax"
)
