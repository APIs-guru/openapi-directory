import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CompilePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=template-token" })
  templateToken: string;
}

export enum CompileLatexCompilerEnum {
    Pdflatex = "pdflatex",
    Lualatex = "lualatex"
}


export class CompileQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=doc-file-name" })
  docFileName?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=doc-url-expires-in" })
  docUrlExpiresIn?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=latex-compiler" })
  latexCompiler?: CompileLatexCompilerEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=latex-runs " })
  latexRuns?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=main-file-name" })
  mainFileName?: string;
}


export class CompileHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Content-Type" })
  contentType: string;
}


export class CompileRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CompilePathParams;

  @SpeakeasyMetadata()
  queryParams: CompileQueryParams;

  @SpeakeasyMetadata()
  headers: CompileHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: Map<string, any>;
}


export class CompileResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  compile200ApplicationJsonObject?: Map<string, any>;
}
