package shared

type WatchlistStatusEnum string

const (
	WatchlistStatusEnumNone    WatchlistStatusEnum = "NONE"
	WatchlistStatusEnumPending WatchlistStatusEnum = "PENDING"
	WatchlistStatusEnumReview  WatchlistStatusEnum = "REVIEW"
	WatchlistStatusEnumPassed  WatchlistStatusEnum = "PASSED"
	WatchlistStatusEnumFailed  WatchlistStatusEnum = "FAILED"
)
