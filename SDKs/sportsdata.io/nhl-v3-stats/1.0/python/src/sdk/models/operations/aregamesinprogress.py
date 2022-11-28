from dataclasses import dataclass, field
from typing import Optional
from enum import Enum

class AreGamesInProgressFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclass
class AreGamesInProgressPathParams:
    format: AreGamesInProgressFormatEnum = field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclass
class AreGamesInProgressRequest:
    path_params: AreGamesInProgressPathParams = field()
    

@dataclass
class AreGamesInProgressResponse:
    content_type: str = field()
    status_code: int = field()
    are_games_in_progress_200_application_json_boolean: Optional[bool] = field(default=None)
    
