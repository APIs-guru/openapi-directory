from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class RunsForRunPathParams:
    run_ref: str = field(metadata={'path_param': { 'field_name': 'run_ref', 'style': 'simple', 'explode': False }})
    
class RunsForRunExpandEnum(str, Enum):
    ALL = "All"
    VEHICLE_DESCRIPTOR = "VehicleDescriptor"
    VEHICLE_POSITION = "VehiclePosition"
    NONE = "None"


@dataclass
class RunsForRunQueryParams:
    expand: List[RunsForRunExpandEnum] = field(metadata={'query_param': { 'field_name': 'expand', 'style': 'form', 'explode': True }})
    date_utc: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'date_utc', 'style': 'form', 'explode': True }})
    devid: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'devid', 'style': 'form', 'explode': True }})
    include_geopath: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'include_geopath', 'style': 'form', 'explode': True }})
    signature: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'signature', 'style': 'form', 'explode': True }})
    token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'token', 'style': 'form', 'explode': True }})
    

@dataclass
class RunsForRunRequest:
    path_params: RunsForRunPathParams = field()
    query_params: RunsForRunQueryParams = field()
    

@dataclass
class RunsForRunResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    v3_error_response: Optional[shared.V3ErrorResponse] = field(default=None)
    v3_runs_response: Optional[shared.V3RunsResponse] = field(default=None)
    
