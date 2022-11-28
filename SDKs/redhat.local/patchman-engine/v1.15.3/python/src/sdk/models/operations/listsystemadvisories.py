from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class ListSystemAdvisoriesPathParams:
    inventory_id: str = field(metadata={'path_param': { 'field_name': 'inventory_id', 'style': 'simple', 'explode': False }})
    
class ListSystemAdvisoriesSortEnum(str, Enum):
    ID = "id"
    NAME = "name"
    TYPE = "type"
    SYNOPSIS = "synopsis"
    PUBLIC_DATE = "public_date"


@dataclass
class ListSystemAdvisoriesQueryParams:
    filter_advisory_type_: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'filter[advisory_type]', 'style': 'form', 'explode': True }})
    filter_description_: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'filter[description]', 'style': 'form', 'explode': True }})
    filter_id_: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'filter[id]', 'style': 'form', 'explode': True }})
    filter_public_date_: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'filter[public_date]', 'style': 'form', 'explode': True }})
    filter_severity_: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'filter[severity]', 'style': 'form', 'explode': True }})
    filter_synopsis_: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'filter[synopsis]', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    search: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'search', 'style': 'form', 'explode': True }})
    sort: Optional[ListSystemAdvisoriesSortEnum] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    

@dataclass
class ListSystemAdvisoriesSecurity:
    rh_identity: shared.SchemeRhIdentity = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class ListSystemAdvisoriesRequest:
    path_params: ListSystemAdvisoriesPathParams = field()
    query_params: ListSystemAdvisoriesQueryParams = field()
    security: ListSystemAdvisoriesSecurity = field()
    

@dataclass
class ListSystemAdvisoriesResponse:
    content_type: str = field()
    status_code: int = field()
    controllers_system_advisories_response: Optional[shared.ControllersSystemAdvisoriesResponse] = field(default=None)
    
