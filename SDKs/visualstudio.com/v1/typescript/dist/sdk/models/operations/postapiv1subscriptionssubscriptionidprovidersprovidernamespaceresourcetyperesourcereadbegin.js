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
import * as shared from "../shared";
var PostApiV1SubscriptionsSubscriptionIdProvidersProviderNamespaceResourceTypeResourceReadBeginPathParams = /** @class */ (function (_super) {
    __extends(PostApiV1SubscriptionsSubscriptionIdProvidersProviderNamespaceResourceTypeResourceReadBeginPathParams, _super);
    function PostApiV1SubscriptionsSubscriptionIdProvidersProviderNamespaceResourceTypeResourceReadBeginPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=providerNamespace" }),
        __metadata("design:type", String)
    ], PostApiV1SubscriptionsSubscriptionIdProvidersProviderNamespaceResourceTypeResourceReadBeginPathParams.prototype, "providerNamespace", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=resourceType" }),
        __metadata("design:type", String)
    ], PostApiV1SubscriptionsSubscriptionIdProvidersProviderNamespaceResourceTypeResourceReadBeginPathParams.prototype, "resourceType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=subscriptionId" }),
        __metadata("design:type", String)
    ], PostApiV1SubscriptionsSubscriptionIdProvidersProviderNamespaceResourceTypeResourceReadBeginPathParams.prototype, "subscriptionId", void 0);
    return PostApiV1SubscriptionsSubscriptionIdProvidersProviderNamespaceResourceTypeResourceReadBeginPathParams;
}(SpeakeasyBase));
export { PostApiV1SubscriptionsSubscriptionIdProvidersProviderNamespaceResourceTypeResourceReadBeginPathParams };
var PostApiV1SubscriptionsSubscriptionIdProvidersProviderNamespaceResourceTypeResourceReadBeginRequests = /** @class */ (function (_super) {
    __extends(PostApiV1SubscriptionsSubscriptionIdProvidersProviderNamespaceResourceTypeResourceReadBeginRequests, _super);
    function PostApiV1SubscriptionsSubscriptionIdProvidersProviderNamespaceResourceTypeResourceReadBeginRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/*+json" }),
        __metadata("design:type", shared.PlanResourceList)
    ], PostApiV1SubscriptionsSubscriptionIdProvidersProviderNamespaceResourceTypeResourceReadBeginRequests.prototype, "planResourceList", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.PlanResourceList)
    ], PostApiV1SubscriptionsSubscriptionIdProvidersProviderNamespaceResourceTypeResourceReadBeginRequests.prototype, "planResourceList1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json-patch+json" }),
        __metadata("design:type", shared.PlanResourceList)
    ], PostApiV1SubscriptionsSubscriptionIdProvidersProviderNamespaceResourceTypeResourceReadBeginRequests.prototype, "planResourceList2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/json" }),
        __metadata("design:type", shared.PlanResourceList)
    ], PostApiV1SubscriptionsSubscriptionIdProvidersProviderNamespaceResourceTypeResourceReadBeginRequests.prototype, "planResourceList3", void 0);
    return PostApiV1SubscriptionsSubscriptionIdProvidersProviderNamespaceResourceTypeResourceReadBeginRequests;
}(SpeakeasyBase));
export { PostApiV1SubscriptionsSubscriptionIdProvidersProviderNamespaceResourceTypeResourceReadBeginRequests };
var PostApiV1SubscriptionsSubscriptionIdProvidersProviderNamespaceResourceTypeResourceReadBeginRequest = /** @class */ (function (_super) {
    __extends(PostApiV1SubscriptionsSubscriptionIdProvidersProviderNamespaceResourceTypeResourceReadBeginRequest, _super);
    function PostApiV1SubscriptionsSubscriptionIdProvidersProviderNamespaceResourceTypeResourceReadBeginRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostApiV1SubscriptionsSubscriptionIdProvidersProviderNamespaceResourceTypeResourceReadBeginPathParams)
    ], PostApiV1SubscriptionsSubscriptionIdProvidersProviderNamespaceResourceTypeResourceReadBeginRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostApiV1SubscriptionsSubscriptionIdProvidersProviderNamespaceResourceTypeResourceReadBeginRequests)
    ], PostApiV1SubscriptionsSubscriptionIdProvidersProviderNamespaceResourceTypeResourceReadBeginRequest.prototype, "request", void 0);
    return PostApiV1SubscriptionsSubscriptionIdProvidersProviderNamespaceResourceTypeResourceReadBeginRequest;
}(SpeakeasyBase));
export { PostApiV1SubscriptionsSubscriptionIdProvidersProviderNamespaceResourceTypeResourceReadBeginRequest };
var PostApiV1SubscriptionsSubscriptionIdProvidersProviderNamespaceResourceTypeResourceReadBeginResponse = /** @class */ (function (_super) {
    __extends(PostApiV1SubscriptionsSubscriptionIdProvidersProviderNamespaceResourceTypeResourceReadBeginResponse, _super);
    function PostApiV1SubscriptionsSubscriptionIdProvidersProviderNamespaceResourceTypeResourceReadBeginResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostApiV1SubscriptionsSubscriptionIdProvidersProviderNamespaceResourceTypeResourceReadBeginResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostApiV1SubscriptionsSubscriptionIdProvidersProviderNamespaceResourceTypeResourceReadBeginResponse.prototype, "statusCode", void 0);
    return PostApiV1SubscriptionsSubscriptionIdProvidersProviderNamespaceResourceTypeResourceReadBeginResponse;
}(SpeakeasyBase));
export { PostApiV1SubscriptionsSubscriptionIdProvidersProviderNamespaceResourceTypeResourceReadBeginResponse };
