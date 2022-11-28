from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class HealthCheckHeaders:
    accept_language: str = field(metadata={'header': { 'field_name': 'Accept-Language', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class HealthCheck200ApplicationJSON:
    all_good: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allGood') }})
    capi_ok: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('capiOk') }})
    db_ok: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dbOk') }})
    memcached_ok: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('memcachedOk') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass
class HealthCheckRequest:
    headers: HealthCheckHeaders = field()
    

@dataclass
class HealthCheckResponse:
    content_type: str = field()
    status_code: int = field()
    health_check_200_application_json_object: Optional[HealthCheck200ApplicationJSON] = field(default=None)
    
