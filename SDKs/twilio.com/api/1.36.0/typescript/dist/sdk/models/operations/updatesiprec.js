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
export var UPDATESIPREC_SERVERS = [
    "https://api.twilio.com",
];
var UpdateSiprecPathParams = /** @class */ (function (_super) {
    __extends(UpdateSiprecPathParams, _super);
    function UpdateSiprecPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" }),
        __metadata("design:type", String)
    ], UpdateSiprecPathParams.prototype, "accountSid", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=CallSid" }),
        __metadata("design:type", String)
    ], UpdateSiprecPathParams.prototype, "callSid", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], UpdateSiprecPathParams.prototype, "sid", void 0);
    return UpdateSiprecPathParams;
}(SpeakeasyBase));
export { UpdateSiprecPathParams };
var UpdateSiprecUpdateSiprecRequest = /** @class */ (function (_super) {
    __extends(UpdateSiprecUpdateSiprecRequest, _super);
    function UpdateSiprecUpdateSiprecRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "form, name=Status;" }),
        __metadata("design:type", String)
    ], UpdateSiprecUpdateSiprecRequest.prototype, "status", void 0);
    return UpdateSiprecUpdateSiprecRequest;
}(SpeakeasyBase));
export { UpdateSiprecUpdateSiprecRequest };
var UpdateSiprecSecurity = /** @class */ (function (_super) {
    __extends(UpdateSiprecSecurity, _super);
    function UpdateSiprecSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], UpdateSiprecSecurity.prototype, "accountSidAuthToken", void 0);
    return UpdateSiprecSecurity;
}(SpeakeasyBase));
export { UpdateSiprecSecurity };
var UpdateSiprecRequest = /** @class */ (function (_super) {
    __extends(UpdateSiprecRequest, _super);
    function UpdateSiprecRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], UpdateSiprecRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateSiprecPathParams)
    ], UpdateSiprecRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", UpdateSiprecUpdateSiprecRequest)
    ], UpdateSiprecRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateSiprecSecurity)
    ], UpdateSiprecRequest.prototype, "security", void 0);
    return UpdateSiprecRequest;
}(SpeakeasyBase));
export { UpdateSiprecRequest };
var UpdateSiprecResponse = /** @class */ (function (_super) {
    __extends(UpdateSiprecResponse, _super);
    function UpdateSiprecResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], UpdateSiprecResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], UpdateSiprecResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ApiV2010AccountCallSiprec)
    ], UpdateSiprecResponse.prototype, "apiV2010AccountCallSiprec", void 0);
    return UpdateSiprecResponse;
}(SpeakeasyBase));
export { UpdateSiprecResponse };
