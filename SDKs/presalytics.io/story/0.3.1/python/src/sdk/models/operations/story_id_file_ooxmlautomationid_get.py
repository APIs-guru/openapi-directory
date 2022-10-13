from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class StoryIDFileOoxmlautomationidGetPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    ooxml_automation_id: str = field(default=None, metadata={'path_param': { 'field_name': 'ooxml_automation_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class StoryIDFileOoxmlautomationidGetRequest:
    path_params: StoryIDFileOoxmlautomationidGetPathParams = field(default=None)
    

@dataclass
class StoryIDFileOoxmlautomationidGetResponse:
    content_type: str = field(default=None)
    excel_spreadsheet: Optional[bytes] = field(default=None)
    powerpoint_presentation: Optional[bytes] = field(default=None)
    status_code: int = field(default=None)
    word_document: Optional[bytes] = field(default=None)
    problem_detail: Optional[Any] = field(default=None)
    
