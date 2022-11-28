from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional


@dataclass
class ExportTransactionsCsvv3QueryParams:
    end_date: Optional[date] = field(default=None, metadata={'query_param': { 'field_name': 'endDate', 'style': 'form', 'explode': True }})
    payor_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'payorId', 'style': 'form', 'explode': True }})
    start_date: Optional[date] = field(default=None, metadata={'query_param': { 'field_name': 'startDate', 'style': 'form', 'explode': True }})
    

@dataclass
class ExportTransactionsCsvv3Request:
    query_params: ExportTransactionsCsvv3QueryParams = field()
    

@dataclass
class ExportTransactionsCsvv3Response:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    inline_response_400: Optional[Any] = field(default=None)
    inline_response_401: Optional[Any] = field(default=None)
    inline_response_403: Optional[Any] = field(default=None)
    
