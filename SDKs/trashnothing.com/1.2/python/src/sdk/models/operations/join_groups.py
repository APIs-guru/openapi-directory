from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class JoinGroupsRequestBody:
    group_ids: str = field(metadata={'multipart_form': { 'field_name': 'group_ids' }})
    

@dataclass_json
@dataclass
class JoinGroups200ApplicationJSON:
    groups: Optional[List[shared.Group]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('groups') }})
    over_group_limit: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('over_group_limit') }})
    

@dataclass
class JoinGroupsRequest:
    request: JoinGroupsRequestBody = field(metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclass
class JoinGroupsResponse:
    content_type: str = field()
    status_code: int = field()
    join_groups_200_application_json_object: Optional[JoinGroups200ApplicationJSON] = field(default=None)
    
