from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from sdk.models import shared


@dataclass
class ListPayeeChangesV3QueryParams:
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'pageSize', 'style': 'form', 'explode': True }})
    payor_id: str = field(default=None, metadata={'query_param': { 'field_name': 'payorId', 'style': 'form', 'explode': True }})
    updated_since: datetime = field(default=None, metadata={'query_param': { 'field_name': 'updatedSince', 'style': 'form', 'explode': True }})
    

@dataclass
class ListPayeeChangesV3Request:
    query_params: ListPayeeChangesV3QueryParams = field(default=None)
    

@dataclass
class ListPayeeChangesV3Response:
    content_type: str = field(default=None)
    payee_delta_response: Optional[shared.PayeeDeltaResponse] = field(default=None)
    status_code: int = field(default=None)
    
