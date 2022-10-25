package operations

type StoryIDRevealPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type StoryIDRevealRequest struct {
	PathParams StoryIDRevealPathParams
}

type StoryIDRevealResponse struct {
	ContentType         string
	LoginButton         *string
	StatusCode          int64
	ProblemDetail       *interface{}
	RevealJsPresenation *string
}
