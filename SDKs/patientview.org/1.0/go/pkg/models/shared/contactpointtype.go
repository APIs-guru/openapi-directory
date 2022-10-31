package shared

type ContactPointTypeValueEnum string

const (
	ContactPointTypeValueEnumUnitWebAddress     ContactPointTypeValueEnum = "UNIT_WEB_ADDRESS"
	ContactPointTypeValueEnumTrustWebAddress    ContactPointTypeValueEnum = "TRUST_WEB_ADDRESS"
	ContactPointTypeValueEnumPvAdminName        ContactPointTypeValueEnum = "PV_ADMIN_NAME"
	ContactPointTypeValueEnumPvAdminPhone       ContactPointTypeValueEnum = "PV_ADMIN_PHONE"
	ContactPointTypeValueEnumPvAdminEmail       ContactPointTypeValueEnum = "PV_ADMIN_EMAIL"
	ContactPointTypeValueEnumUnitEnquiriesPhone ContactPointTypeValueEnum = "UNIT_ENQUIRIES_PHONE"
	ContactPointTypeValueEnumUnitEnquiriesEmail ContactPointTypeValueEnum = "UNIT_ENQUIRIES_EMAIL"
	ContactPointTypeValueEnumAppointmentPhone   ContactPointTypeValueEnum = "APPOINTMENT_PHONE"
	ContactPointTypeValueEnumAppointmentEmail   ContactPointTypeValueEnum = "APPOINTMENT_EMAIL"
	ContactPointTypeValueEnumOutOfHoursInfo     ContactPointTypeValueEnum = "OUT_OF_HOURS_INFO"
)

type ContactPointType struct {
	Description *string                    `json:"description,omitempty"`
	ID          *int64                     `json:"id,omitempty"`
	LookupType  *LookupType                `json:"lookupType,omitempty"`
	Value       *ContactPointTypeValueEnum `json:"value,omitempty"`
}
