from dataclasses import dataclass, field



@dataclass
class DeleteAdminMappingsStubMappingIDPathParams:
    stub_mapping_id: str = field(metadata={'path_param': { 'field_name': 'stubMappingId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteAdminMappingsStubMappingIDRequest:
    path_params: DeleteAdminMappingsStubMappingIDPathParams = field()
    

@dataclass
class DeleteAdminMappingsStubMappingIDResponse:
    content_type: str = field()
    status_code: int = field()
    
