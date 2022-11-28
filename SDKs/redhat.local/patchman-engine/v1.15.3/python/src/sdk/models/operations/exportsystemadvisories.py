from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from sdk.models import shared


@dataclass
class ExportSystemAdvisoriesPathParams:
    inventory_id: str = field(metadata={'path_param': { 'field_name': 'inventory_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ExportSystemAdvisoriesQueryParams:
    filter_advisory_type_: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'filter[advisory_type]', 'style': 'form', 'explode': True }})
    filter_description_: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'filter[description]', 'style': 'form', 'explode': True }})
    filter_id_: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'filter[id]', 'style': 'form', 'explode': True }})
    filter_public_date_: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'filter[public_date]', 'style': 'form', 'explode': True }})
    filter_severity_: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'filter[severity]', 'style': 'form', 'explode': True }})
    filter_synopsis_: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'filter[synopsis]', 'style': 'form', 'explode': True }})
    search: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'search', 'style': 'form', 'explode': True }})
    

@dataclass
class ExportSystemAdvisoriesSecurity:
    rh_identity: shared.SchemeRhIdentity = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class ExportSystemAdvisoriesRequest:
    path_params: ExportSystemAdvisoriesPathParams = field()
    query_params: ExportSystemAdvisoriesQueryParams = field()
    security: ExportSystemAdvisoriesSecurity = field()
    

@dataclass
class ExportSystemAdvisoriesResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    controllers_system_advisories_db_lookups: Optional[List[shared.ControllersSystemAdvisoriesDbLookup]] = field(default=None)
    
