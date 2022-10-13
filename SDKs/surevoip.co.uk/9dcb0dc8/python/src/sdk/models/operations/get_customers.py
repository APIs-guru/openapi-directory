from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GetCustomers302ApplicationJSON:
    location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location' }})
    

@dataclass
class GetCustomersResponse:
    content_type: str = field(default=None)
    get_customers_302_application_json_object: Optional[GetCustomers302ApplicationJSON] = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    
