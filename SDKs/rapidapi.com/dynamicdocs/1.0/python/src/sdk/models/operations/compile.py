from dataclasses import dataclass, field
from typing import Any,Optional
from enum import Enum


@dataclass
class CompilePathParams:
    template_token: str = field(metadata={'path_param': { 'field_name': 'template-token', 'style': 'simple', 'explode': False }})
    
class CompileLatexCompilerEnum(str, Enum):
    PDFLATEX = "pdflatex"
    LUALATEX = "lualatex"


@dataclass
class CompileQueryParams:
    doc_file_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'doc-file-name', 'style': 'form', 'explode': True }})
    doc_url_expires_in: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'doc-url-expires-in', 'style': 'form', 'explode': True }})
    latex_compiler: Optional[CompileLatexCompilerEnum] = field(default=None, metadata={'query_param': { 'field_name': 'latex-compiler', 'style': 'form', 'explode': True }})
    latex_runs: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'latex-runs ', 'style': 'form', 'explode': True }})
    main_file_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'main-file-name', 'style': 'form', 'explode': True }})
    

@dataclass
class CompileHeaders:
    content_type: str = field(metadata={'header': { 'field_name': 'Content-Type', 'style': 'simple', 'explode': False }})
    

@dataclass
class CompileRequest:
    headers: CompileHeaders = field()
    path_params: CompilePathParams = field()
    query_params: CompileQueryParams = field()
    request: Optional[dict[str, Any]] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CompileResponse:
    content_type: str = field()
    status_code: int = field()
    compile_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
