import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class CompilePathParams extends SpeakeasyBase {
    templateToken: string;
}
export declare enum CompileLatexCompilerEnum {
    Pdflatex = "pdflatex",
    Lualatex = "lualatex"
}
export declare class CompileQueryParams extends SpeakeasyBase {
    docFileName?: string;
    docUrlExpiresIn?: number;
    latexCompiler?: CompileLatexCompilerEnum;
    latexRuns?: number;
    mainFileName?: string;
}
export declare class CompileHeaders extends SpeakeasyBase {
    contentType: string;
}
export declare class CompileRequest extends SpeakeasyBase {
    pathParams: CompilePathParams;
    queryParams: CompileQueryParams;
    headers: CompileHeaders;
    request?: Map<string, any>;
}
export declare class CompileResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    compile200ApplicationJsonObject?: Map<string, any>;
}
