package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type GetAPIMembersSearchQueryParams struct {
	ConstituencyID                           *int32     `queryParam:"style=form,explode=true,name=ConstituencyId"`
	Experience                               *string    `queryParam:"style=form,explode=true,name=Experience"`
	Gender                                   *string    `queryParam:"style=form,explode=true,name=Gender"`
	House                                    *int32     `queryParam:"style=form,explode=true,name=House"`
	IsCurrentMember                          *bool      `queryParam:"style=form,explode=true,name=IsCurrentMember"`
	IsEligible                               *bool      `queryParam:"style=form,explode=true,name=IsEligible"`
	Location                                 *string    `queryParam:"style=form,explode=true,name=Location"`
	MembershipEndedMembershipEndReasonIds    []int32    `queryParam:"style=form,explode=true,name=MembershipEnded.MembershipEndReasonIds"`
	MembershipEndedMembershipEndedSince      *time.Time `queryParam:"style=form,explode=true,name=MembershipEnded.MembershipEndedSince"`
	MembershipInDateRangeWasMemberOfHouse    *int32     `queryParam:"style=form,explode=true,name=MembershipInDateRange.WasMemberOfHouse"`
	MembershipInDateRangeWasMemberOnOrAfter  *time.Time `queryParam:"style=form,explode=true,name=MembershipInDateRange.WasMemberOnOrAfter"`
	MembershipInDateRangeWasMemberOnOrBefore *time.Time `queryParam:"style=form,explode=true,name=MembershipInDateRange.WasMemberOnOrBefore"`
	MembershipStartedSince                   *time.Time `queryParam:"style=form,explode=true,name=MembershipStartedSince"`
	Name                                     *string    `queryParam:"style=form,explode=true,name=Name"`
	NameStartsWith                           *string    `queryParam:"style=form,explode=true,name=NameStartsWith"`
	PartyID                                  *int32     `queryParam:"style=form,explode=true,name=PartyId"`
	PolicyInterestID                         *int32     `queryParam:"style=form,explode=true,name=PolicyInterestId"`
	PostTitle                                *string    `queryParam:"style=form,explode=true,name=PostTitle"`
	Skip                                     *int32     `queryParam:"style=form,explode=true,name=skip"`
	Take                                     *int32     `queryParam:"style=form,explode=true,name=take"`
}

type GetAPIMembersSearchRequest struct {
	QueryParams GetAPIMembersSearchQueryParams
}

type GetAPIMembersSearchResponse struct {
	Body                             []byte
	ContentType                      string
	MemberMembersServiceSearchResult *shared.MemberMembersServiceSearchResult
	StatusCode                       int64
}
