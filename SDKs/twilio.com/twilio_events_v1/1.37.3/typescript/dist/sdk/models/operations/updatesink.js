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
export var UpdateSinkServerList = [
    "https://events.twilio.com",
];
var UpdateSinkPathParams = /** @class */ (function (_super) {
    __extends(UpdateSinkPathParams, _super);
    function UpdateSinkPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], UpdateSinkPathParams.prototype, "sid", void 0);
    return UpdateSinkPathParams;
}(SpeakeasyBase));
export { UpdateSinkPathParams };
var UpdateSinkUpdateSinkRequest = /** @class */ (function (_super) {
    __extends(UpdateSinkUpdateSinkRequest, _super);
    function UpdateSinkUpdateSinkRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Description;" }),
        __metadata("design:type", String)
    ], UpdateSinkUpdateSinkRequest.prototype, "description", void 0);
    return UpdateSinkUpdateSinkRequest;
}(SpeakeasyBase));
export { UpdateSinkUpdateSinkRequest };
var UpdateSinkSecurity = /** @class */ (function (_super) {
    __extends(UpdateSinkSecurity, _super);
    function UpdateSinkSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], UpdateSinkSecurity.prototype, "accountSidAuthToken", void 0);
    return UpdateSinkSecurity;
}(SpeakeasyBase));
export { UpdateSinkSecurity };
var UpdateSinkRequest = /** @class */ (function (_super) {
    __extends(UpdateSinkRequest, _super);
    function UpdateSinkRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateSinkRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateSinkPathParams)
    ], UpdateSinkRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", UpdateSinkUpdateSinkRequest)
    ], UpdateSinkRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateSinkSecurity)
    ], UpdateSinkRequest.prototype, "security", void 0);
    return UpdateSinkRequest;
}(SpeakeasyBase));
export { UpdateSinkRequest };
var UpdateSinkResponse = /** @class */ (function (_super) {
    __extends(UpdateSinkResponse, _super);
    function UpdateSinkResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateSinkResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateSinkResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.EventsV1Sink)
    ], UpdateSinkResponse.prototype, "eventsV1Sink", void 0);
    return UpdateSinkResponse;
}(SpeakeasyBase));
export { UpdateSinkResponse };
