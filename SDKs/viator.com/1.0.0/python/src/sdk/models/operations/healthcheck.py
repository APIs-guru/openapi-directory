from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass
class HealthCheckHeaders:
    accept_language: str = field(default=None, metadata={'header': { 'field_name': 'Accept-Language' }})
    

@dataclass
class HealthCheckRequest:
    headers: HealthCheckHeaders = field(default=None)
    

@dataclass_json
@dataclass
class HealthCheck200ApplicationJSON:
    all_good: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allGood' }})
    capi_ok: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'capiOk' }})
    db_ok: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dbOk' }})
    memcached_ok: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'memcachedOk' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass
class HealthCheckResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    health_check_200_application_json_object: Optional[HealthCheck200ApplicationJSON] = field(default=None)
    
