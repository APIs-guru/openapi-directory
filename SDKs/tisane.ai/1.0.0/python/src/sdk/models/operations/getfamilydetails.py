from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass
class GetFamilyDetailsQueryParams:
    id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'id', 'style': 'form', 'explode': True }})
    

@dataclass
class GetFamilyDetailsRequest:
    query_params: GetFamilyDetailsQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class GetFamilyDetails200ApplicationJSON:
    definition: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'definition' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    hypernyms: Optional[List[List[float]]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hypernyms' }})
    perm_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'permId' }})
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestId' }})
    wikidata: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'wikidata' }})
    wordnet30: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'wordnet30' }})
    

@dataclass
class GetFamilyDetailsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_family_details_200_application_json_object: Optional[GetFamilyDetails200ApplicationJSON] = field(default=None)
    
