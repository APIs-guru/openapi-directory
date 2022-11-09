import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { MatchContentType } from "../internal/utils/contenttype";
import * as operations from "./models/operations";
import { ParamsSerializerOptions } from "axios";
import { GetQueryParamSerializer } from "../internal/utils/queryparams";
import { SerializeRequestBody } from "../internal/utils/requestbody";
import FormData from 'form-data';
import { CreateSecurityClient } from "../internal/utils/security";
import * as utils from "../internal/utils/utils";

type OptsFunc = (sdk: SDK) => void;

const Servers = [
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
    sdk.serverURL = serverURL;
  };
}

export function WithClient(client: AxiosInstance): OptsFunc {
  return (sdk: SDK) => {
    sdk.defaultClient = client;
  };
}

// SDK Documentation: https://dev.reverb.com/
export class SDK {
  defaultClient?: AxiosInstance;
  securityClient?: AxiosInstance;
  security?: any;
  serverURL: string;

  constructor(...opts: OptsFunc[]) {
    opts.forEach((o) => o(this));
    if (this.serverURL == "") {
      this.serverURL = Servers[0];
    }

    if (!this.defaultClient) {
      this.defaultClient = axios.create({ baseURL: this.serverURL });
    }

    if (!this.securityClient) {
      if (this.security) {
        this.securityClient = CreateSecurityClient(
          this.defaultClient,
          this.security
        );
      } else {
        this.securityClient = this.defaultClient;
      }
    }
  }
  
  // DeleteListingsListingIdImagesImageId - Delete an image from a listing
  /** 
   * Delete an image from a listing
  **/
  DeleteListingsListingIdImagesImageId(
    req: operations.DeleteListingsListingIdImagesImageIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteListingsListingIdImagesImageIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteListingsListingIdImagesImageIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/listings/{listing_id}/images/{image_id}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteListingsListingIdImagesImageIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteListingsSlug - Delete a draft listing. Cannot be used on non-drafts.
  /** 
   * Delete a draft listing. Cannot be used on non-drafts.
  **/
  DeleteListingsSlug(
    req: operations.DeleteListingsSlugRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteListingsSlugResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteListingsSlugRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/listings/{slug}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteListingsSlugResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteMyAddressesAddressId - Delete an existing address in your address book
  /** 
   * Delete an existing address in your address book
  **/
  DeleteMyAddressesAddressId(
    req: operations.DeleteMyAddressesAddressIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteMyAddressesAddressIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteMyAddressesAddressIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/my/addresses/{address_id}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteMyAddressesAddressIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  DeleteMyCuratedSetProductProductId(
    req: operations.DeleteMyCuratedSetProductProductIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteMyCuratedSetProductProductIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteMyCuratedSetProductProductIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/my/curated_set/product/{product_id}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteMyCuratedSetProductProductIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteMyFollowsBrandsSlug - Unfollow a brand
  /** 
   * Unfollow a brand
  **/
  DeleteMyFollowsBrandsSlug(
    req: operations.DeleteMyFollowsBrandsSlugRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteMyFollowsBrandsSlugResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteMyFollowsBrandsSlugRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/my/follows/brands/{slug}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteMyFollowsBrandsSlugResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteMyFollowsCategoriesCategorySubcategory - Unfollow a subcategory
  /** 
   * Unfollow a subcategory
  **/
  DeleteMyFollowsCategoriesCategorySubcategory(
    req: operations.DeleteMyFollowsCategoriesCategorySubcategoryRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteMyFollowsCategoriesCategorySubcategoryResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteMyFollowsCategoriesCategorySubcategoryRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/my/follows/categories/{category}/{subcategory}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteMyFollowsCategoriesCategorySubcategoryResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteMyFollowsCategoriesIdentifier - Unfollow a category
  /** 
   * Unfollow a category
  **/
  DeleteMyFollowsCategoriesIdentifier(
    req: operations.DeleteMyFollowsCategoriesIdentifierRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteMyFollowsCategoriesIdentifierResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteMyFollowsCategoriesIdentifierRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/my/follows/categories/{identifier}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteMyFollowsCategoriesIdentifierResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteMyFollowsCollectionsSlug - Unfollow a collection
  /** 
   * Unfollow a collection
  **/
  DeleteMyFollowsCollectionsSlug(
    req: operations.DeleteMyFollowsCollectionsSlugRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteMyFollowsCollectionsSlugResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteMyFollowsCollectionsSlugRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/my/follows/collections/{slug}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteMyFollowsCollectionsSlugResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteMyFollowsFollowId - Delete a follow
  /** 
   * Delete a follow
  **/
  DeleteMyFollowsFollowId(
    req: operations.DeleteMyFollowsFollowIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteMyFollowsFollowIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteMyFollowsFollowIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/my/follows/{follow_id}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteMyFollowsFollowIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  DeleteMyFollowsFollowIdAlert(
    req: operations.DeleteMyFollowsFollowIdAlertRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteMyFollowsFollowIdAlertResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteMyFollowsFollowIdAlertRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/my/follows/{follow_id}/alert", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteMyFollowsFollowIdAlertResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteMyFollowsHandpickedSlug - Unfollow a handpicked collection
  /** 
   * Unfollow a handpicked collection
  **/
  DeleteMyFollowsHandpickedSlug(
    req: operations.DeleteMyFollowsHandpickedSlugRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteMyFollowsHandpickedSlugResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteMyFollowsHandpickedSlugRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/my/follows/handpicked/{slug}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteMyFollowsHandpickedSlugResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteMyFollowsShopsSlug - Unfollow a shop
  /** 
   * Unfollow a shop
  **/
  DeleteMyFollowsShopsSlug(
    req: operations.DeleteMyFollowsShopsSlugRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteMyFollowsShopsSlugResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteMyFollowsShopsSlugRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/my/follows/shops/{slug}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteMyFollowsShopsSlugResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteMyWishlistId - Remove a listing from your wishlist
  /** 
   * Remove a listing from your wishlist
  **/
  DeleteMyWishlistId(
    req: operations.DeleteMyWishlistIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteMyWishlistIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteMyWishlistIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/my/wishlist/{id}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteMyWishlistIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteSalesSaleIdListings - Remove a listing from a sale
  /** 
   * Remove a listing from a sale
  **/
  DeleteSalesSaleIdListings(
    req: operations.DeleteSalesSaleIdListingsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteSalesSaleIdListingsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteSalesSaleIdListingsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/sales/{sale_id}/listings", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteSalesSaleIdListingsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteShopVacation - Disable vacation mode. All listings will be re-enabled.
  /** 
   * Disable vacation mode. All listings will be re-enabled.
  **/
  DeleteShopVacation(
    req: operations.DeleteShopVacationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteShopVacationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteShopVacationRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/shop/vacation";
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteShopVacationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteWantsId - Unmark an item wanted.
  /** 
   * Unmark an item wanted.
  **/
  DeleteWantsId(
    req: operations.DeleteWantsIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteWantsIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteWantsIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/wants/{id}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteWantsIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteWebhooksRegistrationsId - Remove a webhook
  /** 
   * Remove a webhook
  **/
  DeleteWebhooksRegistrationsId(
    req: operations.DeleteWebhooksRegistrationsIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteWebhooksRegistrationsIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteWebhooksRegistrationsIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/webhooks/registrations/{id}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteWebhooksRegistrationsIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  GetArticles(
    req: operations.GetArticlesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetArticlesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetArticlesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/articles";
    
    const client: AxiosInstance = this.defaultClient!;
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetArticlesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetArticlesCategories - List of all article categories
  /** 
   * List of all article categories
  **/
  GetArticlesCategories(
    
    config?: AxiosRequestConfig
  ): Promise<operations.GetArticlesCategoriesResponse> {
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/articles/categories";
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetArticlesCategoriesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetCategories - List of supported product categories
  /** 
   * List of supported product categories
  **/
  GetCategories(
    
    config?: AxiosRequestConfig
  ): Promise<operations.GetCategoriesResponse> {
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/categories";
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetCategoriesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  GetCategoriesFlat(
    
    config?: AxiosRequestConfig
  ): Promise<operations.GetCategoriesFlatResponse> {
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/categories/flat";
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetCategoriesFlatResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetCategoriesProductTypeCategory - Get subcategory details
  /** 
   * Get subcategory details
  **/
  GetCategoriesProductTypeCategory(
    req: operations.GetCategoriesProductTypeCategoryRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetCategoriesProductTypeCategoryResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetCategoriesProductTypeCategoryRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/categories/{product_type}/{category}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetCategoriesProductTypeCategoryResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetCategoriesTaxonomy - Full taxonomy tree of categories including middle categories
  /** 
   * Full taxonomy tree of categories including middle categories
  **/
  GetCategoriesTaxonomy(
    
    config?: AxiosRequestConfig
  ): Promise<operations.GetCategoriesTaxonomyResponse> {
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/categories/taxonomy";
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetCategoriesTaxonomyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetCategoriesUuid - Get category details
  /** 
   * Get category details
  **/
  GetCategoriesUuid(
    req: operations.GetCategoriesUuidRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetCategoriesUuidResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetCategoriesUuidRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/categories/{uuid}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetCategoriesUuidResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetComparisonShoppingPages - Returns a set of comparison shopping pages based on the current params
  /** 
   * Returns a set of comparison shopping pages based on the current params
  **/
  GetComparisonShoppingPages(
    
    config?: AxiosRequestConfig
  ): Promise<operations.GetComparisonShoppingPagesResponse> {
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/comparison_shopping_pages";
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetComparisonShoppingPagesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetComparisonShoppingPagesFind - Show comparison shopping page
  /** 
   * Show comparison shopping page
  **/
  GetComparisonShoppingPagesFind(
    req: operations.GetComparisonShoppingPagesFindRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetComparisonShoppingPagesFindResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetComparisonShoppingPagesFindRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/comparison_shopping_pages/find";
    
    const client: AxiosInstance = this.defaultClient!;
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetComparisonShoppingPagesFindResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  GetComparisonShoppingPagesId(
    req: operations.GetComparisonShoppingPagesIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetComparisonShoppingPagesIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetComparisonShoppingPagesIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/comparison_shopping_pages/{id}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetComparisonShoppingPagesIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetComparisonShoppingPagesIdListings - Return new or used listings for a comparison shopping page
  /** 
   * Return new or used listings for a comparison shopping page
  **/
  GetComparisonShoppingPagesIdListings(
    req: operations.GetComparisonShoppingPagesIdListingsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetComparisonShoppingPagesIdListingsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetComparisonShoppingPagesIdListingsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/comparison_shopping_pages/{id}/listings", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetComparisonShoppingPagesIdListingsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetComparisonShoppingPagesIdReviews - View reviews of a comparison shopping page
  /** 
   * View reviews of a comparison shopping page
  **/
  GetComparisonShoppingPagesIdReviews(
    req: operations.GetComparisonShoppingPagesIdReviewsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetComparisonShoppingPagesIdReviewsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetComparisonShoppingPagesIdReviewsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/comparison_shopping_pages/{id}/reviews", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetComparisonShoppingPagesIdReviewsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetCountries - Retrieve a list of country codes with corresponding subregions
  /** 
   * Retrieve a list of country codes with corresponding subregions
  **/
  GetCountries(
    
    config?: AxiosRequestConfig
  ): Promise<operations.GetCountriesResponse> {
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/countries";
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetCountriesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetCsps - Returns a set of comparison shopping pages based on the current params
  /** 
   * Returns a set of comparison shopping pages based on the current params
  **/
  GetCsps(
    
    config?: AxiosRequestConfig
  ): Promise<operations.GetCspsResponse> {
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/csps";
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetCspsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  GetCspsCategories(
    
    config?: AxiosRequestConfig
  ): Promise<operations.GetCspsCategoriesResponse> {
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/csps/categories";
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetCspsCategoriesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetCspsFind - Show comparison shopping page
  /** 
   * Show comparison shopping page
  **/
  GetCspsFind(
    req: operations.GetCspsFindRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetCspsFindResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetCspsFindRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/csps/find";
    
    const client: AxiosInstance = this.defaultClient!;
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetCspsFindResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  GetCspsId(
    req: operations.GetCspsIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetCspsIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetCspsIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/csps/{id}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetCspsIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  GetCuratedSetsSlug(
    req: operations.GetCuratedSetsSlugRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetCuratedSetsSlugResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetCuratedSetsSlugRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/curated_sets/{slug}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetCuratedSetsSlugResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetCurrenciesDisplay - List of supported display currencies for browsing listings
  /** 
   * List of supported display currencies for browsing listings
  **/
  GetCurrenciesDisplay(
    
    config?: AxiosRequestConfig
  ): Promise<operations.GetCurrenciesDisplayResponse> {
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/currencies/display";
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetCurrenciesDisplayResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetCurrenciesListing - List of supported listing currencies for shops
  /** 
   * List of supported listing currencies for shops
  **/
  GetCurrenciesListing(
    
    config?: AxiosRequestConfig
  ): Promise<operations.GetCurrenciesListingResponse> {
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/currencies/listing";
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetCurrenciesListingResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetFeedbackFeedbackId - Feedback details
  /** 
   * Feedback details
  **/
  GetFeedbackFeedbackId(
    req: operations.GetFeedbackFeedbackIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetFeedbackFeedbackIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetFeedbackFeedbackIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/feedback/{feedback_id}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetFeedbackFeedbackIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetHandpickedSlug - Get results from a handpicked collection
  /** 
   * Get results from a handpicked collection
  **/
  GetHandpickedSlug(
    req: operations.GetHandpickedSlugRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetHandpickedSlugResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetHandpickedSlugRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/handpicked/{slug}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetHandpickedSlugResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetListingConditions - List of supported product conditions
  /** 
   * List of supported product conditions
  **/
  GetListingConditions(
    
    config?: AxiosRequestConfig
  ): Promise<operations.GetListingConditionsResponse> {
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/listing_conditions";
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetListingConditionsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetListings - Default search of listings includes only used & handmade. Add a filter to view all listings or use the /listings/all endpoint.
  /** 
   * Default search of listings includes only used & handmade. Add a filter to view all listings or use the /listings/all endpoint.
  **/
  GetListings(
    req: operations.GetListingsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetListingsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetListingsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/listings";
    
    const client: AxiosInstance = this.defaultClient!;
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetListingsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetListingsAll - All listings including used, handmade, and brand new
  /** 
   * All listings including used, handmade, and brand new
  **/
  GetListingsAll(
    req: operations.GetListingsAllRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetListingsAllResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetListingsAllRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/listings/all";
    
    const client: AxiosInstance = this.defaultClient!;
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetListingsAllResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetListingsFacetsSellerLocation - Individual facets
  /** 
   * Individual facets
  **/
  GetListingsFacetsSellerLocation(
    
    config?: AxiosRequestConfig
  ): Promise<operations.GetListingsFacetsSellerLocationResponse> {
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/listings/facets/seller_location";
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetListingsFacetsSellerLocationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetListingsIdNegotiation - Returns the latest negotiation for the requesting user given a listing id
  /** 
   * Returns the latest negotiation for the requesting user given a listing id
  **/
  GetListingsIdNegotiation(
    req: operations.GetListingsIdNegotiationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetListingsIdNegotiationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetListingsIdNegotiationRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/listings/{id}/negotiation", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetListingsIdNegotiationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetListingsListingIdBump - View available bump tiers and stats for a listing
  /** 
   * View available bump tiers and stats for a listing
  **/
  GetListingsListingIdBump(
    req: operations.GetListingsListingIdBumpRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetListingsListingIdBumpResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetListingsListingIdBumpRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/listings/{listing_id}/bump", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetListingsListingIdBumpResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetListingsListingIdImages - View the images associated with a particular listing
  /** 
   * View the images associated with a particular listing
  **/
  GetListingsListingIdImages(
    req: operations.GetListingsListingIdImagesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetListingsListingIdImagesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetListingsListingIdImagesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/listings/{listing_id}/images", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetListingsListingIdImagesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetListingsListingIdSales - See all sales that include a listing.
  /** 
   * See all sales that include a listing.
  **/
  GetListingsListingIdSales(
    req: operations.GetListingsListingIdSalesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetListingsListingIdSalesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetListingsListingIdSalesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/listings/{listing_id}/sales", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetListingsListingIdSalesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetListingsSlug - Listing details
  /** 
   * Listing details
  **/
  GetListingsSlug(
    req: operations.GetListingsSlugRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetListingsSlugResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetListingsSlugRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/listings/{slug}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetListingsSlugResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetListingsSlugEdit - Edit listing.
  /** 
   * Edit listing.
  **/
  GetListingsSlugEdit(
    req: operations.GetListingsSlugEditRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetListingsSlugEditResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetListingsSlugEditRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/listings/{slug}/edit", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetListingsSlugEditResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetListingsSlugReviews - View reviews of a listing
  /** 
   * View reviews of a listing
  **/
  GetListingsSlugReviews(
    req: operations.GetListingsSlugReviewsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetListingsSlugReviewsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetListingsSlugReviewsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/listings/{slug}/reviews", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetListingsSlugReviewsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetListingsSlugSimilarListings - Listing details
  /** 
   * Listing details
  **/
  GetListingsSlugSimilarListings(
    req: operations.GetListingsSlugSimilarListingsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetListingsSlugSimilarListingsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetListingsSlugSimilarListingsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/listings/{slug}/similar_listings", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetListingsSlugSimilarListingsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetMyAccount - Get account details
  /** 
   * Get account details
  **/
  GetMyAccount(
    req: operations.GetMyAccountRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetMyAccountResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetMyAccountRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/my/account";
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetMyAccountResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetMyAddresses - See all addresses in your address book
  /** 
   * See all addresses in your address book
  **/
  GetMyAddresses(
    req: operations.GetMyAddressesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetMyAddressesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetMyAddressesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/my/addresses";
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetMyAddressesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetMyConversations - Get a list of your conversations
  /** 
   * Get a list of your conversations
  **/
  GetMyConversations(
    req: operations.GetMyConversationsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetMyConversationsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetMyConversationsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/my/conversations";
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetMyConversationsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetMyConversationsId - Display conversation details with messages in natural time order (oldest to newest)
  /** 
   * Display conversation details with messages in natural time order (oldest to newest)
  **/
  GetMyConversationsId(
    req: operations.GetMyConversationsIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetMyConversationsIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetMyConversationsIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/my/conversations/{id}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetMyConversationsIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetMyCounts - Get your actionable status counts
  /** 
   * Get your actionable status counts
  **/
  GetMyCounts(
    req: operations.GetMyCountsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetMyCountsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetMyCountsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/my/counts";
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetMyCountsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetMyFeed - Get listings from your feed
  /** 
   * Get listings from your feed
  **/
  GetMyFeed(
    req: operations.GetMyFeedRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetMyFeedResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetMyFeedRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/my/feed";
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetMyFeedResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetMyFeedCustomize - get your feed customization options
  /** 
   * get your feed customization options
  **/
  GetMyFeedCustomize(
    req: operations.GetMyFeedCustomizeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetMyFeedCustomizeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetMyFeedCustomizeRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/my/feed/customize";
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetMyFeedCustomizeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetMyFeedGrid - get your feed
  /** 
   * get your feed
  **/
  GetMyFeedGrid(
    req: operations.GetMyFeedGridRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetMyFeedGridResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetMyFeedGridRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/my/feed/grid";
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetMyFeedGridResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetMyFeedbackReceived - List of received feedback
  /** 
   * List of received feedback
  **/
  GetMyFeedbackReceived(
    req: operations.GetMyFeedbackReceivedRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetMyFeedbackReceivedResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetMyFeedbackReceivedRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/my/feedback/received";
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetMyFeedbackReceivedResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetMyFeedbackSent - List of sent feedback
  /** 
   * List of sent feedback
  **/
  GetMyFeedbackSent(
    req: operations.GetMyFeedbackSentRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetMyFeedbackSentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetMyFeedbackSentRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/my/feedback/sent";
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetMyFeedbackSentResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetMyFollows - See what the user is following
  /** 
   * See what the user is following
  **/
  GetMyFollows(
    req: operations.GetMyFollowsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetMyFollowsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetMyFollowsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/my/follows";
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetMyFollowsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetMyFollowsArticles - Returns a user's ArticleCategoryFollows
  /** 
   * Returns a user's ArticleCategoryFollows
  **/
  GetMyFollowsArticles(
    req: operations.GetMyFollowsArticlesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetMyFollowsArticlesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetMyFollowsArticlesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/my/follows/articles";
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetMyFollowsArticlesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetMyFollowsBrandsSlug - Follow status for a brand
  /** 
   * Follow status for a brand
  **/
  GetMyFollowsBrandsSlug(
    req: operations.GetMyFollowsBrandsSlugRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetMyFollowsBrandsSlugResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetMyFollowsBrandsSlugRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/my/follows/brands/{slug}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetMyFollowsBrandsSlugResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetMyFollowsCategoriesCategorySubcategory - Follow status for a subcategory
  /** 
   * Follow status for a subcategory
  **/
  GetMyFollowsCategoriesCategorySubcategory(
    req: operations.GetMyFollowsCategoriesCategorySubcategoryRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetMyFollowsCategoriesCategorySubcategoryResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetMyFollowsCategoriesCategorySubcategoryRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/my/follows/categories/{category}/{subcategory}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetMyFollowsCategoriesCategorySubcategoryResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetMyFollowsCategoriesIdentifier - Follow status for a category
  /** 
   * Follow status for a category
  **/
  GetMyFollowsCategoriesIdentifier(
    req: operations.GetMyFollowsCategoriesIdentifierRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetMyFollowsCategoriesIdentifierResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetMyFollowsCategoriesIdentifierRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/my/follows/categories/{identifier}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetMyFollowsCategoriesIdentifierResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetMyFollowsCollectionsSlug - Follow status for a collection
  /** 
   * Follow status for a collection
  **/
  GetMyFollowsCollectionsSlug(
    req: operations.GetMyFollowsCollectionsSlugRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetMyFollowsCollectionsSlugResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetMyFollowsCollectionsSlugRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/my/follows/collections/{slug}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetMyFollowsCollectionsSlugResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetMyFollowsHandpickedSlug - Follow status for a handpicked collection
  /** 
   * Follow status for a handpicked collection
  **/
  GetMyFollowsHandpickedSlug(
    req: operations.GetMyFollowsHandpickedSlugRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetMyFollowsHandpickedSlugResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetMyFollowsHandpickedSlugRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/my/follows/handpicked/{slug}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetMyFollowsHandpickedSlugResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetMyFollowsSearch - Follow status for a search
  /** 
   * Follow status for a search
  **/
  GetMyFollowsSearch(
    req: operations.GetMyFollowsSearchRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetMyFollowsSearchResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetMyFollowsSearchRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/my/follows/search";
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetMyFollowsSearchResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetMyFollowsShopsSlug - Follow status for a shop
  /** 
   * Follow status for a shop
  **/
  GetMyFollowsShopsSlug(
    req: operations.GetMyFollowsShopsSlugRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetMyFollowsShopsSlugResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetMyFollowsShopsSlugRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/my/follows/shops/{slug}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetMyFollowsShopsSlugResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetMyListings - Retrieve a list of live listings for the seller. To search all listings specify state=all
  /** 
   * Retrieve a list of live listings for the seller. To search all listings specify state=all
  **/
  GetMyListings(
    req: operations.GetMyListingsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetMyListingsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetMyListingsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/my/listings";
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetMyListingsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetMyListingsDrafts - Retrieve a list your draft listings
  /** 
   * Retrieve a list your draft listings
  **/
  GetMyListingsDrafts(
    req: operations.GetMyListingsDraftsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetMyListingsDraftsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetMyListingsDraftsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/my/listings/drafts";
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetMyListingsDraftsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetMyListingsNegotiations - Get a list of active negotiations as a seller
  /** 
   * Get a list of active negotiations as a seller
  **/
  GetMyListingsNegotiations(
    req: operations.GetMyListingsNegotiationsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetMyListingsNegotiationsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetMyListingsNegotiationsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/my/listings/negotiations";
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetMyListingsNegotiationsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetMyLists - Get a list of your lists (wishlist, watch list, etc)
  /** 
   * Get a list of your lists (wishlist, watch list, etc)
  **/
  GetMyLists(
    req: operations.GetMyListsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetMyListsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetMyListsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/my/lists";
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetMyListsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetMyNegotiationsBuying - Get a list of active negotiations as a buyer
  /** 
   * Get a list of active negotiations as a buyer
  **/
  GetMyNegotiationsBuying(
    req: operations.GetMyNegotiationsBuyingRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetMyNegotiationsBuyingResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetMyNegotiationsBuyingRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/my/negotiations/buying";
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetMyNegotiationsBuyingResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetMyNegotiationsId - Get offer details
  /** 
   * Get offer details
  **/
  GetMyNegotiationsId(
    req: operations.GetMyNegotiationsIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetMyNegotiationsIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetMyNegotiationsIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/my/negotiations/{id}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetMyNegotiationsIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetMyOrdersAwaitingFeedback - List of orders that need feedback
  /** 
   * List of orders that need feedback
  **/
  GetMyOrdersAwaitingFeedback(
    req: operations.GetMyOrdersAwaitingFeedbackRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetMyOrdersAwaitingFeedbackResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetMyOrdersAwaitingFeedbackRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/my/orders/awaiting_feedback";
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetMyOrdersAwaitingFeedbackResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetMyOrdersBuyingAll - Returns all orders, newest first.
  /** 
   * Returns all orders, newest first.
  **/
  GetMyOrdersBuyingAll(
    req: operations.GetMyOrdersBuyingAllRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetMyOrdersBuyingAllResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetMyOrdersBuyingAllRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/my/orders/buying/all";
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetMyOrdersBuyingAllResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  GetMyOrdersBuyingByUuidUuid(
    req: operations.GetMyOrdersBuyingByUuidUuidRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetMyOrdersBuyingByUuidUuidResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetMyOrdersBuyingByUuidUuidRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/my/orders/buying/by_uuid/{uuid}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetMyOrdersBuyingByUuidUuidResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetMyOrdersBuyingId - Returns order details for a buyer
  /** 
   * Returns order details for a buyer
  **/
  GetMyOrdersBuyingId(
    req: operations.GetMyOrdersBuyingIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetMyOrdersBuyingIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetMyOrdersBuyingIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/my/orders/buying/{id}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetMyOrdersBuyingIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetMyOrdersBuyingUnpaid - Returns unpaid orders, newest first.
  /** 
   * Returns unpaid orders, newest first.
  **/
  GetMyOrdersBuyingUnpaid(
    req: operations.GetMyOrdersBuyingUnpaidRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetMyOrdersBuyingUnpaidResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetMyOrdersBuyingUnpaidRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/my/orders/buying/unpaid";
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetMyOrdersBuyingUnpaidResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetMyOrdersSellingAll - Get all seller orders, newest first.
  /** 
   * Get all seller orders, newest first.
  **/
  GetMyOrdersSellingAll(
    req: operations.GetMyOrdersSellingAllRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetMyOrdersSellingAllResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetMyOrdersSellingAllRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/my/orders/selling/all";
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetMyOrdersSellingAllResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetMyOrdersSellingAwaitingShipment - Get unpaid seller orders, newest first.
  /** 
   * Get unpaid seller orders, newest first.
  **/
  GetMyOrdersSellingAwaitingShipment(
    req: operations.GetMyOrdersSellingAwaitingShipmentRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetMyOrdersSellingAwaitingShipmentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetMyOrdersSellingAwaitingShipmentRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/my/orders/selling/awaiting_shipment";
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetMyOrdersSellingAwaitingShipmentResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetMyOrdersSellingBuyerHistoryBuyerId - See previous orders from buyer
  /** 
   * See previous orders from buyer
  **/
  GetMyOrdersSellingBuyerHistoryBuyerId(
    req: operations.GetMyOrdersSellingBuyerHistoryBuyerIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetMyOrdersSellingBuyerHistoryBuyerIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetMyOrdersSellingBuyerHistoryBuyerIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/my/orders/selling/buyer_history/{buyer_id}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetMyOrdersSellingBuyerHistoryBuyerIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  GetMyOrdersSellingByUuidUuid(
    req: operations.GetMyOrdersSellingByUuidUuidRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetMyOrdersSellingByUuidUuidResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetMyOrdersSellingByUuidUuidRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/my/orders/selling/by_uuid/{uuid}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetMyOrdersSellingByUuidUuidResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetMyOrdersSellingId - Returns order details for a seller
  /** 
   * Returns order details for a seller
  **/
  GetMyOrdersSellingId(
    req: operations.GetMyOrdersSellingIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetMyOrdersSellingIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetMyOrdersSellingIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/my/orders/selling/{id}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetMyOrdersSellingIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetMyOrdersSellingUnpaid - Get unpaid seller orders, newest first.
  /** 
   * Get unpaid seller orders, newest first.
  **/
  GetMyOrdersSellingUnpaid(
    req: operations.GetMyOrdersSellingUnpaidRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetMyOrdersSellingUnpaidResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetMyOrdersSellingUnpaidRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/my/orders/selling/unpaid";
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetMyOrdersSellingUnpaidResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetMyPaymentsSelling - Get payments
  /** 
   * Get payments
  **/
  GetMyPaymentsSelling(
    req: operations.GetMyPaymentsSellingRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetMyPaymentsSellingResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetMyPaymentsSellingRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/my/payments/selling";
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetMyPaymentsSellingResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetMyPaymentsSellingId - Get payment
  /** 
   * Get payment
  **/
  GetMyPaymentsSellingId(
    req: operations.GetMyPaymentsSellingIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetMyPaymentsSellingIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetMyPaymentsSellingIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/my/payments/selling/{id}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetMyPaymentsSellingIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetMyPayouts - Get a list of payouts
  /** 
   * Get a list of payouts
  **/
  GetMyPayouts(
    req: operations.GetMyPayoutsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetMyPayoutsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetMyPayoutsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/my/payouts";
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetMyPayoutsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetMyPayoutsIdLineItems - Read the line items of a payout
  /** 
   * Read the line items of a payout
  **/
  GetMyPayoutsIdLineItems(
    req: operations.GetMyPayoutsIdLineItemsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetMyPayoutsIdLineItemsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetMyPayoutsIdLineItemsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/my/payouts/{id}/line_items", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetMyPayoutsIdLineItemsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetMyRefundRequestsSelling - Get a list of refund requests as a seller
  /** 
   * Get a list of refund requests as a seller
  **/
  GetMyRefundRequestsSelling(
    req: operations.GetMyRefundRequestsSellingRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetMyRefundRequestsSellingResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetMyRefundRequestsSellingRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/my/refund_requests/selling";
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetMyRefundRequestsSellingResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetMyViewedListings - Get a list of your recently viewed listings.
  /** 
   * Get a list of your recently viewed listings.
  **/
  GetMyViewedListings(
    req: operations.GetMyViewedListingsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetMyViewedListingsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetMyViewedListingsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/my/viewed_listings";
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetMyViewedListingsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetMyWishlist - Get a list of wishlisted items
  /** 
   * Get a list of wishlisted items
  **/
  GetMyWishlist(
    req: operations.GetMyWishlistRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetMyWishlistResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetMyWishlistRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/my/wishlist";
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetMyWishlistResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetOrdersOrderIdFeedbackBuyer - Feedback details for an order's buyer
  /** 
   * Feedback details for an order's buyer
  **/
  GetOrdersOrderIdFeedbackBuyer(
    req: operations.GetOrdersOrderIdFeedbackBuyerRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetOrdersOrderIdFeedbackBuyerResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetOrdersOrderIdFeedbackBuyerRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/orders/{order_id}/feedback/buyer", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetOrdersOrderIdFeedbackBuyerResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetOrdersOrderIdFeedbackSeller - Feedback details for an order's seller
  /** 
   * Feedback details for an order's seller
  **/
  GetOrdersOrderIdFeedbackSeller(
    req: operations.GetOrdersOrderIdFeedbackSellerRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetOrdersOrderIdFeedbackSellerResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetOrdersOrderIdFeedbackSellerRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/orders/{order_id}/feedback/seller", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetOrdersOrderIdFeedbackSellerResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetPaymentMethods - Get list of payment methods
  /** 
   * Get list of payment methods
  **/
  GetPaymentMethods(
    
    config?: AxiosRequestConfig
  ): Promise<operations.GetPaymentMethodsResponse> {
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/payment_methods";
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetPaymentMethodsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetPriceguideIdTransactionsSummary - Get a summary of transactions for a given price guide
  /** 
   * Get a summary of transactions for a given price guide
  **/
  GetPriceguideIdTransactionsSummary(
    req: operations.GetPriceguideIdTransactionsSummaryRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetPriceguideIdTransactionsSummaryResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetPriceguideIdTransactionsSummaryRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/priceguide/{id}/transactions/summary", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetPriceguideIdTransactionsSummaryResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetProductsReviewsId - View a review
  /** 
   * View a review
  **/
  GetProductsReviewsId(
    req: operations.GetProductsReviewsIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetProductsReviewsIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetProductsReviewsIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/products/reviews/{id}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetProductsReviewsIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetProductsSlugReviews - View reviews of a comparison shopping page
  /** 
   * View reviews of a comparison shopping page
  **/
  GetProductsSlugReviews(
    req: operations.GetProductsSlugReviewsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetProductsSlugReviewsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetProductsSlugReviewsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/products/{slug}/reviews", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetProductsSlugReviewsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetSalesReverb - View upcoming and live Reverb official sales.
  /** 
   * View upcoming and live Reverb official sales.
  **/
  GetSalesReverb(
    req: operations.GetSalesReverbRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSalesReverbResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSalesReverbRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/sales/reverb";
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetSalesReverbResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetSalesSeller - View your created sales.
  /** 
   * View your created sales.
  **/
  GetSalesSeller(
    req: operations.GetSalesSellerRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSalesSellerResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSalesSellerRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/sales/seller";
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetSalesSellerResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  GetSalesSlug(
    req: operations.GetSalesSlugRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSalesSlugResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSalesSlugRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/sales/{slug}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetSalesSlugResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetShippingProviders - List of supported shipping providers
  /** 
   * List of supported shipping providers
  **/
  GetShippingProviders(
    
    config?: AxiosRequestConfig
  ): Promise<operations.GetShippingProvidersResponse> {
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/shipping/providers";
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetShippingProvidersResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  GetShippingRegions(
    
    config?: AxiosRequestConfig
  ): Promise<operations.GetShippingRegionsResponse> {
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/shipping/regions";
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetShippingRegionsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetShop - Get your own shop details
  /** 
   * Get your own shop details
  **/
  GetShop(
    req: operations.GetShopRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetShopResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetShopRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/shop";
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetShopResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetShopListingConditions - List of supported product conditions
  /** 
   * List of supported product conditions
  **/
  GetShopListingConditions(
    req: operations.GetShopListingConditionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetShopListingConditionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetShopListingConditionsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/shop/listing_conditions";
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetShopListingConditionsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetShopPaymentMethods - Get accepted payment methods
  /** 
   * Get accepted payment methods
  **/
  GetShopPaymentMethods(
    req: operations.GetShopPaymentMethodsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetShopPaymentMethodsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetShopPaymentMethodsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/shop/payment_methods";
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetShopPaymentMethodsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetShopVacation - Returns shop vacation status
  /** 
   * Returns shop vacation status
  **/
  GetShopVacation(
    req: operations.GetShopVacationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetShopVacationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetShopVacationRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/shop/vacation";
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetShopVacationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetShopsIdStorefronts - Get storefront details on a shop.
  /** 
   * Get storefront details on a shop.
  **/
  GetShopsIdStorefronts(
    req: operations.GetShopsIdStorefrontsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetShopsIdStorefrontsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetShopsIdStorefrontsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/shops/{id}/storefronts", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetShopsIdStorefrontsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetShopsShopIdShippingProfiles - List of shipping profiles for your shop
  /** 
   * List of shipping profiles for your shop
  **/
  GetShopsShopIdShippingProfiles(
    req: operations.GetShopsShopIdShippingProfilesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetShopsShopIdShippingProfilesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetShopsShopIdShippingProfilesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/shops/{shop_id}/shipping_profiles", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetShopsShopIdShippingProfilesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetShopsSlug - Get details on a shop.
  /** 
   * Get details on a shop.
  **/
  GetShopsSlug(
    req: operations.GetShopsSlugRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetShopsSlugResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetShopsSlugRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/shops/{slug}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetShopsSlugResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetShopsSlugFeedback - Get seller's feedback
  /** 
   * Get seller's feedback
  **/
  GetShopsSlugFeedback(
    req: operations.GetShopsSlugFeedbackRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetShopsSlugFeedbackResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetShopsSlugFeedbackRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/shops/{slug}/feedback", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetShopsSlugFeedbackResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetShopsSlugFeedbackBuyer - Get seller's feedback as a buyer
  /** 
   * Get seller's feedback as a buyer
  **/
  GetShopsSlugFeedbackBuyer(
    req: operations.GetShopsSlugFeedbackBuyerRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetShopsSlugFeedbackBuyerResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetShopsSlugFeedbackBuyerRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/shops/{slug}/feedback/buyer", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetShopsSlugFeedbackBuyerResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetShopsSlugFeedbackSeller - Get seller's feedback as a seller
  /** 
   * Get seller's feedback as a seller
  **/
  GetShopsSlugFeedbackSeller(
    req: operations.GetShopsSlugFeedbackSellerRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetShopsSlugFeedbackSellerResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetShopsSlugFeedbackSellerRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/shops/{slug}/feedback/seller", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetShopsSlugFeedbackSellerResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetWants - A list of wanted items by the user
  /** 
   * A list of wanted items by the user
  **/
  GetWants(
    req: operations.GetWantsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetWantsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetWantsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/wants";
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetWantsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetWebhooksRegistrations - Get webhook registrations
  /** 
   * Get webhook registrations
  **/
  GetWebhooksRegistrations(
    
    config?: AxiosRequestConfig
  ): Promise<operations.GetWebhooksRegistrationsResponse> {
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/webhooks/registrations";
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetWebhooksRegistrationsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetWebhooksRegistrationsId - Get details of a webhook registration
  /** 
   * Get details of a webhook registration
  **/
  GetWebhooksRegistrationsId(
    req: operations.GetWebhooksRegistrationsIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetWebhooksRegistrationsIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetWebhooksRegistrationsIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/webhooks/registrations/{id}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetWebhooksRegistrationsIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostConversationsConversationIdOffer - Make an offer to the other participant in the conversation
  /** 
   * Make an offer to the other participant in the conversation
  **/
  PostConversationsConversationIdOffer(
    req: operations.PostConversationsConversationIdOfferRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostConversationsConversationIdOfferResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostConversationsConversationIdOfferRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/conversations/{conversation_id}/offer", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostConversationsConversationIdOfferResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostConversationsIdOffer - Make an offer to the other participant in the conversation
  /** 
   * Make an offer to the other participant in the conversation
  **/
  PostConversationsIdOffer(
    req: operations.PostConversationsIdOfferRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostConversationsIdOfferResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostConversationsIdOfferRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/conversations/{id}/offer", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostConversationsIdOfferResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostListings - Create a listing
  /** 
   * Create a listing
  **/
  PostListings(
    req: operations.PostListingsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostListingsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostListingsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/listings";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostListingsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostListingsIdOffer - Make an offer to the seller of a listing
  /** 
   * Make an offer to the seller of a listing
  **/
  PostListingsIdOffer(
    req: operations.PostListingsIdOfferRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostListingsIdOfferResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostListingsIdOfferRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/listings/{id}/offer", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostListingsIdOfferResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostListingsListingIdBumpBudgetType - Bump a listing
  /** 
   * Bump a listing
  **/
  PostListingsListingIdBumpBudgetType(
    req: operations.PostListingsListingIdBumpBudgetTypeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostListingsListingIdBumpBudgetTypeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostListingsListingIdBumpBudgetTypeRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/listings/{listing_id}/bump/{budget_type}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .post(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostListingsListingIdBumpBudgetTypeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostListingsListingIdConversations - Start a conversation with a seller
  /** 
   * Start a conversation with a seller
  **/
  PostListingsListingIdConversations(
    req: operations.PostListingsListingIdConversationsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostListingsListingIdConversationsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostListingsListingIdConversationsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/listings/{listing_id}/conversations", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostListingsListingIdConversationsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostListingsSlugFlag - Flag a listing for inappropriate content or fraud
  /** 
   * Flag a listing for inappropriate content or fraud
  **/
  PostListingsSlugFlag(
    req: operations.PostListingsSlugFlagRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostListingsSlugFlagResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostListingsSlugFlagRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/listings/{slug}/flag", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostListingsSlugFlagResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostListingsSlugReviews - Create a review for a listing
  /** 
   * Create a review for a listing
  **/
  PostListingsSlugReviews(
    req: operations.PostListingsSlugReviewsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostListingsSlugReviewsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostListingsSlugReviewsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/listings/{slug}/reviews", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .post(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostListingsSlugReviewsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostMyAddresses - Create a new address in your address book
  /** 
   * Create a new address in your address book
  **/
  PostMyAddresses(
    req: operations.PostMyAddressesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostMyAddressesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostMyAddressesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/my/addresses";
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .post(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostMyAddressesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostMyConversations - Start a conversation
  /** 
   * Start a conversation
  **/
  PostMyConversations(
    req: operations.PostMyConversationsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostMyConversationsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostMyConversationsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/my/conversations";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostMyConversationsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostMyConversationsConversationIdMessages - Send a message
  /** 
   * Send a message
  **/
  PostMyConversationsConversationIdMessages(
    req: operations.PostMyConversationsConversationIdMessagesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostMyConversationsConversationIdMessagesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostMyConversationsConversationIdMessagesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/my/conversations/{conversation_id}/messages", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostMyConversationsConversationIdMessagesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  PostMyCuratedSetProductProductId(
    req: operations.PostMyCuratedSetProductProductIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostMyCuratedSetProductProductIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostMyCuratedSetProductProductIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/my/curated_set/product/{product_id}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .post(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostMyCuratedSetProductProductIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostMyFollowsArticles - Set a user's ArticleCategoryFollows
  /** 
   * Set a user's ArticleCategoryFollows
  **/
  PostMyFollowsArticles(
    req: operations.PostMyFollowsArticlesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostMyFollowsArticlesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostMyFollowsArticlesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/my/follows/articles";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostMyFollowsArticlesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostMyFollowsBrandsSlug - Follow a brand
  /** 
   * Follow a brand
  **/
  PostMyFollowsBrandsSlug(
    req: operations.PostMyFollowsBrandsSlugRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostMyFollowsBrandsSlugResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostMyFollowsBrandsSlugRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/my/follows/brands/{slug}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .post(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostMyFollowsBrandsSlugResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostMyFollowsCategoriesCategorySubcategory - Follow a subcategory
  /** 
   * Follow a subcategory
  **/
  PostMyFollowsCategoriesCategorySubcategory(
    req: operations.PostMyFollowsCategoriesCategorySubcategoryRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostMyFollowsCategoriesCategorySubcategoryResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostMyFollowsCategoriesCategorySubcategoryRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/my/follows/categories/{category}/{subcategory}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .post(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostMyFollowsCategoriesCategorySubcategoryResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostMyFollowsCategoriesIdentifier - Follow a category
  /** 
   * Follow a category
  **/
  PostMyFollowsCategoriesIdentifier(
    req: operations.PostMyFollowsCategoriesIdentifierRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostMyFollowsCategoriesIdentifierResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostMyFollowsCategoriesIdentifierRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/my/follows/categories/{identifier}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .post(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostMyFollowsCategoriesIdentifierResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostMyFollowsCategoriesUuid - Follow a category
  /** 
   * Follow a category
  **/
  PostMyFollowsCategoriesUuid(
    req: operations.PostMyFollowsCategoriesUuidRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostMyFollowsCategoriesUuidResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostMyFollowsCategoriesUuidRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/my/follows/categories/{uuid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .post(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostMyFollowsCategoriesUuidResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostMyFollowsCollectionsSlug - Follow a collection
  /** 
   * Follow a collection
  **/
  PostMyFollowsCollectionsSlug(
    req: operations.PostMyFollowsCollectionsSlugRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostMyFollowsCollectionsSlugResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostMyFollowsCollectionsSlugRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/my/follows/collections/{slug}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .post(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostMyFollowsCollectionsSlugResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  PostMyFollowsFollowIdAlert(
    req: operations.PostMyFollowsFollowIdAlertRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostMyFollowsFollowIdAlertResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostMyFollowsFollowIdAlertRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/my/follows/{follow_id}/alert", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .post(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostMyFollowsFollowIdAlertResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostMyFollowsHandpickedSlug - Follow a handpicked collection
  /** 
   * Follow a handpicked collection
  **/
  PostMyFollowsHandpickedSlug(
    req: operations.PostMyFollowsHandpickedSlugRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostMyFollowsHandpickedSlugResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostMyFollowsHandpickedSlugRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/my/follows/handpicked/{slug}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .post(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostMyFollowsHandpickedSlugResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostMyFollowsSearch - Follow a search
  /** 
   * Follow a search
  **/
  PostMyFollowsSearch(
    req: operations.PostMyFollowsSearchRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostMyFollowsSearchResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostMyFollowsSearchRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/my/follows/search";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostMyFollowsSearchResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostMyFollowsShopsSlug - Follow a shop
  /** 
   * Follow a shop
  **/
  PostMyFollowsShopsSlug(
    req: operations.PostMyFollowsShopsSlugRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostMyFollowsShopsSlugResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostMyFollowsShopsSlugRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/my/follows/shops/{slug}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .post(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostMyFollowsShopsSlugResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostMyNegotiationsIdAccept - Accept an offer
  /** 
   * Accept an offer
  **/
  PostMyNegotiationsIdAccept(
    req: operations.PostMyNegotiationsIdAcceptRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostMyNegotiationsIdAcceptResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostMyNegotiationsIdAcceptRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/my/negotiations/{id}/accept", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostMyNegotiationsIdAcceptResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostMyNegotiationsIdCounter - Counter an offer
  /** 
   * Counter an offer
  **/
  PostMyNegotiationsIdCounter(
    req: operations.PostMyNegotiationsIdCounterRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostMyNegotiationsIdCounterResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostMyNegotiationsIdCounterRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/my/negotiations/{id}/counter", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostMyNegotiationsIdCounterResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostMyNegotiationsIdDecline - Decline an offer
  /** 
   * Decline an offer
  **/
  PostMyNegotiationsIdDecline(
    req: operations.PostMyNegotiationsIdDeclineRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostMyNegotiationsIdDeclineResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostMyNegotiationsIdDeclineRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/my/negotiations/{id}/decline", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .post(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostMyNegotiationsIdDeclineResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostMyOrdersBuyingIdMarkReceived - Marks an order as received by the buyer
  /** 
   * Marks an order as received by the buyer
  **/
  PostMyOrdersBuyingIdMarkReceived(
    req: operations.PostMyOrdersBuyingIdMarkReceivedRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostMyOrdersBuyingIdMarkReceivedResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostMyOrdersBuyingIdMarkReceivedRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/my/orders/buying/{id}/mark_received", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .post(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostMyOrdersBuyingIdMarkReceivedResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostMyOrdersSellingIdMarkPickedUp - Marks an order as picked up
  /** 
   * Marks an order as picked up
  **/
  PostMyOrdersSellingIdMarkPickedUp(
    req: operations.PostMyOrdersSellingIdMarkPickedUpRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostMyOrdersSellingIdMarkPickedUpResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostMyOrdersSellingIdMarkPickedUpRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/my/orders/selling/{id}/mark_picked_up", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostMyOrdersSellingIdMarkPickedUpResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostMyOrdersSellingIdShip - Marks an order as shipped
  /** 
   * Marks an order as shipped
  **/
  PostMyOrdersSellingIdShip(
    req: operations.PostMyOrdersSellingIdShipRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostMyOrdersSellingIdShipResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostMyOrdersSellingIdShipRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/my/orders/selling/{id}/ship", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostMyOrdersSellingIdShipResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostMyOrdersSellingOrderIdRefundRequests - Initiate a refund for a sold order
  /** 
   * Initiate a refund for a sold order
  **/
  PostMyOrdersSellingOrderIdRefundRequests(
    req: operations.PostMyOrdersSellingOrderIdRefundRequestsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostMyOrdersSellingOrderIdRefundRequestsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostMyOrdersSellingOrderIdRefundRequestsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/my/orders/selling/{order_id}/refund_requests", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .post(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostMyOrdersSellingOrderIdRefundRequestsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostOrdersOrderIdFeedbackBuyer - Add feedback about an order's buyer
  /** 
   * Add feedback about an order's buyer
  **/
  PostOrdersOrderIdFeedbackBuyer(
    req: operations.PostOrdersOrderIdFeedbackBuyerRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostOrdersOrderIdFeedbackBuyerResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostOrdersOrderIdFeedbackBuyerRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/orders/{order_id}/feedback/buyer", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .post(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostOrdersOrderIdFeedbackBuyerResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostOrdersOrderIdFeedbackSeller - Add feedback about an order's seller
  /** 
   * Add feedback about an order's seller
  **/
  PostOrdersOrderIdFeedbackSeller(
    req: operations.PostOrdersOrderIdFeedbackSellerRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostOrdersOrderIdFeedbackSellerResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostOrdersOrderIdFeedbackSellerRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/orders/{order_id}/feedback/seller", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .post(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostOrdersOrderIdFeedbackSellerResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostProductsSlugReviews - Create a review for a product
  /** 
   * Create a review for a product
  **/
  PostProductsSlugReviews(
    req: operations.PostProductsSlugReviewsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostProductsSlugReviewsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostProductsSlugReviewsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/products/{slug}/reviews", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .post(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostProductsSlugReviewsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostSalesSaleIdListings - Add listings to a sale
  /** 
   * Add listings to a sale
  **/
  PostSalesSaleIdListings(
    req: operations.PostSalesSaleIdListingsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostSalesSaleIdListingsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostSalesSaleIdListingsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/sales/{sale_id}/listings", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .post(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostSalesSaleIdListingsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostShopVacation - Enable vacation mode. All listings will be unavailable until vacation mode is turned off.
  /** 
   * Enable vacation mode. All listings will be unavailable until vacation mode is turned off.
  **/
  PostShopVacation(
    req: operations.PostShopVacationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostShopVacationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostShopVacationRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/shop/vacation";
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .post(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostShopVacationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostWebhooksRegistrations - Register a webhook
  /** 
   * Register a webhook
  **/
  PostWebhooksRegistrations(
    req: operations.PostWebhooksRegistrationsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostWebhooksRegistrationsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostWebhooksRegistrationsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/webhooks/registrations";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostWebhooksRegistrationsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PutListingsSlug - Update a listing
  /** 
   * Update a listing
  **/
  PutListingsSlug(
    req: operations.PutListingsSlugRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutListingsSlugResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutListingsSlugRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/listings/{slug}", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .put(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PutListingsSlugResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PutMyAccount - Update account details
  /** 
   * Update account details
  **/
  PutMyAccount(
    req: operations.PutMyAccountRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutMyAccountResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutMyAccountRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/my/account";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .put(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PutMyAccountResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PutMyAddressesAddressId - Update an existing address in your address book
  /** 
   * Update an existing address in your address book
  **/
  PutMyAddressesAddressId(
    req: operations.PutMyAddressesAddressIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutMyAddressesAddressIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutMyAddressesAddressIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/my/addresses/{address_id}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .put(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PutMyAddressesAddressIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PutMyConversationsId - Mark a conversation read/unread
  /** 
   * Mark a conversation read/unread
  **/
  PutMyConversationsId(
    req: operations.PutMyConversationsIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutMyConversationsIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutMyConversationsIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/my/conversations/{id}", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .put(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PutMyConversationsIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PutMyListingsSlugStateEnd - End a listing
  /** 
   * End a listing
  **/
  PutMyListingsSlugStateEnd(
    req: operations.PutMyListingsSlugStateEndRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutMyListingsSlugStateEndResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutMyListingsSlugStateEndRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/my/listings/{slug}/state/end", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .put(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PutMyListingsSlugStateEndResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PutMyRefundRequestsSellingId - Update a refund request for a sold order
  /** 
   * Update a refund request for a sold order
  **/
  PutMyRefundRequestsSellingId(
    req: operations.PutMyRefundRequestsSellingIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutMyRefundRequestsSellingIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutMyRefundRequestsSellingIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/my/refund_requests/selling/{id}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .put(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PutMyRefundRequestsSellingIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PutMyWishlistId - Add a listing to your wishlist
  /** 
   * Add a listing to your wishlist
  **/
  PutMyWishlistId(
    req: operations.PutMyWishlistIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutMyWishlistIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutMyWishlistIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/my/wishlist/{id}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .put(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PutMyWishlistIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PutProductsReviewsId - Update a review
  /** 
   * Update a review
  **/
  PutProductsReviewsId(
    req: operations.PutProductsReviewsIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutProductsReviewsIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutProductsReviewsIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/products/reviews/{id}", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .put(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PutProductsReviewsIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PutShop - Update your shop profile
  /** 
   * Update your shop profile
  **/
  PutShop(
    req: operations.PutShopRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutShopResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutShopRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/shop";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .put(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PutShopResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PutWantsId - Mark an item wanted. Returns 200 on success or 422 on failure.
  /** 
   * Mark an item wanted. Returns 200 on success or 422 on failure.
  **/
  PutWantsId(
    req: operations.PutWantsIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutWantsIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutWantsIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/wants/{id}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .put(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PutWantsIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
