from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetPersonasQueryParams:
    count: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'count', 'style': 'form', 'explode': True }})
    expand: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'expand', 'style': 'form', 'explode': True }})
    fields: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    

@dataclass
class GetPersonasRequest:
    query_params: GetPersonasQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class GetPersonas200ApplicationJSONLinks:
    self: Optional[shared.Link] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'self' }})
    

@dataclass_json
@dataclass
class GetPersonas200ApplicationJSON:
    links: Optional[GetPersonas200ApplicationJSONLinks] = field(default=None, metadata={'dataclasses_json': { 'field_name': '_links' }})
    meta: Optional[shared.Pagination] = field(default=None, metadata={'dataclasses_json': { 'field_name': '_meta' }})
    items: Optional[List[shared.Persona]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'items' }})
    

@dataclass
class GetPersonasResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    get_personas_200_application_json_object: Optional[GetPersonas200ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
