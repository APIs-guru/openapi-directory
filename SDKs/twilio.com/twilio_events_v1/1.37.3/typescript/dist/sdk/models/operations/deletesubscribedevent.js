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
export var DeleteSubscribedEventServerList = [
    "https://events.twilio.com",
];
var DeleteSubscribedEventPathParams = /** @class */ (function (_super) {
    __extends(DeleteSubscribedEventPathParams, _super);
    function DeleteSubscribedEventPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=SubscriptionSid" }),
        __metadata("design:type", String)
    ], DeleteSubscribedEventPathParams.prototype, "subscriptionSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Type" }),
        __metadata("design:type", String)
    ], DeleteSubscribedEventPathParams.prototype, "type", void 0);
    return DeleteSubscribedEventPathParams;
}(SpeakeasyBase));
export { DeleteSubscribedEventPathParams };
var DeleteSubscribedEventSecurity = /** @class */ (function (_super) {
    __extends(DeleteSubscribedEventSecurity, _super);
    function DeleteSubscribedEventSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], DeleteSubscribedEventSecurity.prototype, "accountSidAuthToken", void 0);
    return DeleteSubscribedEventSecurity;
}(SpeakeasyBase));
export { DeleteSubscribedEventSecurity };
var DeleteSubscribedEventRequest = /** @class */ (function (_super) {
    __extends(DeleteSubscribedEventRequest, _super);
    function DeleteSubscribedEventRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteSubscribedEventRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteSubscribedEventPathParams)
    ], DeleteSubscribedEventRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteSubscribedEventSecurity)
    ], DeleteSubscribedEventRequest.prototype, "security", void 0);
    return DeleteSubscribedEventRequest;
}(SpeakeasyBase));
export { DeleteSubscribedEventRequest };
var DeleteSubscribedEventResponse = /** @class */ (function (_super) {
    __extends(DeleteSubscribedEventResponse, _super);
    function DeleteSubscribedEventResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteSubscribedEventResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeleteSubscribedEventResponse.prototype, "statusCode", void 0);
    return DeleteSubscribedEventResponse;
}(SpeakeasyBase));
export { DeleteSubscribedEventResponse };
