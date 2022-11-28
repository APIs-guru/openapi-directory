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
export var UpdateTrunksServerList = [
    "https://routes.twilio.com",
];
var UpdateTrunksPathParams = /** @class */ (function (_super) {
    __extends(UpdateTrunksPathParams, _super);
    function UpdateTrunksPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=SipTrunkDomain" }),
        __metadata("design:type", String)
    ], UpdateTrunksPathParams.prototype, "sipTrunkDomain", void 0);
    return UpdateTrunksPathParams;
}(SpeakeasyBase));
export { UpdateTrunksPathParams };
var UpdateTrunksUpdateTrunksRequest = /** @class */ (function (_super) {
    __extends(UpdateTrunksUpdateTrunksRequest, _super);
    function UpdateTrunksUpdateTrunksRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "form, name=FriendlyName;" }),
        __metadata("design:type", String)
    ], UpdateTrunksUpdateTrunksRequest.prototype, "friendlyName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=VoiceRegion;" }),
        __metadata("design:type", String)
    ], UpdateTrunksUpdateTrunksRequest.prototype, "voiceRegion", void 0);
    return UpdateTrunksUpdateTrunksRequest;
}(SpeakeasyBase));
export { UpdateTrunksUpdateTrunksRequest };
var UpdateTrunksSecurity = /** @class */ (function (_super) {
    __extends(UpdateTrunksSecurity, _super);
    function UpdateTrunksSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], UpdateTrunksSecurity.prototype, "accountSidAuthToken", void 0);
    return UpdateTrunksSecurity;
}(SpeakeasyBase));
export { UpdateTrunksSecurity };
var UpdateTrunksRequest = /** @class */ (function (_super) {
    __extends(UpdateTrunksRequest, _super);
    function UpdateTrunksRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateTrunksRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateTrunksPathParams)
    ], UpdateTrunksRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", UpdateTrunksUpdateTrunksRequest)
    ], UpdateTrunksRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateTrunksSecurity)
    ], UpdateTrunksRequest.prototype, "security", void 0);
    return UpdateTrunksRequest;
}(SpeakeasyBase));
export { UpdateTrunksRequest };
var UpdateTrunksResponse = /** @class */ (function (_super) {
    __extends(UpdateTrunksResponse, _super);
    function UpdateTrunksResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateTrunksResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateTrunksResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.RoutesV2Trunks)
    ], UpdateTrunksResponse.prototype, "routesV2Trunks", void 0);
    return UpdateTrunksResponse;
}(SpeakeasyBase));
export { UpdateTrunksResponse };
