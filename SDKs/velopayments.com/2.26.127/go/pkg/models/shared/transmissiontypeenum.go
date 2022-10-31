package shared

type TransmissionTypeEnum string

const (
	TransmissionTypeEnumSameDayAch TransmissionTypeEnum = "SAME_DAY_ACH"
	TransmissionTypeEnumWire       TransmissionTypeEnum = "WIRE"
	TransmissionTypeEnumAch        TransmissionTypeEnum = "ACH"
)
