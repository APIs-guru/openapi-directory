from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional

class ConferenceHierarchyWithTeamsFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclass
class ConferenceHierarchyWithTeamsPathParams:
    format: ConferenceHierarchyWithTeamsFormatEnum = field(default=None, metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclass
class ConferenceHierarchyWithTeamsRequest:
    path_params: ConferenceHierarchyWithTeamsPathParams = field(default=None)
    

@dataclass
class ConferenceHierarchyWithTeamsResponse:
    conferences: Optional[List[Any]] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
