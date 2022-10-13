from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class StopPointGetServiceTypesQueryParams:
    id: str = field(default=None, metadata={'query_param': { 'field_name': 'id', 'style': 'form', 'explode': True }})
    line_ids: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'lineIds', 'style': 'form', 'explode': True }})
    modes: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'modes', 'style': 'form', 'explode': True }})
    

@dataclass
class StopPointGetServiceTypesRequest:
    query_params: StopPointGetServiceTypesQueryParams = field(default=None)
    

@dataclass
class StopPointGetServiceTypesResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    tfl_api_presentation_entities_line_service_types: Optional[List[shared.TflAPIPresentationEntitiesLineServiceType]] = field(default=None)
    
