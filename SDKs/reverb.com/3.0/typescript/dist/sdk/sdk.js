var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import axios from "axios";
import FormData from "form-data";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";
export var ServerList = [
    "https://api.reverb.com/api",
];
export function WithServerURL(serverURL, params) {
    return function (sdk) {
        if (params != null) {
            serverURL = utils.ReplaceParameters(serverURL, params);
        }
        sdk._serverURL = serverURL;
    };
}
export function WithClient(client) {
    return function (sdk) {
        sdk._defaultClient = client;
    };
}
/* SDK Documentation: https://dev.reverb.com/*/
var SDK = /** @class */ (function () {
    function SDK() {
        var opts = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            opts[_i] = arguments[_i];
        }
        var _this = this;
        this._language = "typescript";
        this._sdkVersion = "0.0.1";
        this._genVersion = "internal";
        opts.forEach(function (o) { return o(_this); });
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
    SDK.prototype.deleteListingsListingIdImagesImageId = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.DeleteListingsListingIdImagesImageIdRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/listings/{listing_id}/images/{image_id}", req.pathParams);
        var client = utils.CreateSecurityClient(this._defaultClient, req.security);
        return client
            .request(__assign({ url: url, method: "delete" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                default:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * deleteListingsSlug - Delete a draft listing. Cannot be used on non-drafts.
     *
     * Delete a draft listing. Cannot be used on non-drafts.
    **/
    SDK.prototype.deleteListingsSlug = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.DeleteListingsSlugRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/listings/{slug}", req.pathParams);
        var client = utils.CreateSecurityClient(this._defaultClient, req.security);
        return client
            .request(__assign({ url: url, method: "delete" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                default:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * deleteMyAddressesAddressId - Delete an existing address in your address book
     *
     * Delete an existing address in your address book
    **/
    SDK.prototype.deleteMyAddressesAddressId = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.DeleteMyAddressesAddressIdRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/my/addresses/{address_id}", req.pathParams);
        var client = utils.CreateSecurityClient(this._defaultClient, req.security);
        return client
            .request(__assign({ url: url, method: "delete" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                default:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    SDK.prototype.deleteMyCuratedSetProductProductId = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.DeleteMyCuratedSetProductProductIdRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/my/curated_set/product/{product_id}", req.pathParams);
        var client = this._defaultClient;
        return client
            .request(__assign({ url: url, method: "delete" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                default:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * deleteMyFollowsBrandsSlug - Unfollow a brand
     *
     * Unfollow a brand
    **/
    SDK.prototype.deleteMyFollowsBrandsSlug = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.DeleteMyFollowsBrandsSlugRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/my/follows/brands/{slug}", req.pathParams);
        var client = utils.CreateSecurityClient(this._defaultClient, req.security);
        return client
            .request(__assign({ url: url, method: "delete" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                default:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * deleteMyFollowsCategoriesCategorySubcategory - Unfollow a subcategory
     *
     * Unfollow a subcategory
    **/
    SDK.prototype.deleteMyFollowsCategoriesCategorySubcategory = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.DeleteMyFollowsCategoriesCategorySubcategoryRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/my/follows/categories/{category}/{subcategory}", req.pathParams);
        var client = utils.CreateSecurityClient(this._defaultClient, req.security);
        return client
            .request(__assign({ url: url, method: "delete" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                default:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * deleteMyFollowsCategoriesIdentifier - Unfollow a category
     *
     * Unfollow a category
    **/
    SDK.prototype.deleteMyFollowsCategoriesIdentifier = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.DeleteMyFollowsCategoriesIdentifierRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/my/follows/categories/{identifier}", req.pathParams);
        var client = utils.CreateSecurityClient(this._defaultClient, req.security);
        return client
            .request(__assign({ url: url, method: "delete" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                default:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * deleteMyFollowsCollectionsSlug - Unfollow a collection
     *
     * Unfollow a collection
    **/
    SDK.prototype.deleteMyFollowsCollectionsSlug = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.DeleteMyFollowsCollectionsSlugRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/my/follows/collections/{slug}", req.pathParams);
        var client = utils.CreateSecurityClient(this._defaultClient, req.security);
        return client
            .request(__assign({ url: url, method: "delete" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                default:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * deleteMyFollowsFollowId - Delete a follow
     *
     * Delete a follow
    **/
    SDK.prototype.deleteMyFollowsFollowId = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.DeleteMyFollowsFollowIdRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/my/follows/{follow_id}", req.pathParams);
        var client = utils.CreateSecurityClient(this._defaultClient, req.security);
        return client
            .request(__assign({ url: url, method: "delete" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                default:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    SDK.prototype.deleteMyFollowsFollowIdAlert = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.DeleteMyFollowsFollowIdAlertRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/my/follows/{follow_id}/alert", req.pathParams);
        var client = this._defaultClient;
        return client
            .request(__assign({ url: url, method: "delete" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                default:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * deleteMyFollowsHandpickedSlug - Unfollow a handpicked collection
     *
     * Unfollow a handpicked collection
    **/
    SDK.prototype.deleteMyFollowsHandpickedSlug = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.DeleteMyFollowsHandpickedSlugRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/my/follows/handpicked/{slug}", req.pathParams);
        var client = utils.CreateSecurityClient(this._defaultClient, req.security);
        return client
            .request(__assign({ url: url, method: "delete" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                default:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * deleteMyFollowsShopsSlug - Unfollow a shop
     *
     * Unfollow a shop
    **/
    SDK.prototype.deleteMyFollowsShopsSlug = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.DeleteMyFollowsShopsSlugRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/my/follows/shops/{slug}", req.pathParams);
        var client = utils.CreateSecurityClient(this._defaultClient, req.security);
        return client
            .request(__assign({ url: url, method: "delete" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                default:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * deleteMyWishlistId - Remove a listing from your wishlist
     *
     * Remove a listing from your wishlist
    **/
    SDK.prototype.deleteMyWishlistId = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.DeleteMyWishlistIdRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/my/wishlist/{id}", req.pathParams);
        var client = utils.CreateSecurityClient(this._defaultClient, req.security);
        return client
            .request(__assign({ url: url, method: "delete" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                default:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * deleteSalesSaleIdListings - Remove a listing from a sale
     *
     * Remove a listing from a sale
    **/
    SDK.prototype.deleteSalesSaleIdListings = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.DeleteSalesSaleIdListingsRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/sales/{sale_id}/listings", req.pathParams);
        var client = utils.CreateSecurityClient(this._defaultClient, req.security);
        return client
            .request(__assign({ url: url, method: "delete" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                default:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * deleteShopVacation - Disable vacation mode. All listings will be re-enabled.
     *
     * Disable vacation mode. All listings will be re-enabled.
    **/
    SDK.prototype.deleteShopVacation = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.DeleteShopVacationRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/shop/vacation";
        var client = utils.CreateSecurityClient(this._defaultClient, req.security);
        return client
            .request(__assign({ url: url, method: "delete" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                default:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * deleteWantsId - Unmark an item wanted.
     *
     * Unmark an item wanted.
    **/
    SDK.prototype.deleteWantsId = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.DeleteWantsIdRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/wants/{id}", req.pathParams);
        var client = utils.CreateSecurityClient(this._defaultClient, req.security);
        return client
            .request(__assign({ url: url, method: "delete" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                default:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * deleteWebhooksRegistrationsId - Remove a webhook
     *
     * Remove a webhook
    **/
    SDK.prototype.deleteWebhooksRegistrationsId = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.DeleteWebhooksRegistrationsIdRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/webhooks/registrations/{id}", req.pathParams);
        var client = this._defaultClient;
        return client
            .request(__assign({ url: url, method: "delete" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                default:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    SDK.prototype.getArticles = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetArticlesRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/articles";
        var client = this._defaultClient;
        var qpSerializer = utils.GetQueryParamSerializer(req.queryParams);
        var requestConfig = __assign(__assign({}, config), { params: req.queryParams, paramsSerializer: qpSerializer });
        return client
            .request(__assign({ url: url, method: "get" }, requestConfig)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                default:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getArticlesCategories - List of all article categories
     *
     * List of all article categories
    **/
    SDK.prototype.getArticlesCategories = function (config) {
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/articles/categories";
        var client = this._defaultClient;
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                default:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getCategories - List of supported product categories
     *
     * List of supported product categories
    **/
    SDK.prototype.getCategories = function (config) {
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/categories";
        var client = this._defaultClient;
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                default:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    SDK.prototype.getCategoriesFlat = function (config) {
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/categories/flat";
        var client = this._defaultClient;
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                default:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getCategoriesProductTypeCategory - Get subcategory details
     *
     * Get subcategory details
    **/
    SDK.prototype.getCategoriesProductTypeCategory = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetCategoriesProductTypeCategoryRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/categories/{product_type}/{category}", req.pathParams);
        var client = this._defaultClient;
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                default:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getCategoriesTaxonomy - Full taxonomy tree of categories including middle categories
     *
     * Full taxonomy tree of categories including middle categories
    **/
    SDK.prototype.getCategoriesTaxonomy = function (config) {
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/categories/taxonomy";
        var client = this._defaultClient;
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                default:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getCategoriesUuid - Get category details
     *
     * Get category details
    **/
    SDK.prototype.getCategoriesUuid = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetCategoriesUuidRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/categories/{uuid}", req.pathParams);
        var client = this._defaultClient;
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                default:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getComparisonShoppingPages - Returns a set of comparison shopping pages based on the current params
     *
     * Returns a set of comparison shopping pages based on the current params
    **/
    SDK.prototype.getComparisonShoppingPages = function (config) {
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/comparison_shopping_pages";
        var client = this._defaultClient;
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                default:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getComparisonShoppingPagesFind - Show comparison shopping page
     *
     * Show comparison shopping page
    **/
    SDK.prototype.getComparisonShoppingPagesFind = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetComparisonShoppingPagesFindRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/comparison_shopping_pages/find";
        var client = this._defaultClient;
        var qpSerializer = utils.GetQueryParamSerializer(req.queryParams);
        var requestConfig = __assign(__assign({}, config), { params: req.queryParams, paramsSerializer: qpSerializer });
        return client
            .request(__assign({ url: url, method: "get" }, requestConfig)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                default:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    SDK.prototype.getComparisonShoppingPagesId = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetComparisonShoppingPagesIdRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/comparison_shopping_pages/{id}", req.pathParams);
        var client = this._defaultClient;
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                default:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getComparisonShoppingPagesIdListings - Return new or used listings for a comparison shopping page
     *
     * Return new or used listings for a comparison shopping page
    **/
    SDK.prototype.getComparisonShoppingPagesIdListings = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetComparisonShoppingPagesIdListingsRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/comparison_shopping_pages/{id}/listings", req.pathParams);
        var client = this._defaultClient;
        var qpSerializer = utils.GetQueryParamSerializer(req.queryParams);
        var requestConfig = __assign(__assign({}, config), { params: req.queryParams, paramsSerializer: qpSerializer });
        return client
            .request(__assign({ url: url, method: "get" }, requestConfig)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                default:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getComparisonShoppingPagesIdReviews - View reviews of a comparison shopping page
     *
     * View reviews of a comparison shopping page
    **/
    SDK.prototype.getComparisonShoppingPagesIdReviews = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetComparisonShoppingPagesIdReviewsRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/comparison_shopping_pages/{id}/reviews", req.pathParams);
        var client = this._defaultClient;
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                default:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getCountries - Retrieve a list of country codes with corresponding subregions
     *
     * Retrieve a list of country codes with corresponding subregions
    **/
    SDK.prototype.getCountries = function (config) {
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/countries";
        var client = this._defaultClient;
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                default:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getCsps - Returns a set of comparison shopping pages based on the current params
     *
     * Returns a set of comparison shopping pages based on the current params
    **/
    SDK.prototype.getCsps = function (config) {
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/csps";
        var client = this._defaultClient;
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                default:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    SDK.prototype.getCspsCategories = function (config) {
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/csps/categories";
        var client = this._defaultClient;
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                default:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getCspsFind - Show comparison shopping page
     *
     * Show comparison shopping page
    **/
    SDK.prototype.getCspsFind = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetCspsFindRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/csps/find";
        var client = this._defaultClient;
        var qpSerializer = utils.GetQueryParamSerializer(req.queryParams);
        var requestConfig = __assign(__assign({}, config), { params: req.queryParams, paramsSerializer: qpSerializer });
        return client
            .request(__assign({ url: url, method: "get" }, requestConfig)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                default:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    SDK.prototype.getCspsId = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetCspsIdRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/csps/{id}", req.pathParams);
        var client = this._defaultClient;
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                default:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    SDK.prototype.getCuratedSetsSlug = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetCuratedSetsSlugRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/curated_sets/{slug}", req.pathParams);
        var client = this._defaultClient;
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                default:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getCurrenciesDisplay - List of supported display currencies for browsing listings
     *
     * List of supported display currencies for browsing listings
    **/
    SDK.prototype.getCurrenciesDisplay = function (config) {
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/currencies/display";
        var client = this._defaultClient;
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                default:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getCurrenciesListing - List of supported listing currencies for shops
     *
     * List of supported listing currencies for shops
    **/
    SDK.prototype.getCurrenciesListing = function (config) {
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/currencies/listing";
        var client = this._defaultClient;
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                default:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getFeedbackFeedbackId - Feedback details
     *
     * Feedback details
    **/
    SDK.prototype.getFeedbackFeedbackId = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetFeedbackFeedbackIdRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/feedback/{feedback_id}", req.pathParams);
        var client = this._defaultClient;
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                default:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getHandpickedSlug - Get results from a handpicked collection
     *
     * Get results from a handpicked collection
    **/
    SDK.prototype.getHandpickedSlug = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetHandpickedSlugRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/handpicked/{slug}", req.pathParams);
        var client = this._defaultClient;
        var qpSerializer = utils.GetQueryParamSerializer(req.queryParams);
        var requestConfig = __assign(__assign({}, config), { params: req.queryParams, paramsSerializer: qpSerializer });
        return client
            .request(__assign({ url: url, method: "get" }, requestConfig)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                default:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getListingConditions - List of supported product conditions
     *
     * List of supported product conditions
    **/
    SDK.prototype.getListingConditions = function (config) {
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/listing_conditions";
        var client = this._defaultClient;
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                default:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getListings - Default search of listings includes only used & handmade. Add a filter to view all listings or use the /listings/all endpoint.
     *
     * Default search of listings includes only used & handmade. Add a filter to view all listings or use the /listings/all endpoint.
    **/
    SDK.prototype.getListings = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetListingsRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/listings";
        var client = this._defaultClient;
        var qpSerializer = utils.GetQueryParamSerializer(req.queryParams);
        var requestConfig = __assign(__assign({}, config), { params: req.queryParams, paramsSerializer: qpSerializer });
        return client
            .request(__assign({ url: url, method: "get" }, requestConfig)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                default:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getListingsAll - All listings including used, handmade, and brand new
     *
     * All listings including used, handmade, and brand new
    **/
    SDK.prototype.getListingsAll = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetListingsAllRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/listings/all";
        var client = this._defaultClient;
        var qpSerializer = utils.GetQueryParamSerializer(req.queryParams);
        var requestConfig = __assign(__assign({}, config), { params: req.queryParams, paramsSerializer: qpSerializer });
        return client
            .request(__assign({ url: url, method: "get" }, requestConfig)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                default:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getListingsFacetsSellerLocation - Individual facets
     *
     * Individual facets
    **/
    SDK.prototype.getListingsFacetsSellerLocation = function (config) {
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/listings/facets/seller_location";
        var client = this._defaultClient;
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                default:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getListingsIdNegotiation - Returns the latest negotiation for the requesting user given a listing id
     *
     * Returns the latest negotiation for the requesting user given a listing id
    **/
    SDK.prototype.getListingsIdNegotiation = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetListingsIdNegotiationRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/listings/{id}/negotiation", req.pathParams);
        var client = utils.CreateSecurityClient(this._defaultClient, req.security);
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                default:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getListingsListingIdBump - View available bump tiers and stats for a listing
     *
     * View available bump tiers and stats for a listing
    **/
    SDK.prototype.getListingsListingIdBump = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetListingsListingIdBumpRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/listings/{listing_id}/bump", req.pathParams);
        var client = utils.CreateSecurityClient(this._defaultClient, req.security);
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                default:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getListingsListingIdImages - View the images associated with a particular listing
     *
     * View the images associated with a particular listing
    **/
    SDK.prototype.getListingsListingIdImages = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetListingsListingIdImagesRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/listings/{listing_id}/images", req.pathParams);
        var client = utils.CreateSecurityClient(this._defaultClient, req.security);
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                default:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getListingsListingIdSales - See all sales that include a listing.
     *
     * See all sales that include a listing.
    **/
    SDK.prototype.getListingsListingIdSales = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetListingsListingIdSalesRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/listings/{listing_id}/sales", req.pathParams);
        var client = this._defaultClient;
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                default:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getListingsSlug - Listing details
     *
     * Listing details
    **/
    SDK.prototype.getListingsSlug = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetListingsSlugRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/listings/{slug}", req.pathParams);
        var client = this._defaultClient;
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                default:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getListingsSlugEdit - Edit listing.
     *
     * Edit listing.
    **/
    SDK.prototype.getListingsSlugEdit = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetListingsSlugEditRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/listings/{slug}/edit", req.pathParams);
        var client = utils.CreateSecurityClient(this._defaultClient, req.security);
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                default:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getListingsSlugReviews - View reviews of a listing
     *
     * View reviews of a listing
    **/
    SDK.prototype.getListingsSlugReviews = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetListingsSlugReviewsRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/listings/{slug}/reviews", req.pathParams);
        var client = this._defaultClient;
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                default:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getListingsSlugSimilarListings - Listing details
     *
     * Listing details
    **/
    SDK.prototype.getListingsSlugSimilarListings = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetListingsSlugSimilarListingsRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/listings/{slug}/similar_listings", req.pathParams);
        var client = this._defaultClient;
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                default:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getMyAccount - Get account details
     *
     * Get account details
    **/
    SDK.prototype.getMyAccount = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetMyAccountRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/my/account";
        var client = utils.CreateSecurityClient(this._defaultClient, req.security);
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                default:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getMyAddresses - See all addresses in your address book
     *
     * See all addresses in your address book
    **/
    SDK.prototype.getMyAddresses = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetMyAddressesRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/my/addresses";
        var client = utils.CreateSecurityClient(this._defaultClient, req.security);
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                default:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getMyConversations - Get a list of your conversations
     *
     * Get a list of your conversations
    **/
    SDK.prototype.getMyConversations = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetMyConversationsRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/my/conversations";
        var client = utils.CreateSecurityClient(this._defaultClient, req.security);
        var qpSerializer = utils.GetQueryParamSerializer(req.queryParams);
        var requestConfig = __assign(__assign({}, config), { params: req.queryParams, paramsSerializer: qpSerializer });
        return client
            .request(__assign({ url: url, method: "get" }, requestConfig)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                default:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getMyConversationsId - Display conversation details with messages in natural time order (oldest to newest)
     *
     * Display conversation details with messages in natural time order (oldest to newest)
    **/
    SDK.prototype.getMyConversationsId = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetMyConversationsIdRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/my/conversations/{id}", req.pathParams);
        var client = utils.CreateSecurityClient(this._defaultClient, req.security);
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                default:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getMyCounts - Get your actionable status counts
     *
     * Get your actionable status counts
    **/
    SDK.prototype.getMyCounts = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetMyCountsRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/my/counts";
        var client = utils.CreateSecurityClient(this._defaultClient, req.security);
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                default:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getMyFeed - Get listings from your feed
     *
     * Get listings from your feed
    **/
    SDK.prototype.getMyFeed = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetMyFeedRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/my/feed";
        var client = utils.CreateSecurityClient(this._defaultClient, req.security);
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                default:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getMyFeedCustomize - get your feed customization options
     *
     * get your feed customization options
    **/
    SDK.prototype.getMyFeedCustomize = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetMyFeedCustomizeRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/my/feed/customize";
        var client = utils.CreateSecurityClient(this._defaultClient, req.security);
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                default:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getMyFeedGrid - get your feed
     *
     * get your feed
    **/
    SDK.prototype.getMyFeedGrid = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetMyFeedGridRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/my/feed/grid";
        var client = utils.CreateSecurityClient(this._defaultClient, req.security);
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                default:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getMyFeedbackReceived - List of received feedback
     *
     * List of received feedback
    **/
    SDK.prototype.getMyFeedbackReceived = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetMyFeedbackReceivedRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/my/feedback/received";
        var client = utils.CreateSecurityClient(this._defaultClient, req.security);
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                default:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getMyFeedbackSent - List of sent feedback
     *
     * List of sent feedback
    **/
    SDK.prototype.getMyFeedbackSent = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetMyFeedbackSentRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/my/feedback/sent";
        var client = utils.CreateSecurityClient(this._defaultClient, req.security);
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                default:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getMyFollows - See what the user is following
     *
     * See what the user is following
    **/
    SDK.prototype.getMyFollows = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetMyFollowsRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/my/follows";
        var client = utils.CreateSecurityClient(this._defaultClient, req.security);
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                default:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getMyFollowsArticles - Returns a user's ArticleCategoryFollows
     *
     * Returns a user's ArticleCategoryFollows
    **/
    SDK.prototype.getMyFollowsArticles = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetMyFollowsArticlesRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/my/follows/articles";
        var client = utils.CreateSecurityClient(this._defaultClient, req.security);
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                default:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getMyFollowsBrandsSlug - Follow status for a brand
     *
     * Follow status for a brand
    **/
    SDK.prototype.getMyFollowsBrandsSlug = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetMyFollowsBrandsSlugRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/my/follows/brands/{slug}", req.pathParams);
        var client = utils.CreateSecurityClient(this._defaultClient, req.security);
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                default:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getMyFollowsCategoriesCategorySubcategory - Follow status for a subcategory
     *
     * Follow status for a subcategory
    **/
    SDK.prototype.getMyFollowsCategoriesCategorySubcategory = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetMyFollowsCategoriesCategorySubcategoryRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/my/follows/categories/{category}/{subcategory}", req.pathParams);
        var client = utils.CreateSecurityClient(this._defaultClient, req.security);
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                default:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getMyFollowsCategoriesIdentifier - Follow status for a category
     *
     * Follow status for a category
    **/
    SDK.prototype.getMyFollowsCategoriesIdentifier = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetMyFollowsCategoriesIdentifierRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/my/follows/categories/{identifier}", req.pathParams);
        var client = utils.CreateSecurityClient(this._defaultClient, req.security);
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                default:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getMyFollowsCollectionsSlug - Follow status for a collection
     *
     * Follow status for a collection
    **/
    SDK.prototype.getMyFollowsCollectionsSlug = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetMyFollowsCollectionsSlugRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/my/follows/collections/{slug}", req.pathParams);
        var client = utils.CreateSecurityClient(this._defaultClient, req.security);
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                default:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getMyFollowsHandpickedSlug - Follow status for a handpicked collection
     *
     * Follow status for a handpicked collection
    **/
    SDK.prototype.getMyFollowsHandpickedSlug = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetMyFollowsHandpickedSlugRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/my/follows/handpicked/{slug}", req.pathParams);
        var client = utils.CreateSecurityClient(this._defaultClient, req.security);
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                default:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getMyFollowsSearch - Follow status for a search
     *
     * Follow status for a search
    **/
    SDK.prototype.getMyFollowsSearch = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetMyFollowsSearchRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/my/follows/search";
        var client = utils.CreateSecurityClient(this._defaultClient, req.security);
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                default:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getMyFollowsShopsSlug - Follow status for a shop
     *
     * Follow status for a shop
    **/
    SDK.prototype.getMyFollowsShopsSlug = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetMyFollowsShopsSlugRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/my/follows/shops/{slug}", req.pathParams);
        var client = utils.CreateSecurityClient(this._defaultClient, req.security);
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                default:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getMyListings - Retrieve a list of live listings for the seller. To search all listings specify state=all
     *
     * Retrieve a list of live listings for the seller. To search all listings specify state=all
    **/
    SDK.prototype.getMyListings = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetMyListingsRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/my/listings";
        var client = utils.CreateSecurityClient(this._defaultClient, req.security);
        var qpSerializer = utils.GetQueryParamSerializer(req.queryParams);
        var requestConfig = __assign(__assign({}, config), { params: req.queryParams, paramsSerializer: qpSerializer });
        return client
            .request(__assign({ url: url, method: "get" }, requestConfig)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                default:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getMyListingsDrafts - Retrieve a list your draft listings
     *
     * Retrieve a list your draft listings
    **/
    SDK.prototype.getMyListingsDrafts = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetMyListingsDraftsRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/my/listings/drafts";
        var client = utils.CreateSecurityClient(this._defaultClient, req.security);
        var qpSerializer = utils.GetQueryParamSerializer(req.queryParams);
        var requestConfig = __assign(__assign({}, config), { params: req.queryParams, paramsSerializer: qpSerializer });
        return client
            .request(__assign({ url: url, method: "get" }, requestConfig)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                default:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getMyListingsNegotiations - Get a list of active negotiations as a seller
     *
     * Get a list of active negotiations as a seller
    **/
    SDK.prototype.getMyListingsNegotiations = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetMyListingsNegotiationsRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/my/listings/negotiations";
        var client = utils.CreateSecurityClient(this._defaultClient, req.security);
        var qpSerializer = utils.GetQueryParamSerializer(req.queryParams);
        var requestConfig = __assign(__assign({}, config), { params: req.queryParams, paramsSerializer: qpSerializer });
        return client
            .request(__assign({ url: url, method: "get" }, requestConfig)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                default:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getMyLists - Get a list of your lists (wishlist, watch list, etc)
     *
     * Get a list of your lists (wishlist, watch list, etc)
    **/
    SDK.prototype.getMyLists = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetMyListsRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/my/lists";
        var client = utils.CreateSecurityClient(this._defaultClient, req.security);
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                default:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getMyNegotiationsBuying - Get a list of active negotiations as a buyer
     *
     * Get a list of active negotiations as a buyer
    **/
    SDK.prototype.getMyNegotiationsBuying = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetMyNegotiationsBuyingRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/my/negotiations/buying";
        var client = utils.CreateSecurityClient(this._defaultClient, req.security);
        var qpSerializer = utils.GetQueryParamSerializer(req.queryParams);
        var requestConfig = __assign(__assign({}, config), { params: req.queryParams, paramsSerializer: qpSerializer });
        return client
            .request(__assign({ url: url, method: "get" }, requestConfig)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                default:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getMyNegotiationsId - Get offer details
     *
     * Get offer details
    **/
    SDK.prototype.getMyNegotiationsId = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetMyNegotiationsIdRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/my/negotiations/{id}", req.pathParams);
        var client = utils.CreateSecurityClient(this._defaultClient, req.security);
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                default:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getMyOrdersAwaitingFeedback - List of orders that need feedback
     *
     * List of orders that need feedback
    **/
    SDK.prototype.getMyOrdersAwaitingFeedback = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetMyOrdersAwaitingFeedbackRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/my/orders/awaiting_feedback";
        var client = utils.CreateSecurityClient(this._defaultClient, req.security);
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                default:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getMyOrdersBuyingAll - Returns all orders, newest first.
     *
     * Returns all orders, newest first.
    **/
    SDK.prototype.getMyOrdersBuyingAll = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetMyOrdersBuyingAllRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/my/orders/buying/all";
        var client = utils.CreateSecurityClient(this._defaultClient, req.security);
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                default:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    SDK.prototype.getMyOrdersBuyingByUuidUuid = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetMyOrdersBuyingByUuidUuidRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/my/orders/buying/by_uuid/{uuid}", req.pathParams);
        var client = this._defaultClient;
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                default:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getMyOrdersBuyingId - Returns order details for a buyer
     *
     * Returns order details for a buyer
    **/
    SDK.prototype.getMyOrdersBuyingId = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetMyOrdersBuyingIdRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/my/orders/buying/{id}", req.pathParams);
        var client = utils.CreateSecurityClient(this._defaultClient, req.security);
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                default:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getMyOrdersBuyingUnpaid - Returns unpaid orders, newest first.
     *
     * Returns unpaid orders, newest first.
    **/
    SDK.prototype.getMyOrdersBuyingUnpaid = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetMyOrdersBuyingUnpaidRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/my/orders/buying/unpaid";
        var client = utils.CreateSecurityClient(this._defaultClient, req.security);
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                default:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getMyOrdersSellingAll - Get all seller orders, newest first.
     *
     * Get all seller orders, newest first.
    **/
    SDK.prototype.getMyOrdersSellingAll = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetMyOrdersSellingAllRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/my/orders/selling/all";
        var client = utils.CreateSecurityClient(this._defaultClient, req.security);
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                default:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getMyOrdersSellingAwaitingShipment - Get unpaid seller orders, newest first.
     *
     * Get unpaid seller orders, newest first.
    **/
    SDK.prototype.getMyOrdersSellingAwaitingShipment = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetMyOrdersSellingAwaitingShipmentRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/my/orders/selling/awaiting_shipment";
        var client = utils.CreateSecurityClient(this._defaultClient, req.security);
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                default:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getMyOrdersSellingBuyerHistoryBuyerId - See previous orders from buyer
     *
     * See previous orders from buyer
    **/
    SDK.prototype.getMyOrdersSellingBuyerHistoryBuyerId = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetMyOrdersSellingBuyerHistoryBuyerIdRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/my/orders/selling/buyer_history/{buyer_id}", req.pathParams);
        var client = utils.CreateSecurityClient(this._defaultClient, req.security);
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                default:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    SDK.prototype.getMyOrdersSellingByUuidUuid = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetMyOrdersSellingByUuidUuidRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/my/orders/selling/by_uuid/{uuid}", req.pathParams);
        var client = this._defaultClient;
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                default:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getMyOrdersSellingId - Returns order details for a seller
     *
     * Returns order details for a seller
    **/
    SDK.prototype.getMyOrdersSellingId = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetMyOrdersSellingIdRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/my/orders/selling/{id}", req.pathParams);
        var client = utils.CreateSecurityClient(this._defaultClient, req.security);
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                default:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getMyOrdersSellingUnpaid - Get unpaid seller orders, newest first.
     *
     * Get unpaid seller orders, newest first.
    **/
    SDK.prototype.getMyOrdersSellingUnpaid = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetMyOrdersSellingUnpaidRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/my/orders/selling/unpaid";
        var client = utils.CreateSecurityClient(this._defaultClient, req.security);
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                default:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getMyPaymentsSelling - Get payments
     *
     * Get payments
    **/
    SDK.prototype.getMyPaymentsSelling = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetMyPaymentsSellingRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/my/payments/selling";
        var client = utils.CreateSecurityClient(this._defaultClient, req.security);
        var qpSerializer = utils.GetQueryParamSerializer(req.queryParams);
        var requestConfig = __assign(__assign({}, config), { params: req.queryParams, paramsSerializer: qpSerializer });
        return client
            .request(__assign({ url: url, method: "get" }, requestConfig)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                default:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getMyPaymentsSellingId - Get payment
     *
     * Get payment
    **/
    SDK.prototype.getMyPaymentsSellingId = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetMyPaymentsSellingIdRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/my/payments/selling/{id}", req.pathParams);
        var client = utils.CreateSecurityClient(this._defaultClient, req.security);
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                default:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getMyPayouts - Get a list of payouts
     *
     * Get a list of payouts
    **/
    SDK.prototype.getMyPayouts = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetMyPayoutsRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/my/payouts";
        var client = utils.CreateSecurityClient(this._defaultClient, req.security);
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                default:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getMyPayoutsIdLineItems - Read the line items of a payout
     *
     * Read the line items of a payout
    **/
    SDK.prototype.getMyPayoutsIdLineItems = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetMyPayoutsIdLineItemsRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/my/payouts/{id}/line_items", req.pathParams);
        var client = utils.CreateSecurityClient(this._defaultClient, req.security);
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                default:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getMyRefundRequestsSelling - Get a list of refund requests as a seller
     *
     * Get a list of refund requests as a seller
    **/
    SDK.prototype.getMyRefundRequestsSelling = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetMyRefundRequestsSellingRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/my/refund_requests/selling";
        var client = utils.CreateSecurityClient(this._defaultClient, req.security);
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                default:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getMyViewedListings - Get a list of your recently viewed listings.
     *
     * Get a list of your recently viewed listings.
    **/
    SDK.prototype.getMyViewedListings = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetMyViewedListingsRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/my/viewed_listings";
        var client = utils.CreateSecurityClient(this._defaultClient, req.security);
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                default:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getMyWishlist - Get a list of wishlisted items
     *
     * Get a list of wishlisted items
    **/
    SDK.prototype.getMyWishlist = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetMyWishlistRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/my/wishlist";
        var client = utils.CreateSecurityClient(this._defaultClient, req.security);
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                default:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getOrdersOrderIdFeedbackBuyer - Feedback details for an order's buyer
     *
     * Feedback details for an order's buyer
    **/
    SDK.prototype.getOrdersOrderIdFeedbackBuyer = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetOrdersOrderIdFeedbackBuyerRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/orders/{order_id}/feedback/buyer", req.pathParams);
        var client = this._defaultClient;
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                default:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getOrdersOrderIdFeedbackSeller - Feedback details for an order's seller
     *
     * Feedback details for an order's seller
    **/
    SDK.prototype.getOrdersOrderIdFeedbackSeller = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetOrdersOrderIdFeedbackSellerRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/orders/{order_id}/feedback/seller", req.pathParams);
        var client = this._defaultClient;
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                default:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getPaymentMethods - Get list of payment methods
     *
     * Get list of payment methods
    **/
    SDK.prototype.getPaymentMethods = function (config) {
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/payment_methods";
        var client = this._defaultClient;
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                default:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getPriceguideIdTransactionsSummary - Get a summary of transactions for a given price guide
     *
     * Get a summary of transactions for a given price guide
    **/
    SDK.prototype.getPriceguideIdTransactionsSummary = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetPriceguideIdTransactionsSummaryRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/priceguide/{id}/transactions/summary", req.pathParams);
        var client = this._defaultClient;
        var qpSerializer = utils.GetQueryParamSerializer(req.queryParams);
        var requestConfig = __assign(__assign({}, config), { params: req.queryParams, paramsSerializer: qpSerializer });
        return client
            .request(__assign({ url: url, method: "get" }, requestConfig)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                default:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getProductsReviewsId - View a review
     *
     * View a review
    **/
    SDK.prototype.getProductsReviewsId = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetProductsReviewsIdRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/products/reviews/{id}", req.pathParams);
        var client = this._defaultClient;
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                default:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getProductsSlugReviews - View reviews of a comparison shopping page
     *
     * View reviews of a comparison shopping page
    **/
    SDK.prototype.getProductsSlugReviews = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetProductsSlugReviewsRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/products/{slug}/reviews", req.pathParams);
        var client = this._defaultClient;
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                default:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getSalesReverb - View upcoming and live Reverb official sales.
     *
     * View upcoming and live Reverb official sales.
    **/
    SDK.prototype.getSalesReverb = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetSalesReverbRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/sales/reverb";
        var client = utils.CreateSecurityClient(this._defaultClient, req.security);
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                default:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getSalesSeller - View your created sales.
     *
     * View your created sales.
    **/
    SDK.prototype.getSalesSeller = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetSalesSellerRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/sales/seller";
        var client = utils.CreateSecurityClient(this._defaultClient, req.security);
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                default:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    SDK.prototype.getSalesSlug = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetSalesSlugRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/sales/{slug}", req.pathParams);
        var client = this._defaultClient;
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                default:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getShippingProviders - List of supported shipping providers
     *
     * List of supported shipping providers
    **/
    SDK.prototype.getShippingProviders = function (config) {
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/shipping/providers";
        var client = this._defaultClient;
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                default:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    SDK.prototype.getShippingRegions = function (config) {
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/shipping/regions";
        var client = this._defaultClient;
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                default:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getShop - Get your own shop details
     *
     * Get your own shop details
    **/
    SDK.prototype.getShop = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetShopRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/shop";
        var client = utils.CreateSecurityClient(this._defaultClient, req.security);
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                default:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getShopListingConditions - List of supported product conditions
     *
     * List of supported product conditions
    **/
    SDK.prototype.getShopListingConditions = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetShopListingConditionsRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/shop/listing_conditions";
        var client = utils.CreateSecurityClient(this._defaultClient, req.security);
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                default:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getShopPaymentMethods - Get accepted payment methods
     *
     * Get accepted payment methods
    **/
    SDK.prototype.getShopPaymentMethods = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetShopPaymentMethodsRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/shop/payment_methods";
        var client = utils.CreateSecurityClient(this._defaultClient, req.security);
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                default:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getShopVacation - Returns shop vacation status
     *
     * Returns shop vacation status
    **/
    SDK.prototype.getShopVacation = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetShopVacationRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/shop/vacation";
        var client = utils.CreateSecurityClient(this._defaultClient, req.security);
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                default:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getShopsIdStorefronts - Get storefront details on a shop.
     *
     * Get storefront details on a shop.
    **/
    SDK.prototype.getShopsIdStorefronts = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetShopsIdStorefrontsRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/shops/{id}/storefronts", req.pathParams);
        var client = this._defaultClient;
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                default:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getShopsShopIdShippingProfiles - List of shipping profiles for your shop
     *
     * List of shipping profiles for your shop
    **/
    SDK.prototype.getShopsShopIdShippingProfiles = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetShopsShopIdShippingProfilesRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/shops/{shop_id}/shipping_profiles", req.pathParams);
        var client = utils.CreateSecurityClient(this._defaultClient, req.security);
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                default:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getShopsSlug - Get details on a shop.
     *
     * Get details on a shop.
    **/
    SDK.prototype.getShopsSlug = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetShopsSlugRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/shops/{slug}", req.pathParams);
        var client = this._defaultClient;
        var qpSerializer = utils.GetQueryParamSerializer(req.queryParams);
        var requestConfig = __assign(__assign({}, config), { params: req.queryParams, paramsSerializer: qpSerializer });
        return client
            .request(__assign({ url: url, method: "get" }, requestConfig)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                default:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getShopsSlugFeedback - Get seller's feedback
     *
     * Get seller's feedback
    **/
    SDK.prototype.getShopsSlugFeedback = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetShopsSlugFeedbackRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/shops/{slug}/feedback", req.pathParams);
        var client = this._defaultClient;
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                default:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getShopsSlugFeedbackBuyer - Get seller's feedback as a buyer
     *
     * Get seller's feedback as a buyer
    **/
    SDK.prototype.getShopsSlugFeedbackBuyer = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetShopsSlugFeedbackBuyerRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/shops/{slug}/feedback/buyer", req.pathParams);
        var client = this._defaultClient;
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                default:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getShopsSlugFeedbackSeller - Get seller's feedback as a seller
     *
     * Get seller's feedback as a seller
    **/
    SDK.prototype.getShopsSlugFeedbackSeller = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetShopsSlugFeedbackSellerRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/shops/{slug}/feedback/seller", req.pathParams);
        var client = this._defaultClient;
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                default:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getWants - A list of wanted items by the user
     *
     * A list of wanted items by the user
    **/
    SDK.prototype.getWants = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetWantsRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/wants";
        var client = utils.CreateSecurityClient(this._defaultClient, req.security);
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                default:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getWebhooksRegistrations - Get webhook registrations
     *
     * Get webhook registrations
    **/
    SDK.prototype.getWebhooksRegistrations = function (config) {
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/webhooks/registrations";
        var client = this._defaultClient;
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                default:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getWebhooksRegistrationsId - Get details of a webhook registration
     *
     * Get details of a webhook registration
    **/
    SDK.prototype.getWebhooksRegistrationsId = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetWebhooksRegistrationsIdRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/webhooks/registrations/{id}", req.pathParams);
        var client = this._defaultClient;
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                default:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * postConversationsConversationIdOffer - Make an offer to the other participant in the conversation
     *
     * Make an offer to the other participant in the conversation
    **/
    SDK.prototype.postConversationsConversationIdOffer = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PostConversationsConversationIdOfferRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/conversations/{conversation_id}/offer", req.pathParams);
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = utils.SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = utils.CreateSecurityClient(this._defaultClient, req.security);
        var headers = __assign(__assign({}, reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
        var body;
        if (reqBody instanceof FormData)
            body = reqBody;
        else
            body = __assign({}, reqBody);
        return client
            .request(__assign({ url: url, method: "post", headers: headers, data: body }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                default:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * postConversationsIdOffer - Make an offer to the other participant in the conversation
     *
     * Make an offer to the other participant in the conversation
    **/
    SDK.prototype.postConversationsIdOffer = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PostConversationsIdOfferRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/conversations/{id}/offer", req.pathParams);
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = utils.SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = utils.CreateSecurityClient(this._defaultClient, req.security);
        var headers = __assign(__assign({}, reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
        var body;
        if (reqBody instanceof FormData)
            body = reqBody;
        else
            body = __assign({}, reqBody);
        return client
            .request(__assign({ url: url, method: "post", headers: headers, data: body }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                default:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * postListings - Create a listing
     *
     * Create a listing
    **/
    SDK.prototype.postListings = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PostListingsRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/listings";
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = utils.SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = utils.CreateSecurityClient(this._defaultClient, req.security);
        var headers = __assign(__assign({}, reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
        var body;
        if (reqBody instanceof FormData)
            body = reqBody;
        else
            body = __assign({}, reqBody);
        return client
            .request(__assign({ url: url, method: "post", headers: headers, data: body }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                default:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * postListingsIdOffer - Make an offer to the seller of a listing
     *
     * Make an offer to the seller of a listing
    **/
    SDK.prototype.postListingsIdOffer = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PostListingsIdOfferRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/listings/{id}/offer", req.pathParams);
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = utils.SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = utils.CreateSecurityClient(this._defaultClient, req.security);
        var headers = __assign(__assign({}, reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
        var body;
        if (reqBody instanceof FormData)
            body = reqBody;
        else
            body = __assign({}, reqBody);
        return client
            .request(__assign({ url: url, method: "post", headers: headers, data: body }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                default:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * postListingsListingIdBumpBudgetType - Bump a listing
     *
     * Bump a listing
    **/
    SDK.prototype.postListingsListingIdBumpBudgetType = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PostListingsListingIdBumpBudgetTypeRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/listings/{listing_id}/bump/{budget_type}", req.pathParams);
        var client = utils.CreateSecurityClient(this._defaultClient, req.security);
        return client
            .request(__assign({ url: url, method: "post" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                default:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * postListingsListingIdConversations - Start a conversation with a seller
     *
     * Start a conversation with a seller
    **/
    SDK.prototype.postListingsListingIdConversations = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PostListingsListingIdConversationsRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/listings/{listing_id}/conversations", req.pathParams);
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = utils.SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = utils.CreateSecurityClient(this._defaultClient, req.security);
        var headers = __assign(__assign({}, reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
        var body;
        if (reqBody instanceof FormData)
            body = reqBody;
        else
            body = __assign({}, reqBody);
        return client
            .request(__assign({ url: url, method: "post", headers: headers, data: body }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                default:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * postListingsSlugFlag - Flag a listing for inappropriate content or fraud
     *
     * Flag a listing for inappropriate content or fraud
    **/
    SDK.prototype.postListingsSlugFlag = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PostListingsSlugFlagRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/listings/{slug}/flag", req.pathParams);
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = utils.SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = this._defaultClient;
        var headers = __assign(__assign({}, reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
        var body;
        if (reqBody instanceof FormData)
            body = reqBody;
        else
            body = __assign({}, reqBody);
        return client
            .request(__assign({ url: url, method: "post", headers: headers, data: body }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                default:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * postListingsSlugReviews - Create a review for a listing
     *
     * Create a review for a listing
    **/
    SDK.prototype.postListingsSlugReviews = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PostListingsSlugReviewsRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/listings/{slug}/reviews", req.pathParams);
        var client = utils.CreateSecurityClient(this._defaultClient, req.security);
        return client
            .request(__assign({ url: url, method: "post" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                default:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * postMyAddresses - Create a new address in your address book
     *
     * Create a new address in your address book
    **/
    SDK.prototype.postMyAddresses = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PostMyAddressesRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/my/addresses";
        var client = utils.CreateSecurityClient(this._defaultClient, req.security);
        return client
            .request(__assign({ url: url, method: "post" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                default:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * postMyConversations - Start a conversation
     *
     * Start a conversation
    **/
    SDK.prototype.postMyConversations = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PostMyConversationsRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/my/conversations";
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = utils.SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = utils.CreateSecurityClient(this._defaultClient, req.security);
        var headers = __assign(__assign({}, reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
        var body;
        if (reqBody instanceof FormData)
            body = reqBody;
        else
            body = __assign({}, reqBody);
        return client
            .request(__assign({ url: url, method: "post", headers: headers, data: body }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                default:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * postMyConversationsConversationIdMessages - Send a message
     *
     * Send a message
    **/
    SDK.prototype.postMyConversationsConversationIdMessages = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PostMyConversationsConversationIdMessagesRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/my/conversations/{conversation_id}/messages", req.pathParams);
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = utils.SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = utils.CreateSecurityClient(this._defaultClient, req.security);
        var headers = __assign(__assign({}, reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
        var body;
        if (reqBody instanceof FormData)
            body = reqBody;
        else
            body = __assign({}, reqBody);
        return client
            .request(__assign({ url: url, method: "post", headers: headers, data: body }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                default:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    SDK.prototype.postMyCuratedSetProductProductId = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PostMyCuratedSetProductProductIdRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/my/curated_set/product/{product_id}", req.pathParams);
        var client = this._defaultClient;
        return client
            .request(__assign({ url: url, method: "post" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                default:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * postMyFollowsArticles - Set a user's ArticleCategoryFollows
     *
     * Set a user's ArticleCategoryFollows
    **/
    SDK.prototype.postMyFollowsArticles = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PostMyFollowsArticlesRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/my/follows/articles";
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = utils.SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = utils.CreateSecurityClient(this._defaultClient, req.security);
        var headers = __assign(__assign({}, reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
        var body;
        if (reqBody instanceof FormData)
            body = reqBody;
        else
            body = __assign({}, reqBody);
        return client
            .request(__assign({ url: url, method: "post", headers: headers, data: body }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                default:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * postMyFollowsBrandsSlug - Follow a brand
     *
     * Follow a brand
    **/
    SDK.prototype.postMyFollowsBrandsSlug = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PostMyFollowsBrandsSlugRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/my/follows/brands/{slug}", req.pathParams);
        var client = utils.CreateSecurityClient(this._defaultClient, req.security);
        return client
            .request(__assign({ url: url, method: "post" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                default:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * postMyFollowsCategoriesCategorySubcategory - Follow a subcategory
     *
     * Follow a subcategory
    **/
    SDK.prototype.postMyFollowsCategoriesCategorySubcategory = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PostMyFollowsCategoriesCategorySubcategoryRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/my/follows/categories/{category}/{subcategory}", req.pathParams);
        var client = utils.CreateSecurityClient(this._defaultClient, req.security);
        return client
            .request(__assign({ url: url, method: "post" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                default:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * postMyFollowsCategoriesIdentifier - Follow a category
     *
     * Follow a category
    **/
    SDK.prototype.postMyFollowsCategoriesIdentifier = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PostMyFollowsCategoriesIdentifierRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/my/follows/categories/{identifier}", req.pathParams);
        var client = utils.CreateSecurityClient(this._defaultClient, req.security);
        return client
            .request(__assign({ url: url, method: "post" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                default:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * postMyFollowsCategoriesUuid - Follow a category
     *
     * Follow a category
    **/
    SDK.prototype.postMyFollowsCategoriesUuid = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PostMyFollowsCategoriesUuidRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/my/follows/categories/{uuid}", req.pathParams);
        var client = utils.CreateSecurityClient(this._defaultClient, req.security);
        return client
            .request(__assign({ url: url, method: "post" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                default:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * postMyFollowsCollectionsSlug - Follow a collection
     *
     * Follow a collection
    **/
    SDK.prototype.postMyFollowsCollectionsSlug = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PostMyFollowsCollectionsSlugRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/my/follows/collections/{slug}", req.pathParams);
        var client = utils.CreateSecurityClient(this._defaultClient, req.security);
        return client
            .request(__assign({ url: url, method: "post" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                default:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    SDK.prototype.postMyFollowsFollowIdAlert = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PostMyFollowsFollowIdAlertRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/my/follows/{follow_id}/alert", req.pathParams);
        var client = this._defaultClient;
        return client
            .request(__assign({ url: url, method: "post" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                default:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * postMyFollowsHandpickedSlug - Follow a handpicked collection
     *
     * Follow a handpicked collection
    **/
    SDK.prototype.postMyFollowsHandpickedSlug = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PostMyFollowsHandpickedSlugRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/my/follows/handpicked/{slug}", req.pathParams);
        var client = utils.CreateSecurityClient(this._defaultClient, req.security);
        return client
            .request(__assign({ url: url, method: "post" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                default:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * postMyFollowsSearch - Follow a search
     *
     * Follow a search
    **/
    SDK.prototype.postMyFollowsSearch = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PostMyFollowsSearchRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/my/follows/search";
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = utils.SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = utils.CreateSecurityClient(this._defaultClient, req.security);
        var headers = __assign(__assign({}, reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
        var body;
        if (reqBody instanceof FormData)
            body = reqBody;
        else
            body = __assign({}, reqBody);
        return client
            .request(__assign({ url: url, method: "post", headers: headers, data: body }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                default:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * postMyFollowsShopsSlug - Follow a shop
     *
     * Follow a shop
    **/
    SDK.prototype.postMyFollowsShopsSlug = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PostMyFollowsShopsSlugRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/my/follows/shops/{slug}", req.pathParams);
        var client = utils.CreateSecurityClient(this._defaultClient, req.security);
        return client
            .request(__assign({ url: url, method: "post" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                default:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * postMyNegotiationsIdAccept - Accept an offer
     *
     * Accept an offer
    **/
    SDK.prototype.postMyNegotiationsIdAccept = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PostMyNegotiationsIdAcceptRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/my/negotiations/{id}/accept", req.pathParams);
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = utils.SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = utils.CreateSecurityClient(this._defaultClient, req.security);
        var headers = __assign(__assign({}, reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
        var body;
        if (reqBody instanceof FormData)
            body = reqBody;
        else
            body = __assign({}, reqBody);
        return client
            .request(__assign({ url: url, method: "post", headers: headers, data: body }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                default:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * postMyNegotiationsIdCounter - Counter an offer
     *
     * Counter an offer
    **/
    SDK.prototype.postMyNegotiationsIdCounter = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PostMyNegotiationsIdCounterRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/my/negotiations/{id}/counter", req.pathParams);
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = utils.SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = utils.CreateSecurityClient(this._defaultClient, req.security);
        var headers = __assign(__assign({}, reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
        var body;
        if (reqBody instanceof FormData)
            body = reqBody;
        else
            body = __assign({}, reqBody);
        return client
            .request(__assign({ url: url, method: "post", headers: headers, data: body }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                default:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * postMyNegotiationsIdDecline - Decline an offer
     *
     * Decline an offer
    **/
    SDK.prototype.postMyNegotiationsIdDecline = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PostMyNegotiationsIdDeclineRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/my/negotiations/{id}/decline", req.pathParams);
        var client = utils.CreateSecurityClient(this._defaultClient, req.security);
        return client
            .request(__assign({ url: url, method: "post" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                default:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * postMyOrdersBuyingIdMarkReceived - Marks an order as received by the buyer
     *
     * Marks an order as received by the buyer
    **/
    SDK.prototype.postMyOrdersBuyingIdMarkReceived = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PostMyOrdersBuyingIdMarkReceivedRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/my/orders/buying/{id}/mark_received", req.pathParams);
        var client = utils.CreateSecurityClient(this._defaultClient, req.security);
        return client
            .request(__assign({ url: url, method: "post" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                default:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * postMyOrdersSellingIdMarkPickedUp - Marks an order as picked up
     *
     * Marks an order as picked up
    **/
    SDK.prototype.postMyOrdersSellingIdMarkPickedUp = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PostMyOrdersSellingIdMarkPickedUpRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/my/orders/selling/{id}/mark_picked_up", req.pathParams);
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = utils.SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = utils.CreateSecurityClient(this._defaultClient, req.security);
        var headers = __assign(__assign({}, reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
        var body;
        if (reqBody instanceof FormData)
            body = reqBody;
        else
            body = __assign({}, reqBody);
        return client
            .request(__assign({ url: url, method: "post", headers: headers, data: body }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                default:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * postMyOrdersSellingIdShip - Marks an order as shipped
     *
     * Marks an order as shipped
    **/
    SDK.prototype.postMyOrdersSellingIdShip = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PostMyOrdersSellingIdShipRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/my/orders/selling/{id}/ship", req.pathParams);
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = utils.SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = utils.CreateSecurityClient(this._defaultClient, req.security);
        var headers = __assign(__assign({}, reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
        var body;
        if (reqBody instanceof FormData)
            body = reqBody;
        else
            body = __assign({}, reqBody);
        return client
            .request(__assign({ url: url, method: "post", headers: headers, data: body }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                default:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * postMyOrdersSellingOrderIdRefundRequests - Initiate a refund for a sold order
     *
     * Initiate a refund for a sold order
    **/
    SDK.prototype.postMyOrdersSellingOrderIdRefundRequests = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PostMyOrdersSellingOrderIdRefundRequestsRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/my/orders/selling/{order_id}/refund_requests", req.pathParams);
        var client = utils.CreateSecurityClient(this._defaultClient, req.security);
        return client
            .request(__assign({ url: url, method: "post" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                default:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * postOrdersOrderIdFeedbackBuyer - Add feedback about an order's buyer
     *
     * Add feedback about an order's buyer
    **/
    SDK.prototype.postOrdersOrderIdFeedbackBuyer = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PostOrdersOrderIdFeedbackBuyerRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/orders/{order_id}/feedback/buyer", req.pathParams);
        var client = utils.CreateSecurityClient(this._defaultClient, req.security);
        return client
            .request(__assign({ url: url, method: "post" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                default:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * postOrdersOrderIdFeedbackSeller - Add feedback about an order's seller
     *
     * Add feedback about an order's seller
    **/
    SDK.prototype.postOrdersOrderIdFeedbackSeller = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PostOrdersOrderIdFeedbackSellerRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/orders/{order_id}/feedback/seller", req.pathParams);
        var client = utils.CreateSecurityClient(this._defaultClient, req.security);
        return client
            .request(__assign({ url: url, method: "post" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                default:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * postProductsSlugReviews - Create a review for a product
     *
     * Create a review for a product
    **/
    SDK.prototype.postProductsSlugReviews = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PostProductsSlugReviewsRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/products/{slug}/reviews", req.pathParams);
        var client = utils.CreateSecurityClient(this._defaultClient, req.security);
        return client
            .request(__assign({ url: url, method: "post" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                default:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * postSalesSaleIdListings - Add listings to a sale
     *
     * Add listings to a sale
    **/
    SDK.prototype.postSalesSaleIdListings = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PostSalesSaleIdListingsRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/sales/{sale_id}/listings", req.pathParams);
        var client = utils.CreateSecurityClient(this._defaultClient, req.security);
        return client
            .request(__assign({ url: url, method: "post" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                default:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * postShopVacation - Enable vacation mode. All listings will be unavailable until vacation mode is turned off.
     *
     * Enable vacation mode. All listings will be unavailable until vacation mode is turned off.
    **/
    SDK.prototype.postShopVacation = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PostShopVacationRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/shop/vacation";
        var client = utils.CreateSecurityClient(this._defaultClient, req.security);
        return client
            .request(__assign({ url: url, method: "post" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                default:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * postWebhooksRegistrations - Register a webhook
     *
     * Register a webhook
    **/
    SDK.prototype.postWebhooksRegistrations = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PostWebhooksRegistrationsRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/webhooks/registrations";
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = utils.SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = this._defaultClient;
        var headers = __assign(__assign({}, reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
        var body;
        if (reqBody instanceof FormData)
            body = reqBody;
        else
            body = __assign({}, reqBody);
        return client
            .request(__assign({ url: url, method: "post", headers: headers, data: body }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                default:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * putListingsSlug - Update a listing
     *
     * Update a listing
    **/
    SDK.prototype.putListingsSlug = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PutListingsSlugRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/listings/{slug}", req.pathParams);
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = utils.SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = utils.CreateSecurityClient(this._defaultClient, req.security);
        var headers = __assign(__assign({}, reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
        var body;
        if (reqBody instanceof FormData)
            body = reqBody;
        else
            body = __assign({}, reqBody);
        return client
            .request(__assign({ url: url, method: "put", headers: headers, data: body }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                default:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * putMyAccount - Update account details
     *
     * Update account details
    **/
    SDK.prototype.putMyAccount = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PutMyAccountRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/my/account";
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = utils.SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = utils.CreateSecurityClient(this._defaultClient, req.security);
        var headers = __assign(__assign({}, reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
        var body;
        if (reqBody instanceof FormData)
            body = reqBody;
        else
            body = __assign({}, reqBody);
        return client
            .request(__assign({ url: url, method: "put", headers: headers, data: body }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                default:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * putMyAddressesAddressId - Update an existing address in your address book
     *
     * Update an existing address in your address book
    **/
    SDK.prototype.putMyAddressesAddressId = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PutMyAddressesAddressIdRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/my/addresses/{address_id}", req.pathParams);
        var client = utils.CreateSecurityClient(this._defaultClient, req.security);
        return client
            .request(__assign({ url: url, method: "put" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                default:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * putMyConversationsId - Mark a conversation read/unread
     *
     * Mark a conversation read/unread
    **/
    SDK.prototype.putMyConversationsId = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PutMyConversationsIdRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/my/conversations/{id}", req.pathParams);
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = utils.SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = utils.CreateSecurityClient(this._defaultClient, req.security);
        var headers = __assign(__assign({}, reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
        var body;
        if (reqBody instanceof FormData)
            body = reqBody;
        else
            body = __assign({}, reqBody);
        return client
            .request(__assign({ url: url, method: "put", headers: headers, data: body }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                default:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * putMyListingsSlugStateEnd - End a listing
     *
     * End a listing
    **/
    SDK.prototype.putMyListingsSlugStateEnd = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PutMyListingsSlugStateEndRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/my/listings/{slug}/state/end", req.pathParams);
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = utils.SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = utils.CreateSecurityClient(this._defaultClient, req.security);
        var headers = __assign(__assign({}, reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
        var body;
        if (reqBody instanceof FormData)
            body = reqBody;
        else
            body = __assign({}, reqBody);
        return client
            .request(__assign({ url: url, method: "put", headers: headers, data: body }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                default:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * putMyRefundRequestsSellingId - Update a refund request for a sold order
     *
     * Update a refund request for a sold order
    **/
    SDK.prototype.putMyRefundRequestsSellingId = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PutMyRefundRequestsSellingIdRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/my/refund_requests/selling/{id}", req.pathParams);
        var client = utils.CreateSecurityClient(this._defaultClient, req.security);
        return client
            .request(__assign({ url: url, method: "put" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                default:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * putMyWishlistId - Add a listing to your wishlist
     *
     * Add a listing to your wishlist
    **/
    SDK.prototype.putMyWishlistId = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PutMyWishlistIdRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/my/wishlist/{id}", req.pathParams);
        var client = utils.CreateSecurityClient(this._defaultClient, req.security);
        return client
            .request(__assign({ url: url, method: "put" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                default:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * putProductsReviewsId - Update a review
     *
     * Update a review
    **/
    SDK.prototype.putProductsReviewsId = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PutProductsReviewsIdRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/products/reviews/{id}", req.pathParams);
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = utils.SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = utils.CreateSecurityClient(this._defaultClient, req.security);
        var headers = __assign(__assign({}, reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
        var body;
        if (reqBody instanceof FormData)
            body = reqBody;
        else
            body = __assign({}, reqBody);
        return client
            .request(__assign({ url: url, method: "put", headers: headers, data: body }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                default:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * putShop - Update your shop profile
     *
     * Update your shop profile
    **/
    SDK.prototype.putShop = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PutShopRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/shop";
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = utils.SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = utils.CreateSecurityClient(this._defaultClient, req.security);
        var headers = __assign(__assign({}, reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
        var body;
        if (reqBody instanceof FormData)
            body = reqBody;
        else
            body = __assign({}, reqBody);
        return client
            .request(__assign({ url: url, method: "put", headers: headers, data: body }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                default:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * putWantsId - Mark an item wanted. Returns 200 on success or 422 on failure.
     *
     * Mark an item wanted. Returns 200 on success or 422 on failure.
    **/
    SDK.prototype.putWantsId = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PutWantsIdRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/wants/{id}", req.pathParams);
        var client = utils.CreateSecurityClient(this._defaultClient, req.security);
        return client
            .request(__assign({ url: url, method: "put" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                default:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    return SDK;
}());
export { SDK };
