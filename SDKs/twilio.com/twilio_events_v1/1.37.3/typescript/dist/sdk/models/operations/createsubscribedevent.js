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
export var CreateSubscribedEventServerList = [
    "https://events.twilio.com",
];
var CreateSubscribedEventPathParams = /** @class */ (function (_super) {
    __extends(CreateSubscribedEventPathParams, _super);
    function CreateSubscribedEventPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=SubscriptionSid" }),
        __metadata("design:type", String)
    ], CreateSubscribedEventPathParams.prototype, "subscriptionSid", void 0);
    return CreateSubscribedEventPathParams;
}(SpeakeasyBase));
export { CreateSubscribedEventPathParams };
var CreateSubscribedEventCreateSubscribedEventRequest = /** @class */ (function (_super) {
    __extends(CreateSubscribedEventCreateSubscribedEventRequest, _super);
    function CreateSubscribedEventCreateSubscribedEventRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "form, name=SchemaVersion;" }),
        __metadata("design:type", Number)
    ], CreateSubscribedEventCreateSubscribedEventRequest.prototype, "schemaVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Type;" }),
        __metadata("design:type", String)
    ], CreateSubscribedEventCreateSubscribedEventRequest.prototype, "type", void 0);
    return CreateSubscribedEventCreateSubscribedEventRequest;
}(SpeakeasyBase));
export { CreateSubscribedEventCreateSubscribedEventRequest };
var CreateSubscribedEventSecurity = /** @class */ (function (_super) {
    __extends(CreateSubscribedEventSecurity, _super);
    function CreateSubscribedEventSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], CreateSubscribedEventSecurity.prototype, "accountSidAuthToken", void 0);
    return CreateSubscribedEventSecurity;
}(SpeakeasyBase));
export { CreateSubscribedEventSecurity };
var CreateSubscribedEventRequest = /** @class */ (function (_super) {
    __extends(CreateSubscribedEventRequest, _super);
    function CreateSubscribedEventRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateSubscribedEventRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateSubscribedEventPathParams)
    ], CreateSubscribedEventRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", CreateSubscribedEventCreateSubscribedEventRequest)
    ], CreateSubscribedEventRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateSubscribedEventSecurity)
    ], CreateSubscribedEventRequest.prototype, "security", void 0);
    return CreateSubscribedEventRequest;
}(SpeakeasyBase));
export { CreateSubscribedEventRequest };
var CreateSubscribedEventResponse = /** @class */ (function (_super) {
    __extends(CreateSubscribedEventResponse, _super);
    function CreateSubscribedEventResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateSubscribedEventResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateSubscribedEventResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.EventsV1SubscriptionSubscribedEvent)
    ], CreateSubscribedEventResponse.prototype, "eventsV1SubscriptionSubscribedEvent", void 0);
    return CreateSubscribedEventResponse;
}(SpeakeasyBase));
export { CreateSubscribedEventResponse };
