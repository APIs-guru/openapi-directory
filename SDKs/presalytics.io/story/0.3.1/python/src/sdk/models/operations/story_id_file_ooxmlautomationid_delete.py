from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class StoryIDFileOoxmlautomationidDeletePathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    ooxml_automation_id: str = field(metadata={'path_param': { 'field_name': 'ooxml_automation_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class StoryIDFileOoxmlautomationidDeleteRequest:
    path_params: StoryIDFileOoxmlautomationidDeletePathParams = field()
    

@dataclass
class StoryIDFileOoxmlautomationidDeleteResponse:
    content_type: str = field()
    status_code: int = field()
    problem_detail: Optional[Any] = field(default=None)
    
