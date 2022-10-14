from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostTeamsTeamIDMembershipsResendInviteMailPathParams:
    team_id: str = field(default=None, metadata={'path_param': { 'field_name': 'teamId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostTeamsTeamIDMembershipsResendInviteMailRequests:
    user_invitation_info: Optional[shared.UserInvitationInfo] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    user_invitation_info1: Optional[shared.UserInvitationInfo] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    user_invitation_info2: Optional[shared.UserInvitationInfo] = field(default=None, metadata={'request': { 'media_type': 'application/json-patch+json' }})
    user_invitation_info3: Optional[shared.UserInvitationInfo] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class PostTeamsTeamIDMembershipsResendInviteMailRequest:
    path_params: PostTeamsTeamIDMembershipsResendInviteMailPathParams = field(default=None)
    request: Optional[PostTeamsTeamIDMembershipsResendInviteMailRequests] = field(default=None)
    

@dataclass
class PostTeamsTeamIDMembershipsResendInviteMailResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    error_response_content: Optional[shared.ErrorResponseContent] = field(default=None)
    post_teams_team_id_memberships_resend_invite_mail_200_application_json_string: Optional[str] = field(default=None)
    post_teams_team_id_memberships_resend_invite_mail_200_text_json_string: Optional[str] = field(default=None)
    post_teams_team_id_memberships_resend_invite_mail_200_text_plain_string: Optional[str] = field(default=None)
    status_code: int = field(default=None)
    
