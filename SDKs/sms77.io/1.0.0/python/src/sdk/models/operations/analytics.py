from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class AnalyticsGroupByEnum(str, Enum):
    DATE = "date"
    LABEL = "label"
    SUBACCOUNT = "subaccount"
    COUNTRY = "country"


@dataclass
class AnalyticsQueryParams:
    end: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'end', 'style': 'form', 'explode': True }})
    group_by: Optional[AnalyticsGroupByEnum] = field(default=None, metadata={'query_param': { 'field_name': 'group_by', 'style': 'form', 'explode': True }})
    label: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'label', 'style': 'form', 'explode': True }})
    start: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'start', 'style': 'form', 'explode': True }})
    subaccounts: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'subaccounts', 'style': 'form', 'explode': True }})
    

@dataclass
class AnalyticsRequest:
    query_params: AnalyticsQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class Analytics200ApplicationJSON:
    date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date' }})
    direct: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'direct' }})
    economy: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'economy' }})
    hlr: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hlr' }})
    inbound: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inbound' }})
    mnp: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mnp' }})
    usage_eur: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'usage_eur' }})
    voice: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'voice' }})
    

@dataclass
class AnalyticsResponse:
    analytics_200_application_json_object: Optional[Analytics200ApplicationJSON] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
