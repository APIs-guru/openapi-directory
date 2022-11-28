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
var PostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameWriteEnvironmentsPathParams = /** @class */ (function (_super) {
    __extends(PostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameWriteEnvironmentsPathParams, _super);
    function PostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameWriteEnvironmentsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=providerNamespace" }),
        __metadata("design:type", String)
    ], PostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameWriteEnvironmentsPathParams.prototype, "providerNamespace", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=resourceGroup" }),
        __metadata("design:type", String)
    ], PostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameWriteEnvironmentsPathParams.prototype, "resourceGroup", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=resourceName" }),
        __metadata("design:type", String)
    ], PostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameWriteEnvironmentsPathParams.prototype, "resourceName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=resourceType" }),
        __metadata("design:type", String)
    ], PostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameWriteEnvironmentsPathParams.prototype, "resourceType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=subscriptionId" }),
        __metadata("design:type", String)
    ], PostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameWriteEnvironmentsPathParams.prototype, "subscriptionId", void 0);
    return PostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameWriteEnvironmentsPathParams;
}(SpeakeasyBase));
export { PostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameWriteEnvironmentsPathParams };
var PostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameWriteEnvironmentsQueryParams = /** @class */ (function (_super) {
    __extends(PostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameWriteEnvironmentsQueryParams, _super);
    function PostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameWriteEnvironmentsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=expiration" }),
        __metadata("design:type", Date)
    ], PostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameWriteEnvironmentsQueryParams.prototype, "expiration", void 0);
    return PostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameWriteEnvironmentsQueryParams;
}(SpeakeasyBase));
export { PostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameWriteEnvironmentsQueryParams };
var PostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameWriteEnvironmentsRequest = /** @class */ (function (_super) {
    __extends(PostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameWriteEnvironmentsRequest, _super);
    function PostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameWriteEnvironmentsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameWriteEnvironmentsPathParams)
    ], PostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameWriteEnvironmentsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameWriteEnvironmentsQueryParams)
    ], PostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameWriteEnvironmentsRequest.prototype, "queryParams", void 0);
    return PostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameWriteEnvironmentsRequest;
}(SpeakeasyBase));
export { PostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameWriteEnvironmentsRequest };
var PostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameWriteEnvironmentsResponse = /** @class */ (function (_super) {
    __extends(PostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameWriteEnvironmentsResponse, _super);
    function PostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameWriteEnvironmentsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameWriteEnvironmentsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameWriteEnvironmentsResponse.prototype, "statusCode", void 0);
    return PostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameWriteEnvironmentsResponse;
}(SpeakeasyBase));
export { PostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameWriteEnvironmentsResponse };
