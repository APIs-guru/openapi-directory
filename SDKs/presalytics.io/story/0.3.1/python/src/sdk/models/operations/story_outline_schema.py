from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class StoryOutlineSchemaPathParams:
    schema_version: str = field(metadata={'path_param': { 'field_name': 'schema_version', 'style': 'simple', 'explode': False }})
    

@dataclass
class StoryOutlineSchemaRequest:
    path_params: StoryOutlineSchemaPathParams = field()
    

@dataclass
class StoryOutlineSchemaResponse:
    content_type: str = field()
    status_code: int = field()
    problem_detail: Optional[Any] = field(default=None)
    
