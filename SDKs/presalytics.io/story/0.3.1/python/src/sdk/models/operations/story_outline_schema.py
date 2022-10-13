from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class StoryOutlineSchemaPathParams:
    schema_version: str = field(default=None, metadata={'path_param': { 'field_name': 'schema_version', 'style': 'simple', 'explode': False }})
    

@dataclass
class StoryOutlineSchemaRequest:
    path_params: StoryOutlineSchemaPathParams = field(default=None)
    

@dataclass
class StoryOutlineSchemaResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    problem_detail: Optional[Any] = field(default=None)
    
