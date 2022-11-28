var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
var PostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameDeleteAllEnvironmentsPathParams = /** @class */ (function (_super) {
    __extends(PostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameDeleteAllEnvironmentsPathParams, _super);
    function PostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameDeleteAllEnvironmentsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=providerNamespace" }),
        __metadata("design:type", String)
    ], PostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameDeleteAllEnvironmentsPathParams.prototype, "providerNamespace", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=resourceGroup" }),
        __metadata("design:type", String)
    ], PostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameDeleteAllEnvironmentsPathParams.prototype, "resourceGroup", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=resourceName" }),
        __metadata("design:type", String)
    ], PostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameDeleteAllEnvironmentsPathParams.prototype, "resourceName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=resourceType" }),
        __metadata("design:type", String)
    ], PostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameDeleteAllEnvironmentsPathParams.prototype, "resourceType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=subscriptionId" }),
        __metadata("design:type", String)
    ], PostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameDeleteAllEnvironmentsPathParams.prototype, "subscriptionId", void 0);
    return PostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameDeleteAllEnvironmentsPathParams;
}(SpeakeasyBase));
export { PostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameDeleteAllEnvironmentsPathParams };
var PostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameDeleteAllEnvironmentsQueryParams = /** @class */ (function (_super) {
    __extends(PostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameDeleteAllEnvironmentsQueryParams, _super);
    function PostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameDeleteAllEnvironmentsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=expiration" }),
        __metadata("design:type", Date)
    ], PostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameDeleteAllEnvironmentsQueryParams.prototype, "expiration", void 0);
    return PostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameDeleteAllEnvironmentsQueryParams;
}(SpeakeasyBase));
export { PostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameDeleteAllEnvironmentsQueryParams };
var PostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameDeleteAllEnvironmentsRequest = /** @class */ (function (_super) {
    __extends(PostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameDeleteAllEnvironmentsRequest, _super);
    function PostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameDeleteAllEnvironmentsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameDeleteAllEnvironmentsPathParams)
    ], PostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameDeleteAllEnvironmentsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameDeleteAllEnvironmentsQueryParams)
    ], PostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameDeleteAllEnvironmentsRequest.prototype, "queryParams", void 0);
    return PostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameDeleteAllEnvironmentsRequest;
}(SpeakeasyBase));
export { PostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameDeleteAllEnvironmentsRequest };
var PostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameDeleteAllEnvironmentsResponse = /** @class */ (function (_super) {
    __extends(PostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameDeleteAllEnvironmentsResponse, _super);
    function PostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameDeleteAllEnvironmentsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameDeleteAllEnvironmentsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameDeleteAllEnvironmentsResponse.prototype, "statusCode", void 0);
    return PostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameDeleteAllEnvironmentsResponse;
}(SpeakeasyBase));
export { PostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameDeleteAllEnvironmentsResponse };
