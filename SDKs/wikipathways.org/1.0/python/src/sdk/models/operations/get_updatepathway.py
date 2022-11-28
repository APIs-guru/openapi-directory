from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum

class GetUpdatePathwayFormatEnum(str, Enum):
    JSON = "json"
    XML = "xml"
    HTML = "html"
    DUMP = "dump"
    JPG = "jpg"
    PDF = "pdf"


@dataclass
class GetUpdatePathwayQueryParams:
    auth: str = field(metadata={'query_param': { 'field_name': 'auth', 'style': 'form', 'explode': True }})
    description: str = field(metadata={'query_param': { 'field_name': 'description', 'style': 'form', 'explode': True }})
    gpml: str = field(metadata={'query_param': { 'field_name': 'gpml', 'style': 'form', 'explode': True }})
    pw_id: str = field(metadata={'query_param': { 'field_name': 'pwId', 'style': 'form', 'explode': True }})
    revision: int = field(metadata={'query_param': { 'field_name': 'revision', 'style': 'form', 'explode': True }})
    username: str = field(metadata={'query_param': { 'field_name': 'username', 'style': 'form', 'explode': True }})
    format: Optional[GetUpdatePathwayFormatEnum] = field(default=None, metadata={'query_param': { 'field_name': 'format', 'style': 'form', 'explode': True }})
    

@dataclass
class GetUpdatePathwayRequest:
    query_params: GetUpdatePathwayQueryParams = field()
    

@dataclass
class GetUpdatePathwayResponse:
    content_type: str = field()
    status_code: int = field()
    
