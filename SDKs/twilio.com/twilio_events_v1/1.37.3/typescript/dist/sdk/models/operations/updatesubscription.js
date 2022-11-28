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
export var UpdateSubscriptionServerList = [
    "https://events.twilio.com",
];
var UpdateSubscriptionPathParams = /** @class */ (function (_super) {
    __extends(UpdateSubscriptionPathParams, _super);
    function UpdateSubscriptionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], UpdateSubscriptionPathParams.prototype, "sid", void 0);
    return UpdateSubscriptionPathParams;
}(SpeakeasyBase));
export { UpdateSubscriptionPathParams };
var UpdateSubscriptionUpdateSubscriptionRequest = /** @class */ (function (_super) {
    __extends(UpdateSubscriptionUpdateSubscriptionRequest, _super);
    function UpdateSubscriptionUpdateSubscriptionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Description;" }),
        __metadata("design:type", String)
    ], UpdateSubscriptionUpdateSubscriptionRequest.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=SinkSid;" }),
        __metadata("design:type", String)
    ], UpdateSubscriptionUpdateSubscriptionRequest.prototype, "sinkSid", void 0);
    return UpdateSubscriptionUpdateSubscriptionRequest;
}(SpeakeasyBase));
export { UpdateSubscriptionUpdateSubscriptionRequest };
var UpdateSubscriptionSecurity = /** @class */ (function (_super) {
    __extends(UpdateSubscriptionSecurity, _super);
    function UpdateSubscriptionSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], UpdateSubscriptionSecurity.prototype, "accountSidAuthToken", void 0);
    return UpdateSubscriptionSecurity;
}(SpeakeasyBase));
export { UpdateSubscriptionSecurity };
var UpdateSubscriptionRequest = /** @class */ (function (_super) {
    __extends(UpdateSubscriptionRequest, _super);
    function UpdateSubscriptionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateSubscriptionRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateSubscriptionPathParams)
    ], UpdateSubscriptionRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", UpdateSubscriptionUpdateSubscriptionRequest)
    ], UpdateSubscriptionRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateSubscriptionSecurity)
    ], UpdateSubscriptionRequest.prototype, "security", void 0);
    return UpdateSubscriptionRequest;
}(SpeakeasyBase));
export { UpdateSubscriptionRequest };
var UpdateSubscriptionResponse = /** @class */ (function (_super) {
    __extends(UpdateSubscriptionResponse, _super);
    function UpdateSubscriptionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateSubscriptionResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateSubscriptionResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.EventsV1Subscription)
    ], UpdateSubscriptionResponse.prototype, "eventsV1Subscription", void 0);
    return UpdateSubscriptionResponse;
}(SpeakeasyBase));
export { UpdateSubscriptionResponse };
