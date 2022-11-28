from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class StoryIDOutlineGetPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class StoryIDOutlineGetRequest:
    path_params: StoryIDOutlineGetPathParams = field()
    

@dataclass
class StoryIDOutlineGetResponse:
    content_type: str = field()
    status_code: int = field()
    problem_detail: Optional[Any] = field(default=None)
    status: Optional[Any] = field(default=None)
    story_id_outline_get_200_application_json_string: Optional[str] = field(default=None)
    
