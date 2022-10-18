package sdk

import (
	"context"
	"fmt"
	"io"
	"net/http"
	"openapi/internal/utils"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"strings"
)

var Servers = []string{
	"http://oralquestionsandmotions-api.parliament.uk",
	"https://oralquestionsandmotions-api.parliament.uk",
}

type HTTPClient interface {
	Do(req *http.Request) (*http.Response, error)
}

type SDK struct {
	defaultClient  HTTPClient
	securityClient HTTPClient
	serverURL      string
}

type SDKOption func(*SDK)

func WithServerURL(serverURL string, params map[string]string) SDKOption {
	return func(sdk *SDK) {
		if params != nil {
			serverURL = utils.ReplaceParameters(serverURL, params)
		}

		sdk.serverURL = serverURL
	}
}

func New(opts ...SDKOption) *SDK {
	sdk := &SDK{
		defaultClient:  http.DefaultClient,
		securityClient: http.DefaultClient,
	}
	for _, opt := range opts {
		opt(sdk)
	}
	if sdk.serverURL == "" {
		sdk.serverURL = Servers[0]
	}

	return sdk
}

func (s *SDK) GetEarlyDayMotionsList(ctx context.Context, request operations.GetEarlyDayMotionsListRequest) (*operations.GetEarlyDayMotionsListResponse, error) {
	baseURL := s.serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/EarlyDayMotions/list"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s.defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetEarlyDayMotionsListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.APIResponseListPublishedWrittenQuestion
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.APIResponseListPublishedWrittenQuestion = out
		case utils.MatchContentType(contentType, `text/json`):
			var out *shared.APIResponseListPublishedWrittenQuestion
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.APIResponseListPublishedWrittenQuestion = out
		case utils.MatchContentType(contentType, `application/xml`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = data
		case utils.MatchContentType(contentType, `text/xml`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = data
		}
	case httpRes.StatusCode == 400:
		switch {
		case utils.MatchContentType(contentType, `application/xml`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = data
		case utils.MatchContentType(contentType, `text/xml`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = data
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.APIResponseObject
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.APIResponseObject = out
		case utils.MatchContentType(contentType, `text/json`):
			var out *shared.APIResponseObject
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.APIResponseObject = out
		}
	}

	return res, nil
}

func (s *SDK) PublishedEarlyDayMotionGet(ctx context.Context, request operations.PublishedEarlyDayMotionGetRequest) (*operations.PublishedEarlyDayMotionGetResponse, error) {
	baseURL := s.serverURL
	url := utils.GenerateURL(ctx, baseURL, "/EarlyDayMotion/{id}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s.defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PublishedEarlyDayMotionGetResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.APIResponseListPublishedWrittenQuestion
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.APIResponseListPublishedWrittenQuestion = out
		case utils.MatchContentType(contentType, `text/json`):
			var out *shared.APIResponseListPublishedWrittenQuestion
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.APIResponseListPublishedWrittenQuestion = out
		}
	case httpRes.StatusCode == 400:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.APIResponseObject
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.APIResponseObject = out
		case utils.MatchContentType(contentType, `text/json`):
			var out *shared.APIResponseObject
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.APIResponseObject = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.APIResponseObject
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.APIResponseObject = out
		case utils.MatchContentType(contentType, `text/json`):
			var out *shared.APIResponseObject
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.APIResponseObject = out
		}
	}

	return res, nil
}

func (s *SDK) PublishedOralQuestionTimeGet(ctx context.Context, request operations.PublishedOralQuestionTimeGetRequest) (*operations.PublishedOralQuestionTimeGetResponse, error) {
	baseURL := s.serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/oralquestiontimes/list"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s.defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PublishedOralQuestionTimeGetResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.APIResponseListPublishedWrittenQuestion
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.APIResponseListPublishedWrittenQuestion = out
		case utils.MatchContentType(contentType, `text/json`):
			var out *shared.APIResponseListPublishedWrittenQuestion
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.APIResponseListPublishedWrittenQuestion = out
		case utils.MatchContentType(contentType, `application/xml`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = data
		case utils.MatchContentType(contentType, `text/xml`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = data
		}
	case httpRes.StatusCode == 400:
		switch {
		case utils.MatchContentType(contentType, `application/xml`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = data
		case utils.MatchContentType(contentType, `text/xml`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = data
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.APIResponseObject
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.APIResponseObject = out
		case utils.MatchContentType(contentType, `text/json`):
			var out *shared.APIResponseObject
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.APIResponseObject = out
		}
	}

	return res, nil
}

func (s *SDK) PublishedOralQuestionGet(ctx context.Context, request operations.PublishedOralQuestionGetRequest) (*operations.PublishedOralQuestionGetResponse, error) {
	baseURL := s.serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/oralquestions/list"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s.defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PublishedOralQuestionGetResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.APIResponseListPublishedWrittenQuestion
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.APIResponseListPublishedWrittenQuestion = out
		case utils.MatchContentType(contentType, `text/json`):
			var out *shared.APIResponseListPublishedWrittenQuestion
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.APIResponseListPublishedWrittenQuestion = out
		case utils.MatchContentType(contentType, `application/xml`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = data
		case utils.MatchContentType(contentType, `text/xml`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = data
		}
	case httpRes.StatusCode == 400:
		switch {
		case utils.MatchContentType(contentType, `application/xml`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = data
		case utils.MatchContentType(contentType, `text/xml`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = data
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.APIResponseObject
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.APIResponseObject = out
		case utils.MatchContentType(contentType, `text/json`):
			var out *shared.APIResponseObject
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.APIResponseObject = out
		}
	}

	return res, nil
}
