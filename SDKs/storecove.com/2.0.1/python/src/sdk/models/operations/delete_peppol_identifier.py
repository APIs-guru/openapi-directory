from dataclasses import dataclass, field



@dataclass
class DeletePeppolIdentifierPathParams:
    identifier: str = field(metadata={'path_param': { 'field_name': 'identifier', 'style': 'simple', 'explode': False }})
    legal_entity_id: int = field(metadata={'path_param': { 'field_name': 'legal_entity_id', 'style': 'simple', 'explode': False }})
    scheme: str = field(metadata={'path_param': { 'field_name': 'scheme', 'style': 'simple', 'explode': False }})
    superscheme: str = field(metadata={'path_param': { 'field_name': 'superscheme', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeletePeppolIdentifierRequest:
    path_params: DeletePeppolIdentifierPathParams = field()
    

@dataclass
class DeletePeppolIdentifierResponse:
    content_type: str = field()
    status_code: int = field()
    
