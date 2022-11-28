from dataclasses import dataclass, field



@dataclass
class FolderAssignPostQueryParams:
    source: str = field(metadata={'query_param': { 'field_name': 'source', 'style': 'form', 'explode': True }})
    target: str = field(metadata={'query_param': { 'field_name': 'target', 'style': 'form', 'explode': True }})
    

@dataclass
class FolderAssignPostRequest:
    query_params: FolderAssignPostQueryParams = field()
    

@dataclass
class FolderAssignPostResponse:
    content_type: str = field()
    status_code: int = field()
    
