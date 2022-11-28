package sdk

import (
	"context"
	"fmt"
	"io"
	"net/http"
	"openapi/internal/utils"
	"openapi/pkg/models/operations"
	"strings"
)

var ServerList = []string{
	"https://api.stackexchange.com/2.0",
}

type HTTPClient interface {
	Do(req *http.Request) (*http.Response, error)
}

// SDK Documentation: https://api.stackexchange.com/
type SDK struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient

	_serverURL  string
	_language   string
	_sdkVersion string
	_genVersion string
}

type SDKOption func(*SDK)

func WithServerURL(serverURL string, params map[string]string) SDKOption {
	return func(sdk *SDK) {
		if params != nil {
			serverURL = utils.ReplaceParameters(serverURL, params)
		}

		sdk._serverURL = serverURL
	}
}

func WithClient(client HTTPClient) SDKOption {
	return func(sdk *SDK) {
		sdk._defaultClient = client
	}
}

func New(opts ...SDKOption) *SDK {
	sdk := &SDK{
		_language:   "go",
		_sdkVersion: "",
		_genVersion: "internal",
	}
	for _, opt := range opts {
		opt(sdk)
	}

	if sdk._defaultClient == nil {
		sdk._defaultClient = http.DefaultClient
	}
	if sdk._securityClient == nil {

		sdk._securityClient = sdk._defaultClient

	}

	if sdk._serverURL == "" {
		sdk._serverURL = ServerList[0]
	}

	return sdk
}

// GetAccessTokensAccessTokens - Reads the properties for a set of access tokens.
//
// {accessTokens} can contain up to 20 access tokens. These are obtained by authenticating a user using OAuth 2.0.
//
// This method returns a list of access_tokens.
func (s *SDK) GetAccessTokensAccessTokens(ctx context.Context, request operations.GetAccessTokensAccessTokensRequest) (*operations.GetAccessTokensAccessTokensResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/access-tokens/{accessTokens}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetAccessTokensAccessTokensResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `*/*`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 402:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 405:
	case httpRes.StatusCode == 406:
	case httpRes.StatusCode == 500:
	case httpRes.StatusCode == 502:
	case httpRes.StatusCode == 503:
	}

	return res, nil
}

// GetAccessTokensAccessTokensInvalidate - Immediately expires the access tokens passed. This method is meant to allow an application to discard any active access tokens it no longer needs.
//
// {accessTokens} can contain up to 20 access tokens. These are obtained by authenticating a user using OAuth 2.0.
//
// This method returns a list of access_tokens.
func (s *SDK) GetAccessTokensAccessTokensInvalidate(ctx context.Context, request operations.GetAccessTokensAccessTokensInvalidateRequest) (*operations.GetAccessTokensAccessTokensInvalidateResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/access-tokens/{accessTokens}/invalidate", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetAccessTokensAccessTokensInvalidateResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `*/*`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 402:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 405:
	case httpRes.StatusCode == 406:
	case httpRes.StatusCode == 500:
	case httpRes.StatusCode == 502:
	case httpRes.StatusCode == 503:
	}

	return res, nil
}

// GetAnswers - Returns all the undeleted answers in the system.
//
// The sorts accepted by this method operate on the follow fields of the answer object:
//
//   - activity - last_activity_date
//
//   - creation - creation_date
//
//   - votes - score
//     activity is the default sort.
//
//     It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.
//
// This method returns a list of answers.
func (s *SDK) GetAnswers(ctx context.Context, request operations.GetAnswersRequest) (*operations.GetAnswersResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/answers"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetAnswersResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `*/*`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 402:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 405:
	case httpRes.StatusCode == 406:
	case httpRes.StatusCode == 500:
	case httpRes.StatusCode == 502:
	case httpRes.StatusCode == 503:
	}

	return res, nil
}

// GetAnswersIds - Gets the set of answers identified by ids.
//
// This is meant for batch fetcing of questions. A useful trick to poll for updates is to sort by activity, with a minimum date of the last time you polled.
//
// {ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for answer_id on answer objects.
//
// The sorts accepted by this method operate on the follow fields of the answer object:
//
//   - activity - last_activity_date
//
//   - creation - creation_date
//
//   - votes - score
//     activity is the default sort.
//
//     It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.
//
// This method returns a list of answers.
func (s *SDK) GetAnswersIds(ctx context.Context, request operations.GetAnswersIdsRequest) (*operations.GetAnswersIdsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/answers/{ids}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetAnswersIdsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `*/*`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 402:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 405:
	case httpRes.StatusCode == 406:
	case httpRes.StatusCode == 500:
	case httpRes.StatusCode == 502:
	case httpRes.StatusCode == 503:
	}

	return res, nil
}

// GetAnswersIdsComments - Gets the comments on a set of answers.
//
// If you know that you have an answer id and need the comments, use this method. If you know you have a question id, use /questions/{id}/comments. If you are unsure, use /posts/{id}/comments.
//
// {ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for answer_id on answer objects.
//
// The sorts accepted by this method operate on the follow fields of the comment object:
//
//   - creation - creation_date
//
//   - votes - score
//     creation is the default sort.
//
//     It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.
//
// This method returns a list of comments.
func (s *SDK) GetAnswersIdsComments(ctx context.Context, request operations.GetAnswersIdsCommentsRequest) (*operations.GetAnswersIdsCommentsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/answers/{ids}/comments", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetAnswersIdsCommentsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `*/*`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 402:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 405:
	case httpRes.StatusCode == 406:
	case httpRes.StatusCode == 500:
	case httpRes.StatusCode == 502:
	case httpRes.StatusCode == 503:
	}

	return res, nil
}

// GetAppsAccessTokensDeAuthenticate - Passing valid access_tokens to this method causes the application that created them to be de-authorized by the user associated with each access_token. This will remove the application from their apps tab, and cause all other existing access_tokens to be destroyed.
//
// This method is meant for uninstalling applications, recovering from access_token leaks, or simply as a stronger form of /access-tokens/{accessTokens}/invalidate.
//
// Nothing prevents a user from re-authenticate to an application that has de-authenticated itself, the user will be prompted to approve the application again however.
//
// {accessTokens} can contain up to 20 access tokens. These are obtained by authenticating a user using OAuth 2.0.
//
// This method returns a list of access_tokens.
func (s *SDK) GetAppsAccessTokensDeAuthenticate(ctx context.Context, request operations.GetAppsAccessTokensDeAuthenticateRequest) (*operations.GetAppsAccessTokensDeAuthenticateResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/apps/{accessTokens}/de-authenticate", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetAppsAccessTokensDeAuthenticateResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `*/*`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 402:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 405:
	case httpRes.StatusCode == 406:
	case httpRes.StatusCode == 500:
	case httpRes.StatusCode == 502:
	case httpRes.StatusCode == 503:
	}

	return res, nil
}

// GetBadges - Returns all the badges in the system.
//
// Badge sorts are a tad complicated. For the purposes of sorting (and min/max) tag_based is considered to be greater than named.
//
// This means that you can get a list of all tag based badges by passing min=tag_based, and conversely all the named badges by passing max=named, with sort=type.
//
// For ranks, bronze is greater than silver which is greater than gold. Along with sort=rank, set max=gold for just gold badges, max=silver&min=silver for just silver, and min=bronze for just bronze.
//
// rank is the default sort.
//
// This method returns a list of badges.
func (s *SDK) GetBadges(ctx context.Context, request operations.GetBadgesRequest) (*operations.GetBadgesResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/badges"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetBadgesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `*/*`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 402:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 405:
	case httpRes.StatusCode == 406:
	case httpRes.StatusCode == 500:
	case httpRes.StatusCode == 502:
	case httpRes.StatusCode == 503:
	}

	return res, nil
}

// GetBadgesIds - Gets the badges identified in id.
//
// Note that badge ids are not constant across sites, and thus should be looked up via the /badges method. A badge id on a single site is, however, guaranteed to be stable.
//
// Badge sorts are a tad complicated. For the purposes of sorting (and min/max) tag_based is considered to be greater than named.
//
// This means that you can get a list of all tag based badges by passing min=tag_based, and conversely all the named badges by passing max=named, with sort=type.
//
// For ranks, bronze is greater than silver which is greater than gold. Along with sort=rank, set max=gold for just gold badges, max=silver&min=silver for just silver, and min=bronze for just bronze.
//
// rank is the default sort.
//
// {ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for badge_id on badge objects.
//
// This method returns a list of badges.
func (s *SDK) GetBadgesIds(ctx context.Context, request operations.GetBadgesIdsRequest) (*operations.GetBadgesIdsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/badges/{ids}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetBadgesIdsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `*/*`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 402:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 405:
	case httpRes.StatusCode == 406:
	case httpRes.StatusCode == 500:
	case httpRes.StatusCode == 502:
	case httpRes.StatusCode == 503:
	}

	return res, nil
}

// GetBadgesIdsRecipients - Returns recently awarded badges in the system, constrained to a certain set of badges.
//
// As these badges have been awarded, they will have the badge.user property set.
//
// {ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for badge_id on badge objects.
//
// This method returns a list of badges.
func (s *SDK) GetBadgesIdsRecipients(ctx context.Context, request operations.GetBadgesIdsRecipientsRequest) (*operations.GetBadgesIdsRecipientsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/badges/{ids}/recipients", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetBadgesIdsRecipientsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `*/*`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 402:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 405:
	case httpRes.StatusCode == 406:
	case httpRes.StatusCode == 500:
	case httpRes.StatusCode == 502:
	case httpRes.StatusCode == 503:
	}

	return res, nil
}

// GetBadgesName - Gets all explicitly named badges in the system.
//
// A named badged stands in opposition to a tag-based badge. These are referred to as general badges on the sites themselves.
//
// For the rank sort, bronze is greater than silver which is greater than gold. Along with sort=rank, set max=gold for just gold badges, max=silver&min=silver for just silver, and min=bronze for just bronze.
//
// rank is the default sort.
//
// This method returns a list of badges.
func (s *SDK) GetBadgesName(ctx context.Context, request operations.GetBadgesNameRequest) (*operations.GetBadgesNameResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/badges/name"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetBadgesNameResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `*/*`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 402:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 405:
	case httpRes.StatusCode == 406:
	case httpRes.StatusCode == 500:
	case httpRes.StatusCode == 502:
	case httpRes.StatusCode == 503:
	}

	return res, nil
}

// GetBadgesRecipients - Returns recently awarded badges in the system.
//
// As these badges have been awarded, they will have the badge.user property set.
//
// This method returns a list of badges.
func (s *SDK) GetBadgesRecipients(ctx context.Context, request operations.GetBadgesRecipientsRequest) (*operations.GetBadgesRecipientsResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/badges/recipients"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetBadgesRecipientsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `*/*`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 402:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 405:
	case httpRes.StatusCode == 406:
	case httpRes.StatusCode == 500:
	case httpRes.StatusCode == 502:
	case httpRes.StatusCode == 503:
	}

	return res, nil
}

// GetBadgesTags - Returns the badges that are awarded for participation in specific tags.
//
// For the rank sort, bronze is greater than silver which is greater than gold. Along with sort=rank, set max=gold for just gold badges, max=silver&min=silver for just silver, and min=bronze for just bronze.
//
// rank is the default sort.
//
// This method returns a list of badges.
func (s *SDK) GetBadgesTags(ctx context.Context, request operations.GetBadgesTagsRequest) (*operations.GetBadgesTagsResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/badges/tags"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetBadgesTagsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `*/*`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 402:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 405:
	case httpRes.StatusCode == 406:
	case httpRes.StatusCode == 500:
	case httpRes.StatusCode == 502:
	case httpRes.StatusCode == 503:
	}

	return res, nil
}

// GetComments - Gets all the comments on the site.
//
// If you're filtering for interesting comments (by score, creation date, etc.) make use of the sort paramter with appropriate min and max values.
//
// If you're looking to query conversations between users, instead use the /users/{ids}/mentioned and /users/{ids}/comments/{toid} methods.
//
// The sorts accepted by this method operate on the follow fields of the comment object:
//
//   - creation - creation_date
//
//   - votes - score
//     creation is the default sort.
//
//     It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.
//
// This method returns a list of comments.
func (s *SDK) GetComments(ctx context.Context, request operations.GetCommentsRequest) (*operations.GetCommentsResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/comments"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetCommentsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `*/*`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 402:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 405:
	case httpRes.StatusCode == 406:
	case httpRes.StatusCode == 500:
	case httpRes.StatusCode == 502:
	case httpRes.StatusCode == 503:
	}

	return res, nil
}

// GetCommentsIds - Gets the comments identified in id.
//
// This method is most useful if you have a cache of comment ids obtained through other means (such as /questions/{id}/comments) but suspect the data may be stale.
//
// {ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for comment_id on comment objects.
//
// The sorts accepted by this method operate on the follow fields of the comment object:
//
//   - creation - creation_date
//
//   - votes - score
//     creation is the default sort.
//
//     It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.
//
// This method returns a list of comments.
func (s *SDK) GetCommentsIds(ctx context.Context, request operations.GetCommentsIdsRequest) (*operations.GetCommentsIdsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/comments/{ids}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetCommentsIdsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `*/*`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 402:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 405:
	case httpRes.StatusCode == 406:
	case httpRes.StatusCode == 500:
	case httpRes.StatusCode == 502:
	case httpRes.StatusCode == 503:
	}

	return res, nil
}

// GetErrors - Returns the various error codes that can be produced by the API.
//
// This method is provided for discovery, documentation, and testing purposes, it is not expected many applications will consume it during normal operation.
//
// For testing purposes, look into the /errors/{id} method which simulates errors given a code.
//
// This method returns a list of errors.
func (s *SDK) GetErrors(ctx context.Context, request operations.GetErrorsRequest) (*operations.GetErrorsResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/errors"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetErrorsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `*/*`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 402:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 405:
	case httpRes.StatusCode == 406:
	case httpRes.StatusCode == 500:
	case httpRes.StatusCode == 502:
	case httpRes.StatusCode == 503:
	}

	return res, nil
}

// GetErrorsID - This method allows you to generate an error.
//
// This method is only intended for use when testing an application or library. Unlike other methods in the API, its contract is not frozen, and new error codes may be added at any time.
//
// This method results in an error, which will be expressed with a 400 HTTP status code and setting the error* properties on the wrapper object.
func (s *SDK) GetErrorsID(ctx context.Context, request operations.GetErrorsIDRequest) (*operations.GetErrorsIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/errors/{id}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetErrorsIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `*/*`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 402:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 405:
	case httpRes.StatusCode == 406:
	case httpRes.StatusCode == 500:
	case httpRes.StatusCode == 502:
	case httpRes.StatusCode == 503:
	}

	return res, nil
}

// GetEvents - Returns a stream of events that have occurred on the site.
//
// The API considers the following "events":
//   - posting a question
//   - posting an answer
//   - posting a comment
//   - editing a post
//   - creating a user
//
// Events are only accessible for 15 minutes after they occurred, and by default only events in the last 5 minutes are returned. You can specify the age of the oldest event returned by setting the since parameter.
//
// It is advised that developers batch events by ids and make as few subsequent requests to other methods as possible.
//
// This method returns a list of events.
func (s *SDK) GetEvents(ctx context.Context, request operations.GetEventsRequest) (*operations.GetEventsResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/events"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetEventsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `*/*`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 402:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 405:
	case httpRes.StatusCode == 406:
	case httpRes.StatusCode == 500:
	case httpRes.StatusCode == 502:
	case httpRes.StatusCode == 503:
	}

	return res, nil
}

// GetFiltersCreate - Creates a new filter given a list of includes, excludes, a base filter, and whether or not this filter should be "unsafe".
//
// Filter "safety" is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.
//
// If no base filter is specified, the default filter is assumed. When building a filter from scratch, the none built-in filter is useful.
//
// When the size of the parameters being sent to this method grows to large, problems can occur. This method will accept POST requests to mitigate this.
//
// It is not expected that many applications will call this method at runtime, filters should be pre-calculated and "baked in" in the common cases. Furthermore, there are a number of built-in filters which cover common use cases.
//
// This method returns a single filter.
func (s *SDK) GetFiltersCreate(ctx context.Context, request operations.GetFiltersCreateRequest) (*operations.GetFiltersCreateResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/filters/create"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetFiltersCreateResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `*/*`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 402:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 405:
	case httpRes.StatusCode == 406:
	case httpRes.StatusCode == 500:
	case httpRes.StatusCode == 502:
	case httpRes.StatusCode == 503:
	}

	return res, nil
}

// GetFiltersFilters - Returns the fields included by the given filters, and the "safeness" of those filters.
//
// It is not expected that this method will be consumed by many applications at runtime, it is provided to aid in debugging.
//
// {filters} can contain up to 20 semicolon delimited filters. Filters are obtained via calls to /filters/create, or by using a built-in filter.
//
// This method returns a list of filters.
func (s *SDK) GetFiltersFilters(ctx context.Context, request operations.GetFiltersFiltersRequest) (*operations.GetFiltersFiltersResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/filters/{filters}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetFiltersFiltersResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `*/*`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 402:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 405:
	case httpRes.StatusCode == 406:
	case httpRes.StatusCode == 500:
	case httpRes.StatusCode == 502:
	case httpRes.StatusCode == 503:
	}

	return res, nil
}

// GetInbox - Returns a user's inbox.
//
// This method requires an access_token, with a scope containing "read_inbox".
//
// This method returns a list of inbox items.
func (s *SDK) GetInbox(ctx context.Context, request operations.GetInboxRequest) (*operations.GetInboxResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/inbox"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetInboxResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `*/*`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 402:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 405:
	case httpRes.StatusCode == 406:
	case httpRes.StatusCode == 500:
	case httpRes.StatusCode == 502:
	case httpRes.StatusCode == 503:
	}

	return res, nil
}

// GetInboxUnread - Returns the unread items in a user's inbox.
//
// This method requires an access_token, with a scope containing "read_inbox".
//
// This method returns a list of inbox items.
func (s *SDK) GetInboxUnread(ctx context.Context, request operations.GetInboxUnreadRequest) (*operations.GetInboxUnreadResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/inbox/unread"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetInboxUnreadResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `*/*`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 402:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 405:
	case httpRes.StatusCode == 406:
	case httpRes.StatusCode == 500:
	case httpRes.StatusCode == 502:
	case httpRes.StatusCode == 503:
	}

	return res, nil
}

// GetInfo - Returns a collection of statistics about the site.
//
// Data to facilitate per-site customization, discover related sites, and aggregate statistics is all returned by this method.
//
// This data is cached very aggressively, by design. Query sparingly, ideally no more than once an hour.
//
// This method returns an info object.
func (s *SDK) GetInfo(ctx context.Context, request operations.GetInfoRequest) (*operations.GetInfoResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/info"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetInfoResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `*/*`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 402:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 405:
	case httpRes.StatusCode == 406:
	case httpRes.StatusCode == 500:
	case httpRes.StatusCode == 502:
	case httpRes.StatusCode == 503:
	}

	return res, nil
}

// GetMe - Returns the user associated with the passed access_token.
//
// This method returns a user.
func (s *SDK) GetMe(ctx context.Context, request operations.GetMeRequest) (*operations.GetMeResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/me"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetMeResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `*/*`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 402:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 405:
	case httpRes.StatusCode == 406:
	case httpRes.StatusCode == 500:
	case httpRes.StatusCode == 502:
	case httpRes.StatusCode == 503:
	}

	return res, nil
}

// GetMeAnswers - Returns the answers owned by the user associated with the given access_token.
//
// This method returns a list of answers.
func (s *SDK) GetMeAnswers(ctx context.Context, request operations.GetMeAnswersRequest) (*operations.GetMeAnswersResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/me/answers"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetMeAnswersResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `*/*`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 402:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 405:
	case httpRes.StatusCode == 406:
	case httpRes.StatusCode == 500:
	case httpRes.StatusCode == 502:
	case httpRes.StatusCode == 503:
	}

	return res, nil
}

// GetMeAssociated - Returns all of a user's associated accounts, given an access_token for them.
//
// This method returns a list of network users.
func (s *SDK) GetMeAssociated(ctx context.Context, request operations.GetMeAssociatedRequest) (*operations.GetMeAssociatedResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/me/associated"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetMeAssociatedResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `*/*`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 402:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 405:
	case httpRes.StatusCode == 406:
	case httpRes.StatusCode == 500:
	case httpRes.StatusCode == 502:
	case httpRes.StatusCode == 503:
	}

	return res, nil
}

// GetMeBadges - Returns the badges earned by the user associated with the given access_token.
//
// This method returns a list of badges.
func (s *SDK) GetMeBadges(ctx context.Context, request operations.GetMeBadgesRequest) (*operations.GetMeBadgesResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/me/badges"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetMeBadgesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `*/*`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 402:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 405:
	case httpRes.StatusCode == 406:
	case httpRes.StatusCode == 500:
	case httpRes.StatusCode == 502:
	case httpRes.StatusCode == 503:
	}

	return res, nil
}

// GetMeComments - Returns the comments owned by the user associated with the given access_token.
//
// This method returns a list of comments.
func (s *SDK) GetMeComments(ctx context.Context, request operations.GetMeCommentsRequest) (*operations.GetMeCommentsResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/me/comments"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetMeCommentsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `*/*`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 402:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 405:
	case httpRes.StatusCode == 406:
	case httpRes.StatusCode == 500:
	case httpRes.StatusCode == 502:
	case httpRes.StatusCode == 503:
	}

	return res, nil
}

// GetMeCommentsToID - Returns the comments owned by the user associated with the given access_token that are in reply to the user identified by {toId}.
//
// This method returns a list of comments.
func (s *SDK) GetMeCommentsToID(ctx context.Context, request operations.GetMeCommentsToIDRequest) (*operations.GetMeCommentsToIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/me/comments/{toId}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetMeCommentsToIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `*/*`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 402:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 405:
	case httpRes.StatusCode == 406:
	case httpRes.StatusCode == 500:
	case httpRes.StatusCode == 502:
	case httpRes.StatusCode == 503:
	}

	return res, nil
}

// GetMeFavorites - Returns the questions favorites by the user associated with the given access_token.
//
// This method returns a list of questions.
func (s *SDK) GetMeFavorites(ctx context.Context, request operations.GetMeFavoritesRequest) (*operations.GetMeFavoritesResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/me/favorites"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetMeFavoritesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `*/*`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 402:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 405:
	case httpRes.StatusCode == 406:
	case httpRes.StatusCode == 500:
	case httpRes.StatusCode == 502:
	case httpRes.StatusCode == 503:
	}

	return res, nil
}

// GetMeInbox - Returns the user identified by access_token's inbox.
//
// This method requires an access_token, with a scope containing "read_inbox".
//
// This method returns a list of inbox items.
func (s *SDK) GetMeInbox(ctx context.Context, request operations.GetMeInboxRequest) (*operations.GetMeInboxResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/me/inbox"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetMeInboxResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `*/*`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 402:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 405:
	case httpRes.StatusCode == 406:
	case httpRes.StatusCode == 500:
	case httpRes.StatusCode == 502:
	case httpRes.StatusCode == 503:
	}

	return res, nil
}

// GetMeInboxUnread - Returns the unread items in the user identified by access_token's inbox.
//
// This method requires an access_token, with a scope containing "read_inbox".
//
// This method returns a list of inbox items.
func (s *SDK) GetMeInboxUnread(ctx context.Context, request operations.GetMeInboxUnreadRequest) (*operations.GetMeInboxUnreadResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/me/inbox/unread"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetMeInboxUnreadResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `*/*`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 402:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 405:
	case httpRes.StatusCode == 406:
	case httpRes.StatusCode == 500:
	case httpRes.StatusCode == 502:
	case httpRes.StatusCode == 503:
	}

	return res, nil
}

// GetMeMentioned - Returns the comments mentioning the user associated with the given access_token.
//
// This method returns a list of comments.
func (s *SDK) GetMeMentioned(ctx context.Context, request operations.GetMeMentionedRequest) (*operations.GetMeMentionedResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/me/mentioned"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetMeMentionedResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `*/*`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 402:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 405:
	case httpRes.StatusCode == 406:
	case httpRes.StatusCode == 500:
	case httpRes.StatusCode == 502:
	case httpRes.StatusCode == 503:
	}

	return res, nil
}

// GetMeMerges - Returns a record of merges that have occurred involving a user identified by an access_token.
//
// This method allows you to take now invalid account ids and find what account they've become, or take currently valid account ids and find which ids were equivalent in the past.
//
// This is most useful when confirming that an account_id is in fact "new" to an application.
//
// Account merges can happen for a wide range of reasons, applications should not make assumptions that merges have particular causes.
//
// Note that accounts are managed at a network level, users on a site may be merged due to an account level merge but there is no guarantee that a merge has an effect on any particular site.
//
// This method returns a list of account_merge.
func (s *SDK) GetMeMerges(ctx context.Context, request operations.GetMeMergesRequest) (*operations.GetMeMergesResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/me/merges"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetMeMergesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `*/*`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 402:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 405:
	case httpRes.StatusCode == 406:
	case httpRes.StatusCode == 500:
	case httpRes.StatusCode == 502:
	case httpRes.StatusCode == 503:
	}

	return res, nil
}

// GetMeNotifications - Returns a user's notifications, given an access_token.
//
// This method requires an access_token, with a scope containing "read_inbox".
//
// This method returns a list of notifications.
func (s *SDK) GetMeNotifications(ctx context.Context, request operations.GetMeNotificationsRequest) (*operations.GetMeNotificationsResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/me/notifications"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetMeNotificationsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `*/*`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 402:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 405:
	case httpRes.StatusCode == 406:
	case httpRes.StatusCode == 500:
	case httpRes.StatusCode == 502:
	case httpRes.StatusCode == 503:
	}

	return res, nil
}

// GetMeNotificationsUnread - Returns a user's unread notifications, given an access_token.
//
// This method requires an access_token, with a scope containing "read_inbox".
//
// This method returns a list of notifications.
func (s *SDK) GetMeNotificationsUnread(ctx context.Context, request operations.GetMeNotificationsUnreadRequest) (*operations.GetMeNotificationsUnreadResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/me/notifications/unread"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetMeNotificationsUnreadResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `*/*`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 402:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 405:
	case httpRes.StatusCode == 406:
	case httpRes.StatusCode == 500:
	case httpRes.StatusCode == 502:
	case httpRes.StatusCode == 503:
	}

	return res, nil
}

// GetMePrivileges - Returns the privileges the user identified by access_token has.
//
// This method returns a list of privileges.
func (s *SDK) GetMePrivileges(ctx context.Context, request operations.GetMePrivilegesRequest) (*operations.GetMePrivilegesResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/me/privileges"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetMePrivilegesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `*/*`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 402:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 405:
	case httpRes.StatusCode == 406:
	case httpRes.StatusCode == 500:
	case httpRes.StatusCode == 502:
	case httpRes.StatusCode == 503:
	}

	return res, nil
}

// GetMeQuestions - Returns the questions owned by the user associated with the given access_token.
//
// This method returns a list of questions.
func (s *SDK) GetMeQuestions(ctx context.Context, request operations.GetMeQuestionsRequest) (*operations.GetMeQuestionsResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/me/questions"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetMeQuestionsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `*/*`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 402:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 405:
	case httpRes.StatusCode == 406:
	case httpRes.StatusCode == 500:
	case httpRes.StatusCode == 502:
	case httpRes.StatusCode == 503:
	}

	return res, nil
}

// GetMeQuestionsFeatured - Returns the questions that have active bounties offered by the user associated with the given access_token.
//
// This method returns a list of questions.
func (s *SDK) GetMeQuestionsFeatured(ctx context.Context, request operations.GetMeQuestionsFeaturedRequest) (*operations.GetMeQuestionsFeaturedResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/me/questions/featured"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetMeQuestionsFeaturedResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `*/*`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 402:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 405:
	case httpRes.StatusCode == 406:
	case httpRes.StatusCode == 500:
	case httpRes.StatusCode == 502:
	case httpRes.StatusCode == 503:
	}

	return res, nil
}

// GetMeQuestionsNoAnswers - Returns the questions owned by the user associated with the given access_token that have no answers.
//
// This method returns a list of questions.
func (s *SDK) GetMeQuestionsNoAnswers(ctx context.Context, request operations.GetMeQuestionsNoAnswersRequest) (*operations.GetMeQuestionsNoAnswersResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/me/questions/no-answers"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetMeQuestionsNoAnswersResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `*/*`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 402:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 405:
	case httpRes.StatusCode == 406:
	case httpRes.StatusCode == 500:
	case httpRes.StatusCode == 502:
	case httpRes.StatusCode == 503:
	}

	return res, nil
}

// GetMeQuestionsUnaccepted - Returns the questions owned by the user associated with the given access_token that have no accepted answer.
//
// This method returns a list of questions.
func (s *SDK) GetMeQuestionsUnaccepted(ctx context.Context, request operations.GetMeQuestionsUnacceptedRequest) (*operations.GetMeQuestionsUnacceptedResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/me/questions/unaccepted"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetMeQuestionsUnacceptedResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `*/*`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 402:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 405:
	case httpRes.StatusCode == 406:
	case httpRes.StatusCode == 500:
	case httpRes.StatusCode == 502:
	case httpRes.StatusCode == 503:
	}

	return res, nil
}

// GetMeQuestionsUnanswered - Returns the questions owned by the user associated with the given access_token that are not considered answered.
//
// This method returns a list of questions.
func (s *SDK) GetMeQuestionsUnanswered(ctx context.Context, request operations.GetMeQuestionsUnansweredRequest) (*operations.GetMeQuestionsUnansweredResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/me/questions/unanswered"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetMeQuestionsUnansweredResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `*/*`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 402:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 405:
	case httpRes.StatusCode == 406:
	case httpRes.StatusCode == 500:
	case httpRes.StatusCode == 502:
	case httpRes.StatusCode == 503:
	}

	return res, nil
}

// GetMeReputation - Returns the reputation changed for the user associated with the given access_token.
//
// This method returns a list of reputation changes.
func (s *SDK) GetMeReputation(ctx context.Context, request operations.GetMeReputationRequest) (*operations.GetMeReputationResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/me/reputation"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetMeReputationResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `*/*`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 402:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 405:
	case httpRes.StatusCode == 406:
	case httpRes.StatusCode == 500:
	case httpRes.StatusCode == 502:
	case httpRes.StatusCode == 503:
	}

	return res, nil
}

// GetMeReputationHistory - Returns user's public reputation history.
//
// This method returns a list of reputation_history.
func (s *SDK) GetMeReputationHistory(ctx context.Context, request operations.GetMeReputationHistoryRequest) (*operations.GetMeReputationHistoryResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/me/reputation-history"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetMeReputationHistoryResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `*/*`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 402:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 405:
	case httpRes.StatusCode == 406:
	case httpRes.StatusCode == 500:
	case httpRes.StatusCode == 502:
	case httpRes.StatusCode == 503:
	}

	return res, nil
}

// GetMeReputationHistoryFull - Returns user's full reputation history, including private events.
//
//	This method requires an access_token, with a scope containing "private_info".
//
// This method returns a list of reputation_history.
func (s *SDK) GetMeReputationHistoryFull(ctx context.Context, request operations.GetMeReputationHistoryFullRequest) (*operations.GetMeReputationHistoryFullResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/me/reputation-history/full"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetMeReputationHistoryFullResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `*/*`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 402:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 405:
	case httpRes.StatusCode == 406:
	case httpRes.StatusCode == 500:
	case httpRes.StatusCode == 502:
	case httpRes.StatusCode == 503:
	}

	return res, nil
}

// GetMeSuggestedEdits - Returns the suggested edits the user identified by access_token has submitted.
//
// This method returns a list of suggested-edits.
func (s *SDK) GetMeSuggestedEdits(ctx context.Context, request operations.GetMeSuggestedEditsRequest) (*operations.GetMeSuggestedEditsResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/me/suggested-edits"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetMeSuggestedEditsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `*/*`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 402:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 405:
	case httpRes.StatusCode == 406:
	case httpRes.StatusCode == 500:
	case httpRes.StatusCode == 502:
	case httpRes.StatusCode == 503:
	}

	return res, nil
}

// GetMeTags - Returns the tags the user identified by the access_token passed is active in.
//
// This method returns a list of tags.
func (s *SDK) GetMeTags(ctx context.Context, request operations.GetMeTagsRequest) (*operations.GetMeTagsResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/me/tags"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetMeTagsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `*/*`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 402:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 405:
	case httpRes.StatusCode == 406:
	case httpRes.StatusCode == 500:
	case httpRes.StatusCode == 502:
	case httpRes.StatusCode == 503:
	}

	return res, nil
}

// GetMeTagsTagsTopAnswers - Returns the top 30 answers the user associated with the given access_token has posted in response to questions with the given tags.
//
// This method returns a list of answers.
func (s *SDK) GetMeTagsTagsTopAnswers(ctx context.Context, request operations.GetMeTagsTagsTopAnswersRequest) (*operations.GetMeTagsTagsTopAnswersResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/me/tags/{tags}/top-answers", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetMeTagsTagsTopAnswersResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `*/*`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 402:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 405:
	case httpRes.StatusCode == 406:
	case httpRes.StatusCode == 500:
	case httpRes.StatusCode == 502:
	case httpRes.StatusCode == 503:
	}

	return res, nil
}

// GetMeTagsTagsTopQuestions - Returns the top 30 questions the user associated with the given access_token has posted in response to questions with the given tags.
//
// This method returns a list of questions.
func (s *SDK) GetMeTagsTagsTopQuestions(ctx context.Context, request operations.GetMeTagsTagsTopQuestionsRequest) (*operations.GetMeTagsTagsTopQuestionsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/me/tags/{tags}/top-questions", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetMeTagsTagsTopQuestionsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `*/*`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 402:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 405:
	case httpRes.StatusCode == 406:
	case httpRes.StatusCode == 500:
	case httpRes.StatusCode == 502:
	case httpRes.StatusCode == 503:
	}

	return res, nil
}

// GetMeTimeline - Returns a subset of the actions the user identified by the passed access_token has taken on the site.
//
// This method returns a list of user timeline objects.
func (s *SDK) GetMeTimeline(ctx context.Context, request operations.GetMeTimelineRequest) (*operations.GetMeTimelineResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/me/timeline"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetMeTimelineResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `*/*`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 402:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 405:
	case httpRes.StatusCode == 406:
	case httpRes.StatusCode == 500:
	case httpRes.StatusCode == 502:
	case httpRes.StatusCode == 503:
	}

	return res, nil
}

// GetMeTopAnswerTags - Returns the user identified by access_token's top 30 tags by answer score.
//
// This method returns a list of top tag objects.
func (s *SDK) GetMeTopAnswerTags(ctx context.Context, request operations.GetMeTopAnswerTagsRequest) (*operations.GetMeTopAnswerTagsResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/me/top-answer-tags"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetMeTopAnswerTagsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `*/*`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 402:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 405:
	case httpRes.StatusCode == 406:
	case httpRes.StatusCode == 500:
	case httpRes.StatusCode == 502:
	case httpRes.StatusCode == 503:
	}

	return res, nil
}

// GetMeTopQuestionTags - Returns the user identified by access_token's top 30 tags by question score.
//
// This method returns a list of top tag objects.
func (s *SDK) GetMeTopQuestionTags(ctx context.Context, request operations.GetMeTopQuestionTagsRequest) (*operations.GetMeTopQuestionTagsResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/me/top-question-tags"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetMeTopQuestionTagsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `*/*`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 402:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 405:
	case httpRes.StatusCode == 406:
	case httpRes.StatusCode == 500:
	case httpRes.StatusCode == 502:
	case httpRes.StatusCode == 503:
	}

	return res, nil
}

// GetMeWritePermissions - Returns the write permissions a user has via the api, given an access token.
//
// The Stack Exchange API gives users the ability to create, edit, and delete certain types. This method returns whether the passed user is capable of performing those actions at all, as well as how many times a day they can.
//
// This method does not consider the user's current quota (ie. if they've already exhausted it for today) nor any additional restrictions on write access, such as editing deleted comments.
//
// This method returns a list of write_permissions.
func (s *SDK) GetMeWritePermissions(ctx context.Context, request operations.GetMeWritePermissionsRequest) (*operations.GetMeWritePermissionsResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/me/write-permissions"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetMeWritePermissionsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `*/*`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 402:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 405:
	case httpRes.StatusCode == 406:
	case httpRes.StatusCode == 500:
	case httpRes.StatusCode == 502:
	case httpRes.StatusCode == 503:
	}

	return res, nil
}

// GetNotifications - Returns a user's notifications.
//
// This method requires an access_token, with a scope containing "read_inbox".
//
// This method returns a list of notifications.
func (s *SDK) GetNotifications(ctx context.Context, request operations.GetNotificationsRequest) (*operations.GetNotificationsResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/notifications"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetNotificationsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `*/*`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 402:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 405:
	case httpRes.StatusCode == 406:
	case httpRes.StatusCode == 500:
	case httpRes.StatusCode == 502:
	case httpRes.StatusCode == 503:
	}

	return res, nil
}

// GetNotificationsUnread - Returns a user's unread notifications.
//
// This method requires an access_token, with a scope containing "read_inbox".
//
// This method returns a list of notifications.
func (s *SDK) GetNotificationsUnread(ctx context.Context, request operations.GetNotificationsUnreadRequest) (*operations.GetNotificationsUnreadResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/notifications/unread"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetNotificationsUnreadResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `*/*`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 402:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 405:
	case httpRes.StatusCode == 406:
	case httpRes.StatusCode == 500:
	case httpRes.StatusCode == 502:
	case httpRes.StatusCode == 503:
	}

	return res, nil
}

// GetPosts - Fetches all posts (questions and answers) on the site.
//
// In many ways this method is the union of /questions and /answers, returning both sets of data albeit only the common fields.
//
// Most applications should use the question or answer specific methods, but /posts is available for those rare cases where any activity is of intereset. Examples of such queries would be: "all posts on Jan. 1st 2011" or "top 10 posts by score of all time".
//
// The sorts accepted by this method operate on the follow fields of the post object:
//
//   - activity - last_activity_date
//
//   - creation - creation_date
//
//   - votes - score
//     activity is the default sort.
//
//     It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.
//
// This method returns a list of posts.
func (s *SDK) GetPosts(ctx context.Context, request operations.GetPostsRequest) (*operations.GetPostsResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/posts"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetPostsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `*/*`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 402:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 405:
	case httpRes.StatusCode == 406:
	case httpRes.StatusCode == 500:
	case httpRes.StatusCode == 502:
	case httpRes.StatusCode == 503:
	}

	return res, nil
}

// GetPostsIds - Fetches a set of posts by ids.
//
// This method is meant for grabbing an object when unsure whether an id identifies a question or an answer. This is most common with user entered data.
//
// {ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for post_id, answer_id, or question_id on post, answer, and question objects respectively.
//
// The sorts accepted by this method operate on the follow fields of the post object:
//
//   - activity - last_activity_date
//
//   - creation - creation_date
//
//   - votes - score
//     activity is the default sort.
//
//     It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.
//
// This method returns a list of posts.
func (s *SDK) GetPostsIds(ctx context.Context, request operations.GetPostsIdsRequest) (*operations.GetPostsIdsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/posts/{ids}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetPostsIdsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `*/*`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 402:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 405:
	case httpRes.StatusCode == 406:
	case httpRes.StatusCode == 500:
	case httpRes.StatusCode == 502:
	case httpRes.StatusCode == 503:
	}

	return res, nil
}

// GetPostsIdsComments - Gets the comments on the posts identified in ids, regardless of the type of the posts.
//
// This method is meant for cases when you are unsure of the type of the post id provided. Generally, this would be due to obtaining the post id directly from a user.
//
// {ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for post_id, answer_id, or question_id on post, answer, and question objects respectively.
//
// The sorts accepted by this method operate on the follow fields of the comment object:
//
//   - creation - creation_date
//
//   - votes - score
//     creation is the default sort.
//
//     It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.
//
// This method returns a list of comments.
func (s *SDK) GetPostsIdsComments(ctx context.Context, request operations.GetPostsIdsCommentsRequest) (*operations.GetPostsIdsCommentsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/posts/{ids}/comments", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetPostsIdsCommentsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `*/*`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 402:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 405:
	case httpRes.StatusCode == 406:
	case httpRes.StatusCode == 500:
	case httpRes.StatusCode == 502:
	case httpRes.StatusCode == 503:
	}

	return res, nil
}

// GetPostsIdsRevisions - Returns edit revisions for the posts identified in ids.
//
// {ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for post_id, answer_id, or question_id on post, answer, and question objects respectively.
//
// This method returns a list of revisions.
func (s *SDK) GetPostsIdsRevisions(ctx context.Context, request operations.GetPostsIdsRevisionsRequest) (*operations.GetPostsIdsRevisionsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/posts/{ids}/revisions", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetPostsIdsRevisionsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `*/*`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 402:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 405:
	case httpRes.StatusCode == 406:
	case httpRes.StatusCode == 500:
	case httpRes.StatusCode == 502:
	case httpRes.StatusCode == 503:
	}

	return res, nil
}

// GetPostsIdsSuggestedEdits - Returns suggsted edits on the posts identified in ids.
//
//   - creation - creation_date
//
//   - approval - approval_date
//
//   - rejection - rejection_date
//     creation is the default sort.
//
//     {ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for post_id, answer_id, or question_id on post, answer, and question objects respectively.
//
// This method returns a list of suggested-edits.
func (s *SDK) GetPostsIdsSuggestedEdits(ctx context.Context, request operations.GetPostsIdsSuggestedEditsRequest) (*operations.GetPostsIdsSuggestedEditsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/posts/{ids}/suggested-edits", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetPostsIdsSuggestedEditsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `*/*`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 402:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 405:
	case httpRes.StatusCode == 406:
	case httpRes.StatusCode == 500:
	case httpRes.StatusCode == 502:
	case httpRes.StatusCode == 503:
	}

	return res, nil
}

// GetPrivileges - Returns the earnable privileges on a site.
//
// Privileges define abilities a user can earn (via reputation) on any Stack Exchange site.
//
// While fairly stable, over time they do change. New ones are introduced with new features, and the reputation requirements change as a site matures.
//
// This method returns a list of privileges.
func (s *SDK) GetPrivileges(ctx context.Context, request operations.GetPrivilegesRequest) (*operations.GetPrivilegesResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/privileges"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetPrivilegesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `*/*`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 402:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 405:
	case httpRes.StatusCode == 406:
	case httpRes.StatusCode == 500:
	case httpRes.StatusCode == 502:
	case httpRes.StatusCode == 503:
	}

	return res, nil
}

// GetQuestions - Gets all the questions on the site.
//
// This method allows you make fairly flexible queries across the entire corpus of questions on a site. For example, getting all questions asked in the the week of Jan 1st 2011 with scores of 10 or more is a single query with parameters sort=votes&min=10&fromdate=1293840000&todate=1294444800.
//
// To constrain questions returned to those with a set of tags, use the tagged parameter with a semi-colon delimited list of tags. This is an and contraint, passing tagged=c;java will return only those questions with both tags. As such, passing more than 5 tags will always return zero results.
//
// The sorts accepted by this method operate on the follow fields of the question object:
//
//   - activity - last_activity_date
//
//   - creation - creation_date
//
//   - votes - score
//
//   - hot - by the formula ordering the hot tab Does not accept min or max
//
//   - week - by the formula ordering the week tab Does not accept min or max
//
//   - month - by the formula ordering the month tab Does not accept min or max
//     activity is the default sort.
//
//     It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.
//
// This method returns a list of questions.
func (s *SDK) GetQuestions(ctx context.Context, request operations.GetQuestionsRequest) (*operations.GetQuestionsResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/questions"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetQuestionsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `*/*`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 402:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 405:
	case httpRes.StatusCode == 406:
	case httpRes.StatusCode == 500:
	case httpRes.StatusCode == 502:
	case httpRes.StatusCode == 503:
	}

	return res, nil
}

// GetQuestionsFeatured - Returns all the questions with active bounties in the system.
//
// The sorts accepted by this method operate on the follow fields of the question object:
//
//   - activity - last_activity_date
//
//   - creation - creation_date
//
//   - votes - score
//     activity is the default sort.
//
//     It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.
//
// This method returns a list of questions.
func (s *SDK) GetQuestionsFeatured(ctx context.Context, request operations.GetQuestionsFeaturedRequest) (*operations.GetQuestionsFeaturedResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/questions/featured"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetQuestionsFeaturedResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `*/*`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 402:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 405:
	case httpRes.StatusCode == 406:
	case httpRes.StatusCode == 500:
	case httpRes.StatusCode == 502:
	case httpRes.StatusCode == 503:
	}

	return res, nil
}

// GetQuestionsIds - Returns the questions identified in {ids}.
//
// This is most useful for fetching fresh data when maintaining a cache of question ids, or polling for changes.
//
// {ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for question_id on question objects.
//
// The sorts accepted by this method operate on the follow fields of the question object:
//
//   - activity - last_activity_date
//
//   - creation - creation_date
//
//   - votes - score
//     activity is the default sort.
//
//     It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.
//
// This method returns a list of questions.
func (s *SDK) GetQuestionsIds(ctx context.Context, request operations.GetQuestionsIdsRequest) (*operations.GetQuestionsIdsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/questions/{ids}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetQuestionsIdsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `*/*`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 402:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 405:
	case httpRes.StatusCode == 406:
	case httpRes.StatusCode == 500:
	case httpRes.StatusCode == 502:
	case httpRes.StatusCode == 503:
	}

	return res, nil
}

// GetQuestionsIdsAnswers - Gets the answers to a set of questions identified in id.
//
// This method is most useful if you have a set of interesting questions, and you wish to obtain all of their answers at once or if you are polling for new or updates answers (in conjunction with sort=activity).
//
// {ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for question_id on question objects.
//
// The sorts accepted by this method operate on the follow fields of the answer object:
//
//   - activity - last_activity_date
//
//   - creation - creation_date
//
//   - votes - score
//     activity is the default sort.
//
//     It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.
//
// This method returns a list of answers.
func (s *SDK) GetQuestionsIdsAnswers(ctx context.Context, request operations.GetQuestionsIdsAnswersRequest) (*operations.GetQuestionsIdsAnswersResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/questions/{ids}/answers", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetQuestionsIdsAnswersResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `*/*`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 402:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 405:
	case httpRes.StatusCode == 406:
	case httpRes.StatusCode == 500:
	case httpRes.StatusCode == 502:
	case httpRes.StatusCode == 503:
	}

	return res, nil
}

// GetQuestionsIdsComments - Gets the comments on a question.
//
// If you know that you have an question id and need the comments, use this method. If you know you have a answer id, use /answers/{ids}/comments. If you are unsure, use /posts/{ids}/comments.
//
// {ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for question_id on question objects.
//
// The sorts accepted by this method operate on the follow fields of the comment object:
//
//   - creation - creation_date
//
//   - votes - score
//     creation is the default sort.
//
//     It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.
//
// This method returns a list of comments.
func (s *SDK) GetQuestionsIdsComments(ctx context.Context, request operations.GetQuestionsIdsCommentsRequest) (*operations.GetQuestionsIdsCommentsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/questions/{ids}/comments", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetQuestionsIdsCommentsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `*/*`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 402:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 405:
	case httpRes.StatusCode == 406:
	case httpRes.StatusCode == 500:
	case httpRes.StatusCode == 502:
	case httpRes.StatusCode == 503:
	}

	return res, nil
}

// GetQuestionsIdsLinked - Gets questions which link to those questions identified in {ids}.
//
// This method only considers questions that are linked within a site, and will never return questions from another Stack Exchange site.
//
// A question is considered "linked" when it explicitly includes a hyperlink to another question, there are no other heuristics.
//
// {ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for question_id on question objects.
//
// The sorts accepted by this method operate on the follow fields of the question object:
//
//   - activity - last_activity_date
//
//   - creation - creation_date
//
//   - votes - score
//
//   - rank - a priority sort by site applies, subject to change at any time Does not accept min or max
//     activity is the default sort.
//
//     It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.
//
// This method returns a list of questions.
func (s *SDK) GetQuestionsIdsLinked(ctx context.Context, request operations.GetQuestionsIdsLinkedRequest) (*operations.GetQuestionsIdsLinkedResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/questions/{ids}/linked", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetQuestionsIdsLinkedResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `*/*`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 402:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 405:
	case httpRes.StatusCode == 406:
	case httpRes.StatusCode == 500:
	case httpRes.StatusCode == 502:
	case httpRes.StatusCode == 503:
	}

	return res, nil
}

// GetQuestionsIdsRelated - Returns questions that the site considers related to those identified in {ids}.
//
// The algorithm for determining if questions are related is not documented, and subject to change at any time. Futhermore, these values are very heavily cached, and may not update immediately after a question has been editted. It is also not guaranteed that a question will be considered related to any number (even non-zero) of questions, and a consumer should be able to handle a variable number of returned questions.
//
// {ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for question_id on question objects.
//
// The sorts accepted by this method operate on the follow fields of the question object:
//
//   - activity - last_activity_date
//
//   - creation - creation_date
//
//   - votes - score
//
//   - rank - a priority sort by site applies, subject to change at any time Does not accept min or max
//     activity is the default sort.
//
//     It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.
//
// This method returns a list of questions.
func (s *SDK) GetQuestionsIdsRelated(ctx context.Context, request operations.GetQuestionsIdsRelatedRequest) (*operations.GetQuestionsIdsRelatedResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/questions/{ids}/related", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetQuestionsIdsRelatedResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `*/*`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 402:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 405:
	case httpRes.StatusCode == 406:
	case httpRes.StatusCode == 500:
	case httpRes.StatusCode == 502:
	case httpRes.StatusCode == 503:
	}

	return res, nil
}

// GetQuestionsIdsTimeline - Returns a subset of the events that have happened to the questions identified in id.
//
// This provides data similar to that found on a question's timeline page.
//
// Voting data is scrubbed to deter inferencing of voter identity.
//
// {ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for question_id on question objects.
//
// This method returns a list of question timeline events.
func (s *SDK) GetQuestionsIdsTimeline(ctx context.Context, request operations.GetQuestionsIdsTimelineRequest) (*operations.GetQuestionsIdsTimelineResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/questions/{ids}/timeline", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetQuestionsIdsTimelineResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `*/*`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 402:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 405:
	case httpRes.StatusCode == 406:
	case httpRes.StatusCode == 500:
	case httpRes.StatusCode == 502:
	case httpRes.StatusCode == 503:
	}

	return res, nil
}

// GetQuestionsNoAnswers - Returns questions which have received no answers.
//
// Compare with /questions/unanswered which mearly returns questions that the sites consider insufficiently well answered.
//
// This method corresponds roughly with the this site tab.
//
// To constrain questions returned to those with a set of tags, use the tagged parameter with a semi-colon delimited list of tags. This is an and contraint, passing tagged=c;java will return only those questions with both tags. As such, passing more than 5 tags will always return zero results.
//
// The sorts accepted by this method operate on the follow fields of the question object:
//
//   - activity - last_activity_date
//
//   - creation - creation_date
//
//   - votes - score
//     activity is the default sort.
//
//     It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.
//
// This method returns a list of questions.
func (s *SDK) GetQuestionsNoAnswers(ctx context.Context, request operations.GetQuestionsNoAnswersRequest) (*operations.GetQuestionsNoAnswersResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/questions/no-answers"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetQuestionsNoAnswersResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `*/*`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 402:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 405:
	case httpRes.StatusCode == 406:
	case httpRes.StatusCode == 500:
	case httpRes.StatusCode == 502:
	case httpRes.StatusCode == 503:
	}

	return res, nil
}

// GetQuestionsUnanswered - Returns questions the site considers to be unanswered.
//
// Note that just because a question has an answer, that does not mean it is considered answered. While the rules are subject to change, at this time a question must have at least one upvoted answer to be considered answered.
//
// To constrain questions returned to those with a set of tags, use the tagged parameter with a semi-colon delimited list of tags. This is an and contraint, passing tagged=c;java will return only those questions with both tags. As such, passing more than 5 tags will always return zero results.
//
// Compare with /questions/no-answers.
//
// This method corresponds roughly with the unanswered tab.
//
// The sorts accepted by this method operate on the follow fields of the question object:
//
//   - activity - last_activity_date
//
//   - creation - creation_date
//
//   - votes - score
//     activity is the default sort.
//
//     It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.
//
// This method returns a list of questions.
func (s *SDK) GetQuestionsUnanswered(ctx context.Context, request operations.GetQuestionsUnansweredRequest) (*operations.GetQuestionsUnansweredResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/questions/unanswered"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetQuestionsUnansweredResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `*/*`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 402:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 405:
	case httpRes.StatusCode == 406:
	case httpRes.StatusCode == 500:
	case httpRes.StatusCode == 502:
	case httpRes.StatusCode == 503:
	}

	return res, nil
}

// GetRevisionsIds - Returns edit revisions identified by ids in {ids}.
//
// {ids} can contain up to 20 semicolon delimited ids, to find ids programatically look for revision_guid on revision objects. Note that unlike most other id types in the API, revision_guid is a string.
//
// This method returns a list of revisions.
func (s *SDK) GetRevisionsIds(ctx context.Context, request operations.GetRevisionsIdsRequest) (*operations.GetRevisionsIdsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/revisions/{ids}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetRevisionsIdsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `*/*`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 402:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 405:
	case httpRes.StatusCode == 406:
	case httpRes.StatusCode == 500:
	case httpRes.StatusCode == 502:
	case httpRes.StatusCode == 503:
	}

	return res, nil
}

// GetSearch - Searches a site for any questions which fit the given criteria.
//
// This method is intentionally quite limited. For more general searching, you should use a proper internet search engine restricted to the domain of the site in question.
//
// At least one of tagged or intitle must be set on this method. nottagged is only used if tagged is also set, for performance reasons.
//
// tagged and nottagged are semi-colon delimited list of tags. At least 1 tag in tagged will be on each returned question if it is passed, making it the OR equivalent of the AND version of tagged on /questions.
//
// The sorts accepted by this method operate on the follow fields of the question object:
//
//   - activity - last_activity_date
//
//   - creation - creation_date
//
//   - votes - score
//
//   - relevance - matches the relevance tab on the site itself Does not accept min or max
//     activity is the default sort.
//
//     It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.
//
// This method returns a list of questions.
func (s *SDK) GetSearch(ctx context.Context, request operations.GetSearchRequest) (*operations.GetSearchResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/search"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetSearchResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `*/*`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 402:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 405:
	case httpRes.StatusCode == 406:
	case httpRes.StatusCode == 500:
	case httpRes.StatusCode == 502:
	case httpRes.StatusCode == 503:
	}

	return res, nil
}

// GetSearchAdvanced - Searches a site for any questions which fit the given criteria.
//
// Search criteria are expressed using the following parameters:
//   - q - a free form text parameter, will match all question properties based on an undocumented algorithm.
//   - accepted - true to return only questions with accepted answers, false to return only those without. Omit to elide constraint.
//   - answers - the minimum number of answers returned questions must have.
//   - body - text which must appear in returned questions' bodies.
//   - closed - true to return only closed questions, false to return only open ones. Omit to elide constraint.
//   - migrated - true to return only questions migrated away from a site, false to return only those not. Omit to elide constraint.
//   - notice - true to return only questions with post notices, false to return only those without. Omit to elide constraint.
//   - nottagged - a semicolon delimited list of tags, none of which will be present on returned questions.
//   - tagged - a semicolon delimited list of tags, of which at least one will be present on all returned questions.
//   - title - text which must appear in returned questions' titles.
//   - user - the id of the user who must own the questions returned.
//   - url - a url which must be contained in a post, may include a wildcard.
//   - views - the minimum number of views returned questions must have.
//   - wiki - true to return only community wiki questions, false to return only non-community wiki ones. Omit to elide constraint.
//
// At least one additional parameter must be set if nottagged is set, for performance reasons.
//
// The sorts accepted by this method operate on the follow fields of the question object:
//
//   - activity - last_activity_date
//
//   - creation - creation_date
//
//   - votes - score
//
//   - relevance - matches the relevance tab on the site itself Does not accept min or max
//     activity is the default sort.
//
//     It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.
//
// This method returns a list of questions.
func (s *SDK) GetSearchAdvanced(ctx context.Context, request operations.GetSearchAdvancedRequest) (*operations.GetSearchAdvancedResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/search/advanced"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetSearchAdvancedResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `*/*`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 402:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 405:
	case httpRes.StatusCode == 406:
	case httpRes.StatusCode == 500:
	case httpRes.StatusCode == 502:
	case httpRes.StatusCode == 503:
	}

	return res, nil
}

// GetSimilar - Returns questions which are similar to a hypothetical one based on a title and tag combination.
//
// This method is roughly equivalent to a site's related questions suggestion on the ask page.
//
// This method is useful for correlating data outside of a Stack Exchange site with similar content within one.
//
// Note that title must always be passed as a parameter. tagged and nottagged are optional, semi-colon delimited lists of tags.
//
// If tagged is passed it is treated as a preference, there is no guarantee that questions returned will have any of those tags. nottagged is treated as a requirement, no questions will be returned with those tags.
//
// The sorts accepted by this method operate on the follow fields of the question object:
//
//   - activity - last_activity_date
//
//   - creation - creation_date
//
//   - votes - score
//
//   - relevance - order by "how similar" the questions are, most likely candidate first with a descending order Does not accept min or max
//     activity is the default sort.
//
//     It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.
//
// This method returns a list of questions.
func (s *SDK) GetSimilar(ctx context.Context, request operations.GetSimilarRequest) (*operations.GetSimilarResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/similar"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetSimilarResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `*/*`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 402:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 405:
	case httpRes.StatusCode == 406:
	case httpRes.StatusCode == 500:
	case httpRes.StatusCode == 502:
	case httpRes.StatusCode == 503:
	}

	return res, nil
}

// GetSites - Returns all sites in the network.
//
// This method allows for discovery of new sites, and changes to existing ones. Be aware that unlike normal API methods, this method should be fetched very infrequently, it is very unusual for these values to change more than once on any given day. It is suggested that you cache its return for at least one day, unless your app encounters evidence that it has changed (such as from the /info method).
//
// The pagesize parameter for this method is unbounded, in acknowledgement that for many applications repeatedly fetching from /sites would complicate start-up tasks needlessly.
//
// This method returns a list of sites.
func (s *SDK) GetSites(ctx context.Context, request operations.GetSitesRequest) (*operations.GetSitesResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/sites"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetSitesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `*/*`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 402:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 405:
	case httpRes.StatusCode == 406:
	case httpRes.StatusCode == 500:
	case httpRes.StatusCode == 502:
	case httpRes.StatusCode == 503:
	}

	return res, nil
}

// GetSuggestedEdits - Returns all the suggested edits in the systems.
//
// This method returns a list of suggested-edits.
//
// The sorts accepted by this method operate on the follow fields of the suggested_edit object:
//
//   - creation - creation_date
//
//   - approval - approval_date Does not return unapproved suggested_edits
//
//   - rejection - rejection_date Does not return unrejected suggested_edits
//     creation is the default sort.
//
//     It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.
func (s *SDK) GetSuggestedEdits(ctx context.Context, request operations.GetSuggestedEditsRequest) (*operations.GetSuggestedEditsResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/suggested-edits"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetSuggestedEditsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `*/*`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 402:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 405:
	case httpRes.StatusCode == 406:
	case httpRes.StatusCode == 500:
	case httpRes.StatusCode == 502:
	case httpRes.StatusCode == 503:
	}

	return res, nil
}

// GetSuggestedEditsIds - Returns suggested edits identified in ids.
//
// {ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for suggested_edit_id on suggested_edit objects.
//
// The sorts accepted by this method operate on the follow fields of the suggested_edit object:
//
//   - creation - creation_date
//
//   - approval - approval_date Does not return unapproved suggested_edits
//
//   - rejection - rejection_date Does not return unrejected suggested_edits
//     creation is the default sort.
//
//     It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.
//
// This method returns a list of suggested-edits.
func (s *SDK) GetSuggestedEditsIds(ctx context.Context, request operations.GetSuggestedEditsIdsRequest) (*operations.GetSuggestedEditsIdsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/suggested-edits/{ids}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetSuggestedEditsIdsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `*/*`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 402:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 405:
	case httpRes.StatusCode == 406:
	case httpRes.StatusCode == 500:
	case httpRes.StatusCode == 502:
	case httpRes.StatusCode == 503:
	}

	return res, nil
}

// GetTags - Returns the tags found on a site.
//
// The inname parameter lets a consumer filter down to tags that contain a certain substring. For example, inname=own would return both "download" and "owner" amongst others.
//
// This method returns a list of tags.
//
// The sorts accepted by this method operate on the follow fields of the tag object:
//
//   - popular - count
//
//   - activity - the creation_date of the last question asked with the tag
//
//   - name - name
//     popular is the default sort.
//
//     It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.
func (s *SDK) GetTags(ctx context.Context, request operations.GetTagsRequest) (*operations.GetTagsResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/tags"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetTagsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `*/*`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 402:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 405:
	case httpRes.StatusCode == 406:
	case httpRes.StatusCode == 500:
	case httpRes.StatusCode == 502:
	case httpRes.StatusCode == 503:
	}

	return res, nil
}

// GetTagsModeratorOnly - Returns the tags found on a site that only moderators can use.
//
// The inname parameter lets a consumer filter down to tags that contain a certain substring. For example, inname=own would return both "download" and "owner" amongst others.
//
// This method returns a list of tags.
//
// The sorts accepted by this method operate on the follow fields of the tag object:
//
//   - popular - count
//
//   - activity - the creation_date of the last question asked with the tag
//
//   - name - name
//     popular is the default sort.
//
//     It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.
func (s *SDK) GetTagsModeratorOnly(ctx context.Context, request operations.GetTagsModeratorOnlyRequest) (*operations.GetTagsModeratorOnlyResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/tags/moderator-only"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetTagsModeratorOnlyResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `*/*`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 402:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 405:
	case httpRes.StatusCode == 406:
	case httpRes.StatusCode == 500:
	case httpRes.StatusCode == 502:
	case httpRes.StatusCode == 503:
	}

	return res, nil
}

// GetTagsRequired - Returns the tags found on a site that fulfill required tag constraints on questions.
//
// The inname parameter lets a consumer filter down to tags that contain a certain substring. For example, inname=own would return both "download" and "owner" amongst others.
//
// This method returns a list of tags.
//
// The sorts accepted by this method operate on the follow fields of the tag object:
//
//   - popular - count
//
//   - activity - the creation_date of the last question asked with the tag
//
//   - name - name
//     popular is the default sort.
//
//     It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.
func (s *SDK) GetTagsRequired(ctx context.Context, request operations.GetTagsRequiredRequest) (*operations.GetTagsRequiredResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/tags/required"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetTagsRequiredResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `*/*`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 402:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 405:
	case httpRes.StatusCode == 406:
	case httpRes.StatusCode == 500:
	case httpRes.StatusCode == 502:
	case httpRes.StatusCode == 503:
	}

	return res, nil
}

// GetTagsSynonyms - Returns all tag synonyms found a site.
//
// When searching for synonyms of specific tags, it is better to use /tags/{tags}/synonyms over this method.
//
// The sorts accepted by this method operate on the follow fields of the tag_synonym object:
//
//   - creation - creation_date
//
//   - applied - applied_count
//
//   - activity - last_applied_date
//     creation is the default sort.
//
//     It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.
//
// This method returns a list of tag_synonyms.
func (s *SDK) GetTagsSynonyms(ctx context.Context, request operations.GetTagsSynonymsRequest) (*operations.GetTagsSynonymsResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/tags/synonyms"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetTagsSynonymsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `*/*`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 402:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 405:
	case httpRes.StatusCode == 406:
	case httpRes.StatusCode == 500:
	case httpRes.StatusCode == 502:
	case httpRes.StatusCode == 503:
	}

	return res, nil
}

// GetTagsTagTopAnswerersPeriod - Returns the top 30 answerers active in a single tag, of either all-time or the last 30 days.
//
// This is a view onto the data presented on the tag info page on the sites.
//
// This method returns a list of tag score objects.
func (s *SDK) GetTagsTagTopAnswerersPeriod(ctx context.Context, request operations.GetTagsTagTopAnswerersPeriodRequest) (*operations.GetTagsTagTopAnswerersPeriodResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/tags/{tag}/top-answerers/{period}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetTagsTagTopAnswerersPeriodResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `*/*`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 402:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 405:
	case httpRes.StatusCode == 406:
	case httpRes.StatusCode == 500:
	case httpRes.StatusCode == 502:
	case httpRes.StatusCode == 503:
	}

	return res, nil
}

// GetTagsTagTopAskersPeriod - Returns the top 30 askers active in a single tag, of either all-time or the last 30 days.
//
// This is a view onto the data presented on the tag info page on the sites.
//
// This method returns a list of tag score objects.
func (s *SDK) GetTagsTagTopAskersPeriod(ctx context.Context, request operations.GetTagsTagTopAskersPeriodRequest) (*operations.GetTagsTagTopAskersPeriodResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/tags/{tag}/top-askers/{period}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetTagsTagTopAskersPeriodResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `*/*`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 402:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 405:
	case httpRes.StatusCode == 406:
	case httpRes.StatusCode == 500:
	case httpRes.StatusCode == 502:
	case httpRes.StatusCode == 503:
	}

	return res, nil
}

// GetTagsTagsFaq - Returns the frequently asked questions for the given set of tags in {tags}.
//
// For a question to be returned, it must have all the tags in {tags} and be considered "frequently asked". The exact algorithm for determining whether a question is considered a FAQ is subject to change at any time.
//
// {tags} can contain up to 5 individual tags per request.
//
// This method returns a list of questions.
func (s *SDK) GetTagsTagsFaq(ctx context.Context, request operations.GetTagsTagsFaqRequest) (*operations.GetTagsTagsFaqResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/tags/{tags}/faq", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetTagsTagsFaqResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `*/*`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 402:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 405:
	case httpRes.StatusCode == 406:
	case httpRes.StatusCode == 500:
	case httpRes.StatusCode == 502:
	case httpRes.StatusCode == 503:
	}

	return res, nil
}

// GetTagsTagsInfo - Returns tag objects representing the tags in {tags} found on the site.
//
// This method diverges from the standard naming patterns to avoid to conflicting with existing methods, due to the free form nature of tag names.
//
// This method returns a list of tags.
//
// The sorts accepted by this method operate on the follow fields of the tag object:
//
//   - popular - count
//
//   - activity - the creation_date of the last question asked with the tag
//
//   - name - name
//     popular is the default sort.
//
//     It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.
func (s *SDK) GetTagsTagsInfo(ctx context.Context, request operations.GetTagsTagsInfoRequest) (*operations.GetTagsTagsInfoResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/tags/{tags}/info", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetTagsTagsInfoResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `*/*`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 402:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 405:
	case httpRes.StatusCode == 406:
	case httpRes.StatusCode == 500:
	case httpRes.StatusCode == 502:
	case httpRes.StatusCode == 503:
	}

	return res, nil
}

// GetTagsTagsRelated - Returns the tags that are most related to those in {tags}.
//
// Including multiple tags in {tags} is equivalent to asking for "tags related to tag #1 and tag #2" not "tags related to tag #1 or tag #2".
//
// count on tag objects returned is the number of question with that tag that also share all those in {tags}.
//
// {tags} can contain up to 4 individual tags per request.
//
// This method returns a list of tags.
func (s *SDK) GetTagsTagsRelated(ctx context.Context, request operations.GetTagsTagsRelatedRequest) (*operations.GetTagsTagsRelatedResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/tags/{tags}/related", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetTagsTagsRelatedResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `*/*`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 402:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 405:
	case httpRes.StatusCode == 406:
	case httpRes.StatusCode == 500:
	case httpRes.StatusCode == 502:
	case httpRes.StatusCode == 503:
	}

	return res, nil
}

// GetTagsTagsSynonyms - Gets all the synonyms that point to the tags identified in {tags}. If you're looking to discover all the tag synonyms on a site, use the /tags/synonyms methods instead of call this method on all tags.
//
// {tags} can contain up to 20 individual tags per request.
//
// The sorts accepted by this method operate on the follow fields of the tag_synonym object:
//
//   - creation - creation_date
//
//   - applied - applied_count
//
//   - activity - last_applied_date
//     creation is the default sort.
//
//     It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.
//
// This method returns a list of tag synonyms.
func (s *SDK) GetTagsTagsSynonyms(ctx context.Context, request operations.GetTagsTagsSynonymsRequest) (*operations.GetTagsTagsSynonymsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/tags/{tags}/synonyms", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetTagsTagsSynonymsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `*/*`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 402:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 405:
	case httpRes.StatusCode == 406:
	case httpRes.StatusCode == 500:
	case httpRes.StatusCode == 502:
	case httpRes.StatusCode == 503:
	}

	return res, nil
}

// GetTagsTagsWikis - Returns the wikis that go with the given set of tags in {tags}.
//
// Be aware that not all tags have wikis.
//
// {tags} can contain up to 20 individual tags per request.
//
// This method returns a list of tag wikis.
func (s *SDK) GetTagsTagsWikis(ctx context.Context, request operations.GetTagsTagsWikisRequest) (*operations.GetTagsTagsWikisResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/tags/{tags}/wikis", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetTagsTagsWikisResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `*/*`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 402:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 405:
	case httpRes.StatusCode == 406:
	case httpRes.StatusCode == 500:
	case httpRes.StatusCode == 502:
	case httpRes.StatusCode == 503:
	}

	return res, nil
}

// GetUsers - Returns all users on a site.
//
// This method returns a list of users.
//
// The sorts accepted by this method operate on the follow fields of the user object:
//
//   - reputation - reputation
//
//   - creation - creation_date
//
//   - name - display_name
//
//   - modified - last_modified_date
//     reputation is the default sort.
//
//     It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.
//
// The inname parameter lets consumers filter the results down to just those users with a certain substring in their display name. For example, inname=kevin will return all users with both users named simply "Kevin" or those with Kevin as one of (or part of) their names; such as "Kevin Montrose".
func (s *SDK) GetUsers(ctx context.Context, request operations.GetUsersRequest) (*operations.GetUsersResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/users"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetUsersResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `*/*`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 402:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 405:
	case httpRes.StatusCode == 406:
	case httpRes.StatusCode == 500:
	case httpRes.StatusCode == 502:
	case httpRes.StatusCode == 503:
	}

	return res, nil
}

// GetUsersIDInbox - Returns a user's inbox.
//
// This method requires an access_token, with a scope containing "read_inbox".
//
// This method is effectively an alias for /inbox. It is provided for consumers who make strong assumptions about operating within the context of a single site rather than the Stack Exchange network as a whole.
//
// {id} can contain a single id, to find it programatically look for user_id on user or shallow_user objects.
//
// This method returns a list of inbox items.
func (s *SDK) GetUsersIDInbox(ctx context.Context, request operations.GetUsersIDInboxRequest) (*operations.GetUsersIDInboxResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/users/{id}/inbox", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetUsersIDInboxResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `*/*`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 402:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 405:
	case httpRes.StatusCode == 406:
	case httpRes.StatusCode == 500:
	case httpRes.StatusCode == 502:
	case httpRes.StatusCode == 503:
	}

	return res, nil
}

// GetUsersIDInboxUnread - Returns the unread items in a user's inbox.
//
// This method requires an access_token, with a scope containing "read_inbox".
//
// This method is effectively an alias for /inbox/unread. It is provided for consumers who make strong assumptions about operating within the context of a single site rather than the Stack Exchange network as a whole.
//
// {id} can contain a single id, to find it programatically look for user_id on user or shallow_user objects.
//
// This method returns a list of inbox items.
func (s *SDK) GetUsersIDInboxUnread(ctx context.Context, request operations.GetUsersIDInboxUnreadRequest) (*operations.GetUsersIDInboxUnreadResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/users/{id}/inbox/unread", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetUsersIDInboxUnreadResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `*/*`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 402:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 405:
	case httpRes.StatusCode == 406:
	case httpRes.StatusCode == 500:
	case httpRes.StatusCode == 502:
	case httpRes.StatusCode == 503:
	}

	return res, nil
}

// GetUsersIDNotifications - Returns a user's notifications.
//
// This method requires an access_token, with a scope containing "read_inbox".
//
// This method returns a list of notifications.
func (s *SDK) GetUsersIDNotifications(ctx context.Context, request operations.GetUsersIDNotificationsRequest) (*operations.GetUsersIDNotificationsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/users/{id}/notifications", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetUsersIDNotificationsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `*/*`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 402:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 405:
	case httpRes.StatusCode == 406:
	case httpRes.StatusCode == 500:
	case httpRes.StatusCode == 502:
	case httpRes.StatusCode == 503:
	}

	return res, nil
}

// GetUsersIDNotificationsUnread - Returns a user's unread notifications.
//
// This method requires an access_token, with a scope containing "read_inbox".
//
// This method returns a list of notifications.
func (s *SDK) GetUsersIDNotificationsUnread(ctx context.Context, request operations.GetUsersIDNotificationsUnreadRequest) (*operations.GetUsersIDNotificationsUnreadResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/users/{id}/notifications/unread", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetUsersIDNotificationsUnreadResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `*/*`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 402:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 405:
	case httpRes.StatusCode == 406:
	case httpRes.StatusCode == 500:
	case httpRes.StatusCode == 502:
	case httpRes.StatusCode == 503:
	}

	return res, nil
}

// GetUsersIDPrivileges - Returns the privileges a user has.
//
// Applications are encouraged to calculate privileges themselves, without repeated queries to this method. A simple check against the results returned by /privileges and user.user_type would be sufficient.
//
// {id} can contain only a single, to find it programatically look for user_id on user or shallow_user objects.
//
// This method returns a list of privileges.
func (s *SDK) GetUsersIDPrivileges(ctx context.Context, request operations.GetUsersIDPrivilegesRequest) (*operations.GetUsersIDPrivilegesResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/users/{id}/privileges", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetUsersIDPrivilegesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `*/*`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 402:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 405:
	case httpRes.StatusCode == 406:
	case httpRes.StatusCode == 500:
	case httpRes.StatusCode == 502:
	case httpRes.StatusCode == 503:
	}

	return res, nil
}

// GetUsersIDReputationHistoryFull - Returns a user's full reputation history, including private events.
//
// This method requires an access_token, with a scope containing "private_info".
//
// This method returns a list of reputation_history.
func (s *SDK) GetUsersIDReputationHistoryFull(ctx context.Context, request operations.GetUsersIDReputationHistoryFullRequest) (*operations.GetUsersIDReputationHistoryFullResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/users/{id}/reputation-history/full", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetUsersIDReputationHistoryFullResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `*/*`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 402:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 405:
	case httpRes.StatusCode == 406:
	case httpRes.StatusCode == 500:
	case httpRes.StatusCode == 502:
	case httpRes.StatusCode == 503:
	}

	return res, nil
}

// GetUsersIDTagsTagsTopAnswers - Returns the top 30 answers a user has posted in response to questions with the given tags.
//
// {id} can contain a single id, to find it programatically look for user_id on user or shallow_user objects. {tags} is limited to 5 tags, passing more will result in an error.
//
// The sorts accepted by this method operate on the follow fields of the answer object:
//
//   - activity - last_activity_date
//
//   - creation - creation_date
//
//   - votes - score
//     activity is the default sort.
//
//     It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.
//
// This method returns a list of answers.
func (s *SDK) GetUsersIDTagsTagsTopAnswers(ctx context.Context, request operations.GetUsersIDTagsTagsTopAnswersRequest) (*operations.GetUsersIDTagsTagsTopAnswersResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/users/{id}/tags/{tags}/top-answers", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetUsersIDTagsTagsTopAnswersResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `*/*`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 402:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 405:
	case httpRes.StatusCode == 406:
	case httpRes.StatusCode == 500:
	case httpRes.StatusCode == 502:
	case httpRes.StatusCode == 503:
	}

	return res, nil
}

// GetUsersIDTagsTagsTopQuestions - Returns the top 30 questions a user has asked with the given tags.
//
// {id} can contain a single id, to find it programatically look for user_id on user or shallow_user objects. {tags} is limited to 5 tags, passing more will result in an error.
//
// The sorts accepted by this method operate on the follow fields of the question object:
//
//   - activity - last_activity_date
//
//   - creation - creation_date
//
//   - votes - score
//     activity is the default sort.
//
//     It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.
//
// This method returns a list of questions.
func (s *SDK) GetUsersIDTagsTagsTopQuestions(ctx context.Context, request operations.GetUsersIDTagsTagsTopQuestionsRequest) (*operations.GetUsersIDTagsTagsTopQuestionsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/users/{id}/tags/{tags}/top-questions", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetUsersIDTagsTagsTopQuestionsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `*/*`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 402:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 405:
	case httpRes.StatusCode == 406:
	case httpRes.StatusCode == 500:
	case httpRes.StatusCode == 502:
	case httpRes.StatusCode == 503:
	}

	return res, nil
}

// GetUsersIDTopAnswerTags - Returns a single user's top tags by answer score.
//
// This a subset of the data returned on a user's tags tab.
//
// {id} can contain a single id, to find it programatically look for user_id on user or shallow_user objects.
//
// This method returns a list of top_tag objects.
func (s *SDK) GetUsersIDTopAnswerTags(ctx context.Context, request operations.GetUsersIDTopAnswerTagsRequest) (*operations.GetUsersIDTopAnswerTagsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/users/{id}/top-answer-tags", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetUsersIDTopAnswerTagsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `*/*`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 402:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 405:
	case httpRes.StatusCode == 406:
	case httpRes.StatusCode == 500:
	case httpRes.StatusCode == 502:
	case httpRes.StatusCode == 503:
	}

	return res, nil
}

// GetUsersIDTopQuestionTags - Returns a single user's top tags by question score.
//
// This a subset of the data returned on a user's tags tab.
//
// {id} can contain a single id, to find it programatically look for user_id on user or shallow_user objects.
//
// This method returns a list of top_tag objects.
func (s *SDK) GetUsersIDTopQuestionTags(ctx context.Context, request operations.GetUsersIDTopQuestionTagsRequest) (*operations.GetUsersIDTopQuestionTagsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/users/{id}/top-question-tags", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetUsersIDTopQuestionTagsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `*/*`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 402:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 405:
	case httpRes.StatusCode == 406:
	case httpRes.StatusCode == 500:
	case httpRes.StatusCode == 502:
	case httpRes.StatusCode == 503:
	}

	return res, nil
}

// GetUsersIDWritePermissions - Returns the write permissions a user has via the api.
//
// The Stack Exchange API gives users the ability to create, edit, and delete certain types. This method returns whether the passed user is capable of performing those actions at all, as well as how many times a day they can.
//
// This method does not consider the user's current quota (ie. if they've already exhausted it for today) nor any additional restrictions on write access, such as editing deleted comments.
//
// This method returns a list of write_permissions.
func (s *SDK) GetUsersIDWritePermissions(ctx context.Context, request operations.GetUsersIDWritePermissionsRequest) (*operations.GetUsersIDWritePermissionsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/users/{id}/write-permissions", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetUsersIDWritePermissionsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `*/*`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 402:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 405:
	case httpRes.StatusCode == 406:
	case httpRes.StatusCode == 500:
	case httpRes.StatusCode == 502:
	case httpRes.StatusCode == 503:
	}

	return res, nil
}

// GetUsersIds - Gets the users identified in ids in {ids}.
//
// Typically this method will be called to fetch user profiles when you have obtained user ids from some other source, such as /questions.
//
// {ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for user_id on user or shallow_user objects.
//
// The sorts accepted by this method operate on the follow fields of the user object:
//
//   - reputation - reputation
//
//   - creation - creation_date
//
//   - name - display_name
//
//   - modified - last_modified_date
//     reputation is the default sort.
//
//     It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.
//
// This method returns a list of users.
func (s *SDK) GetUsersIds(ctx context.Context, request operations.GetUsersIdsRequest) (*operations.GetUsersIdsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/users/{ids}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetUsersIdsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `*/*`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 402:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 405:
	case httpRes.StatusCode == 406:
	case httpRes.StatusCode == 500:
	case httpRes.StatusCode == 502:
	case httpRes.StatusCode == 503:
	}

	return res, nil
}

// GetUsersIdsAnswers - Returns the answers the users in {ids} have posted.
//
// {ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for user_id on user or shallow_user objects.
//
// The sorts accepted by this method operate on the follow fields of the answer object:
//
//   - activity - last_activity_date
//
//   - creation - creation_date
//
//   - votes - score
//     activity is the default sort.
//
//     It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.
//
// This method returns a list of answers.
func (s *SDK) GetUsersIdsAnswers(ctx context.Context, request operations.GetUsersIdsAnswersRequest) (*operations.GetUsersIdsAnswersResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/users/{ids}/answers", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetUsersIdsAnswersResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `*/*`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 402:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 405:
	case httpRes.StatusCode == 406:
	case httpRes.StatusCode == 500:
	case httpRes.StatusCode == 502:
	case httpRes.StatusCode == 503:
	}

	return res, nil
}

// GetUsersIdsAssociated - Returns all of a user's associated accounts, given their account_ids in {ids}.
//
// {ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for account_id on user objects.
//
// This method returns a list of network_users.
func (s *SDK) GetUsersIdsAssociated(ctx context.Context, request operations.GetUsersIdsAssociatedRequest) (*operations.GetUsersIdsAssociatedResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/users/{ids}/associated", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetUsersIdsAssociatedResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `*/*`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 402:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 405:
	case httpRes.StatusCode == 406:
	case httpRes.StatusCode == 500:
	case httpRes.StatusCode == 502:
	case httpRes.StatusCode == 503:
	}

	return res, nil
}

// GetUsersIdsBadges - Get the badges the users in {ids} have earned.
//
// Badge sorts are a tad complicated. For the purposes of sorting (and min/max) tag_based is considered to be greater than named.
//
// This means that you can get a list of all tag based badges a user has by passing min=tag_based, and conversely all the named badges by passing max=named, with sort=type.
//
// For ranks, bronze is greater than silver which is greater than gold. Along with sort=rank, set max=gold for just gold badges, max=silver&min=silver for just silver, and min=bronze for just bronze.
//
// rank is the default sort.
//
// {ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for user_id on user or shallow_user objects.
//
// This method returns a list of badges.
func (s *SDK) GetUsersIdsBadges(ctx context.Context, request operations.GetUsersIdsBadgesRequest) (*operations.GetUsersIdsBadgesResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/users/{ids}/badges", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetUsersIdsBadgesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `*/*`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 402:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 405:
	case httpRes.StatusCode == 406:
	case httpRes.StatusCode == 500:
	case httpRes.StatusCode == 502:
	case httpRes.StatusCode == 503:
	}

	return res, nil
}

// GetUsersIdsComments - Get the comments posted by users in {ids}.
//
// {ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for user_id on user or shallow_user objects.
//
// The sorts accepted by this method operate on the follow fields of the comment object:
//
//   - creation - creation_date
//
//   - votes - score
//     creation is the default sort.
//
//     It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.
//
// This method returns a list of comments.
func (s *SDK) GetUsersIdsComments(ctx context.Context, request operations.GetUsersIdsCommentsRequest) (*operations.GetUsersIdsCommentsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/users/{ids}/comments", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetUsersIdsCommentsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `*/*`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 402:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 405:
	case httpRes.StatusCode == 406:
	case httpRes.StatusCode == 500:
	case httpRes.StatusCode == 502:
	case httpRes.StatusCode == 503:
	}

	return res, nil
}

// GetUsersIdsCommentsToid - Get the comments that the users in {ids} have posted in reply to the single user identified in {toid}.
//
// This method is useful for extracting conversations, especially over time or across multiple posts.
//
// {ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for user_id on user or shallow_user objects. {toid} can contain only 1 id, found in the same manner as those in {ids}.
//
// The sorts accepted by this method operate on the follow fields of the comment object:
//
//   - creation - creation_date
//
//   - votes - score
//     creation is the default sort.
//
//     It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.
//
// This method returns a list of comments.
func (s *SDK) GetUsersIdsCommentsToid(ctx context.Context, request operations.GetUsersIdsCommentsToidRequest) (*operations.GetUsersIdsCommentsToidResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/users/{ids}/comments/{toid}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetUsersIdsCommentsToidResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `*/*`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 402:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 405:
	case httpRes.StatusCode == 406:
	case httpRes.StatusCode == 500:
	case httpRes.StatusCode == 502:
	case httpRes.StatusCode == 503:
	}

	return res, nil
}

// GetUsersIdsFavorites - Get the questions that users in {ids} have favorited.
//
// This method is effectively a view onto a user's favorites tab.
//
// {ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for user_id on user or shallow_user objects.
//
// The sorts accepted by this method operate on the follow fields of the question object:
//
//   - activity - last_activity_date
//
//   - creation - creation_date
//
//   - votes - score
//
//   - added - when the user favorited the question
//     activity is the default sort.
//
//     It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.
//
// This method returns a list of questions.
func (s *SDK) GetUsersIdsFavorites(ctx context.Context, request operations.GetUsersIdsFavoritesRequest) (*operations.GetUsersIdsFavoritesResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/users/{ids}/favorites", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetUsersIdsFavoritesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `*/*`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 402:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 405:
	case httpRes.StatusCode == 406:
	case httpRes.StatusCode == 500:
	case httpRes.StatusCode == 502:
	case httpRes.StatusCode == 503:
	}

	return res, nil
}

// GetUsersIdsMentioned - Gets all the comments that the users in {ids} were mentioned in.
//
// Note, to count as a mention the comment must be considered to be "in reply to" a user. Most importantly, this means that a comment can only be in reply to a single user.
//
// {ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for user_id on user or shallow_user objects.
//
// The sorts accepted by this method operate on the follow fields of the comment object:
//   - creation - creation_date
//   - votes - score
//     It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.
//
// This method returns a list of comments.
func (s *SDK) GetUsersIdsMentioned(ctx context.Context, request operations.GetUsersIdsMentionedRequest) (*operations.GetUsersIdsMentionedResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/users/{ids}/mentioned", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetUsersIdsMentionedResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `*/*`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 402:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 405:
	case httpRes.StatusCode == 406:
	case httpRes.StatusCode == 500:
	case httpRes.StatusCode == 502:
	case httpRes.StatusCode == 503:
	}

	return res, nil
}

// GetUsersIdsMerges - Returns a record of merges that have occurred involving the passed account ids.
//
// This method allows you to take now invalid account ids and find what account they've become, or take currently valid account ids and find which ids were equivalent in the past.
//
// This is most useful when confirming that an account_id is in fact "new" to an application.
//
// Account merges can happen for a wide range of reasons, applications should not make assumptions that merges have particular causes.
//
// Note that accounts are managed at a network level, users on a site may be merged due to an account level merge but there is no guarantee that a merge has an effect on any particular site.
//
// This method returns a list of account_merge.
func (s *SDK) GetUsersIdsMerges(ctx context.Context, request operations.GetUsersIdsMergesRequest) (*operations.GetUsersIdsMergesResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/users/{ids}/merges", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetUsersIdsMergesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `*/*`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 402:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 405:
	case httpRes.StatusCode == 406:
	case httpRes.StatusCode == 500:
	case httpRes.StatusCode == 502:
	case httpRes.StatusCode == 503:
	}

	return res, nil
}

// GetUsersIdsQuestions - Gets the questions asked by the users in {ids}.
//
// {ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for user_id on user or shallow_user objects.
//
// The sorts accepted by this method operate on the follow fields of the question object:
//
//   - activity - last_activity_date
//
//   - creation - creation_date
//
//   - votes - score
//     activity is the default sort.
//
//     It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.
//
// This method returns a list of questions.
func (s *SDK) GetUsersIdsQuestions(ctx context.Context, request operations.GetUsersIdsQuestionsRequest) (*operations.GetUsersIdsQuestionsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/users/{ids}/questions", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetUsersIdsQuestionsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `*/*`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 402:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 405:
	case httpRes.StatusCode == 406:
	case httpRes.StatusCode == 500:
	case httpRes.StatusCode == 502:
	case httpRes.StatusCode == 503:
	}

	return res, nil
}

// GetUsersIdsQuestionsFeatured - Gets the questions on which the users in {ids} have active bounties.
//
// {ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for user_id on user or shallow_user objects.
//
// The sorts accepted by this method operate on the follow fields of the question object:
//
//   - activity - last_activity_date
//
//   - creation - creation_date
//
//   - votes - score
//     activity is the default sort.
//
//     It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.
//
// This method returns a list of questions.
func (s *SDK) GetUsersIdsQuestionsFeatured(ctx context.Context, request operations.GetUsersIdsQuestionsFeaturedRequest) (*operations.GetUsersIdsQuestionsFeaturedResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/users/{ids}/questions/featured", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetUsersIdsQuestionsFeaturedResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `*/*`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 402:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 405:
	case httpRes.StatusCode == 406:
	case httpRes.StatusCode == 500:
	case httpRes.StatusCode == 502:
	case httpRes.StatusCode == 503:
	}

	return res, nil
}

// GetUsersIdsQuestionsNoAnswers - Gets the questions asked by the users in {ids} which have no answers.
//
// Questions returns by this method actually have zero undeleted answers. It is completely disjoint /users/{ids}/questions/unanswered and /users/{ids}/questions/unaccepted, which only return questions with at least one answer, subject to other contraints.
//
// {ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for user_id on user or shallow_user objects.
//
// The sorts accepted by this method operate on the follow fields of the question object:
//
//   - activity - last_activity_date
//
//   - creation - creation_date
//
//   - votes - score
//     activity is the default sort.
//
//     It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.
//
// This method returns a list of questions.
func (s *SDK) GetUsersIdsQuestionsNoAnswers(ctx context.Context, request operations.GetUsersIdsQuestionsNoAnswersRequest) (*operations.GetUsersIdsQuestionsNoAnswersResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/users/{ids}/questions/no-answers", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetUsersIdsQuestionsNoAnswersResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `*/*`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 402:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 405:
	case httpRes.StatusCode == 406:
	case httpRes.StatusCode == 500:
	case httpRes.StatusCode == 502:
	case httpRes.StatusCode == 503:
	}

	return res, nil
}

// GetUsersIdsQuestionsUnaccepted - Gets the questions asked by the users in {ids} which have at least one answer, but no accepted answer.
//
// Questions returned by this method have answers, but the owner has not opted to accept any of them.
//
// {ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for user_id on user or shallow_user objects.
//
// The sorts accepted by this method operate on the follow fields of the question object:
//
//   - activity - last_activity_date
//
//   - creation - creation_date
//
//   - votes - score
//     activity is the default sort.
//
//     It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.
//
// This method returns a list of questions.
func (s *SDK) GetUsersIdsQuestionsUnaccepted(ctx context.Context, request operations.GetUsersIdsQuestionsUnacceptedRequest) (*operations.GetUsersIdsQuestionsUnacceptedResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/users/{ids}/questions/unaccepted", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetUsersIdsQuestionsUnacceptedResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `*/*`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 402:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 405:
	case httpRes.StatusCode == 406:
	case httpRes.StatusCode == 500:
	case httpRes.StatusCode == 502:
	case httpRes.StatusCode == 503:
	}

	return res, nil
}

// GetUsersIdsQuestionsUnanswered - Gets the questions asked by the users in {ids} which the site consideres unanswered, while still having at least one answer posted.
//
// These rules are subject to change, but currently any question without at least one upvoted or accepted answer is considered unanswered.
//
// To get the set of questions that a user probably considers unanswered, the returned questions should be unioned with those returned by /users/{id}/questions/no-answers. These methods are distinct so that truly unanswered (that is, zero posted answers) questions can be easily separated from mearly poorly or inadequately answered ones.
//
// {ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for user_id on user or shallow_user objects.
//
// The sorts accepted by this method operate on the follow fields of the question object:
//
//   - activity - last_activity_date
//
//   - creation - creation_date
//
//   - votes - score
//     activity is the default sort.
//
//     It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.
//
// This method returns a list of questions.
func (s *SDK) GetUsersIdsQuestionsUnanswered(ctx context.Context, request operations.GetUsersIdsQuestionsUnansweredRequest) (*operations.GetUsersIdsQuestionsUnansweredResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/users/{ids}/questions/unanswered", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetUsersIdsQuestionsUnansweredResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `*/*`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 402:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 405:
	case httpRes.StatusCode == 406:
	case httpRes.StatusCode == 500:
	case httpRes.StatusCode == 502:
	case httpRes.StatusCode == 503:
	}

	return res, nil
}

// GetUsersIdsReputation - Gets a subset of the reputation changes for users in {ids}.
//
// Reputation changes are intentionally scrubbed of some data to make it difficult to correlate votes on particular posts with user reputation changes. That being said, this method returns enough data for reasonable display of reputation trends.
//
// {ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for user_id on user or shallow_user objects.
//
// This method returns a list of reputation objects.
func (s *SDK) GetUsersIdsReputation(ctx context.Context, request operations.GetUsersIdsReputationRequest) (*operations.GetUsersIdsReputationResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/users/{ids}/reputation", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetUsersIdsReputationResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `*/*`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 402:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 405:
	case httpRes.StatusCode == 406:
	case httpRes.StatusCode == 500:
	case httpRes.StatusCode == 502:
	case httpRes.StatusCode == 503:
	}

	return res, nil
}

// GetUsersIdsReputationHistory - Returns users' public reputation history.
//
// This method returns a list of reputation_history.
func (s *SDK) GetUsersIdsReputationHistory(ctx context.Context, request operations.GetUsersIdsReputationHistoryRequest) (*operations.GetUsersIdsReputationHistoryResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/users/{ids}/reputation-history", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetUsersIdsReputationHistoryResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `*/*`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 402:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 405:
	case httpRes.StatusCode == 406:
	case httpRes.StatusCode == 500:
	case httpRes.StatusCode == 502:
	case httpRes.StatusCode == 503:
	}

	return res, nil
}

// GetUsersIdsSuggestedEdits - Returns the suggested edits a users in {ids} have submitted.
//
// {ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for user_id on user or shallow_user objects.
//
// The sorts accepted by this method operate on the follow fields of the suggested_edit object:
//
//   - creation - creation_date
//
//   - approval - approval_date Does not return unapproved suggested_edits
//
//   - rejection - rejection_date Does not return unrejected suggested_edits
//     creation is the default sort.
//
//     It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.
//
// This method returns a list of suggested-edits.
func (s *SDK) GetUsersIdsSuggestedEdits(ctx context.Context, request operations.GetUsersIdsSuggestedEditsRequest) (*operations.GetUsersIdsSuggestedEditsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/users/{ids}/suggested-edits", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetUsersIdsSuggestedEditsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `*/*`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 402:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 405:
	case httpRes.StatusCode == 406:
	case httpRes.StatusCode == 500:
	case httpRes.StatusCode == 502:
	case httpRes.StatusCode == 503:
	}

	return res, nil
}

// GetUsersIdsTags - Returns the tags the users identified in {ids} have been active in.
//
// This route corresponds roughly to user's stats tab, but does not include tag scores. A subset of tag scores are available (on a single user basis) in /users/{id}/top-answer-tags and /users/{id}/top-question-tags.
//
// {ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for user_id on user or shallow_user objects.
//
// The sorts accepted by this method operate on the follow fields of the tag object:
//
//   - popular - count
//
//   - activity - the creation_date of the last question asked with the tag
//
//   - name - name
//     popular is the default sort.
//
//     It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.
//
// This method returns a list of tags.
func (s *SDK) GetUsersIdsTags(ctx context.Context, request operations.GetUsersIdsTagsRequest) (*operations.GetUsersIdsTagsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/users/{ids}/tags", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetUsersIdsTagsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `*/*`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 402:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 405:
	case httpRes.StatusCode == 406:
	case httpRes.StatusCode == 500:
	case httpRes.StatusCode == 502:
	case httpRes.StatusCode == 503:
	}

	return res, nil
}

// GetUsersIdsTimeline - Returns a subset of the actions the users in {ids} have taken on the site.
//
// This method returns users' posts, edits, and earned badges in the order they were accomplished. It is possible to filter to just a window of activity using the fromdate and todate parameters.
//
// {ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for user_id on user or shallow_user objects.
//
// This method returns a list of user timeline objects.
func (s *SDK) GetUsersIdsTimeline(ctx context.Context, request operations.GetUsersIdsTimelineRequest) (*operations.GetUsersIdsTimelineResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/users/{ids}/timeline", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetUsersIdsTimelineResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `*/*`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 402:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 405:
	case httpRes.StatusCode == 406:
	case httpRes.StatusCode == 500:
	case httpRes.StatusCode == 502:
	case httpRes.StatusCode == 503:
	}

	return res, nil
}

// GetUsersModerators - Gets those users on a site who can exercise moderation powers.
//
// Note, employees of Stack Exchange Inc. will be returned if they have been granted moderation powers on a site even if they have never been appointed or elected explicitly. This method checks abilities, not the manner in which they were obtained.
//
// The sorts accepted by this method operate on the follow fields of the user object:
//
//   - reputation - reputation
//
//   - creation - creation_date
//
//   - name - display_name
//
//   - modified - last_modified_date
//     reputation is the default sort.
//
//     It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.
//
// This method returns a list of users.
func (s *SDK) GetUsersModerators(ctx context.Context, request operations.GetUsersModeratorsRequest) (*operations.GetUsersModeratorsResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/users/moderators"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetUsersModeratorsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `*/*`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 402:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 405:
	case httpRes.StatusCode == 406:
	case httpRes.StatusCode == 500:
	case httpRes.StatusCode == 502:
	case httpRes.StatusCode == 503:
	}

	return res, nil
}

// GetUsersModeratorsElected - Returns those users on a site who both have moderator powers, and were actually elected.
//
// This method excludes Stack Exchange Inc. employees, unless they were actually elected moderators on a site (which can only have happened prior to their employment).
//
// The sorts accepted by this method operate on the follow fields of the user object:
//
//   - reputation - reputation
//
//   - creation - creation_date
//
//   - name - display_name
//
//   - modified - last_modified_date
//     reputation is the default sort.
//
//     It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.
//
// This method returns a list of users.
func (s *SDK) GetUsersModeratorsElected(ctx context.Context, request operations.GetUsersModeratorsElectedRequest) (*operations.GetUsersModeratorsElectedResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/users/moderators/elected"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetUsersModeratorsElectedResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `*/*`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 402:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 405:
	case httpRes.StatusCode == 406:
	case httpRes.StatusCode == 500:
	case httpRes.StatusCode == 502:
	case httpRes.StatusCode == 503:
	}

	return res, nil
}

// PostCommentsIDDelete - Deletes a comment.
//
// Use an access_token with write_access to delete a comment.
//
// In practice, this method will never return an object.
func (s *SDK) PostCommentsIDDelete(ctx context.Context, request operations.PostCommentsIDDeleteRequest) (*operations.PostCommentsIDDeleteResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/comments/{id}/delete", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "POST", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostCommentsIDDeleteResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 402:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 405:
	case httpRes.StatusCode == 406:
	case httpRes.StatusCode == 500:
	case httpRes.StatusCode == 502:
	case httpRes.StatusCode == 503:
	}

	return res, nil
}

// PostCommentsIDEdit - Edit an existing comment.
//
// Use an access_token with write_access to edit an existing comment.
//
// This method return the created comment.
func (s *SDK) PostCommentsIDEdit(ctx context.Context, request operations.PostCommentsIDEditRequest) (*operations.PostCommentsIDEditResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/comments/{id}/edit", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "POST", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostCommentsIDEditResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `*/*`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 402:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 405:
	case httpRes.StatusCode == 406:
	case httpRes.StatusCode == 500:
	case httpRes.StatusCode == 502:
	case httpRes.StatusCode == 503:
	}

	return res, nil
}

// PostPostsIDCommentsAdd - Create a new comment.
//
// Use an access_token with write_access to create a new comment on a post.
//
// This method returns the created comment.
func (s *SDK) PostPostsIDCommentsAdd(ctx context.Context, request operations.PostPostsIDCommentsAddRequest) (*operations.PostPostsIDCommentsAddResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/posts/{id}/comments/add", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "POST", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostPostsIDCommentsAddResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `*/*`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 402:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 405:
	case httpRes.StatusCode == 406:
	case httpRes.StatusCode == 500:
	case httpRes.StatusCode == 502:
	case httpRes.StatusCode == 503:
	}

	return res, nil
}
