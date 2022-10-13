from dataclasses import dataclass, field



@dataclass
class DeleteAdminMappingsStubMappingIDPathParams:
    stub_mapping_id: str = field(default=None, metadata={'path_param': { 'field_name': 'stubMappingId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteAdminMappingsStubMappingIDRequest:
    path_params: DeleteAdminMappingsStubMappingIDPathParams = field(default=None)
    

@dataclass
class DeleteAdminMappingsStubMappingIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
