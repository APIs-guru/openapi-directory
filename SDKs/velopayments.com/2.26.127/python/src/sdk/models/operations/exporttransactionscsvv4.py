from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional

class ExportTransactionsCsvv4IncludeEnum(str, Enum):
    PAYOR_ONLY = "payorOnly"
    PAYOR_AND_DESCENDANTS = "payorAndDescendants"


@dataclass
class ExportTransactionsCsvv4QueryParams:
    end_date: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'endDate', 'style': 'form', 'explode': True }})
    include: Optional[ExportTransactionsCsvv4IncludeEnum] = field(default=None, metadata={'query_param': { 'field_name': 'include', 'style': 'form', 'explode': True }})
    payor_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'payorId', 'style': 'form', 'explode': True }})
    start_date: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'startDate', 'style': 'form', 'explode': True }})
    

@dataclass
class ExportTransactionsCsvv4Request:
    query_params: ExportTransactionsCsvv4QueryParams = field(default=None)
    

@dataclass
class ExportTransactionsCsvv4Response:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
