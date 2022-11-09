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
export var UPDATERATEPLAN_SERVERS = [
    "https://wireless.twilio.com",
];
var UpdateRatePlanPathParams = /** @class */ (function (_super) {
    __extends(UpdateRatePlanPathParams, _super);
    function UpdateRatePlanPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], UpdateRatePlanPathParams.prototype, "sid", void 0);
    return UpdateRatePlanPathParams;
}(SpeakeasyBase));
export { UpdateRatePlanPathParams };
var UpdateRatePlanUpdateRatePlanRequest = /** @class */ (function (_super) {
    __extends(UpdateRatePlanUpdateRatePlanRequest, _super);
    function UpdateRatePlanUpdateRatePlanRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "form, name=FriendlyName;" }),
        __metadata("design:type", String)
    ], UpdateRatePlanUpdateRatePlanRequest.prototype, "friendlyName", void 0);
    __decorate([
        Metadata({ data: "form, name=UniqueName;" }),
        __metadata("design:type", String)
    ], UpdateRatePlanUpdateRatePlanRequest.prototype, "uniqueName", void 0);
    return UpdateRatePlanUpdateRatePlanRequest;
}(SpeakeasyBase));
export { UpdateRatePlanUpdateRatePlanRequest };
var UpdateRatePlanSecurity = /** @class */ (function (_super) {
    __extends(UpdateRatePlanSecurity, _super);
    function UpdateRatePlanSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], UpdateRatePlanSecurity.prototype, "accountSidAuthToken", void 0);
    return UpdateRatePlanSecurity;
}(SpeakeasyBase));
export { UpdateRatePlanSecurity };
var UpdateRatePlanRequest = /** @class */ (function (_super) {
    __extends(UpdateRatePlanRequest, _super);
    function UpdateRatePlanRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], UpdateRatePlanRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateRatePlanPathParams)
    ], UpdateRatePlanRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", UpdateRatePlanUpdateRatePlanRequest)
    ], UpdateRatePlanRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateRatePlanSecurity)
    ], UpdateRatePlanRequest.prototype, "security", void 0);
    return UpdateRatePlanRequest;
}(SpeakeasyBase));
export { UpdateRatePlanRequest };
var UpdateRatePlanResponse = /** @class */ (function (_super) {
    __extends(UpdateRatePlanResponse, _super);
    function UpdateRatePlanResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], UpdateRatePlanResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], UpdateRatePlanResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.WirelessV1RatePlan)
    ], UpdateRatePlanResponse.prototype, "wirelessV1RatePlan", void 0);
    return UpdateRatePlanResponse;
}(SpeakeasyBase));
export { UpdateRatePlanResponse };
