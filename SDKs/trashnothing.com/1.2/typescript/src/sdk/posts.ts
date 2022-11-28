import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import FormData from "form-data";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class Posts {
  _defaultClient: AxiosInstance;
  _securityClient: AxiosInstance;
  _serverURL: string;
  _language: string;
  _sdkVersion: string;
  _genVersion: string;

  constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string) {
    this._defaultClient = defaultClient;
    this._securityClient = securityClient;
    this._serverURL = serverURL;
    this._language = language;
    this._sdkVersion = sdkVersion;
    this._genVersion = genVersion;
  }
  
  /**
   * bookmarkPost - Bookmark a post
  **/
  bookmarkPost(
    req: operations.BookmarkPostRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.BookmarkPostResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.BookmarkPostRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/posts/{post_id}/bookmark", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "put",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.BookmarkPostResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 404:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteBookmark - Delete a post bookmark
  **/
  deleteBookmark(
    req: operations.DeleteBookmarkRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteBookmarkResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteBookmarkRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/posts/{post_id}/bookmark", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteBookmarkResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
          case httpRes?.status == 404:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * flagPost - Flag a post
   *
   * Flags a post to be reviewed by the moderators.
  **/
  flagPost(
    req: operations.FlagPostRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FlagPostResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FlagPostRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/posts/{post_id}/flag", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FlagPostResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 404:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * geolocatePost - Map a post
   *
   * Map a post to a specific location when the post is missing a location or has an incorrect location.
  **/
  geolocatePost(
    req: operations.GeolocatePostRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GeolocatePostResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GeolocatePostRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/posts/{post_id}/geolocate", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "put",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GeolocatePostResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.post = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 404:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getAllPosts - List all posts
   *
   * This endpoint provides an easy way to get a feed of all the publicly published posts on trash nothing. It provides access to all publicly published offer and wanted posts from the last 30 days. The posts are sorted by date (newest first). <br /><br /> There are fewer options for filtering, sorting and searching posts with this endpoint but there is no 1,000 post limit and posts that are crossposted to multiple groups are not merged together in the response.  In most cases, crossposted posts are easy to detect because they have the same user_id, title and content.
   * 
  **/
  getAllPosts(
    req: operations.GetAllPostsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetAllPostsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetAllPostsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/posts/all";
    
    const client: AxiosInstance = this._securityClient!;
    
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .request({
        url: url,
        method: "get",
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetAllPostsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getAllPosts200ApplicationJsonObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getAllPostsChanges - List all post changes
   *
   * This endpoint provides an easy way to get a feed of all the changes that have been made to publicly published posts on trash nothing.  Similar to the /posts/all endpoint, only data from the last 30 days is available and the changes are sorted by date (newest first).  Every change includes the date of the change, the post_id of the post that was changed and the type of change. <br /><br /> The different types of changes that are returned are listed below. <br /><br /> - deleted<br /> - undeleted<br /> - satisfied<br /> - promised<br /> - unpromised<br /> - withdrawn<br /> - edited<br /> <br /> For edited changes, clients can use the retrieve post API endpoint to get the edits that have been made to the post.
   * 
  **/
  getAllPostsChanges(
    req: operations.GetAllPostsChangesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetAllPostsChangesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetAllPostsChangesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/posts/all/changes";
    
    const client: AxiosInstance = this._securityClient!;
    
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .request({
        url: url,
        method: "get",
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetAllPostsChangesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getAllPostsChanges200ApplicationJsonObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getPost - Retrieve a post
  **/
  getPost(
    req: operations.GetPostRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetPostResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetPostRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/posts/{post_id}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetPostResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.post = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 404:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getPostAndRelatedData - Retrieve post display data
   *
   * Retrieve a post and other data related to the post that is useful for displaying the post such as data about the user who posted the post and the groups the post was posted on.
   * 
  **/
  getPostAndRelatedData(
    req: operations.GetPostAndRelatedDataRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetPostAndRelatedDataResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetPostAndRelatedDataRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/posts/{post_id}/display", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetPostAndRelatedDataResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getPostAndRelatedData200ApplicationJsonObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 404:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getPostClientJavascript - Retrieve client.js
   *
   * Defines javascript functions that can be used to validate and submit posts.
   * 
   * The advantage of using these functions versus using the post submission endpoint directly is that
   * some of the post validation checks can be done on the client side which will be faster.
   * 
   * NOTE: If used, this javascript file MUST be loaded dynamically for each user because the contents
   * of the file are generated dynamically based on the current user.  The file may be cached on a per
   * user basis based on the HTTP cache headers that are returned when the file is requested (currently
   * the cache headers specify that the file should expire after one day).
   * 
   * 
   * The following functions are available:
   * 
   * ---
   * 
   * **window.TN.check_crossposting_restrictions(group_ids)**
   * 
   * Checks for crossposting restrictions when the user selects more than one group to post to.
   * 
   * Parameters:
   * - **group_ids** is an array of group IDs
   * 
   * Returns an object with three properties {allowed, restricted, restrictions}.
   * 
   * - **allowed** is an array of the group IDs from group_ids that can be crossposted to
   * 
   * - **restricted** is an array of the group IDs from group_ids that can't be crossposted to
   * 
   * - **restrictions** is an object mapping group IDs that have crossposting restrictions to arrays of group IDs that are restricted.
   *   It is useful for pinpointing why a group ID shows up in the restricted array so that users can be provided feedback
   *   about the reason for the crossposting restriction (eg. a message like 'group A doesn't allow crossposting to group B').
   * 
   * For example, given group_ids = [1, 2, 3, 4] and assuming group 1 doesn't allow posting to group 3 and group 2 doesn't allow
   * posting to group 1, the returned object will be:
   * 
   * {allowed: [4], restricted: [1, 2, 3], restrictions: {1: [3], 2: [1]}}
   * 
   * 
   * ---
   * 
   * **window.TN.submit_post(args, session, preferences, callback)**
   * 
   * Submits a new post and performs validation checks on the post before it is accepted for submission.
   * 
   * Parameters:
   * 
   * - **args** is an object containing data about the post being submitted and must include
   *   the following properties:
   * 
   *   - type: The type of post.  One of: offer, wanted
   *   - title: A short description of the item(s).
   *   - location: A short location description.
   * 
   *   The following properties are optional:
   * 
   *   - content: A longer description of the item(s).
   *   - group_ids: An array of group IDs to submit the post to (if any).
   *   - fair_offer: If set to 1, the post will be posted with the Fair Offer Policy (only valid for offer posts - see https://trashnothing.com/fair_offer_policy ).
   *   - photo_ids: A comma separated list of the IDs of the photos that should be attached to this post.
   *   - latitude
   *   - longitude
   * 
   * - **session** is a temporary object that is used by submit_post to store data about the submission
   *   process for a single post.  The first time submit_post is called with a post, session should
   *   be a new empty object (eg. {}).  The session object should be persisted until that post
   *   is successfully submitted and then it can be discarded so that the next post will start
   *   over with a new empty session object.  
   * 
   * - **preferences** is a permanent object that the client persists and modifies based on warnings returned
   *   by the post submission process and user input.  Some post warnings passed to the callback object
   *   have a preference_key string property so that users can opt out of those warnings in the future.
   *   To save this opt-out preference, set the property indicated by the preference_key in the preferences
   *   object (eg. preferences[preference_key] = 1).  The preferences object is only read by submit_post and
   *   never modified - it is up to the client to initialize, modify and persist the preferences object.
   * 
   * - **callback** is a function used to return the result of the post submission. It is called and passed
   *   one argument - an object with five properties {result, message, preference_key, identifier, session}.
   *   The result property is a string that is one of: success, error, warning.  The identifier property is
   *   set for errors and warnings and will contain a string that represents the type of error or warning that
   *   occurred.
   * 
   *   A success result indicates that the post was submitted successfully. Note that posts may not
   *   appear instantly after submission because the moderators of many groups may have additional
   *   automatic or manual review processes in place that can delay the publishing of a post.
   *   
   *   An error result indicates that there is an error with the post to show the user and the message property
   *   will contain text describing the error.
   * 
   *   A warning result indicates that there is a warning about the post to show the user and the
   *   message property will contain a string describing the warning.  A warning result doesn't prevent a post from
   *   being submitted, to continue the submission process after a warning result, just re-submit the post
   *   (with the updated session object) to temporarily override that specific warning.
   * 
   *   Certain types of warnings can be opted out of.  These warnings will set preference_key to a string that can be 
   *   set in the preferences object by the client to opt out of that type of warning in the future (see the description
   *   of the preferences parameter for more details).
   * 
  **/
  getPostClientJavascript(
    req: operations.GetPostClientJavascriptRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetPostClientJavascriptResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetPostClientJavascriptRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/posts/client.js";
    
    const client: AxiosInstance = this._securityClient!;
    
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .request({
        url: url,
        method: "get",
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetPostClientJavascriptResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getPosts - List posts
   *
   * NOTE: When paging through the posts returned by this endpoint, there will be at most 1,000 posts that can be returned (eg. 50 pages worth of posts with the default per_page value of 20).  In areas where there are more than 1,000 posts, clients can use more specific query parameters to adjust which posts are returned.
   * NOTE: Passing the latitude, longitude and radius parameters filters all posts by their location and so these parameters will temporarily override the current users' location preferences. When latitude, longitude and radius are not specified, public posts will be filtered by the current users' location preferences.
   * 
  **/
  getPosts(
    req: operations.GetPostsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetPostsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetPostsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/posts";
    
    const client: AxiosInstance = this._securityClient!;
    
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .request({
        url: url,
        method: "get",
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetPostsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getPosts200ApplicationJsonObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getPostsByIds - Retrieve multiple posts
  **/
  getPostsByIds(
    req: operations.GetPostsByIdsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetPostsByIdsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetPostsByIdsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/posts/multiple";
    
    const client: AxiosInstance = this._securityClient!;
    
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .request({
        url: url,
        method: "get",
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetPostsByIdsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.posts = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * promisePost - Promise an offer post
   *
   * Mark an offer by the current user as promised to someone. This helps people viewing the post know that the items being offered may soon be given away as long as the person who was promised the items picks them up.
   * 
  **/
  promisePost(
    req: operations.PromisePostRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PromisePostResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PromisePostRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/posts/{post_id}/promise", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "put",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PromisePostResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.post = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 404:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * replyToPost - Reply to a post
   *
   * Send a reply to a post from the current user to the post author.
  **/
  replyToPost(
    req: operations.ReplyToPostRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ReplyToPostResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ReplyToPostRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/posts/{post_id}/reply", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ReplyToPostResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 404:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * satisfyPost - Satisfy a post
   *
   * Mark an offer or wanted post by the current user as satisfied (eg. an offer has been taken or a wanted has been received).
  **/
  satisfyPost(
    req: operations.SatisfyPostRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SatisfyPostResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SatisfyPostRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/posts/{post_id}/satisfy", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "put",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.SatisfyPostResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.post = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 404:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * searchPosts - Search posts
   *
   * Searching posts takes the same arguments as listing posts except for the addition of the search and sort_by parameters.
   * NOTE: When paging through the posts returned by this endpoint, there will be at most 1,000 posts that can be returned (eg. 50 pages worth of posts with the default per_page value of 20).  In areas where there are more than 1,000 posts, clients can use more specific query parameters to adjust which posts are returned.
   * 
  **/
  searchPosts(
    req: operations.SearchPostsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchPostsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchPostsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/posts/search";
    
    const client: AxiosInstance = this._securityClient!;
    
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .request({
        url: url,
        method: "get",
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.SearchPostsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.searchPosts200ApplicationJsonObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * sharePost - Share a post
   *
   * Forwards a copy of the post to the current user so that they can forward it to friends.
  **/
  sharePost(
    req: operations.SharePostRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SharePostResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SharePostRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/posts/{post_id}/share", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "post",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.SharePostResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 404:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * submitPost - Submit a post
   *
   * Submits a new post. <br /><br /> NOTE: An alternate way to submit posts that does quicker client side validation is to use the script served by the API at the /posts/client.js endpoint (see the description of the /posts/client.js endpoint for usage instructions).
   * 
  **/
  submitPost(
    req: operations.SubmitPostRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SubmitPostResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SubmitPostRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/posts";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.SubmitPostResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.submitPost200ApplicationJsonObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * unpromisePost - Unpromise an offer post
   *
   * Mark an offer by the current user as unpromised.
  **/
  unpromisePost(
    req: operations.UnpromisePostRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UnpromisePostResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UnpromisePostRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/posts/{post_id}/unpromise", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "put",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.UnpromisePostResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.post = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 404:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updatePost - Update a post
   *
   * Users can update posts to fix mistakes with their post, add photos, or add more details about the items. Updates should not be used to say that items in a post have been taken or received since the post satisfy endpoint is designed to do that.
   * 
  **/
  updatePost(
    req: operations.UpdatePostRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdatePostResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdatePostRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/posts/{post_id}", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "put",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.UpdatePostResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.updatePost200ApplicationJsonObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 404:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * withdrawPost - Withdraw a post
   *
   * Mark an offer or wanted post by the current user as withdrawn.
  **/
  withdrawPost(
    req: operations.WithdrawPostRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.WithdrawPostResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.WithdrawPostRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/posts/{post_id}/withdraw", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "put",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.WithdrawPostResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.post = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 404:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
