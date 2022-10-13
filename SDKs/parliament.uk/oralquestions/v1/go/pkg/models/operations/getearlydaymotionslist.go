package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type GetEarlyDayMotionsListParametersOrderByEnum string

const (
	GetEarlyDayMotionsListParametersOrderByEnumDateTabledAsc      GetEarlyDayMotionsListParametersOrderByEnum = "DateTabledAsc"
	GetEarlyDayMotionsListParametersOrderByEnumDateTabledDesc     GetEarlyDayMotionsListParametersOrderByEnum = "DateTabledDesc"
	GetEarlyDayMotionsListParametersOrderByEnumTitleAsc           GetEarlyDayMotionsListParametersOrderByEnum = "TitleAsc"
	GetEarlyDayMotionsListParametersOrderByEnumTitleDesc          GetEarlyDayMotionsListParametersOrderByEnum = "TitleDesc"
	GetEarlyDayMotionsListParametersOrderByEnumSignatureCountAsc  GetEarlyDayMotionsListParametersOrderByEnum = "SignatureCountAsc"
	GetEarlyDayMotionsListParametersOrderByEnumSignatureCountDesc GetEarlyDayMotionsListParametersOrderByEnum = "SignatureCountDesc"
)

type GetEarlyDayMotionsListParametersStatusesEnum string

const (
	GetEarlyDayMotionsListParametersStatusesEnumPublished GetEarlyDayMotionsListParametersStatusesEnum = "Published"
	GetEarlyDayMotionsListParametersStatusesEnumWithdrawn GetEarlyDayMotionsListParametersStatusesEnum = "Withdrawn"
)

type GetEarlyDayMotionsListQueryParams struct {
	ParametersCurrentStatusDateEnd     *time.Time                                     `queryParam:"style=form,explode=true,name=parameters.currentStatusDateEnd"`
	ParametersCurrentStatusDateStart   *time.Time                                     `queryParam:"style=form,explode=true,name=parameters.currentStatusDateStart"`
	ParametersEdmIds                   []int32                                        `queryParam:"style=form,explode=true,name=parameters.edmIds"`
	ParametersIncludeSponsoredByMember *bool                                          `queryParam:"style=form,explode=true,name=parameters.includeSponsoredByMember"`
	ParametersIsPrayer                 *bool                                          `queryParam:"style=form,explode=true,name=parameters.isPrayer"`
	ParametersMemberID                 *int32                                         `queryParam:"style=form,explode=true,name=parameters.memberId"`
	ParametersOrderBy                  *GetEarlyDayMotionsListParametersOrderByEnum   `queryParam:"style=form,explode=true,name=parameters.orderBy"`
	ParametersSearchTerm               *string                                        `queryParam:"style=form,explode=true,name=parameters.searchTerm"`
	ParametersSkip                     *int32                                         `queryParam:"style=form,explode=true,name=parameters.skip"`
	ParametersStatuses                 []GetEarlyDayMotionsListParametersStatusesEnum `queryParam:"style=form,explode=true,name=parameters.statuses"`
	ParametersTabledEndDate            *time.Time                                     `queryParam:"style=form,explode=true,name=parameters.tabledEndDate"`
	ParametersTabledStartDate          *time.Time                                     `queryParam:"style=form,explode=true,name=parameters.tabledStartDate"`
	ParametersTake                     *int32                                         `queryParam:"style=form,explode=true,name=parameters.take"`
	ParametersUInWithAmendmentSuffix   *string                                        `queryParam:"style=form,explode=true,name=parameters.uINWithAmendmentSuffix"`
}

type GetEarlyDayMotionsListRequest struct {
	QueryParams GetEarlyDayMotionsListQueryParams
}

type GetEarlyDayMotionsListResponse struct {
	APIResponseListPublishedWrittenQuestion *shared.APIResponseListPublishedWrittenQuestion
	APIResponseObject                       *shared.APIResponseObject
	Body                                    []byte
	ContentType                             string
	StatusCode                              int64
}
