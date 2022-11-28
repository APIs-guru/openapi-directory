package shared

type WritePermissions struct {
	CanAdd                   *bool
	CanDelete                *bool
	CanEdit                  *bool
	MaxDailyActions          *int64
	MinSecondsBetweenActions *int64
	ObjectType               *string
	UserID                   *int64
}
