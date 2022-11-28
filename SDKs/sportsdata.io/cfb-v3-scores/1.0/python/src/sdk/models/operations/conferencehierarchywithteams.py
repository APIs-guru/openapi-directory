from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum

class ConferenceHierarchyWithTeamsFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclass
class ConferenceHierarchyWithTeamsPathParams:
    format: ConferenceHierarchyWithTeamsFormatEnum = field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclass
class ConferenceHierarchyWithTeamsRequest:
    path_params: ConferenceHierarchyWithTeamsPathParams = field()
    

@dataclass
class ConferenceHierarchyWithTeamsResponse:
    content_type: str = field()
    status_code: int = field()
    conferences: Optional[List[Any]] = field(default=None)
    
