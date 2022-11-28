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
export var FetchSubscribedEventServerList = [
    "https://events.twilio.com",
];
var FetchSubscribedEventPathParams = /** @class */ (function (_super) {
    __extends(FetchSubscribedEventPathParams, _super);
    function FetchSubscribedEventPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=SubscriptionSid" }),
        __metadata("design:type", String)
    ], FetchSubscribedEventPathParams.prototype, "subscriptionSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Type" }),
        __metadata("design:type", String)
    ], FetchSubscribedEventPathParams.prototype, "type", void 0);
    return FetchSubscribedEventPathParams;
}(SpeakeasyBase));
export { FetchSubscribedEventPathParams };
var FetchSubscribedEventSecurity = /** @class */ (function (_super) {
    __extends(FetchSubscribedEventSecurity, _super);
    function FetchSubscribedEventSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], FetchSubscribedEventSecurity.prototype, "accountSidAuthToken", void 0);
    return FetchSubscribedEventSecurity;
}(SpeakeasyBase));
export { FetchSubscribedEventSecurity };
var FetchSubscribedEventRequest = /** @class */ (function (_super) {
    __extends(FetchSubscribedEventRequest, _super);
    function FetchSubscribedEventRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FetchSubscribedEventRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FetchSubscribedEventPathParams)
    ], FetchSubscribedEventRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FetchSubscribedEventSecurity)
    ], FetchSubscribedEventRequest.prototype, "security", void 0);
    return FetchSubscribedEventRequest;
}(SpeakeasyBase));
export { FetchSubscribedEventRequest };
var FetchSubscribedEventResponse = /** @class */ (function (_super) {
    __extends(FetchSubscribedEventResponse, _super);
    function FetchSubscribedEventResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FetchSubscribedEventResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], FetchSubscribedEventResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.EventsV1SubscriptionSubscribedEvent)
    ], FetchSubscribedEventResponse.prototype, "eventsV1SubscriptionSubscribedEvent", void 0);
    return FetchSubscribedEventResponse;
}(SpeakeasyBase));
export { FetchSubscribedEventResponse };
