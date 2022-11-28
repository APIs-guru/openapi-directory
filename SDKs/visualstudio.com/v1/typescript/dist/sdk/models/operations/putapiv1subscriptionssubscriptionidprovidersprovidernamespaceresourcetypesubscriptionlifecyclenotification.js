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
var PutApiV1SubscriptionsSubscriptionIdProvidersProviderNamespaceResourceTypeSubscriptionLifeCycleNotificationPathParams = /** @class */ (function (_super) {
    __extends(PutApiV1SubscriptionsSubscriptionIdProvidersProviderNamespaceResourceTypeSubscriptionLifeCycleNotificationPathParams, _super);
    function PutApiV1SubscriptionsSubscriptionIdProvidersProviderNamespaceResourceTypeSubscriptionLifeCycleNotificationPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=providerNamespace" }),
        __metadata("design:type", String)
    ], PutApiV1SubscriptionsSubscriptionIdProvidersProviderNamespaceResourceTypeSubscriptionLifeCycleNotificationPathParams.prototype, "providerNamespace", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=resourceType" }),
        __metadata("design:type", String)
    ], PutApiV1SubscriptionsSubscriptionIdProvidersProviderNamespaceResourceTypeSubscriptionLifeCycleNotificationPathParams.prototype, "resourceType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=subscriptionId" }),
        __metadata("design:type", String)
    ], PutApiV1SubscriptionsSubscriptionIdProvidersProviderNamespaceResourceTypeSubscriptionLifeCycleNotificationPathParams.prototype, "subscriptionId", void 0);
    return PutApiV1SubscriptionsSubscriptionIdProvidersProviderNamespaceResourceTypeSubscriptionLifeCycleNotificationPathParams;
}(SpeakeasyBase));
export { PutApiV1SubscriptionsSubscriptionIdProvidersProviderNamespaceResourceTypeSubscriptionLifeCycleNotificationPathParams };
var PutApiV1SubscriptionsSubscriptionIdProvidersProviderNamespaceResourceTypeSubscriptionLifeCycleNotificationRequests = /** @class */ (function (_super) {
    __extends(PutApiV1SubscriptionsSubscriptionIdProvidersProviderNamespaceResourceTypeSubscriptionLifeCycleNotificationRequests, _super);
    function PutApiV1SubscriptionsSubscriptionIdProvidersProviderNamespaceResourceTypeSubscriptionLifeCycleNotificationRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/*+json" }),
        __metadata("design:type", shared.RpSubscriptionNotification)
    ], PutApiV1SubscriptionsSubscriptionIdProvidersProviderNamespaceResourceTypeSubscriptionLifeCycleNotificationRequests.prototype, "rpSubscriptionNotification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.RpSubscriptionNotification)
    ], PutApiV1SubscriptionsSubscriptionIdProvidersProviderNamespaceResourceTypeSubscriptionLifeCycleNotificationRequests.prototype, "rpSubscriptionNotification1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json-patch+json" }),
        __metadata("design:type", shared.RpSubscriptionNotification)
    ], PutApiV1SubscriptionsSubscriptionIdProvidersProviderNamespaceResourceTypeSubscriptionLifeCycleNotificationRequests.prototype, "rpSubscriptionNotification2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/json" }),
        __metadata("design:type", shared.RpSubscriptionNotification)
    ], PutApiV1SubscriptionsSubscriptionIdProvidersProviderNamespaceResourceTypeSubscriptionLifeCycleNotificationRequests.prototype, "rpSubscriptionNotification3", void 0);
    return PutApiV1SubscriptionsSubscriptionIdProvidersProviderNamespaceResourceTypeSubscriptionLifeCycleNotificationRequests;
}(SpeakeasyBase));
export { PutApiV1SubscriptionsSubscriptionIdProvidersProviderNamespaceResourceTypeSubscriptionLifeCycleNotificationRequests };
var PutApiV1SubscriptionsSubscriptionIdProvidersProviderNamespaceResourceTypeSubscriptionLifeCycleNotificationRequest = /** @class */ (function (_super) {
    __extends(PutApiV1SubscriptionsSubscriptionIdProvidersProviderNamespaceResourceTypeSubscriptionLifeCycleNotificationRequest, _super);
    function PutApiV1SubscriptionsSubscriptionIdProvidersProviderNamespaceResourceTypeSubscriptionLifeCycleNotificationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutApiV1SubscriptionsSubscriptionIdProvidersProviderNamespaceResourceTypeSubscriptionLifeCycleNotificationPathParams)
    ], PutApiV1SubscriptionsSubscriptionIdProvidersProviderNamespaceResourceTypeSubscriptionLifeCycleNotificationRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutApiV1SubscriptionsSubscriptionIdProvidersProviderNamespaceResourceTypeSubscriptionLifeCycleNotificationRequests)
    ], PutApiV1SubscriptionsSubscriptionIdProvidersProviderNamespaceResourceTypeSubscriptionLifeCycleNotificationRequest.prototype, "request", void 0);
    return PutApiV1SubscriptionsSubscriptionIdProvidersProviderNamespaceResourceTypeSubscriptionLifeCycleNotificationRequest;
}(SpeakeasyBase));
export { PutApiV1SubscriptionsSubscriptionIdProvidersProviderNamespaceResourceTypeSubscriptionLifeCycleNotificationRequest };
var PutApiV1SubscriptionsSubscriptionIdProvidersProviderNamespaceResourceTypeSubscriptionLifeCycleNotificationResponse = /** @class */ (function (_super) {
    __extends(PutApiV1SubscriptionsSubscriptionIdProvidersProviderNamespaceResourceTypeSubscriptionLifeCycleNotificationResponse, _super);
    function PutApiV1SubscriptionsSubscriptionIdProvidersProviderNamespaceResourceTypeSubscriptionLifeCycleNotificationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PutApiV1SubscriptionsSubscriptionIdProvidersProviderNamespaceResourceTypeSubscriptionLifeCycleNotificationResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PutApiV1SubscriptionsSubscriptionIdProvidersProviderNamespaceResourceTypeSubscriptionLifeCycleNotificationResponse.prototype, "statusCode", void 0);
    return PutApiV1SubscriptionsSubscriptionIdProvidersProviderNamespaceResourceTypeSubscriptionLifeCycleNotificationResponse;
}(SpeakeasyBase));
export { PutApiV1SubscriptionsSubscriptionIdProvidersProviderNamespaceResourceTypeSubscriptionLifeCycleNotificationResponse };
