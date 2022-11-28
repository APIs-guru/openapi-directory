from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class GetFamilyDetailsQueryParams:
    id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'id', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class GetFamilyDetails200ApplicationJSON:
    definition: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('definition') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    hypernyms: Optional[List[List[float]]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hypernyms') }})
    perm_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('permId') }})
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestId') }})
    wikidata: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('wikidata') }})
    wordnet30: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('wordnet30') }})
    

@dataclass
class GetFamilyDetailsRequest:
    query_params: GetFamilyDetailsQueryParams = field()
    

@dataclass
class GetFamilyDetailsResponse:
    content_type: str = field()
    status_code: int = field()
    get_family_details_200_application_json_object: Optional[GetFamilyDetails200ApplicationJSON] = field(default=None)
    
