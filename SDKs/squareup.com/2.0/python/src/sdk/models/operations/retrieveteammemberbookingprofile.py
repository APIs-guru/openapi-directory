from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class RetrieveTeamMemberBookingProfilePathParams:
    team_member_id: str = field(default=None, metadata={'path_param': { 'field_name': 'team_member_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class RetrieveTeamMemberBookingProfileSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class RetrieveTeamMemberBookingProfileRequest:
    path_params: RetrieveTeamMemberBookingProfilePathParams = field(default=None)
    security: RetrieveTeamMemberBookingProfileSecurity = field(default=None)
    

@dataclass
class RetrieveTeamMemberBookingProfileResponse:
    content_type: str = field(default=None)
    retrieve_team_member_booking_profile_response: Optional[shared.RetrieveTeamMemberBookingProfileResponse] = field(default=None)
    status_code: int = field(default=None)
    
