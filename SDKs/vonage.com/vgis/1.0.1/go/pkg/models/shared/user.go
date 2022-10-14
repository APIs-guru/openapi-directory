package shared

type UserRoles struct {
	Code *string `json:"code,omitempty"`
	Name *string `json:"name,omitempty"`
}

type UserStatusEnum string

const (
	UserStatusEnumPending  UserStatusEnum = "PENDING"
	UserStatusEnumActive   UserStatusEnum = "ACTIVE"
	UserStatusEnumDeleted  UserStatusEnum = "DELETED"
	UserStatusEnumArchived UserStatusEnum = "ARCHIVED"
)

type UserUcisHealth struct {
	Message *string `json:"message,omitempty"`
	Status  *string `json:"status,omitempty"`
}

type UserUcis struct {
	Health   *UserUcisHealth `json:"health,omitempty"`
	ID       *int64          `json:"id,omitempty"`
	Type     *string         `json:"type,omitempty"`
	UcpLabel *string         `json:"ucpLabel,omitempty"`
}

type User struct {
	AccountID     *int64          `json:"accountId,omitempty"`
	AcountLabel   *string         `json:"acountLabel,omitempty"`
	ContactNumber *string         `json:"contactNumber,omitempty"`
	EmailAddress  *string         `json:"emailAddress,omitempty"`
	FirstName     *string         `json:"firstName,omitempty"`
	ID            *int64          `json:"id,omitempty"`
	LastName      *string         `json:"lastName,omitempty"`
	Roles         []UserRoles     `json:"roles,omitempty"`
	Status        *UserStatusEnum `json:"status,omitempty"`
	Ucis          []UserUcis      `json:"ucis,omitempty"`
}
