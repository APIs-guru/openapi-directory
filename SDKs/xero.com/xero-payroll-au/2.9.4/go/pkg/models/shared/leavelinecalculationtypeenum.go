package shared

type LeaveLineCalculationTypeEnum string

const (
	LeaveLineCalculationTypeEnumNocalculationrequired   LeaveLineCalculationTypeEnum = "NOCALCULATIONREQUIRED"
	LeaveLineCalculationTypeEnumFixedamounteachperiod   LeaveLineCalculationTypeEnum = "FIXEDAMOUNTEACHPERIOD"
	LeaveLineCalculationTypeEnumEnterrateinpaytemplate  LeaveLineCalculationTypeEnum = "ENTERRATEINPAYTEMPLATE"
	LeaveLineCalculationTypeEnumBasedonordinaryearnings LeaveLineCalculationTypeEnum = "BASEDONORDINARYEARNINGS"
	LeaveLineCalculationTypeEnumUnknown                 LeaveLineCalculationTypeEnum = ""
)
