from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared


@dataclass
class GetCallLogsPathParams:
    account_id: str = field(default=None, metadata={'path_param': { 'field_name': 'account_id', 'style': 'simple', 'explode': False }})
    
class GetCallLogsDirectionEnum(str, Enum):
    INBOUND = "Inbound"
    OUTBOUND = "Outbound"


@dataclass
class GetCallLogsQueryParams:
    destination_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'destination_user', 'style': 'form', 'explode': True }})
    direction: Optional[GetCallLogsDirectionEnum] = field(default=None, metadata={'query_param': { 'field_name': 'direction', 'style': 'form', 'explode': True }})
    end_gte: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'end:gte', 'style': 'form', 'explode': True }})
    end_lte: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'end:lte', 'style': 'form', 'explode': True }})
    from_: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'from', 'style': 'form', 'explode': True }})
    page: float = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    page_size: float = field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    source_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'source_user', 'style': 'form', 'explode': True }})
    start_gte: str = field(default=None, metadata={'query_param': { 'field_name': 'start:gte', 'style': 'form', 'explode': True }})
    start_lte: str = field(default=None, metadata={'query_param': { 'field_name': 'start:lte', 'style': 'form', 'explode': True }})
    to: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'to', 'style': 'form', 'explode': True }})
    

@dataclass
class GetCallLogsSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetCallLogsRequest:
    path_params: GetCallLogsPathParams = field(default=None)
    query_params: GetCallLogsQueryParams = field(default=None)
    security: GetCallLogsSecurity = field(default=None)
    

@dataclass
class GetCallLogsResponse:
    call_logs_hal_response: Optional[shared.CallLogsHalResponse] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    validation_errors_response: Optional[shared.ValidationErrorsResponse] = field(default=None)
    
