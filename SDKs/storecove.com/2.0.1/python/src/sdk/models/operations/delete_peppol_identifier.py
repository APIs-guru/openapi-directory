from dataclasses import dataclass, field



@dataclass
class DeletePeppolIdentifierPathParams:
    identifier: str = field(default=None, metadata={'path_param': { 'field_name': 'identifier', 'style': 'simple', 'explode': False }})
    legal_entity_id: int = field(default=None, metadata={'path_param': { 'field_name': 'legal_entity_id', 'style': 'simple', 'explode': False }})
    scheme: str = field(default=None, metadata={'path_param': { 'field_name': 'scheme', 'style': 'simple', 'explode': False }})
    superscheme: str = field(default=None, metadata={'path_param': { 'field_name': 'superscheme', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeletePeppolIdentifierRequest:
    path_params: DeletePeppolIdentifierPathParams = field(default=None)
    

@dataclass
class DeletePeppolIdentifierResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
