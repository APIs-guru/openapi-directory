package operations

type CompilePathParams struct {
	TemplateToken string `pathParam:"style=simple,explode=false,name=template-token"`
}

type CompileLatexCompilerEnum string

const (
	CompileLatexCompilerEnumPdflatex CompileLatexCompilerEnum = "pdflatex"
	CompileLatexCompilerEnumLualatex CompileLatexCompilerEnum = "lualatex"
)

type CompileQueryParams struct {
	DocFileName     *string                   `queryParam:"style=form,explode=true,name=doc-file-name"`
	DocURLExpiresIn *int64                    `queryParam:"style=form,explode=true,name=doc-url-expires-in"`
	LatexCompiler   *CompileLatexCompilerEnum `queryParam:"style=form,explode=true,name=latex-compiler"`
	LatexRuns       *int64                    `queryParam:"style=form,explode=true,name=latex-runs "`
	MainFileName    *string                   `queryParam:"style=form,explode=true,name=main-file-name"`
}

type CompileHeaders struct {
	ContentType string `header:"style=simple,explode=false,name=Content-Type"`
}

type CompileRequest struct {
	PathParams  CompilePathParams
	QueryParams CompileQueryParams
	Headers     CompileHeaders
	Request     map[string]interface{} `request:"mediaType=application/json"`
}

type CompileResponse struct {
	ContentType                     string
	StatusCode                      int64
	Compile200ApplicationJSONObject map[string]interface{}
}
