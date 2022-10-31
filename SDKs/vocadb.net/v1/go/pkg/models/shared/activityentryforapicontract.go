package shared

import (
"time")


type ActivityEntryForAPIContractEditEventEnum string

const (
    ActivityEntryForAPIContractEditEventEnumCreated ActivityEntryForAPIContractEditEventEnum = "Created"
ActivityEntryForAPIContractEditEventEnumUpdated ActivityEntryForAPIContractEditEventEnum = "Updated"
ActivityEntryForAPIContractEditEventEnumDeleted ActivityEntryForAPIContractEditEventEnum = "Deleted"
ActivityEntryForAPIContractEditEventEnumRestored ActivityEntryForAPIContractEditEventEnum = "Restored"
)


type ActivityEntryForAPIContract struct {
    ArchivedVersion *ArchivedObjectVersionForAPIContract `json:"archivedVersion,omitempty"`
    Author *UserForAPIContract `json:"author,omitempty"`
    CreateDate *time.Time `json:"createDate,omitempty"`
    EditEvent *ActivityEntryForAPIContractEditEventEnum `json:"editEvent,omitempty"`
    Entry *EntryForAPIContract `json:"entry,omitempty"`
    
}

