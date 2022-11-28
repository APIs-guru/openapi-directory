from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class ExportSystemsQueryParams:
    filter_display_name_: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'filter[display_name]', 'style': 'form', 'explode': True }})
    filter_id_: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'filter[id]', 'style': 'form', 'explode': True }})
    filter_last_evaluation_: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'filter[last_evaluation]', 'style': 'form', 'explode': True }})
    filter_last_upload_: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'filter[last_upload]', 'style': 'form', 'explode': True }})
    filter_other_count_: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'filter[other_count]', 'style': 'form', 'explode': True }})
    filter_packages_installed_: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'filter[packages_installed]', 'style': 'form', 'explode': True }})
    filter_packages_updatable_: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'filter[packages_updatable]', 'style': 'form', 'explode': True }})
    filter_rhba_count_: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'filter[rhba_count]', 'style': 'form', 'explode': True }})
    filter_rhea_count_: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'filter[rhea_count]', 'style': 'form', 'explode': True }})
    filter_rhsa_count_: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'filter[rhsa_count]', 'style': 'form', 'explode': True }})
    filter_stale_: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'filter[stale]', 'style': 'form', 'explode': True }})
    filter_system_profile_sap_sids_in_: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'filter[system_profile][sap_sids][in]', 'style': 'form', 'explode': True }})
    filter_system_profile_sap_system_: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'filter[system_profile][sap_system]', 'style': 'form', 'explode': True }})
    search: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'search', 'style': 'form', 'explode': True }})
    tags: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'tags', 'style': 'form', 'explode': True }})
    

@dataclass
class ExportSystemsSecurity:
    rh_identity: shared.SchemeRhIdentity = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class ExportSystemsRequest:
    query_params: ExportSystemsQueryParams = field()
    security: ExportSystemsSecurity = field()
    

@dataclass
class ExportSystemsResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    controllers_system_inline_items: Optional[List[shared.ControllersSystemInlineItem]] = field(default=None)
    
