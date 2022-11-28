import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import FormData from "form-data";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";



type OptsFunc = (sdk: SDK) => void;

export const ServerList = [
	"https://api.reverb.com/api",
] as const;

export function WithServerURL(
  serverURL: string,
  params?: Map<string, string>
): OptsFunc {
  return (sdk: SDK) => {
    if (params != null) {
      serverURL = utils.ReplaceParameters(serverURL, params);
    }
    sdk._serverURL = serverURL;
  };
}

export function WithClient(client: AxiosInstance): OptsFunc {
  return (sdk: SDK) => {
    sdk._defaultClient = client;
  };
}

/* SDK Documentation: https://dev.reverb.com/*/
export class SDK {

  public _defaultClient: AxiosInstance;
  public _securityClient: AxiosInstance;
  
  public _serverURL: string;
  private _language = "typescript";
  private _sdkVersion = "0.0.1";
  private _genVersion = "internal";

  constructor(...opts: OptsFunc[]) {
    opts.forEach((o) => o(this));
    if (this._serverURL == "") {
      this._serverURL = ServerList[0];
    }

    if (!this._defaultClient) {
      this._defaultClient = axios.create({ baseURL: this._serverURL });
    }

    if (!this._securityClient) {
      this._securityClient = this._defaultClient;
    }
    
  }
  
  /**
   * deleteListingsListingIdImagesImageId - Delete an image from a listing
   *
   * Delete an image from a listing
  **/
  deleteListingsListingIdImagesImageId(
    req: operations.DeleteListingsListingIdImagesImageIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteListingsListingIdImagesImageIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteListingsListingIdImagesImageIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/listings/{listing_id}/images/{image_id}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteListingsListingIdImagesImageIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteListingsSlug - Delete a draft listing. Cannot be used on non-drafts.
   *
   * Delete a draft listing. Cannot be used on non-drafts.
  **/
  deleteListingsSlug(
    req: operations.DeleteListingsSlugRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteListingsSlugResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteListingsSlugRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/listings/{slug}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteListingsSlugResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteMyAddressesAddressId - Delete an existing address in your address book
   *
   * Delete an existing address in your address book
  **/
  deleteMyAddressesAddressId(
    req: operations.DeleteMyAddressesAddressIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteMyAddressesAddressIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteMyAddressesAddressIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/my/addresses/{address_id}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteMyAddressesAddressIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  deleteMyCuratedSetProductProductId(
    req: operations.DeleteMyCuratedSetProductProductIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteMyCuratedSetProductProductIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteMyCuratedSetProductProductIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/my/curated_set/product/{product_id}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteMyCuratedSetProductProductIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteMyFollowsBrandsSlug - Unfollow a brand
   *
   * Unfollow a brand
  **/
  deleteMyFollowsBrandsSlug(
    req: operations.DeleteMyFollowsBrandsSlugRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteMyFollowsBrandsSlugResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteMyFollowsBrandsSlugRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/my/follows/brands/{slug}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteMyFollowsBrandsSlugResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteMyFollowsCategoriesCategorySubcategory - Unfollow a subcategory
   *
   * Unfollow a subcategory
  **/
  deleteMyFollowsCategoriesCategorySubcategory(
    req: operations.DeleteMyFollowsCategoriesCategorySubcategoryRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteMyFollowsCategoriesCategorySubcategoryResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteMyFollowsCategoriesCategorySubcategoryRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/my/follows/categories/{category}/{subcategory}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteMyFollowsCategoriesCategorySubcategoryResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteMyFollowsCategoriesIdentifier - Unfollow a category
   *
   * Unfollow a category
  **/
  deleteMyFollowsCategoriesIdentifier(
    req: operations.DeleteMyFollowsCategoriesIdentifierRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteMyFollowsCategoriesIdentifierResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteMyFollowsCategoriesIdentifierRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/my/follows/categories/{identifier}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteMyFollowsCategoriesIdentifierResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteMyFollowsCollectionsSlug - Unfollow a collection
   *
   * Unfollow a collection
  **/
  deleteMyFollowsCollectionsSlug(
    req: operations.DeleteMyFollowsCollectionsSlugRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteMyFollowsCollectionsSlugResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteMyFollowsCollectionsSlugRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/my/follows/collections/{slug}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteMyFollowsCollectionsSlugResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteMyFollowsFollowId - Delete a follow
   *
   * Delete a follow
  **/
  deleteMyFollowsFollowId(
    req: operations.DeleteMyFollowsFollowIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteMyFollowsFollowIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteMyFollowsFollowIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/my/follows/{follow_id}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteMyFollowsFollowIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  deleteMyFollowsFollowIdAlert(
    req: operations.DeleteMyFollowsFollowIdAlertRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteMyFollowsFollowIdAlertResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteMyFollowsFollowIdAlertRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/my/follows/{follow_id}/alert", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteMyFollowsFollowIdAlertResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteMyFollowsHandpickedSlug - Unfollow a handpicked collection
   *
   * Unfollow a handpicked collection
  **/
  deleteMyFollowsHandpickedSlug(
    req: operations.DeleteMyFollowsHandpickedSlugRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteMyFollowsHandpickedSlugResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteMyFollowsHandpickedSlugRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/my/follows/handpicked/{slug}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteMyFollowsHandpickedSlugResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteMyFollowsShopsSlug - Unfollow a shop
   *
   * Unfollow a shop
  **/
  deleteMyFollowsShopsSlug(
    req: operations.DeleteMyFollowsShopsSlugRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteMyFollowsShopsSlugResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteMyFollowsShopsSlugRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/my/follows/shops/{slug}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteMyFollowsShopsSlugResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteMyWishlistId - Remove a listing from your wishlist
   *
   * Remove a listing from your wishlist
  **/
  deleteMyWishlistId(
    req: operations.DeleteMyWishlistIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteMyWishlistIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteMyWishlistIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/my/wishlist/{id}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteMyWishlistIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteSalesSaleIdListings - Remove a listing from a sale
   *
   * Remove a listing from a sale
  **/
  deleteSalesSaleIdListings(
    req: operations.DeleteSalesSaleIdListingsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteSalesSaleIdListingsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteSalesSaleIdListingsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/sales/{sale_id}/listings", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteSalesSaleIdListingsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteShopVacation - Disable vacation mode. All listings will be re-enabled.
   *
   * Disable vacation mode. All listings will be re-enabled.
  **/
  deleteShopVacation(
    req: operations.DeleteShopVacationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteShopVacationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteShopVacationRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/shop/vacation";
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteShopVacationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteWantsId - Unmark an item wanted.
   *
   * Unmark an item wanted.
  **/
  deleteWantsId(
    req: operations.DeleteWantsIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteWantsIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteWantsIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/wants/{id}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteWantsIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteWebhooksRegistrationsId - Remove a webhook
   *
   * Remove a webhook
  **/
  deleteWebhooksRegistrationsId(
    req: operations.DeleteWebhooksRegistrationsIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteWebhooksRegistrationsIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteWebhooksRegistrationsIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/webhooks/registrations/{id}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteWebhooksRegistrationsIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  getArticles(
    req: operations.GetArticlesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetArticlesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetArticlesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/articles";
    
    const client: AxiosInstance = this._defaultClient!;
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
        const res: operations.GetArticlesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getArticlesCategories - List of all article categories
   *
   * List of all article categories
  **/
  getArticlesCategories(
    config?: AxiosRequestConfig
  ): Promise<operations.GetArticlesCategoriesResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/articles/categories";
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetArticlesCategoriesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getCategories - List of supported product categories
   *
   * List of supported product categories
  **/
  getCategories(
    config?: AxiosRequestConfig
  ): Promise<operations.GetCategoriesResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/categories";
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetCategoriesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  getCategoriesFlat(
    config?: AxiosRequestConfig
  ): Promise<operations.GetCategoriesFlatResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/categories/flat";
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetCategoriesFlatResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getCategoriesProductTypeCategory - Get subcategory details
   *
   * Get subcategory details
  **/
  getCategoriesProductTypeCategory(
    req: operations.GetCategoriesProductTypeCategoryRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetCategoriesProductTypeCategoryResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetCategoriesProductTypeCategoryRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/categories/{product_type}/{category}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetCategoriesProductTypeCategoryResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getCategoriesTaxonomy - Full taxonomy tree of categories including middle categories
   *
   * Full taxonomy tree of categories including middle categories
  **/
  getCategoriesTaxonomy(
    config?: AxiosRequestConfig
  ): Promise<operations.GetCategoriesTaxonomyResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/categories/taxonomy";
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetCategoriesTaxonomyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getCategoriesUuid - Get category details
   *
   * Get category details
  **/
  getCategoriesUuid(
    req: operations.GetCategoriesUuidRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetCategoriesUuidResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetCategoriesUuidRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/categories/{uuid}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetCategoriesUuidResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getComparisonShoppingPages - Returns a set of comparison shopping pages based on the current params
   *
   * Returns a set of comparison shopping pages based on the current params
  **/
  getComparisonShoppingPages(
    config?: AxiosRequestConfig
  ): Promise<operations.GetComparisonShoppingPagesResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/comparison_shopping_pages";
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetComparisonShoppingPagesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getComparisonShoppingPagesFind - Show comparison shopping page
   *
   * Show comparison shopping page
  **/
  getComparisonShoppingPagesFind(
    req: operations.GetComparisonShoppingPagesFindRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetComparisonShoppingPagesFindResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetComparisonShoppingPagesFindRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/comparison_shopping_pages/find";
    
    const client: AxiosInstance = this._defaultClient!;
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
        const res: operations.GetComparisonShoppingPagesFindResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  getComparisonShoppingPagesId(
    req: operations.GetComparisonShoppingPagesIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetComparisonShoppingPagesIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetComparisonShoppingPagesIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/comparison_shopping_pages/{id}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetComparisonShoppingPagesIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getComparisonShoppingPagesIdListings - Return new or used listings for a comparison shopping page
   *
   * Return new or used listings for a comparison shopping page
  **/
  getComparisonShoppingPagesIdListings(
    req: operations.GetComparisonShoppingPagesIdListingsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetComparisonShoppingPagesIdListingsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetComparisonShoppingPagesIdListingsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/comparison_shopping_pages/{id}/listings", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
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
        const res: operations.GetComparisonShoppingPagesIdListingsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getComparisonShoppingPagesIdReviews - View reviews of a comparison shopping page
   *
   * View reviews of a comparison shopping page
  **/
  getComparisonShoppingPagesIdReviews(
    req: operations.GetComparisonShoppingPagesIdReviewsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetComparisonShoppingPagesIdReviewsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetComparisonShoppingPagesIdReviewsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/comparison_shopping_pages/{id}/reviews", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetComparisonShoppingPagesIdReviewsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getCountries - Retrieve a list of country codes with corresponding subregions
   *
   * Retrieve a list of country codes with corresponding subregions
  **/
  getCountries(
    config?: AxiosRequestConfig
  ): Promise<operations.GetCountriesResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/countries";
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetCountriesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getCsps - Returns a set of comparison shopping pages based on the current params
   *
   * Returns a set of comparison shopping pages based on the current params
  **/
  getCsps(
    config?: AxiosRequestConfig
  ): Promise<operations.GetCspsResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/csps";
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetCspsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  getCspsCategories(
    config?: AxiosRequestConfig
  ): Promise<operations.GetCspsCategoriesResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/csps/categories";
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetCspsCategoriesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getCspsFind - Show comparison shopping page
   *
   * Show comparison shopping page
  **/
  getCspsFind(
    req: operations.GetCspsFindRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetCspsFindResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetCspsFindRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/csps/find";
    
    const client: AxiosInstance = this._defaultClient!;
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
        const res: operations.GetCspsFindResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  getCspsId(
    req: operations.GetCspsIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetCspsIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetCspsIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/csps/{id}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetCspsIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  getCuratedSetsSlug(
    req: operations.GetCuratedSetsSlugRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetCuratedSetsSlugResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetCuratedSetsSlugRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/curated_sets/{slug}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetCuratedSetsSlugResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getCurrenciesDisplay - List of supported display currencies for browsing listings
   *
   * List of supported display currencies for browsing listings
  **/
  getCurrenciesDisplay(
    config?: AxiosRequestConfig
  ): Promise<operations.GetCurrenciesDisplayResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/currencies/display";
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetCurrenciesDisplayResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getCurrenciesListing - List of supported listing currencies for shops
   *
   * List of supported listing currencies for shops
  **/
  getCurrenciesListing(
    config?: AxiosRequestConfig
  ): Promise<operations.GetCurrenciesListingResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/currencies/listing";
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetCurrenciesListingResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getFeedbackFeedbackId - Feedback details
   *
   * Feedback details
  **/
  getFeedbackFeedbackId(
    req: operations.GetFeedbackFeedbackIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetFeedbackFeedbackIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetFeedbackFeedbackIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/feedback/{feedback_id}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetFeedbackFeedbackIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getHandpickedSlug - Get results from a handpicked collection
   *
   * Get results from a handpicked collection
  **/
  getHandpickedSlug(
    req: operations.GetHandpickedSlugRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetHandpickedSlugResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetHandpickedSlugRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/handpicked/{slug}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
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
        const res: operations.GetHandpickedSlugResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getListingConditions - List of supported product conditions
   *
   * List of supported product conditions
  **/
  getListingConditions(
    config?: AxiosRequestConfig
  ): Promise<operations.GetListingConditionsResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/listing_conditions";
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetListingConditionsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getListings - Default search of listings includes only used & handmade. Add a filter to view all listings or use the /listings/all endpoint.
   *
   * Default search of listings includes only used & handmade. Add a filter to view all listings or use the /listings/all endpoint.
  **/
  getListings(
    req: operations.GetListingsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetListingsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetListingsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/listings";
    
    const client: AxiosInstance = this._defaultClient!;
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
        const res: operations.GetListingsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getListingsAll - All listings including used, handmade, and brand new
   *
   * All listings including used, handmade, and brand new
  **/
  getListingsAll(
    req: operations.GetListingsAllRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetListingsAllResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetListingsAllRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/listings/all";
    
    const client: AxiosInstance = this._defaultClient!;
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
        const res: operations.GetListingsAllResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getListingsFacetsSellerLocation - Individual facets
   *
   * Individual facets
  **/
  getListingsFacetsSellerLocation(
    config?: AxiosRequestConfig
  ): Promise<operations.GetListingsFacetsSellerLocationResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/listings/facets/seller_location";
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetListingsFacetsSellerLocationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getListingsIdNegotiation - Returns the latest negotiation for the requesting user given a listing id
   *
   * Returns the latest negotiation for the requesting user given a listing id
  **/
  getListingsIdNegotiation(
    req: operations.GetListingsIdNegotiationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetListingsIdNegotiationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetListingsIdNegotiationRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/listings/{id}/negotiation", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetListingsIdNegotiationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getListingsListingIdBump - View available bump tiers and stats for a listing
   *
   * View available bump tiers and stats for a listing
  **/
  getListingsListingIdBump(
    req: operations.GetListingsListingIdBumpRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetListingsListingIdBumpResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetListingsListingIdBumpRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/listings/{listing_id}/bump", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetListingsListingIdBumpResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getListingsListingIdImages - View the images associated with a particular listing
   *
   * View the images associated with a particular listing
  **/
  getListingsListingIdImages(
    req: operations.GetListingsListingIdImagesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetListingsListingIdImagesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetListingsListingIdImagesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/listings/{listing_id}/images", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetListingsListingIdImagesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getListingsListingIdSales - See all sales that include a listing.
   *
   * See all sales that include a listing.
  **/
  getListingsListingIdSales(
    req: operations.GetListingsListingIdSalesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetListingsListingIdSalesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetListingsListingIdSalesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/listings/{listing_id}/sales", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetListingsListingIdSalesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getListingsSlug - Listing details
   *
   * Listing details
  **/
  getListingsSlug(
    req: operations.GetListingsSlugRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetListingsSlugResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetListingsSlugRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/listings/{slug}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetListingsSlugResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getListingsSlugEdit - Edit listing.
   *
   * Edit listing.
  **/
  getListingsSlugEdit(
    req: operations.GetListingsSlugEditRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetListingsSlugEditResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetListingsSlugEditRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/listings/{slug}/edit", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetListingsSlugEditResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getListingsSlugReviews - View reviews of a listing
   *
   * View reviews of a listing
  **/
  getListingsSlugReviews(
    req: operations.GetListingsSlugReviewsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetListingsSlugReviewsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetListingsSlugReviewsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/listings/{slug}/reviews", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetListingsSlugReviewsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getListingsSlugSimilarListings - Listing details
   *
   * Listing details
  **/
  getListingsSlugSimilarListings(
    req: operations.GetListingsSlugSimilarListingsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetListingsSlugSimilarListingsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetListingsSlugSimilarListingsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/listings/{slug}/similar_listings", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetListingsSlugSimilarListingsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getMyAccount - Get account details
   *
   * Get account details
  **/
  getMyAccount(
    req: operations.GetMyAccountRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetMyAccountResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetMyAccountRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/my/account";
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetMyAccountResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getMyAddresses - See all addresses in your address book
   *
   * See all addresses in your address book
  **/
  getMyAddresses(
    req: operations.GetMyAddressesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetMyAddressesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetMyAddressesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/my/addresses";
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetMyAddressesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getMyConversations - Get a list of your conversations
   *
   * Get a list of your conversations
  **/
  getMyConversations(
    req: operations.GetMyConversationsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetMyConversationsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetMyConversationsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/my/conversations";
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
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
        const res: operations.GetMyConversationsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getMyConversationsId - Display conversation details with messages in natural time order (oldest to newest)
   *
   * Display conversation details with messages in natural time order (oldest to newest)
  **/
  getMyConversationsId(
    req: operations.GetMyConversationsIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetMyConversationsIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetMyConversationsIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/my/conversations/{id}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetMyConversationsIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getMyCounts - Get your actionable status counts
   *
   * Get your actionable status counts
  **/
  getMyCounts(
    req: operations.GetMyCountsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetMyCountsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetMyCountsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/my/counts";
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetMyCountsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getMyFeed - Get listings from your feed
   *
   * Get listings from your feed
  **/
  getMyFeed(
    req: operations.GetMyFeedRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetMyFeedResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetMyFeedRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/my/feed";
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetMyFeedResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getMyFeedCustomize - get your feed customization options
   *
   * get your feed customization options
  **/
  getMyFeedCustomize(
    req: operations.GetMyFeedCustomizeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetMyFeedCustomizeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetMyFeedCustomizeRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/my/feed/customize";
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetMyFeedCustomizeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getMyFeedGrid - get your feed
   *
   * get your feed
  **/
  getMyFeedGrid(
    req: operations.GetMyFeedGridRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetMyFeedGridResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetMyFeedGridRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/my/feed/grid";
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetMyFeedGridResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getMyFeedbackReceived - List of received feedback
   *
   * List of received feedback
  **/
  getMyFeedbackReceived(
    req: operations.GetMyFeedbackReceivedRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetMyFeedbackReceivedResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetMyFeedbackReceivedRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/my/feedback/received";
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetMyFeedbackReceivedResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getMyFeedbackSent - List of sent feedback
   *
   * List of sent feedback
  **/
  getMyFeedbackSent(
    req: operations.GetMyFeedbackSentRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetMyFeedbackSentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetMyFeedbackSentRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/my/feedback/sent";
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetMyFeedbackSentResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getMyFollows - See what the user is following
   *
   * See what the user is following
  **/
  getMyFollows(
    req: operations.GetMyFollowsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetMyFollowsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetMyFollowsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/my/follows";
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetMyFollowsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getMyFollowsArticles - Returns a user's ArticleCategoryFollows
   *
   * Returns a user's ArticleCategoryFollows
  **/
  getMyFollowsArticles(
    req: operations.GetMyFollowsArticlesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetMyFollowsArticlesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetMyFollowsArticlesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/my/follows/articles";
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetMyFollowsArticlesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getMyFollowsBrandsSlug - Follow status for a brand
   *
   * Follow status for a brand
  **/
  getMyFollowsBrandsSlug(
    req: operations.GetMyFollowsBrandsSlugRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetMyFollowsBrandsSlugResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetMyFollowsBrandsSlugRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/my/follows/brands/{slug}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetMyFollowsBrandsSlugResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getMyFollowsCategoriesCategorySubcategory - Follow status for a subcategory
   *
   * Follow status for a subcategory
  **/
  getMyFollowsCategoriesCategorySubcategory(
    req: operations.GetMyFollowsCategoriesCategorySubcategoryRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetMyFollowsCategoriesCategorySubcategoryResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetMyFollowsCategoriesCategorySubcategoryRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/my/follows/categories/{category}/{subcategory}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetMyFollowsCategoriesCategorySubcategoryResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getMyFollowsCategoriesIdentifier - Follow status for a category
   *
   * Follow status for a category
  **/
  getMyFollowsCategoriesIdentifier(
    req: operations.GetMyFollowsCategoriesIdentifierRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetMyFollowsCategoriesIdentifierResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetMyFollowsCategoriesIdentifierRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/my/follows/categories/{identifier}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetMyFollowsCategoriesIdentifierResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getMyFollowsCollectionsSlug - Follow status for a collection
   *
   * Follow status for a collection
  **/
  getMyFollowsCollectionsSlug(
    req: operations.GetMyFollowsCollectionsSlugRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetMyFollowsCollectionsSlugResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetMyFollowsCollectionsSlugRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/my/follows/collections/{slug}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetMyFollowsCollectionsSlugResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getMyFollowsHandpickedSlug - Follow status for a handpicked collection
   *
   * Follow status for a handpicked collection
  **/
  getMyFollowsHandpickedSlug(
    req: operations.GetMyFollowsHandpickedSlugRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetMyFollowsHandpickedSlugResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetMyFollowsHandpickedSlugRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/my/follows/handpicked/{slug}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetMyFollowsHandpickedSlugResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getMyFollowsSearch - Follow status for a search
   *
   * Follow status for a search
  **/
  getMyFollowsSearch(
    req: operations.GetMyFollowsSearchRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetMyFollowsSearchResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetMyFollowsSearchRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/my/follows/search";
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetMyFollowsSearchResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getMyFollowsShopsSlug - Follow status for a shop
   *
   * Follow status for a shop
  **/
  getMyFollowsShopsSlug(
    req: operations.GetMyFollowsShopsSlugRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetMyFollowsShopsSlugResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetMyFollowsShopsSlugRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/my/follows/shops/{slug}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetMyFollowsShopsSlugResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getMyListings - Retrieve a list of live listings for the seller. To search all listings specify state=all
   *
   * Retrieve a list of live listings for the seller. To search all listings specify state=all
  **/
  getMyListings(
    req: operations.GetMyListingsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetMyListingsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetMyListingsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/my/listings";
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
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
        const res: operations.GetMyListingsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getMyListingsDrafts - Retrieve a list your draft listings
   *
   * Retrieve a list your draft listings
  **/
  getMyListingsDrafts(
    req: operations.GetMyListingsDraftsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetMyListingsDraftsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetMyListingsDraftsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/my/listings/drafts";
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
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
        const res: operations.GetMyListingsDraftsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getMyListingsNegotiations - Get a list of active negotiations as a seller
   *
   * Get a list of active negotiations as a seller
  **/
  getMyListingsNegotiations(
    req: operations.GetMyListingsNegotiationsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetMyListingsNegotiationsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetMyListingsNegotiationsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/my/listings/negotiations";
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
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
        const res: operations.GetMyListingsNegotiationsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getMyLists - Get a list of your lists (wishlist, watch list, etc)
   *
   * Get a list of your lists (wishlist, watch list, etc)
  **/
  getMyLists(
    req: operations.GetMyListsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetMyListsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetMyListsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/my/lists";
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetMyListsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getMyNegotiationsBuying - Get a list of active negotiations as a buyer
   *
   * Get a list of active negotiations as a buyer
  **/
  getMyNegotiationsBuying(
    req: operations.GetMyNegotiationsBuyingRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetMyNegotiationsBuyingResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetMyNegotiationsBuyingRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/my/negotiations/buying";
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
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
        const res: operations.GetMyNegotiationsBuyingResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getMyNegotiationsId - Get offer details
   *
   * Get offer details
  **/
  getMyNegotiationsId(
    req: operations.GetMyNegotiationsIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetMyNegotiationsIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetMyNegotiationsIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/my/negotiations/{id}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetMyNegotiationsIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getMyOrdersAwaitingFeedback - List of orders that need feedback
   *
   * List of orders that need feedback
  **/
  getMyOrdersAwaitingFeedback(
    req: operations.GetMyOrdersAwaitingFeedbackRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetMyOrdersAwaitingFeedbackResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetMyOrdersAwaitingFeedbackRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/my/orders/awaiting_feedback";
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetMyOrdersAwaitingFeedbackResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getMyOrdersBuyingAll - Returns all orders, newest first.
   *
   * Returns all orders, newest first.
  **/
  getMyOrdersBuyingAll(
    req: operations.GetMyOrdersBuyingAllRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetMyOrdersBuyingAllResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetMyOrdersBuyingAllRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/my/orders/buying/all";
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetMyOrdersBuyingAllResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  getMyOrdersBuyingByUuidUuid(
    req: operations.GetMyOrdersBuyingByUuidUuidRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetMyOrdersBuyingByUuidUuidResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetMyOrdersBuyingByUuidUuidRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/my/orders/buying/by_uuid/{uuid}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetMyOrdersBuyingByUuidUuidResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getMyOrdersBuyingId - Returns order details for a buyer
   *
   * Returns order details for a buyer
  **/
  getMyOrdersBuyingId(
    req: operations.GetMyOrdersBuyingIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetMyOrdersBuyingIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetMyOrdersBuyingIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/my/orders/buying/{id}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetMyOrdersBuyingIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getMyOrdersBuyingUnpaid - Returns unpaid orders, newest first.
   *
   * Returns unpaid orders, newest first.
  **/
  getMyOrdersBuyingUnpaid(
    req: operations.GetMyOrdersBuyingUnpaidRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetMyOrdersBuyingUnpaidResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetMyOrdersBuyingUnpaidRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/my/orders/buying/unpaid";
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetMyOrdersBuyingUnpaidResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getMyOrdersSellingAll - Get all seller orders, newest first.
   *
   * Get all seller orders, newest first.
  **/
  getMyOrdersSellingAll(
    req: operations.GetMyOrdersSellingAllRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetMyOrdersSellingAllResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetMyOrdersSellingAllRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/my/orders/selling/all";
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetMyOrdersSellingAllResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getMyOrdersSellingAwaitingShipment - Get unpaid seller orders, newest first.
   *
   * Get unpaid seller orders, newest first.
  **/
  getMyOrdersSellingAwaitingShipment(
    req: operations.GetMyOrdersSellingAwaitingShipmentRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetMyOrdersSellingAwaitingShipmentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetMyOrdersSellingAwaitingShipmentRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/my/orders/selling/awaiting_shipment";
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetMyOrdersSellingAwaitingShipmentResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getMyOrdersSellingBuyerHistoryBuyerId - See previous orders from buyer
   *
   * See previous orders from buyer
  **/
  getMyOrdersSellingBuyerHistoryBuyerId(
    req: operations.GetMyOrdersSellingBuyerHistoryBuyerIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetMyOrdersSellingBuyerHistoryBuyerIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetMyOrdersSellingBuyerHistoryBuyerIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/my/orders/selling/buyer_history/{buyer_id}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetMyOrdersSellingBuyerHistoryBuyerIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  getMyOrdersSellingByUuidUuid(
    req: operations.GetMyOrdersSellingByUuidUuidRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetMyOrdersSellingByUuidUuidResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetMyOrdersSellingByUuidUuidRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/my/orders/selling/by_uuid/{uuid}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetMyOrdersSellingByUuidUuidResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getMyOrdersSellingId - Returns order details for a seller
   *
   * Returns order details for a seller
  **/
  getMyOrdersSellingId(
    req: operations.GetMyOrdersSellingIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetMyOrdersSellingIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetMyOrdersSellingIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/my/orders/selling/{id}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetMyOrdersSellingIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getMyOrdersSellingUnpaid - Get unpaid seller orders, newest first.
   *
   * Get unpaid seller orders, newest first.
  **/
  getMyOrdersSellingUnpaid(
    req: operations.GetMyOrdersSellingUnpaidRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetMyOrdersSellingUnpaidResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetMyOrdersSellingUnpaidRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/my/orders/selling/unpaid";
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetMyOrdersSellingUnpaidResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getMyPaymentsSelling - Get payments
   *
   * Get payments
  **/
  getMyPaymentsSelling(
    req: operations.GetMyPaymentsSellingRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetMyPaymentsSellingResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetMyPaymentsSellingRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/my/payments/selling";
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
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
        const res: operations.GetMyPaymentsSellingResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getMyPaymentsSellingId - Get payment
   *
   * Get payment
  **/
  getMyPaymentsSellingId(
    req: operations.GetMyPaymentsSellingIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetMyPaymentsSellingIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetMyPaymentsSellingIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/my/payments/selling/{id}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetMyPaymentsSellingIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getMyPayouts - Get a list of payouts
   *
   * Get a list of payouts
  **/
  getMyPayouts(
    req: operations.GetMyPayoutsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetMyPayoutsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetMyPayoutsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/my/payouts";
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetMyPayoutsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getMyPayoutsIdLineItems - Read the line items of a payout
   *
   * Read the line items of a payout
  **/
  getMyPayoutsIdLineItems(
    req: operations.GetMyPayoutsIdLineItemsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetMyPayoutsIdLineItemsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetMyPayoutsIdLineItemsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/my/payouts/{id}/line_items", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetMyPayoutsIdLineItemsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getMyRefundRequestsSelling - Get a list of refund requests as a seller
   *
   * Get a list of refund requests as a seller
  **/
  getMyRefundRequestsSelling(
    req: operations.GetMyRefundRequestsSellingRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetMyRefundRequestsSellingResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetMyRefundRequestsSellingRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/my/refund_requests/selling";
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetMyRefundRequestsSellingResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getMyViewedListings - Get a list of your recently viewed listings.
   *
   * Get a list of your recently viewed listings.
  **/
  getMyViewedListings(
    req: operations.GetMyViewedListingsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetMyViewedListingsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetMyViewedListingsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/my/viewed_listings";
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetMyViewedListingsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getMyWishlist - Get a list of wishlisted items
   *
   * Get a list of wishlisted items
  **/
  getMyWishlist(
    req: operations.GetMyWishlistRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetMyWishlistResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetMyWishlistRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/my/wishlist";
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetMyWishlistResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getOrdersOrderIdFeedbackBuyer - Feedback details for an order's buyer
   *
   * Feedback details for an order's buyer
  **/
  getOrdersOrderIdFeedbackBuyer(
    req: operations.GetOrdersOrderIdFeedbackBuyerRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetOrdersOrderIdFeedbackBuyerResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetOrdersOrderIdFeedbackBuyerRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/orders/{order_id}/feedback/buyer", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetOrdersOrderIdFeedbackBuyerResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getOrdersOrderIdFeedbackSeller - Feedback details for an order's seller
   *
   * Feedback details for an order's seller
  **/
  getOrdersOrderIdFeedbackSeller(
    req: operations.GetOrdersOrderIdFeedbackSellerRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetOrdersOrderIdFeedbackSellerResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetOrdersOrderIdFeedbackSellerRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/orders/{order_id}/feedback/seller", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetOrdersOrderIdFeedbackSellerResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getPaymentMethods - Get list of payment methods
   *
   * Get list of payment methods
  **/
  getPaymentMethods(
    config?: AxiosRequestConfig
  ): Promise<operations.GetPaymentMethodsResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/payment_methods";
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetPaymentMethodsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getPriceguideIdTransactionsSummary - Get a summary of transactions for a given price guide
   *
   * Get a summary of transactions for a given price guide
  **/
  getPriceguideIdTransactionsSummary(
    req: operations.GetPriceguideIdTransactionsSummaryRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetPriceguideIdTransactionsSummaryResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetPriceguideIdTransactionsSummaryRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/priceguide/{id}/transactions/summary", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
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
        const res: operations.GetPriceguideIdTransactionsSummaryResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getProductsReviewsId - View a review
   *
   * View a review
  **/
  getProductsReviewsId(
    req: operations.GetProductsReviewsIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetProductsReviewsIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetProductsReviewsIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/products/reviews/{id}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetProductsReviewsIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getProductsSlugReviews - View reviews of a comparison shopping page
   *
   * View reviews of a comparison shopping page
  **/
  getProductsSlugReviews(
    req: operations.GetProductsSlugReviewsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetProductsSlugReviewsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetProductsSlugReviewsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/products/{slug}/reviews", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetProductsSlugReviewsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getSalesReverb - View upcoming and live Reverb official sales.
   *
   * View upcoming and live Reverb official sales.
  **/
  getSalesReverb(
    req: operations.GetSalesReverbRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSalesReverbResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSalesReverbRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/sales/reverb";
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetSalesReverbResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getSalesSeller - View your created sales.
   *
   * View your created sales.
  **/
  getSalesSeller(
    req: operations.GetSalesSellerRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSalesSellerResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSalesSellerRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/sales/seller";
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetSalesSellerResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  getSalesSlug(
    req: operations.GetSalesSlugRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSalesSlugResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSalesSlugRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/sales/{slug}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetSalesSlugResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getShippingProviders - List of supported shipping providers
   *
   * List of supported shipping providers
  **/
  getShippingProviders(
    config?: AxiosRequestConfig
  ): Promise<operations.GetShippingProvidersResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/shipping/providers";
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetShippingProvidersResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  getShippingRegions(
    config?: AxiosRequestConfig
  ): Promise<operations.GetShippingRegionsResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/shipping/regions";
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetShippingRegionsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getShop - Get your own shop details
   *
   * Get your own shop details
  **/
  getShop(
    req: operations.GetShopRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetShopResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetShopRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/shop";
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetShopResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getShopListingConditions - List of supported product conditions
   *
   * List of supported product conditions
  **/
  getShopListingConditions(
    req: operations.GetShopListingConditionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetShopListingConditionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetShopListingConditionsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/shop/listing_conditions";
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetShopListingConditionsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getShopPaymentMethods - Get accepted payment methods
   *
   * Get accepted payment methods
  **/
  getShopPaymentMethods(
    req: operations.GetShopPaymentMethodsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetShopPaymentMethodsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetShopPaymentMethodsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/shop/payment_methods";
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetShopPaymentMethodsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getShopVacation - Returns shop vacation status
   *
   * Returns shop vacation status
  **/
  getShopVacation(
    req: operations.GetShopVacationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetShopVacationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetShopVacationRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/shop/vacation";
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetShopVacationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getShopsIdStorefronts - Get storefront details on a shop.
   *
   * Get storefront details on a shop.
  **/
  getShopsIdStorefronts(
    req: operations.GetShopsIdStorefrontsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetShopsIdStorefrontsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetShopsIdStorefrontsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/shops/{id}/storefronts", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetShopsIdStorefrontsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getShopsShopIdShippingProfiles - List of shipping profiles for your shop
   *
   * List of shipping profiles for your shop
  **/
  getShopsShopIdShippingProfiles(
    req: operations.GetShopsShopIdShippingProfilesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetShopsShopIdShippingProfilesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetShopsShopIdShippingProfilesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/shops/{shop_id}/shipping_profiles", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetShopsShopIdShippingProfilesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getShopsSlug - Get details on a shop.
   *
   * Get details on a shop.
  **/
  getShopsSlug(
    req: operations.GetShopsSlugRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetShopsSlugResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetShopsSlugRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/shops/{slug}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
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
        const res: operations.GetShopsSlugResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getShopsSlugFeedback - Get seller's feedback
   *
   * Get seller's feedback
  **/
  getShopsSlugFeedback(
    req: operations.GetShopsSlugFeedbackRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetShopsSlugFeedbackResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetShopsSlugFeedbackRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/shops/{slug}/feedback", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetShopsSlugFeedbackResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getShopsSlugFeedbackBuyer - Get seller's feedback as a buyer
   *
   * Get seller's feedback as a buyer
  **/
  getShopsSlugFeedbackBuyer(
    req: operations.GetShopsSlugFeedbackBuyerRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetShopsSlugFeedbackBuyerResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetShopsSlugFeedbackBuyerRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/shops/{slug}/feedback/buyer", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetShopsSlugFeedbackBuyerResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getShopsSlugFeedbackSeller - Get seller's feedback as a seller
   *
   * Get seller's feedback as a seller
  **/
  getShopsSlugFeedbackSeller(
    req: operations.GetShopsSlugFeedbackSellerRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetShopsSlugFeedbackSellerResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetShopsSlugFeedbackSellerRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/shops/{slug}/feedback/seller", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetShopsSlugFeedbackSellerResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getWants - A list of wanted items by the user
   *
   * A list of wanted items by the user
  **/
  getWants(
    req: operations.GetWantsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetWantsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetWantsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/wants";
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetWantsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getWebhooksRegistrations - Get webhook registrations
   *
   * Get webhook registrations
  **/
  getWebhooksRegistrations(
    config?: AxiosRequestConfig
  ): Promise<operations.GetWebhooksRegistrationsResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/webhooks/registrations";
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetWebhooksRegistrationsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getWebhooksRegistrationsId - Get details of a webhook registration
   *
   * Get details of a webhook registration
  **/
  getWebhooksRegistrationsId(
    req: operations.GetWebhooksRegistrationsIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetWebhooksRegistrationsIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetWebhooksRegistrationsIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/webhooks/registrations/{id}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetWebhooksRegistrationsIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postConversationsConversationIdOffer - Make an offer to the other participant in the conversation
   *
   * Make an offer to the other participant in the conversation
  **/
  postConversationsConversationIdOffer(
    req: operations.PostConversationsConversationIdOfferRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostConversationsConversationIdOfferResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostConversationsConversationIdOfferRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/conversations/{conversation_id}/offer", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
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
        const res: operations.PostConversationsConversationIdOfferResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postConversationsIdOffer - Make an offer to the other participant in the conversation
   *
   * Make an offer to the other participant in the conversation
  **/
  postConversationsIdOffer(
    req: operations.PostConversationsIdOfferRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostConversationsIdOfferResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostConversationsIdOfferRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/conversations/{id}/offer", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
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
        const res: operations.PostConversationsIdOfferResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postListings - Create a listing
   *
   * Create a listing
  **/
  postListings(
    req: operations.PostListingsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostListingsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostListingsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/listings";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
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
        const res: operations.PostListingsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postListingsIdOffer - Make an offer to the seller of a listing
   *
   * Make an offer to the seller of a listing
  **/
  postListingsIdOffer(
    req: operations.PostListingsIdOfferRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostListingsIdOfferResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostListingsIdOfferRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/listings/{id}/offer", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
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
        const res: operations.PostListingsIdOfferResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postListingsListingIdBumpBudgetType - Bump a listing
   *
   * Bump a listing
  **/
  postListingsListingIdBumpBudgetType(
    req: operations.PostListingsListingIdBumpBudgetTypeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostListingsListingIdBumpBudgetTypeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostListingsListingIdBumpBudgetTypeRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/listings/{listing_id}/bump/{budget_type}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "post",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostListingsListingIdBumpBudgetTypeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postListingsListingIdConversations - Start a conversation with a seller
   *
   * Start a conversation with a seller
  **/
  postListingsListingIdConversations(
    req: operations.PostListingsListingIdConversationsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostListingsListingIdConversationsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostListingsListingIdConversationsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/listings/{listing_id}/conversations", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
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
        const res: operations.PostListingsListingIdConversationsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postListingsSlugFlag - Flag a listing for inappropriate content or fraud
   *
   * Flag a listing for inappropriate content or fraud
  **/
  postListingsSlugFlag(
    req: operations.PostListingsSlugFlagRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostListingsSlugFlagResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostListingsSlugFlagRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/listings/{slug}/flag", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...reqBodyHeaders, ...config?.headers};
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
        const res: operations.PostListingsSlugFlagResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postListingsSlugReviews - Create a review for a listing
   *
   * Create a review for a listing
  **/
  postListingsSlugReviews(
    req: operations.PostListingsSlugReviewsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostListingsSlugReviewsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostListingsSlugReviewsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/listings/{slug}/reviews", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "post",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostListingsSlugReviewsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postMyAddresses - Create a new address in your address book
   *
   * Create a new address in your address book
  **/
  postMyAddresses(
    req: operations.PostMyAddressesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostMyAddressesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostMyAddressesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/my/addresses";
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "post",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostMyAddressesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postMyConversations - Start a conversation
   *
   * Start a conversation
  **/
  postMyConversations(
    req: operations.PostMyConversationsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostMyConversationsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostMyConversationsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/my/conversations";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
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
        const res: operations.PostMyConversationsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postMyConversationsConversationIdMessages - Send a message
   *
   * Send a message
  **/
  postMyConversationsConversationIdMessages(
    req: operations.PostMyConversationsConversationIdMessagesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostMyConversationsConversationIdMessagesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostMyConversationsConversationIdMessagesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/my/conversations/{conversation_id}/messages", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
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
        const res: operations.PostMyConversationsConversationIdMessagesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  postMyCuratedSetProductProductId(
    req: operations.PostMyCuratedSetProductProductIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostMyCuratedSetProductProductIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostMyCuratedSetProductProductIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/my/curated_set/product/{product_id}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "post",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostMyCuratedSetProductProductIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postMyFollowsArticles - Set a user's ArticleCategoryFollows
   *
   * Set a user's ArticleCategoryFollows
  **/
  postMyFollowsArticles(
    req: operations.PostMyFollowsArticlesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostMyFollowsArticlesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostMyFollowsArticlesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/my/follows/articles";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
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
        const res: operations.PostMyFollowsArticlesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postMyFollowsBrandsSlug - Follow a brand
   *
   * Follow a brand
  **/
  postMyFollowsBrandsSlug(
    req: operations.PostMyFollowsBrandsSlugRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostMyFollowsBrandsSlugResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostMyFollowsBrandsSlugRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/my/follows/brands/{slug}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "post",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostMyFollowsBrandsSlugResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postMyFollowsCategoriesCategorySubcategory - Follow a subcategory
   *
   * Follow a subcategory
  **/
  postMyFollowsCategoriesCategorySubcategory(
    req: operations.PostMyFollowsCategoriesCategorySubcategoryRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostMyFollowsCategoriesCategorySubcategoryResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostMyFollowsCategoriesCategorySubcategoryRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/my/follows/categories/{category}/{subcategory}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "post",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostMyFollowsCategoriesCategorySubcategoryResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postMyFollowsCategoriesIdentifier - Follow a category
   *
   * Follow a category
  **/
  postMyFollowsCategoriesIdentifier(
    req: operations.PostMyFollowsCategoriesIdentifierRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostMyFollowsCategoriesIdentifierResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostMyFollowsCategoriesIdentifierRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/my/follows/categories/{identifier}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "post",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostMyFollowsCategoriesIdentifierResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postMyFollowsCategoriesUuid - Follow a category
   *
   * Follow a category
  **/
  postMyFollowsCategoriesUuid(
    req: operations.PostMyFollowsCategoriesUuidRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostMyFollowsCategoriesUuidResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostMyFollowsCategoriesUuidRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/my/follows/categories/{uuid}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "post",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostMyFollowsCategoriesUuidResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postMyFollowsCollectionsSlug - Follow a collection
   *
   * Follow a collection
  **/
  postMyFollowsCollectionsSlug(
    req: operations.PostMyFollowsCollectionsSlugRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostMyFollowsCollectionsSlugResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostMyFollowsCollectionsSlugRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/my/follows/collections/{slug}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "post",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostMyFollowsCollectionsSlugResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  postMyFollowsFollowIdAlert(
    req: operations.PostMyFollowsFollowIdAlertRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostMyFollowsFollowIdAlertResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostMyFollowsFollowIdAlertRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/my/follows/{follow_id}/alert", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "post",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostMyFollowsFollowIdAlertResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postMyFollowsHandpickedSlug - Follow a handpicked collection
   *
   * Follow a handpicked collection
  **/
  postMyFollowsHandpickedSlug(
    req: operations.PostMyFollowsHandpickedSlugRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostMyFollowsHandpickedSlugResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostMyFollowsHandpickedSlugRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/my/follows/handpicked/{slug}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "post",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostMyFollowsHandpickedSlugResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postMyFollowsSearch - Follow a search
   *
   * Follow a search
  **/
  postMyFollowsSearch(
    req: operations.PostMyFollowsSearchRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostMyFollowsSearchResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostMyFollowsSearchRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/my/follows/search";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
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
        const res: operations.PostMyFollowsSearchResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postMyFollowsShopsSlug - Follow a shop
   *
   * Follow a shop
  **/
  postMyFollowsShopsSlug(
    req: operations.PostMyFollowsShopsSlugRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostMyFollowsShopsSlugResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostMyFollowsShopsSlugRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/my/follows/shops/{slug}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "post",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostMyFollowsShopsSlugResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postMyNegotiationsIdAccept - Accept an offer
   *
   * Accept an offer
  **/
  postMyNegotiationsIdAccept(
    req: operations.PostMyNegotiationsIdAcceptRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostMyNegotiationsIdAcceptResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostMyNegotiationsIdAcceptRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/my/negotiations/{id}/accept", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
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
        const res: operations.PostMyNegotiationsIdAcceptResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postMyNegotiationsIdCounter - Counter an offer
   *
   * Counter an offer
  **/
  postMyNegotiationsIdCounter(
    req: operations.PostMyNegotiationsIdCounterRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostMyNegotiationsIdCounterResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostMyNegotiationsIdCounterRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/my/negotiations/{id}/counter", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
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
        const res: operations.PostMyNegotiationsIdCounterResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postMyNegotiationsIdDecline - Decline an offer
   *
   * Decline an offer
  **/
  postMyNegotiationsIdDecline(
    req: operations.PostMyNegotiationsIdDeclineRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostMyNegotiationsIdDeclineResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostMyNegotiationsIdDeclineRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/my/negotiations/{id}/decline", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "post",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostMyNegotiationsIdDeclineResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postMyOrdersBuyingIdMarkReceived - Marks an order as received by the buyer
   *
   * Marks an order as received by the buyer
  **/
  postMyOrdersBuyingIdMarkReceived(
    req: operations.PostMyOrdersBuyingIdMarkReceivedRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostMyOrdersBuyingIdMarkReceivedResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostMyOrdersBuyingIdMarkReceivedRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/my/orders/buying/{id}/mark_received", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "post",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostMyOrdersBuyingIdMarkReceivedResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postMyOrdersSellingIdMarkPickedUp - Marks an order as picked up
   *
   * Marks an order as picked up
  **/
  postMyOrdersSellingIdMarkPickedUp(
    req: operations.PostMyOrdersSellingIdMarkPickedUpRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostMyOrdersSellingIdMarkPickedUpResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostMyOrdersSellingIdMarkPickedUpRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/my/orders/selling/{id}/mark_picked_up", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
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
        const res: operations.PostMyOrdersSellingIdMarkPickedUpResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postMyOrdersSellingIdShip - Marks an order as shipped
   *
   * Marks an order as shipped
  **/
  postMyOrdersSellingIdShip(
    req: operations.PostMyOrdersSellingIdShipRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostMyOrdersSellingIdShipResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostMyOrdersSellingIdShipRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/my/orders/selling/{id}/ship", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
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
        const res: operations.PostMyOrdersSellingIdShipResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postMyOrdersSellingOrderIdRefundRequests - Initiate a refund for a sold order
   *
   * Initiate a refund for a sold order
  **/
  postMyOrdersSellingOrderIdRefundRequests(
    req: operations.PostMyOrdersSellingOrderIdRefundRequestsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostMyOrdersSellingOrderIdRefundRequestsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostMyOrdersSellingOrderIdRefundRequestsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/my/orders/selling/{order_id}/refund_requests", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "post",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostMyOrdersSellingOrderIdRefundRequestsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postOrdersOrderIdFeedbackBuyer - Add feedback about an order's buyer
   *
   * Add feedback about an order's buyer
  **/
  postOrdersOrderIdFeedbackBuyer(
    req: operations.PostOrdersOrderIdFeedbackBuyerRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostOrdersOrderIdFeedbackBuyerResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostOrdersOrderIdFeedbackBuyerRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/orders/{order_id}/feedback/buyer", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "post",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostOrdersOrderIdFeedbackBuyerResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postOrdersOrderIdFeedbackSeller - Add feedback about an order's seller
   *
   * Add feedback about an order's seller
  **/
  postOrdersOrderIdFeedbackSeller(
    req: operations.PostOrdersOrderIdFeedbackSellerRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostOrdersOrderIdFeedbackSellerResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostOrdersOrderIdFeedbackSellerRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/orders/{order_id}/feedback/seller", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "post",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostOrdersOrderIdFeedbackSellerResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postProductsSlugReviews - Create a review for a product
   *
   * Create a review for a product
  **/
  postProductsSlugReviews(
    req: operations.PostProductsSlugReviewsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostProductsSlugReviewsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostProductsSlugReviewsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/products/{slug}/reviews", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "post",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostProductsSlugReviewsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postSalesSaleIdListings - Add listings to a sale
   *
   * Add listings to a sale
  **/
  postSalesSaleIdListings(
    req: operations.PostSalesSaleIdListingsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostSalesSaleIdListingsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostSalesSaleIdListingsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/sales/{sale_id}/listings", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "post",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostSalesSaleIdListingsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postShopVacation - Enable vacation mode. All listings will be unavailable until vacation mode is turned off.
   *
   * Enable vacation mode. All listings will be unavailable until vacation mode is turned off.
  **/
  postShopVacation(
    req: operations.PostShopVacationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostShopVacationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostShopVacationRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/shop/vacation";
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "post",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostShopVacationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postWebhooksRegistrations - Register a webhook
   *
   * Register a webhook
  **/
  postWebhooksRegistrations(
    req: operations.PostWebhooksRegistrationsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostWebhooksRegistrationsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostWebhooksRegistrationsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/webhooks/registrations";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...reqBodyHeaders, ...config?.headers};
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
        const res: operations.PostWebhooksRegistrationsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * putListingsSlug - Update a listing
   *
   * Update a listing
  **/
  putListingsSlug(
    req: operations.PutListingsSlugRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutListingsSlugResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutListingsSlugRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/listings/{slug}", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    const headers = {...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
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
        const res: operations.PutListingsSlugResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * putMyAccount - Update account details
   *
   * Update account details
  **/
  putMyAccount(
    req: operations.PutMyAccountRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutMyAccountResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutMyAccountRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/my/account";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    const headers = {...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
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
        const res: operations.PutMyAccountResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * putMyAddressesAddressId - Update an existing address in your address book
   *
   * Update an existing address in your address book
  **/
  putMyAddressesAddressId(
    req: operations.PutMyAddressesAddressIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutMyAddressesAddressIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutMyAddressesAddressIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/my/addresses/{address_id}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "put",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PutMyAddressesAddressIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * putMyConversationsId - Mark a conversation read/unread
   *
   * Mark a conversation read/unread
  **/
  putMyConversationsId(
    req: operations.PutMyConversationsIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutMyConversationsIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutMyConversationsIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/my/conversations/{id}", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    const headers = {...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
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
        const res: operations.PutMyConversationsIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * putMyListingsSlugStateEnd - End a listing
   *
   * End a listing
  **/
  putMyListingsSlugStateEnd(
    req: operations.PutMyListingsSlugStateEndRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutMyListingsSlugStateEndResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutMyListingsSlugStateEndRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/my/listings/{slug}/state/end", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    const headers = {...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
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
        const res: operations.PutMyListingsSlugStateEndResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * putMyRefundRequestsSellingId - Update a refund request for a sold order
   *
   * Update a refund request for a sold order
  **/
  putMyRefundRequestsSellingId(
    req: operations.PutMyRefundRequestsSellingIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutMyRefundRequestsSellingIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutMyRefundRequestsSellingIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/my/refund_requests/selling/{id}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "put",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PutMyRefundRequestsSellingIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * putMyWishlistId - Add a listing to your wishlist
   *
   * Add a listing to your wishlist
  **/
  putMyWishlistId(
    req: operations.PutMyWishlistIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutMyWishlistIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutMyWishlistIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/my/wishlist/{id}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "put",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PutMyWishlistIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * putProductsReviewsId - Update a review
   *
   * Update a review
  **/
  putProductsReviewsId(
    req: operations.PutProductsReviewsIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutProductsReviewsIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutProductsReviewsIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/products/reviews/{id}", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    const headers = {...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
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
        const res: operations.PutProductsReviewsIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * putShop - Update your shop profile
   *
   * Update your shop profile
  **/
  putShop(
    req: operations.PutShopRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutShopResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutShopRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/shop";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    const headers = {...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
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
        const res: operations.PutShopResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * putWantsId - Mark an item wanted. Returns 200 on success or 422 on failure.
   *
   * Mark an item wanted. Returns 200 on success or 422 on failure.
  **/
  putWantsId(
    req: operations.PutWantsIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutWantsIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutWantsIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/wants/{id}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "put",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PutWantsIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
