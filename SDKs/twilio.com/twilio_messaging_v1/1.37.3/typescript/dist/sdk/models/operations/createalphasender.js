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
export var CreateAlphaSenderServerList = [
    "https://messaging.twilio.com",
];
var CreateAlphaSenderPathParams = /** @class */ (function (_super) {
    __extends(CreateAlphaSenderPathParams, _super);
    function CreateAlphaSenderPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" }),
        __metadata("design:type", String)
    ], CreateAlphaSenderPathParams.prototype, "serviceSid", void 0);
    return CreateAlphaSenderPathParams;
}(SpeakeasyBase));
export { CreateAlphaSenderPathParams };
var CreateAlphaSenderCreateAlphaSenderRequest = /** @class */ (function (_super) {
    __extends(CreateAlphaSenderCreateAlphaSenderRequest, _super);
    function CreateAlphaSenderCreateAlphaSenderRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "form, name=AlphaSender;" }),
        __metadata("design:type", String)
    ], CreateAlphaSenderCreateAlphaSenderRequest.prototype, "alphaSender", void 0);
    return CreateAlphaSenderCreateAlphaSenderRequest;
}(SpeakeasyBase));
export { CreateAlphaSenderCreateAlphaSenderRequest };
var CreateAlphaSenderSecurity = /** @class */ (function (_super) {
    __extends(CreateAlphaSenderSecurity, _super);
    function CreateAlphaSenderSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], CreateAlphaSenderSecurity.prototype, "accountSidAuthToken", void 0);
    return CreateAlphaSenderSecurity;
}(SpeakeasyBase));
export { CreateAlphaSenderSecurity };
var CreateAlphaSenderRequest = /** @class */ (function (_super) {
    __extends(CreateAlphaSenderRequest, _super);
    function CreateAlphaSenderRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateAlphaSenderRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateAlphaSenderPathParams)
    ], CreateAlphaSenderRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", CreateAlphaSenderCreateAlphaSenderRequest)
    ], CreateAlphaSenderRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateAlphaSenderSecurity)
    ], CreateAlphaSenderRequest.prototype, "security", void 0);
    return CreateAlphaSenderRequest;
}(SpeakeasyBase));
export { CreateAlphaSenderRequest };
var CreateAlphaSenderResponse = /** @class */ (function (_super) {
    __extends(CreateAlphaSenderResponse, _super);
    function CreateAlphaSenderResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateAlphaSenderResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateAlphaSenderResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.MessagingV1ServiceAlphaSender)
    ], CreateAlphaSenderResponse.prototype, "messagingV1ServiceAlphaSender", void 0);
    return CreateAlphaSenderResponse;
}(SpeakeasyBase));
export { CreateAlphaSenderResponse };
