package shared

type UserRoles struct {
	Code *string `json:"code"`
	Name *string `json:"name"`
}

type UserStatusEnum string

const (
	UserStatusEnumPending  UserStatusEnum = "PENDING"
	UserStatusEnumActive   UserStatusEnum = "ACTIVE"
	UserStatusEnumDeleted  UserStatusEnum = "DELETED"
	UserStatusEnumArchived UserStatusEnum = "ARCHIVED"
)

type UserUcisHealth struct {
	Message *string `json:"message"`
	Status  *string `json:"status"`
}

type UserUcis struct {
	Health   *UserUcisHealth `json:"health"`
	ID       *int64          `json:"id"`
	Type     *string         `json:"type"`
	UcpLabel *string         `json:"ucpLabel"`
}

type User struct {
	AccountID     *int64          `json:"accountId"`
	AcountLabel   *string         `json:"acountLabel"`
	ContactNumber *string         `json:"contactNumber"`
	EmailAddress  *string         `json:"emailAddress"`
	FirstName     *string         `json:"firstName"`
	ID            *int64          `json:"id"`
	LastName      *string         `json:"lastName"`
	Roles         []UserRoles     `json:"roles"`
	Status        *UserStatusEnum `json:"status"`
	Ucis          []UserUcis      `json:"ucis"`
}
