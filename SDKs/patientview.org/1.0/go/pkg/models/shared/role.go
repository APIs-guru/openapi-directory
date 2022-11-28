package shared

type RoleNameEnum string

const (
	RoleNameEnumPatient           RoleNameEnum = "PATIENT"
	RoleNameEnumUnitAdmin         RoleNameEnum = "UNIT_ADMIN"
	RoleNameEnumStaffAdmin        RoleNameEnum = "STAFF_ADMIN"
	RoleNameEnumDiseaseGroupAdmin RoleNameEnum = "DISEASE_GROUP_ADMIN"
	RoleNameEnumSpecialtyAdmin    RoleNameEnum = "SPECIALTY_ADMIN"
	RoleNameEnumGlobalAdmin       RoleNameEnum = "GLOBAL_ADMIN"
	RoleNameEnumGpAdmin           RoleNameEnum = "GP_ADMIN"
	RoleNameEnumMember            RoleNameEnum = "MEMBER"
	RoleNameEnumPublic            RoleNameEnum = "PUBLIC"
	RoleNameEnumUnitAdminAPI      RoleNameEnum = "UNIT_ADMIN_API"
	RoleNameEnumImporter          RoleNameEnum = "IMPORTER"
)

type Role struct {
	Description *string
	ID          *int64
	Name        *RoleNameEnum
	Visible     *bool
}
