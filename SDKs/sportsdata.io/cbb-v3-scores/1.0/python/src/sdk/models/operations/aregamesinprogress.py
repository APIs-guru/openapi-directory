from dataclasses import dataclass, field
from typing import Enum,Optional

class AreGamesInProgressFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclass
class AreGamesInProgressPathParams:
    format: AreGamesInProgressFormatEnum = field(default=None, metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclass
class AreGamesInProgressRequest:
    path_params: AreGamesInProgressPathParams = field(default=None)
    

@dataclass
class AreGamesInProgressResponse:
    are_games_in_progress_200_application_json_boolean: Optional[bool] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
