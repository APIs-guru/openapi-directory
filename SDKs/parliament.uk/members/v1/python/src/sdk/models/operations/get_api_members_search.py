from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetAPIMembersSearchQueryParams:
    constituency_id: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'ConstituencyId', 'style': 'form', 'explode': True }})
    experience: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'Experience', 'style': 'form', 'explode': True }})
    gender: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'Gender', 'style': 'form', 'explode': True }})
    house: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'House', 'style': 'form', 'explode': True }})
    is_current_member: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'IsCurrentMember', 'style': 'form', 'explode': True }})
    is_eligible: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'IsEligible', 'style': 'form', 'explode': True }})
    location: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'Location', 'style': 'form', 'explode': True }})
    membership_ended_membership_end_reason_ids: Optional[List[int]] = field(default=None, metadata={'query_param': { 'field_name': 'MembershipEnded.MembershipEndReasonIds', 'style': 'form', 'explode': True }})
    membership_ended_membership_ended_since: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'MembershipEnded.MembershipEndedSince', 'style': 'form', 'explode': True }})
    membership_in_date_range_was_member_of_house: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'MembershipInDateRange.WasMemberOfHouse', 'style': 'form', 'explode': True }})
    membership_in_date_range_was_member_on_or_after: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'MembershipInDateRange.WasMemberOnOrAfter', 'style': 'form', 'explode': True }})
    membership_in_date_range_was_member_on_or_before: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'MembershipInDateRange.WasMemberOnOrBefore', 'style': 'form', 'explode': True }})
    membership_started_since: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'MembershipStartedSince', 'style': 'form', 'explode': True }})
    name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'Name', 'style': 'form', 'explode': True }})
    name_starts_with: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'NameStartsWith', 'style': 'form', 'explode': True }})
    party_id: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PartyId', 'style': 'form', 'explode': True }})
    policy_interest_id: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PolicyInterestId', 'style': 'form', 'explode': True }})
    post_title: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'PostTitle', 'style': 'form', 'explode': True }})
    skip: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'skip', 'style': 'form', 'explode': True }})
    take: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'take', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAPIMembersSearchRequest:
    query_params: GetAPIMembersSearchQueryParams = field(default=None)
    

@dataclass
class GetAPIMembersSearchResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    member_members_service_search_result: Optional[shared.MemberMembersServiceSearchResult] = field(default=None)
    status_code: int = field(default=None)
    
