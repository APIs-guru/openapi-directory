package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/internal/utils"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"strings"
)

type Posts struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewPosts(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *Posts {
	return &Posts{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// BookmarkPost - Bookmark a post
func (s *Posts) BookmarkPost(ctx context.Context, request operations.BookmarkPostRequest) (*operations.BookmarkPostResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/posts/{post_id}/bookmark", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "PUT", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.BookmarkPostResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 404:
	}

	return res, nil
}

// DeleteBookmark - Delete a post bookmark
func (s *Posts) DeleteBookmark(ctx context.Context, request operations.DeleteBookmarkRequest) (*operations.DeleteBookmarkResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/posts/{post_id}/bookmark", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DeleteBookmarkResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	case httpRes.StatusCode == 404:
	}

	return res, nil
}

// FlagPost - Flag a post
// Flags a post to be reviewed by the moderators.
func (s *Posts) FlagPost(ctx context.Context, request operations.FlagPostRequest) (*operations.FlagPostResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/posts/{post_id}/flag", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}
	if bodyReader == nil {
		return nil, fmt.Errorf("request body is required")
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.FlagPostResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 404:
	}

	return res, nil
}

// GeolocatePost - Map a post
// Map a post to a specific location when the post is missing a location or has an incorrect location.
func (s *Posts) GeolocatePost(ctx context.Context, request operations.GeolocatePostRequest) (*operations.GeolocatePostResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/posts/{post_id}/geolocate", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}
	if bodyReader == nil {
		return nil, fmt.Errorf("request body is required")
	}

	req, err := http.NewRequestWithContext(ctx, "PUT", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GeolocatePostResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Post
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Post = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 404:
	}

	return res, nil
}

// GetAllPosts - List all posts
// This endpoint provides an easy way to get a feed of all the publicly published posts on trash nothing. It provides access to all publicly published offer and wanted posts from the last 30 days. The posts are sorted by date (newest first). <br /><br /> There are fewer options for filtering, sorting and searching posts with this endpoint but there is no 1,000 post limit and posts that are crossposted to multiple groups are not merged together in the response.  In most cases, crossposted posts are easy to detect because they have the same user_id, title and content.
func (s *Posts) GetAllPosts(ctx context.Context, request operations.GetAllPostsRequest) (*operations.GetAllPostsResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/posts/all"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetAllPostsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.GetAllPosts200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GetAllPosts200ApplicationJSONObject = out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// GetAllPostsChanges - List all post changes
// This endpoint provides an easy way to get a feed of all the changes that have been made to publicly published posts on trash nothing.  Similar to the /posts/all endpoint, only data from the last 30 days is available and the changes are sorted by date (newest first).  Every change includes the date of the change, the post_id of the post that was changed and the type of change. <br /><br /> The different types of changes that are returned are listed below. <br /><br /> - deleted<br /> - undeleted<br /> - satisfied<br /> - promised<br /> - unpromised<br /> - withdrawn<br /> - edited<br /> <br /> For edited changes, clients can use the retrieve post API endpoint to get the edits that have been made to the post.
func (s *Posts) GetAllPostsChanges(ctx context.Context, request operations.GetAllPostsChangesRequest) (*operations.GetAllPostsChangesResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/posts/all/changes"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetAllPostsChangesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.GetAllPostsChanges200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GetAllPostsChanges200ApplicationJSONObject = out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// GetPost - Retrieve a post
func (s *Posts) GetPost(ctx context.Context, request operations.GetPostRequest) (*operations.GetPostResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/posts/{post_id}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetPostResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Post
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Post = out
		}
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 404:
	}

	return res, nil
}

// GetPostAndRelatedData - Retrieve post display data
// Retrieve a post and other data related to the post that is useful for displaying the post such as data about the user who posted the post and the groups the post was posted on.
func (s *Posts) GetPostAndRelatedData(ctx context.Context, request operations.GetPostAndRelatedDataRequest) (*operations.GetPostAndRelatedDataResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/posts/{post_id}/display", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetPostAndRelatedDataResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.GetPostAndRelatedData200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GetPostAndRelatedData200ApplicationJSONObject = out
		}
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 404:
	}

	return res, nil
}

// GetPostClientJavascript - Retrieve client.js
// Defines javascript functions that can be used to validate and submit posts.
//
// The advantage of using these functions versus using the post submission endpoint directly is that
// some of the post validation checks can be done on the client side which will be faster.
//
// NOTE: If used, this javascript file MUST be loaded dynamically for each user because the contents
// of the file are generated dynamically based on the current user.  The file may be cached on a per
// user basis based on the HTTP cache headers that are returned when the file is requested (currently
// the cache headers specify that the file should expire after one day).
//
// The following functions are available:
//
// ---
//
// **window.TN.check_crossposting_restrictions(group_ids)**
//
// Checks for crossposting restrictions when the user selects more than one group to post to.
//
// Parameters:
// - **group_ids** is an array of group IDs
//
// Returns an object with three properties {allowed, restricted, restrictions}.
//
// - **allowed** is an array of the group IDs from group_ids that can be crossposted to
//
// - **restricted** is an array of the group IDs from group_ids that can't be crossposted to
//
//   - **restrictions** is an object mapping group IDs that have crossposting restrictions to arrays of group IDs that are restricted.
//     It is useful for pinpointing why a group ID shows up in the restricted array so that users can be provided feedback
//     about the reason for the crossposting restriction (eg. a message like 'group A doesn't allow crossposting to group B').
//
// For example, given group_ids = [1, 2, 3, 4] and assuming group 1 doesn't allow posting to group 3 and group 2 doesn't allow
// posting to group 1, the returned object will be:
//
// {allowed: [4], restricted: [1, 2, 3], restrictions: {1: [3], 2: [1]}}
//
// ---
//
// **window.TN.submit_post(args, session, preferences, callback)**
//
// Submits a new post and performs validation checks on the post before it is accepted for submission.
//
// Parameters:
//
//   - **args** is an object containing data about the post being submitted and must include
//     the following properties:
//
//   - type: The type of post.  One of: offer, wanted
//
//   - title: A short description of the item(s).
//
//   - location: A short location description.
//
//     The following properties are optional:
//
//   - content: A longer description of the item(s).
//
//   - group_ids: An array of group IDs to submit the post to (if any).
//
//   - fair_offer: If set to 1, the post will be posted with the Fair Offer Policy (only valid for offer posts - see https://trashnothing.com/fair_offer_policy ).
//
//   - photo_ids: A comma separated list of the IDs of the photos that should be attached to this post.
//
//   - latitude
//
//   - longitude
//
//   - **session** is a temporary object that is used by submit_post to store data about the submission
//     process for a single post.  The first time submit_post is called with a post, session should
//     be a new empty object (eg. {}).  The session object should be persisted until that post
//     is successfully submitted and then it can be discarded so that the next post will start
//     over with a new empty session object.
//
//   - **preferences** is a permanent object that the client persists and modifies based on warnings returned
//     by the post submission process and user input.  Some post warnings passed to the callback object
//     have a preference_key string property so that users can opt out of those warnings in the future.
//     To save this opt-out preference, set the property indicated by the preference_key in the preferences
//     object (eg. preferences[preference_key] = 1).  The preferences object is only read by submit_post and
//     never modified - it is up to the client to initialize, modify and persist the preferences object.
//
//   - **callback** is a function used to return the result of the post submission. It is called and passed
//     one argument - an object with five properties {result, message, preference_key, identifier, session}.
//     The result property is a string that is one of: success, error, warning.  The identifier property is
//     set for errors and warnings and will contain a string that represents the type of error or warning that
//     occurred.
//
//     A success result indicates that the post was submitted successfully. Note that posts may not
//     appear instantly after submission because the moderators of many groups may have additional
//     automatic or manual review processes in place that can delay the publishing of a post.
//
//     An error result indicates that there is an error with the post to show the user and the message property
//     will contain text describing the error.
//
//     A warning result indicates that there is a warning about the post to show the user and the
//     message property will contain a string describing the warning.  A warning result doesn't prevent a post from
//     being submitted, to continue the submission process after a warning result, just re-submit the post
//     (with the updated session object) to temporarily override that specific warning.
//
//     Certain types of warnings can be opted out of.  These warnings will set preference_key to a string that can be
//     set in the preferences object by the client to opt out of that type of warning in the future (see the description
//     of the preferences parameter for more details).
func (s *Posts) GetPostClientJavascript(ctx context.Context, request operations.GetPostClientJavascriptRequest) (*operations.GetPostClientJavascriptResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/posts/client.js"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetPostClientJavascriptResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// GetPosts - List posts
// NOTE: When paging through the posts returned by this endpoint, there will be at most 1,000 posts that can be returned (eg. 50 pages worth of posts with the default per_page value of 20).  In areas where there are more than 1,000 posts, clients can use more specific query parameters to adjust which posts are returned.
// NOTE: Passing the latitude, longitude and radius parameters filters all posts by their location and so these parameters will temporarily override the current users' location preferences. When latitude, longitude and radius are not specified, public posts will be filtered by the current users' location preferences.
func (s *Posts) GetPosts(ctx context.Context, request operations.GetPostsRequest) (*operations.GetPostsResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/posts"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

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
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.GetPosts200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GetPosts200ApplicationJSONObject = out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// GetPostsByIds - Retrieve multiple posts
func (s *Posts) GetPostsByIds(ctx context.Context, request operations.GetPostsByIdsRequest) (*operations.GetPostsByIdsResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/posts/multiple"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetPostsByIdsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.Post
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Posts = out
		}
	}

	return res, nil
}

// PromisePost - Promise an offer post
// Mark an offer by the current user as promised to someone. This helps people viewing the post know that the items being offered may soon be given away as long as the person who was promised the items picks them up.
func (s *Posts) PromisePost(ctx context.Context, request operations.PromisePostRequest) (*operations.PromisePostResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/posts/{post_id}/promise", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "PUT", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PromisePostResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Post
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Post = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 404:
	}

	return res, nil
}

// ReplyToPost - Reply to a post
// Send a reply to a post from the current user to the post author.
func (s *Posts) ReplyToPost(ctx context.Context, request operations.ReplyToPostRequest) (*operations.ReplyToPostResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/posts/{post_id}/reply", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}
	if bodyReader == nil {
		return nil, fmt.Errorf("request body is required")
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ReplyToPostResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 404:
	}

	return res, nil
}

// SatisfyPost - Satisfy a post
// Mark an offer or wanted post by the current user as satisfied (eg. an offer has been taken or a wanted has been received).
func (s *Posts) SatisfyPost(ctx context.Context, request operations.SatisfyPostRequest) (*operations.SatisfyPostResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/posts/{post_id}/satisfy", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "PUT", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.SatisfyPostResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Post
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Post = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 404:
	}

	return res, nil
}

// SearchPosts - Search posts
// Searching posts takes the same arguments as listing posts except for the addition of the search and sort_by parameters.
// NOTE: When paging through the posts returned by this endpoint, there will be at most 1,000 posts that can be returned (eg. 50 pages worth of posts with the default per_page value of 20).  In areas where there are more than 1,000 posts, clients can use more specific query parameters to adjust which posts are returned.
func (s *Posts) SearchPosts(ctx context.Context, request operations.SearchPostsRequest) (*operations.SearchPostsResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/posts/search"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.SearchPostsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.SearchPosts200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.SearchPosts200ApplicationJSONObject = out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// SharePost - Share a post
// Forwards a copy of the post to the current user so that they can forward it to friends.
func (s *Posts) SharePost(ctx context.Context, request operations.SharePostRequest) (*operations.SharePostResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/posts/{post_id}/share", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "POST", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.SharePostResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 404:
	}

	return res, nil
}

// SubmitPost - Submit a post
// Submits a new post. <br /><br /> NOTE: An alternate way to submit posts that does quicker client side validation is to use the script served by the API at the /posts/client.js endpoint (see the description of the /posts/client.js endpoint for usage instructions).
func (s *Posts) SubmitPost(ctx context.Context, request operations.SubmitPostRequest) (*operations.SubmitPostResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/posts"

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.SubmitPostResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.SubmitPost200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.SubmitPost200ApplicationJSONObject = out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// UnpromisePost - Unpromise an offer post
// Mark an offer by the current user as unpromised.
func (s *Posts) UnpromisePost(ctx context.Context, request operations.UnpromisePostRequest) (*operations.UnpromisePostResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/posts/{post_id}/unpromise", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "PUT", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.UnpromisePostResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Post
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Post = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 404:
	}

	return res, nil
}

// UpdatePost - Update a post
// Users can update posts to fix mistakes with their post, add photos, or add more details about the items. Updates should not be used to say that items in a post have been taken or received since the post satisfy endpoint is designed to do that.
func (s *Posts) UpdatePost(ctx context.Context, request operations.UpdatePostRequest) (*operations.UpdatePostResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/posts/{post_id}", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}
	if bodyReader == nil {
		return nil, fmt.Errorf("request body is required")
	}

	req, err := http.NewRequestWithContext(ctx, "PUT", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.UpdatePostResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.UpdatePost200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.UpdatePost200ApplicationJSONObject = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 404:
	}

	return res, nil
}

// WithdrawPost - Withdraw a post
// Mark an offer or wanted post by the current user as withdrawn.
func (s *Posts) WithdrawPost(ctx context.Context, request operations.WithdrawPostRequest) (*operations.WithdrawPostResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/posts/{post_id}/withdraw", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "PUT", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.WithdrawPostResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Post
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Post = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 404:
	}

	return res, nil
}
