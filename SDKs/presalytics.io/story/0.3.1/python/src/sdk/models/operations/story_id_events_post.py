from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class StoryIDEventsPostPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class StoryIDEventsPostRequest:
    path_params: StoryIDEventsPostPathParams = field(default=None)
    request: shared.ManageEvent = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class StoryIDEventsPostResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    problem_detail: Optional[Any] = field(default=None)
    story_id_events_post_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
