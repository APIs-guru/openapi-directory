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
export var UpdateSubscribedEventServerList = [
    "https://events.twilio.com",
];
var UpdateSubscribedEventPathParams = /** @class */ (function (_super) {
    __extends(UpdateSubscribedEventPathParams, _super);
    function UpdateSubscribedEventPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=SubscriptionSid" }),
        __metadata("design:type", String)
    ], UpdateSubscribedEventPathParams.prototype, "subscriptionSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Type" }),
        __metadata("design:type", String)
    ], UpdateSubscribedEventPathParams.prototype, "type", void 0);
    return UpdateSubscribedEventPathParams;
}(SpeakeasyBase));
export { UpdateSubscribedEventPathParams };
var UpdateSubscribedEventUpdateSubscribedEventRequest = /** @class */ (function (_super) {
    __extends(UpdateSubscribedEventUpdateSubscribedEventRequest, _super);
    function UpdateSubscribedEventUpdateSubscribedEventRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "form, name=SchemaVersion;" }),
        __metadata("design:type", Number)
    ], UpdateSubscribedEventUpdateSubscribedEventRequest.prototype, "schemaVersion", void 0);
    return UpdateSubscribedEventUpdateSubscribedEventRequest;
}(SpeakeasyBase));
export { UpdateSubscribedEventUpdateSubscribedEventRequest };
var UpdateSubscribedEventSecurity = /** @class */ (function (_super) {
    __extends(UpdateSubscribedEventSecurity, _super);
    function UpdateSubscribedEventSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], UpdateSubscribedEventSecurity.prototype, "accountSidAuthToken", void 0);
    return UpdateSubscribedEventSecurity;
}(SpeakeasyBase));
export { UpdateSubscribedEventSecurity };
var UpdateSubscribedEventRequest = /** @class */ (function (_super) {
    __extends(UpdateSubscribedEventRequest, _super);
    function UpdateSubscribedEventRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateSubscribedEventRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateSubscribedEventPathParams)
    ], UpdateSubscribedEventRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", UpdateSubscribedEventUpdateSubscribedEventRequest)
    ], UpdateSubscribedEventRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateSubscribedEventSecurity)
    ], UpdateSubscribedEventRequest.prototype, "security", void 0);
    return UpdateSubscribedEventRequest;
}(SpeakeasyBase));
export { UpdateSubscribedEventRequest };
var UpdateSubscribedEventResponse = /** @class */ (function (_super) {
    __extends(UpdateSubscribedEventResponse, _super);
    function UpdateSubscribedEventResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateSubscribedEventResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateSubscribedEventResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.EventsV1SubscriptionSubscribedEvent)
    ], UpdateSubscribedEventResponse.prototype, "eventsV1SubscriptionSubscribedEvent", void 0);
    return UpdateSubscribedEventResponse;
}(SpeakeasyBase));
export { UpdateSubscribedEventResponse };
