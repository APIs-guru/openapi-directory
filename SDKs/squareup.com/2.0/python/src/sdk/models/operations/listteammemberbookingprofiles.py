from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class ListTeamMemberBookingProfilesQueryParams:
    bookable_only: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'bookable_only', 'style': 'form', 'explode': True }})
    cursor: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'cursor', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    location_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'location_id', 'style': 'form', 'explode': True }})
    

@dataclass
class ListTeamMemberBookingProfilesSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class ListTeamMemberBookingProfilesRequest:
    query_params: ListTeamMemberBookingProfilesQueryParams = field(default=None)
    security: ListTeamMemberBookingProfilesSecurity = field(default=None)
    

@dataclass
class ListTeamMemberBookingProfilesResponse:
    content_type: str = field(default=None)
    list_team_member_booking_profiles_response: Optional[shared.ListTeamMemberBookingProfilesResponse] = field(default=None)
    status_code: int = field(default=None)
    
