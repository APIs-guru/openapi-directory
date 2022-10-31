package shared

import (
	"time"
)

type Meta12 struct {
	Active         *bool      `json:"active,omitempty"`
	ChangedOn      *time.Time `json:"changed_on,omitempty"`
	CreatedOn      *time.Time `json:"created_on,omitempty"`
	Email          string     `json:"email"`
	FailLoginCount *int32     `json:"fail_login_count,omitempty"`
	FirstName      string     `json:"first_name"`
	ID             *int32     `json:"id,omitempty"`
	LastLogin      *time.Time `json:"last_login,omitempty"`
	LastName       string     `json:"last_name"`
	LoginCount     *int32     `json:"login_count,omitempty"`
	Password       *string    `json:"password,omitempty"`
	Username       string     `json:"username"`
}
