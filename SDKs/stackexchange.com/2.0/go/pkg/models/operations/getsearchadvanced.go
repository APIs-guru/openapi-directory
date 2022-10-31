package operations

type GetSearchAdvancedAcceptedEnum string

const (
	GetSearchAdvancedAcceptedEnumTrue  GetSearchAdvancedAcceptedEnum = "true"
	GetSearchAdvancedAcceptedEnumFalse GetSearchAdvancedAcceptedEnum = "false"
)

type GetSearchAdvancedClosedEnum string

const (
	GetSearchAdvancedClosedEnumTrue  GetSearchAdvancedClosedEnum = "true"
	GetSearchAdvancedClosedEnumFalse GetSearchAdvancedClosedEnum = "false"
)

type GetSearchAdvancedMigratedEnum string

const (
	GetSearchAdvancedMigratedEnumTrue  GetSearchAdvancedMigratedEnum = "true"
	GetSearchAdvancedMigratedEnumFalse GetSearchAdvancedMigratedEnum = "false"
)

type GetSearchAdvancedNoticeEnum string

const (
	GetSearchAdvancedNoticeEnumTrue  GetSearchAdvancedNoticeEnum = "true"
	GetSearchAdvancedNoticeEnumFalse GetSearchAdvancedNoticeEnum = "false"
)

type GetSearchAdvancedOrderEnum string

const (
	GetSearchAdvancedOrderEnumDesc GetSearchAdvancedOrderEnum = "desc"
	GetSearchAdvancedOrderEnumAsc  GetSearchAdvancedOrderEnum = "asc"
)

type GetSearchAdvancedSortEnum string

const (
	GetSearchAdvancedSortEnumActivity  GetSearchAdvancedSortEnum = "activity"
	GetSearchAdvancedSortEnumCreation  GetSearchAdvancedSortEnum = "creation"
	GetSearchAdvancedSortEnumVotes     GetSearchAdvancedSortEnum = "votes"
	GetSearchAdvancedSortEnumRelevance GetSearchAdvancedSortEnum = "relevance"
)

type GetSearchAdvancedWikiEnum string

const (
	GetSearchAdvancedWikiEnumTrue  GetSearchAdvancedWikiEnum = "true"
	GetSearchAdvancedWikiEnumFalse GetSearchAdvancedWikiEnum = "false"
)

type GetSearchAdvancedQueryParams struct {
	Accepted  *GetSearchAdvancedAcceptedEnum `queryParam:"style=form,explode=true,name=accepted"`
	Answers   *int64                         `queryParam:"style=form,explode=true,name=answers"`
	Body      *string                        `queryParam:"style=form,explode=true,name=body"`
	Callback  *string                        `queryParam:"style=form,explode=true,name=callback"`
	Closed    *GetSearchAdvancedClosedEnum   `queryParam:"style=form,explode=true,name=closed"`
	Filter    *string                        `queryParam:"style=form,explode=true,name=filter"`
	Fromdate  *int64                         `queryParam:"style=form,explode=true,name=fromdate"`
	Max       *string                        `queryParam:"style=form,explode=true,name=max"`
	Migrated  *GetSearchAdvancedMigratedEnum `queryParam:"style=form,explode=true,name=migrated"`
	Min       *string                        `queryParam:"style=form,explode=true,name=min"`
	Notice    *GetSearchAdvancedNoticeEnum   `queryParam:"style=form,explode=true,name=notice"`
	Nottagged *string                        `queryParam:"style=form,explode=true,name=nottagged"`
	Order     *GetSearchAdvancedOrderEnum    `queryParam:"style=form,explode=true,name=order"`
	Page      *int64                         `queryParam:"style=form,explode=true,name=page"`
	Pagesize  *int64                         `queryParam:"style=form,explode=true,name=pagesize"`
	Q         *string                        `queryParam:"style=form,explode=true,name=q"`
	Site      string                         `queryParam:"style=form,explode=true,name=site"`
	Sort      *GetSearchAdvancedSortEnum     `queryParam:"style=form,explode=true,name=sort"`
	Tagged    *string                        `queryParam:"style=form,explode=true,name=tagged"`
	Title     *string                        `queryParam:"style=form,explode=true,name=title"`
	Todate    *int64                         `queryParam:"style=form,explode=true,name=todate"`
	URL       *string                        `queryParam:"style=form,explode=true,name=url"`
	User      *int64                         `queryParam:"style=form,explode=true,name=user"`
	Views     *int64                         `queryParam:"style=form,explode=true,name=views"`
	Wiki      *GetSearchAdvancedWikiEnum     `queryParam:"style=form,explode=true,name=wiki"`
}

type GetSearchAdvancedRequest struct {
	QueryParams GetSearchAdvancedQueryParams
}

type GetSearchAdvancedResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
