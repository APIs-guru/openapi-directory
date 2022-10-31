package shared

type TimesheetStatusEnum string

const (
	TimesheetStatusEnumDraft     TimesheetStatusEnum = "DRAFT"
	TimesheetStatusEnumProcessed TimesheetStatusEnum = "PROCESSED"
	TimesheetStatusEnumApproved  TimesheetStatusEnum = "APPROVED"
	TimesheetStatusEnumRejected  TimesheetStatusEnum = "REJECTED"
	TimesheetStatusEnumRequested TimesheetStatusEnum = "REQUESTED"
)
