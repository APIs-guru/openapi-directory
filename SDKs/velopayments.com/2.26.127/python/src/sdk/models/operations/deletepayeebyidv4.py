from dataclasses import dataclass, field



@dataclass
class DeletePayeeByIDV4PathParams:
    payee_id: str = field(default=None, metadata={'path_param': { 'field_name': 'payeeId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeletePayeeByIDV4Request:
    path_params: DeletePayeeByIDV4PathParams = field(default=None)
    

@dataclass
class DeletePayeeByIDV4Response:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
