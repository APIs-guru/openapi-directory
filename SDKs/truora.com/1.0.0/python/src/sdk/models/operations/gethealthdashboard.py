from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetHealthDashboardQueryParams:
    country: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'country', 'style': 'form', 'explode': True }})
    unix_timestamp_seconds: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'unixTimestampSeconds', 'style': 'form', 'explode': True }})
    unixtimezone_offset_seconds: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'unixtimezoneOffsetSeconds', 'style': 'form', 'explode': True }})
    

@dataclass
class GetHealthDashboardSecurity:
    api_key: shared.SchemeAPIKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetHealthDashboardRequest:
    query_params: GetHealthDashboardQueryParams = field()
    security: GetHealthDashboardSecurity = field()
    

@dataclass
class GetHealthDashboardResponse:
    content_type: str = field()
    status_code: int = field()
    databases: Optional[List[shared.Database]] = field(default=None)
    
