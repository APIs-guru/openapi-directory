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
var PutSubscriptionsSubscriptionIdProfilePathParams = /** @class */ (function (_super) {
    __extends(PutSubscriptionsSubscriptionIdProfilePathParams, _super);
    function PutSubscriptionsSubscriptionIdProfilePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=subscriptionId" }),
        __metadata("design:type", String)
    ], PutSubscriptionsSubscriptionIdProfilePathParams.prototype, "subscriptionId", void 0);
    return PutSubscriptionsSubscriptionIdProfilePathParams;
}(SpeakeasyBase));
export { PutSubscriptionsSubscriptionIdProfilePathParams };
var PutSubscriptionsSubscriptionIdProfileRequests = /** @class */ (function (_super) {
    __extends(PutSubscriptionsSubscriptionIdProfileRequests, _super);
    function PutSubscriptionsSubscriptionIdProfileRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/*+json" }),
        __metadata("design:type", shared.SubscriptionProfile)
    ], PutSubscriptionsSubscriptionIdProfileRequests.prototype, "subscriptionProfile", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.SubscriptionProfile)
    ], PutSubscriptionsSubscriptionIdProfileRequests.prototype, "subscriptionProfile1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json-patch+json" }),
        __metadata("design:type", shared.SubscriptionProfile)
    ], PutSubscriptionsSubscriptionIdProfileRequests.prototype, "subscriptionProfile2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/json" }),
        __metadata("design:type", shared.SubscriptionProfile)
    ], PutSubscriptionsSubscriptionIdProfileRequests.prototype, "subscriptionProfile3", void 0);
    return PutSubscriptionsSubscriptionIdProfileRequests;
}(SpeakeasyBase));
export { PutSubscriptionsSubscriptionIdProfileRequests };
var PutSubscriptionsSubscriptionIdProfileRequest = /** @class */ (function (_super) {
    __extends(PutSubscriptionsSubscriptionIdProfileRequest, _super);
    function PutSubscriptionsSubscriptionIdProfileRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutSubscriptionsSubscriptionIdProfilePathParams)
    ], PutSubscriptionsSubscriptionIdProfileRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutSubscriptionsSubscriptionIdProfileRequests)
    ], PutSubscriptionsSubscriptionIdProfileRequest.prototype, "request", void 0);
    return PutSubscriptionsSubscriptionIdProfileRequest;
}(SpeakeasyBase));
export { PutSubscriptionsSubscriptionIdProfileRequest };
var PutSubscriptionsSubscriptionIdProfileResponse = /** @class */ (function (_super) {
    __extends(PutSubscriptionsSubscriptionIdProfileResponse, _super);
    function PutSubscriptionsSubscriptionIdProfileResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PutSubscriptionsSubscriptionIdProfileResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PutSubscriptionsSubscriptionIdProfileResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponseContent)
    ], PutSubscriptionsSubscriptionIdProfileResponse.prototype, "errorResponseContent", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PutSubscriptionsSubscriptionIdProfileResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.SubscriptionInfo)
    ], PutSubscriptionsSubscriptionIdProfileResponse.prototype, "subscriptionInfo", void 0);
    return PutSubscriptionsSubscriptionIdProfileResponse;
}(SpeakeasyBase));
export { PutSubscriptionsSubscriptionIdProfileResponse };
