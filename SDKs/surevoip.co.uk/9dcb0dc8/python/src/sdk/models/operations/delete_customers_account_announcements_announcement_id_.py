from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DeleteCustomersAccountAnnouncementsAnnouncementIDPathParams:
    account: int = field(metadata={'path_param': { 'field_name': 'account', 'style': 'simple', 'explode': False }})
    announcement_id: str = field(metadata={'path_param': { 'field_name': 'announcement_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteCustomersAccountAnnouncementsAnnouncementIDRequest:
    path_params: DeleteCustomersAccountAnnouncementsAnnouncementIDPathParams = field()
    

@dataclass
class DeleteCustomersAccountAnnouncementsAnnouncementIDResponse:
    content_type: str = field()
    status_code: int = field()
    oneannouncements_post_responses_403_content_application_1json_schema: Optional[shared.OneannouncementsPostResponses403ContentApplication1jsonSchema] = field(default=None)
    
