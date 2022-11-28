from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class GetCustomersAccountAnnouncementsPathParams:
    account: int = field(metadata={'path_param': { 'field_name': 'account', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class GetCustomersAccountAnnouncements200ApplicationJSON:
    list: Optional[List[shared.OneannouncementsPostResponses201ContentApplication1jsonSchema]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('list') }})
    

@dataclass
class GetCustomersAccountAnnouncementsRequest:
    path_params: GetCustomersAccountAnnouncementsPathParams = field()
    

@dataclass
class GetCustomersAccountAnnouncementsResponse:
    content_type: str = field()
    status_code: int = field()
    get_customers_account_announcements_200_application_json_object: Optional[GetCustomersAccountAnnouncements200ApplicationJSON] = field(default=None)
    oneannouncements_post_responses_403_content_application_1json_schema: Optional[shared.OneannouncementsPostResponses403ContentApplication1jsonSchema] = field(default=None)
    
