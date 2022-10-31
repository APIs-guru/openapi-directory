from dataclasses import dataclass, field
from typing import Any,Enum,Optional


@dataclass
class CompilePathParams:
    template_token: str = field(default=None, metadata={'path_param': { 'field_name': 'template-token', 'style': 'simple', 'explode': False }})
    
class CompileLatexCompilerEnum(str, Enum):
    PDFLATEX = "pdflatex"
    LUALATEX = "lualatex"


@dataclass
class CompileQueryParams:
    doc_file_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'doc-file-name', 'style': 'form', 'explode': True }})
    doc_url_expires_in: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'doc-url-expires-in', 'style': 'form', 'explode': True }})
    latex_compiler: Optional[CompileLatexCompilerEnum] = field(default=None, metadata={'query_param': { 'field_name': 'latex-compiler', 'style': 'form', 'explode': True }})
    latex_runs_: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'latex-runs ', 'style': 'form', 'explode': True }})
    main_file_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'main-file-name', 'style': 'form', 'explode': True }})
    

@dataclass
class CompileHeaders:
    content_type: str = field(default=None, metadata={'header': { 'field_name': 'Content-Type', 'style': 'simple', 'explode': False }})
    

@dataclass
class CompileRequest:
    path_params: CompilePathParams = field(default=None)
    query_params: CompileQueryParams = field(default=None)
    headers: CompileHeaders = field(default=None)
    request: Optional[dict[str, Any]] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CompileResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    compile_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
