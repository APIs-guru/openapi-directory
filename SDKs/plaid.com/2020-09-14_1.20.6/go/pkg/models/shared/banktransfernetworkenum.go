package shared

type BankTransferNetworkEnum string

const (
	BankTransferNetworkEnumAch        BankTransferNetworkEnum = "ach"
	BankTransferNetworkEnumSameDayAch BankTransferNetworkEnum = "same-day-ach"
	BankTransferNetworkEnumWire       BankTransferNetworkEnum = "wire"
)
