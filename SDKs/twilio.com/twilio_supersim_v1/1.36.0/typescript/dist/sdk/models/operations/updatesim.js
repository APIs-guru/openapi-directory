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
export var UPDATESIM_SERVERS = [
    "https://supersim.twilio.com",
];
var UpdateSimPathParams = /** @class */ (function (_super) {
    __extends(UpdateSimPathParams, _super);
    function UpdateSimPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], UpdateSimPathParams.prototype, "sid", void 0);
    return UpdateSimPathParams;
}(SpeakeasyBase));
export { UpdateSimPathParams };
export var UpdateSimUpdateSimRequestCallbackMethodEnum;
(function (UpdateSimUpdateSimRequestCallbackMethodEnum) {
    UpdateSimUpdateSimRequestCallbackMethodEnum["Head"] = "HEAD";
    UpdateSimUpdateSimRequestCallbackMethodEnum["Get"] = "GET";
    UpdateSimUpdateSimRequestCallbackMethodEnum["Post"] = "POST";
    UpdateSimUpdateSimRequestCallbackMethodEnum["Patch"] = "PATCH";
    UpdateSimUpdateSimRequestCallbackMethodEnum["Put"] = "PUT";
    UpdateSimUpdateSimRequestCallbackMethodEnum["Delete"] = "DELETE";
})(UpdateSimUpdateSimRequestCallbackMethodEnum || (UpdateSimUpdateSimRequestCallbackMethodEnum = {}));
var UpdateSimUpdateSimRequest = /** @class */ (function (_super) {
    __extends(UpdateSimUpdateSimRequest, _super);
    function UpdateSimUpdateSimRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "form, name=AccountSid;" }),
        __metadata("design:type", String)
    ], UpdateSimUpdateSimRequest.prototype, "accountSid", void 0);
    __decorate([
        Metadata({ data: "form, name=CallbackMethod;" }),
        __metadata("design:type", String)
    ], UpdateSimUpdateSimRequest.prototype, "callbackMethod", void 0);
    __decorate([
        Metadata({ data: "form, name=CallbackUrl;" }),
        __metadata("design:type", String)
    ], UpdateSimUpdateSimRequest.prototype, "callbackUrl", void 0);
    __decorate([
        Metadata({ data: "form, name=Fleet;" }),
        __metadata("design:type", String)
    ], UpdateSimUpdateSimRequest.prototype, "fleet", void 0);
    __decorate([
        Metadata({ data: "form, name=Status;" }),
        __metadata("design:type", String)
    ], UpdateSimUpdateSimRequest.prototype, "status", void 0);
    __decorate([
        Metadata({ data: "form, name=UniqueName;" }),
        __metadata("design:type", String)
    ], UpdateSimUpdateSimRequest.prototype, "uniqueName", void 0);
    return UpdateSimUpdateSimRequest;
}(SpeakeasyBase));
export { UpdateSimUpdateSimRequest };
var UpdateSimSecurity = /** @class */ (function (_super) {
    __extends(UpdateSimSecurity, _super);
    function UpdateSimSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], UpdateSimSecurity.prototype, "accountSidAuthToken", void 0);
    return UpdateSimSecurity;
}(SpeakeasyBase));
export { UpdateSimSecurity };
var UpdateSimRequest = /** @class */ (function (_super) {
    __extends(UpdateSimRequest, _super);
    function UpdateSimRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], UpdateSimRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateSimPathParams)
    ], UpdateSimRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", UpdateSimUpdateSimRequest)
    ], UpdateSimRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateSimSecurity)
    ], UpdateSimRequest.prototype, "security", void 0);
    return UpdateSimRequest;
}(SpeakeasyBase));
export { UpdateSimRequest };
var UpdateSimResponse = /** @class */ (function (_super) {
    __extends(UpdateSimResponse, _super);
    function UpdateSimResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], UpdateSimResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], UpdateSimResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.SupersimV1Sim)
    ], UpdateSimResponse.prototype, "supersimV1Sim", void 0);
    return UpdateSimResponse;
}(SpeakeasyBase));
export { UpdateSimResponse };
