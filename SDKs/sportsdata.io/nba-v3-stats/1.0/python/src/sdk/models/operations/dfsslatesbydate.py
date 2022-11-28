from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from enum import Enum

class DfsSlatesByDateFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclass
class DfsSlatesByDatePathParams:
    date_: str = field(metadata={'path_param': { 'field_name': 'date', 'style': 'simple', 'explode': False }})
    format: DfsSlatesByDateFormatEnum = field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclass
class DfsSlatesByDateRequest:
    path_params: DfsSlatesByDatePathParams = field()
    

@dataclass
class DfsSlatesByDateResponse:
    content_type: str = field()
    status_code: int = field()
    dfs_slates: Optional[List[Any]] = field(default=None)
    
