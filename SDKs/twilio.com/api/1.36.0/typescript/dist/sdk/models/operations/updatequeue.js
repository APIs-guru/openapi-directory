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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export var UPDATEQUEUE_SERVERS = [
    "https://api.twilio.com",
];
var UpdateQueuePathParams = /** @class */ (function (_super) {
    __extends(UpdateQueuePathParams, _super);
    function UpdateQueuePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" }),
        __metadata("design:type", String)
    ], UpdateQueuePathParams.prototype, "accountSid", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], UpdateQueuePathParams.prototype, "sid", void 0);
    return UpdateQueuePathParams;
}(SpeakeasyBase));
export { UpdateQueuePathParams };
var UpdateQueueUpdateQueueRequest = /** @class */ (function (_super) {
    __extends(UpdateQueueUpdateQueueRequest, _super);
    function UpdateQueueUpdateQueueRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "form, name=FriendlyName;" }),
        __metadata("design:type", String)
    ], UpdateQueueUpdateQueueRequest.prototype, "friendlyName", void 0);
    __decorate([
        Metadata({ data: "form, name=MaxSize;" }),
        __metadata("design:type", Number)
    ], UpdateQueueUpdateQueueRequest.prototype, "maxSize", void 0);
    return UpdateQueueUpdateQueueRequest;
}(SpeakeasyBase));
export { UpdateQueueUpdateQueueRequest };
var UpdateQueueSecurity = /** @class */ (function (_super) {
    __extends(UpdateQueueSecurity, _super);
    function UpdateQueueSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], UpdateQueueSecurity.prototype, "accountSidAuthToken", void 0);
    return UpdateQueueSecurity;
}(SpeakeasyBase));
export { UpdateQueueSecurity };
var UpdateQueueRequest = /** @class */ (function (_super) {
    __extends(UpdateQueueRequest, _super);
    function UpdateQueueRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], UpdateQueueRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateQueuePathParams)
    ], UpdateQueueRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", UpdateQueueUpdateQueueRequest)
    ], UpdateQueueRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateQueueSecurity)
    ], UpdateQueueRequest.prototype, "security", void 0);
    return UpdateQueueRequest;
}(SpeakeasyBase));
export { UpdateQueueRequest };
var UpdateQueueResponse = /** @class */ (function (_super) {
    __extends(UpdateQueueResponse, _super);
    function UpdateQueueResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], UpdateQueueResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], UpdateQueueResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ApiV2010AccountQueue)
    ], UpdateQueueResponse.prototype, "apiV2010AccountQueue", void 0);
    return UpdateQueueResponse;
}(SpeakeasyBase));
export { UpdateQueueResponse };
