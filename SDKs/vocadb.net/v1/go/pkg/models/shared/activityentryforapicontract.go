package shared

import (
	"time"
)

type ActivityEntryForAPIContractEditEventEnum string

const (
	ActivityEntryForAPIContractEditEventEnumCreated  ActivityEntryForAPIContractEditEventEnum = "Created"
	ActivityEntryForAPIContractEditEventEnumUpdated  ActivityEntryForAPIContractEditEventEnum = "Updated"
	ActivityEntryForAPIContractEditEventEnumDeleted  ActivityEntryForAPIContractEditEventEnum = "Deleted"
	ActivityEntryForAPIContractEditEventEnumRestored ActivityEntryForAPIContractEditEventEnum = "Restored"
)

type ActivityEntryForAPIContract struct {
	ArchivedVersion *ArchivedObjectVersionForAPIContract      `json:"archivedVersion"`
	Author          *UserForAPIContract                       `json:"author"`
	CreateDate      *time.Time                                `json:"createDate"`
	EditEvent       *ActivityEntryForAPIContractEditEventEnum `json:"editEvent"`
	Entry           *EntryForAPIContract                      `json:"entry"`
}
