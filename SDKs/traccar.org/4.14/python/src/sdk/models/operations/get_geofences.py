from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetGeofencesQueryParams:
    all: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'all', 'style': 'form', 'explode': True }})
    device_id: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'deviceId', 'style': 'form', 'explode': True }})
    group_id: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'groupId', 'style': 'form', 'explode': True }})
    refresh: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'refresh', 'style': 'form', 'explode': True }})
    user_id: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'userId', 'style': 'form', 'explode': True }})
    

@dataclass
class GetGeofencesRequest:
    query_params: GetGeofencesQueryParams = field()
    

@dataclass
class GetGeofencesResponse:
    content_type: str = field()
    status_code: int = field()
    geofences: Optional[List[shared.Geofence]] = field(default=None)
    
