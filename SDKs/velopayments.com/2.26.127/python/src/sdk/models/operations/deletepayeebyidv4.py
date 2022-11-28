from dataclasses import dataclass, field



@dataclass
class DeletePayeeByIDV4PathParams:
    payee_id: str = field(metadata={'path_param': { 'field_name': 'payeeId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeletePayeeByIDV4Request:
    path_params: DeletePayeeByIDV4PathParams = field()
    

@dataclass
class DeletePayeeByIDV4Response:
    content_type: str = field()
    status_code: int = field()
    
