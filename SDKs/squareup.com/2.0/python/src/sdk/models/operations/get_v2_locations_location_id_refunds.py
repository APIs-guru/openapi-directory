from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetV2LocationsLocationIDRefundsPathParams:
    location_id: str = field(default=None, metadata={'path_param': { 'field_name': 'location_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetV2LocationsLocationIDRefundsQueryParams:
    begin_time: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'begin_time', 'style': 'form', 'explode': True }})
    cursor: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'cursor', 'style': 'form', 'explode': True }})
    end_time: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'end_time', 'style': 'form', 'explode': True }})
    sort_order: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'sort_order', 'style': 'form', 'explode': True }})
    

@dataclass
class GetV2LocationsLocationIDRefundsSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetV2LocationsLocationIDRefundsRequest:
    path_params: GetV2LocationsLocationIDRefundsPathParams = field(default=None)
    query_params: GetV2LocationsLocationIDRefundsQueryParams = field(default=None)
    security: GetV2LocationsLocationIDRefundsSecurity = field(default=None)
    

@dataclass
class GetV2LocationsLocationIDRefundsResponse:
    content_type: str = field(default=None)
    list_refunds_response: Optional[shared.ListRefundsResponse] = field(default=None)
    status_code: int = field(default=None)
    
