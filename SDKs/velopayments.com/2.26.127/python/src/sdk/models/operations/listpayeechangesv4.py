from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from sdk.models import shared


@dataclass
class ListPayeeChangesV4QueryParams:
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'pageSize', 'style': 'form', 'explode': True }})
    payor_id: str = field(default=None, metadata={'query_param': { 'field_name': 'payorId', 'style': 'form', 'explode': True }})
    updated_since: datetime = field(default=None, metadata={'query_param': { 'field_name': 'updatedSince', 'style': 'form', 'explode': True }})
    

@dataclass
class ListPayeeChangesV4Request:
    query_params: ListPayeeChangesV4QueryParams = field(default=None)
    

@dataclass
class ListPayeeChangesV4Response:
    content_type: str = field(default=None)
    payee_delta_response_2: Optional[shared.PayeeDeltaResponse2] = field(default=None)
    status_code: int = field(default=None)
    
