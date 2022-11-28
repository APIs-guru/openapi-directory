from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass_json
@dataclass
class PostCallsRequestBodyOptionsPlayAudio:
    announcement_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('announcement_id') }})
    

@dataclass_json
@dataclass
class PostCallsRequestBodyOptions:
    a_leg_caller_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('a_leg_caller_id') }})
    a_leg_only: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('a_leg_only') }})
    cancel_key: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cancel_key') }})
    connect_key: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('connect_key') }})
    play_audio: Optional[List[PostCallsRequestBodyOptionsPlayAudio]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('play_audio') }})
    

@dataclass_json
@dataclass
class PostCallsRequestBody:
    caller_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('caller_id') }})
    from_: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('from') }})
    to: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('to') }})
    announcement_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('announcement_at') }})
    announcement_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('announcement_id') }})
    hangup_announcement_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hangup_announcement_id') }})
    hangup_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hangup_at') }})
    options: Optional[PostCallsRequestBodyOptions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    

@dataclass_json
@dataclass
class PostCalls202ApplicationJSON:
    call: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Call') }})
    location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Location') }})
    

@dataclass
class PostCallsRequest:
    request: PostCallsRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostCallsResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    post_calls_202_application_json_object: Optional[PostCalls202ApplicationJSON] = field(default=None)
    oneannouncements_post_responses_400_content_application_1json_schema: Optional[shared.OneannouncementsPostResponses400ContentApplication1jsonSchema] = field(default=None)
    oneannouncements_post_responses_403_content_application_1json_schema: Optional[shared.OneannouncementsPostResponses403ContentApplication1jsonSchema] = field(default=None)
    
