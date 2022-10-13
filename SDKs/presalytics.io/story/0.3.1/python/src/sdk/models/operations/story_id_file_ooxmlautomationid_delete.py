from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class StoryIDFileOoxmlautomationidDeletePathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    ooxml_automation_id: str = field(default=None, metadata={'path_param': { 'field_name': 'ooxml_automation_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class StoryIDFileOoxmlautomationidDeleteRequest:
    path_params: StoryIDFileOoxmlautomationidDeletePathParams = field(default=None)
    

@dataclass
class StoryIDFileOoxmlautomationidDeleteResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    problem_detail: Optional[Any] = field(default=None)
    
