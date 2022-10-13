package shared

import (
	"time"
)

type Meta12 struct {
	Active         *bool      `json:"active"`
	ChangedOn      *time.Time `json:"changed_on"`
	CreatedOn      *time.Time `json:"created_on"`
	Email          string     `json:"email"`
	FailLoginCount *int32     `json:"fail_login_count"`
	FirstName      string     `json:"first_name"`
	ID             *int32     `json:"id"`
	LastLogin      *time.Time `json:"last_login"`
	LastName       string     `json:"last_name"`
	LoginCount     *int32     `json:"login_count"`
	Password       *string    `json:"password"`
	Username       string     `json:"username"`
}
