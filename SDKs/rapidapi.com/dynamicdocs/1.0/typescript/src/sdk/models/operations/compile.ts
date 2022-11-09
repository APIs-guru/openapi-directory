import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CompilePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=template-token" })
  templateToken: string;
}

export enum CompileLatexCompilerEnum {
    Pdflatex = "pdflatex"
,    Lualatex = "lualatex"
}


export class CompileQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=doc-file-name" })
  docFileName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=doc-url-expires-in" })
  docUrlExpiresIn?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=latex-compiler" })
  latexCompiler?: CompileLatexCompilerEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=latex-runs " })
  latexRuns?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=main-file-name" })
  mainFileName?: string;
}


export class CompileHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Content-Type" })
  contentType: string;
}


export class CompileRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CompilePathParams;

  @Metadata()
  queryParams: CompileQueryParams;

  @Metadata()
  headers: CompileHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request?: Map<string, any>;
}


export class CompileResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  compile200ApplicationJsonObject?: Map<string, any>;
}
