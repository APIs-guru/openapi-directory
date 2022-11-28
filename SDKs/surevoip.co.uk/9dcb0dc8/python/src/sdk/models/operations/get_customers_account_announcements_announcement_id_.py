from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class GetCustomersAccountAnnouncementsAnnouncementIDPathParams:
    account: int = field(metadata={'path_param': { 'field_name': 'account', 'style': 'simple', 'explode': False }})
    announcement_id: str = field(metadata={'path_param': { 'field_name': 'announcement_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class GetCustomersAccountAnnouncementsAnnouncementID404ApplicationJSON:
    error: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    

@dataclass
class GetCustomersAccountAnnouncementsAnnouncementIDRequest:
    path_params: GetCustomersAccountAnnouncementsAnnouncementIDPathParams = field()
    

@dataclass
class GetCustomersAccountAnnouncementsAnnouncementIDResponse:
    content_type: str = field()
    status_code: int = field()
    get_customers_account_announcements_announcement_id_404_application_json_object: Optional[GetCustomersAccountAnnouncementsAnnouncementID404ApplicationJSON] = field(default=None)
    oneannouncements_post_responses_201_content_application_1json_schema: Optional[shared.OneannouncementsPostResponses201ContentApplication1jsonSchema] = field(default=None)
    
