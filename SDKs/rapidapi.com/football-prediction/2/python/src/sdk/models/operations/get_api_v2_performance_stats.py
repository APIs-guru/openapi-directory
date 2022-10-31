from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass
class GetAPIV2PerformanceStatsHeaders:
    x_rapid_api_key: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-RapidApi-Key', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAPIV2PerformanceStatsRequest:
    headers: GetAPIV2PerformanceStatsHeaders = field(default=None)
    

@dataclass_json
@dataclass
class GetAPIV2PerformanceStats200ApplicationJSONDataAccuracy:
    last_14_days: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'last_14_days' }})
    last_30_days: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'last_30_days' }})
    last_7_days: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'last_7_days' }})
    yesterday: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'yesterday' }})
    

@dataclass_json
@dataclass
class GetAPIV2PerformanceStats200ApplicationJSONDataDetailsLast14Days:
    lost: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lost' }})
    pending: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pending' }})
    postponed: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'postponed' }})
    total: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    won: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'won' }})
    

@dataclass_json
@dataclass
class GetAPIV2PerformanceStats200ApplicationJSONDataDetailsLast30Days:
    lost: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lost' }})
    pending: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pending' }})
    postponed: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'postponed' }})
    total: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    won: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'won' }})
    

@dataclass_json
@dataclass
class GetAPIV2PerformanceStats200ApplicationJSONDataDetailsLast7Days:
    lost: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lost' }})
    pending: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pending' }})
    postponed: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'postponed' }})
    total: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    won: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'won' }})
    

@dataclass_json
@dataclass
class GetAPIV2PerformanceStats200ApplicationJSONDataDetailsYesterday:
    lost: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lost' }})
    pending: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pending' }})
    postponed: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'postponed' }})
    total: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    won: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'won' }})
    

@dataclass_json
@dataclass
class GetAPIV2PerformanceStats200ApplicationJSONDataDetails:
    last_14_days: Optional[GetAPIV2PerformanceStats200ApplicationJSONDataDetailsLast14Days] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'last_14_days' }})
    last_30_days: Optional[GetAPIV2PerformanceStats200ApplicationJSONDataDetailsLast30Days] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'last_30_days' }})
    last_7_days: Optional[GetAPIV2PerformanceStats200ApplicationJSONDataDetailsLast7Days] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'last_7_days' }})
    yesterday: Optional[GetAPIV2PerformanceStats200ApplicationJSONDataDetailsYesterday] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'yesterday' }})
    

@dataclass_json
@dataclass
class GetAPIV2PerformanceStats200ApplicationJSONData:
    accuracy: Optional[GetAPIV2PerformanceStats200ApplicationJSONDataAccuracy] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accuracy' }})
    details: Optional[GetAPIV2PerformanceStats200ApplicationJSONDataDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'details' }})
    market: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'market' }})
    

@dataclass_json
@dataclass
class GetAPIV2PerformanceStats200ApplicationJSON:
    data: Optional[GetAPIV2PerformanceStats200ApplicationJSONData] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    

@dataclass_json
@dataclass
class GetAPIV2PerformanceStats404ApplicationJSON:
    errors: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class GetAPIV2PerformanceStatsResponse:
    content_type: str = field(default=None)
    get_api_v2_performance_stats_200_application_json_object: Optional[GetAPIV2PerformanceStats200ApplicationJSON] = field(default=None)
    get_api_v2_performance_stats_404_application_json_object: Optional[GetAPIV2PerformanceStats404ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
