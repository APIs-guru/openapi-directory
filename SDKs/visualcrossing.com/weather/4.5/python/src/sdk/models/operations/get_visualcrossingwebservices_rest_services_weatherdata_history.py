from dataclasses import dataclass, field
from typing import Optional
GET_VISUAL_CROSSING_WEB_SERVICES_REST_SERVICES_WEATHERDATA_HISTORY_SERVERS = [
	"https://weather.visualcrossing.com",
]


@dataclass
class GetVisualCrossingWebServicesRestServicesWeatherdataHistoryQueryParams:
    aggregate_hours: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'aggregateHours', 'style': 'form', 'explode': True }})
    allow_asynch: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'allowAsynch', 'style': 'form', 'explode': True }})
    collect_station_contributions: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'collectStationContributions', 'style': 'form', 'explode': True }})
    content_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'contentType', 'style': 'form', 'explode': True }})
    end_date_time: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'endDateTime', 'style': 'form', 'explode': True }})
    include_normals: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'includeNormals', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    locations: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'locations', 'style': 'form', 'explode': True }})
    max_distance: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'maxDistance', 'style': 'form', 'explode': True }})
    max_stations: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'maxStations', 'style': 'form', 'explode': True }})
    short_column_names: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'shortColumnNames', 'style': 'form', 'explode': True }})
    start_date_time: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'startDateTime', 'style': 'form', 'explode': True }})
    unit_group: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'unitGroup', 'style': 'form', 'explode': True }})
    

@dataclass
class GetVisualCrossingWebServicesRestServicesWeatherdataHistoryRequest:
    server_url: Optional[str] = field(default=None)
    query_params: GetVisualCrossingWebServicesRestServicesWeatherdataHistoryQueryParams = field(default=None)
    

@dataclass
class GetVisualCrossingWebServicesRestServicesWeatherdataHistoryResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
