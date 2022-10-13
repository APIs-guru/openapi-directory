from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class CabwiseGetQueryParams:
    force_xml: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'forceXml', 'style': 'form', 'explode': True }})
    lat: float = field(default=None, metadata={'query_param': { 'field_name': 'lat', 'style': 'form', 'explode': True }})
    legacy_format: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'legacyFormat', 'style': 'form', 'explode': True }})
    lon: float = field(default=None, metadata={'query_param': { 'field_name': 'lon', 'style': 'form', 'explode': True }})
    max_results: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'maxResults', 'style': 'form', 'explode': True }})
    name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    optype: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'optype', 'style': 'form', 'explode': True }})
    radius: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'radius', 'style': 'form', 'explode': True }})
    twenty_four_seven_only: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'twentyFourSevenOnly', 'style': 'form', 'explode': True }})
    wc: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'wc', 'style': 'form', 'explode': True }})
    

@dataclass
class CabwiseGetRequest:
    query_params: CabwiseGetQueryParams = field(default=None)
    

@dataclass
class CabwiseGetResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    system_object: Optional[dict[str, Any]] = field(default=None)
    
