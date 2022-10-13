from dataclasses import dataclass, field
from typing import Enum,List,Optional
from sdk.models import shared

class ListAdvisoriesSortEnum(str, Enum):
    ID = "id"
    NAME = "name"
    ADVISORY_TYPE = "advisory_type"
    SYNOPSIS = "synopsis"
    PUBLIC_DATE = "public_date"
    APPLICABLE_SYSTEMS = "applicable_systems"


@dataclass
class ListAdvisoriesQueryParams:
    filter_advisory_type_: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'filter[advisory_type]', 'style': 'form', 'explode': True }})
    filter_applicable_systems_: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'filter[applicable_systems]', 'style': 'form', 'explode': True }})
    filter_description_: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'filter[description]', 'style': 'form', 'explode': True }})
    filter_id_: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'filter[id]', 'style': 'form', 'explode': True }})
    filter_public_date_: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'filter[public_date]', 'style': 'form', 'explode': True }})
    filter_severity_: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'filter[severity]', 'style': 'form', 'explode': True }})
    filter_synopsis_: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'filter[synopsis]', 'style': 'form', 'explode': True }})
    filter_system_profile_sap_sids_in_: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'filter[system_profile][sap_sids][in]', 'style': 'form', 'explode': True }})
    filter_system_profile_sap_system_: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'filter[system_profile][sap_system]', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    search: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'search', 'style': 'form', 'explode': True }})
    sort: Optional[ListAdvisoriesSortEnum] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    tags: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'tags', 'style': 'form', 'explode': True }})
    

@dataclass
class ListAdvisoriesSecurity:
    rh_identity: shared.SchemeRhIdentity = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class ListAdvisoriesRequest:
    query_params: ListAdvisoriesQueryParams = field(default=None)
    security: ListAdvisoriesSecurity = field(default=None)
    

@dataclass
class ListAdvisoriesResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    controllers_advisories_response: Optional[shared.ControllersAdvisoriesResponse] = field(default=None)
    
