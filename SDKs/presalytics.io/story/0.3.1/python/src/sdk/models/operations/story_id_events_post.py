from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class StoryIDEventsPostPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class StoryIDEventsPostRequest:
    path_params: StoryIDEventsPostPathParams = field()
    request: shared.ManageEvent = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class StoryIDEventsPostResponse:
    content_type: str = field()
    status_code: int = field()
    problem_detail: Optional[Any] = field(default=None)
    story_id_events_post_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
