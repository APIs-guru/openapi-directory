from dataclasses import dataclass, field
from typing import Optional
GET_VISUAL_CROSSING_WEB_SERVICES_REST_SERVICES_WEATHERDATA_FORECAST_SERVERS = [
	"https://weather.visualcrossing.com",
]


@dataclass
class GetVisualCrossingWebServicesRestServicesWeatherdataForecastQueryParams:
    aggregate_hours: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'aggregateHours', 'style': 'form', 'explode': True }})
    allow_asynch: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'allowAsynch', 'style': 'form', 'explode': True }})
    content_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'contentType', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    locations: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'locations', 'style': 'form', 'explode': True }})
    send_as_datasource: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'sendAsDatasource', 'style': 'form', 'explode': True }})
    short_column_names: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'shortColumnNames', 'style': 'form', 'explode': True }})
    unit_group: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'unitGroup', 'style': 'form', 'explode': True }})
    

@dataclass
class GetVisualCrossingWebServicesRestServicesWeatherdataForecastRequest:
    server_url: Optional[str] = field(default=None)
    query_params: GetVisualCrossingWebServicesRestServicesWeatherdataForecastQueryParams = field(default=None)
    

@dataclass
class GetVisualCrossingWebServicesRestServicesWeatherdataForecastResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
