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
export var UpdateUsageTriggerServerList = [
    "https://api.twilio.com",
];
var UpdateUsageTriggerPathParams = /** @class */ (function (_super) {
    __extends(UpdateUsageTriggerPathParams, _super);
    function UpdateUsageTriggerPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" }),
        __metadata("design:type", String)
    ], UpdateUsageTriggerPathParams.prototype, "accountSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], UpdateUsageTriggerPathParams.prototype, "sid", void 0);
    return UpdateUsageTriggerPathParams;
}(SpeakeasyBase));
export { UpdateUsageTriggerPathParams };
export var UpdateUsageTriggerUpdateUsageTriggerRequestCallbackMethodEnum;
(function (UpdateUsageTriggerUpdateUsageTriggerRequestCallbackMethodEnum) {
    UpdateUsageTriggerUpdateUsageTriggerRequestCallbackMethodEnum["Head"] = "HEAD";
    UpdateUsageTriggerUpdateUsageTriggerRequestCallbackMethodEnum["Get"] = "GET";
    UpdateUsageTriggerUpdateUsageTriggerRequestCallbackMethodEnum["Post"] = "POST";
    UpdateUsageTriggerUpdateUsageTriggerRequestCallbackMethodEnum["Patch"] = "PATCH";
    UpdateUsageTriggerUpdateUsageTriggerRequestCallbackMethodEnum["Put"] = "PUT";
    UpdateUsageTriggerUpdateUsageTriggerRequestCallbackMethodEnum["Delete"] = "DELETE";
})(UpdateUsageTriggerUpdateUsageTriggerRequestCallbackMethodEnum || (UpdateUsageTriggerUpdateUsageTriggerRequestCallbackMethodEnum = {}));
var UpdateUsageTriggerUpdateUsageTriggerRequest = /** @class */ (function (_super) {
    __extends(UpdateUsageTriggerUpdateUsageTriggerRequest, _super);
    function UpdateUsageTriggerUpdateUsageTriggerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "form, name=CallbackMethod;" }),
        __metadata("design:type", String)
    ], UpdateUsageTriggerUpdateUsageTriggerRequest.prototype, "callbackMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=CallbackUrl;" }),
        __metadata("design:type", String)
    ], UpdateUsageTriggerUpdateUsageTriggerRequest.prototype, "callbackUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=FriendlyName;" }),
        __metadata("design:type", String)
    ], UpdateUsageTriggerUpdateUsageTriggerRequest.prototype, "friendlyName", void 0);
    return UpdateUsageTriggerUpdateUsageTriggerRequest;
}(SpeakeasyBase));
export { UpdateUsageTriggerUpdateUsageTriggerRequest };
var UpdateUsageTriggerSecurity = /** @class */ (function (_super) {
    __extends(UpdateUsageTriggerSecurity, _super);
    function UpdateUsageTriggerSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], UpdateUsageTriggerSecurity.prototype, "accountSidAuthToken", void 0);
    return UpdateUsageTriggerSecurity;
}(SpeakeasyBase));
export { UpdateUsageTriggerSecurity };
var UpdateUsageTriggerRequest = /** @class */ (function (_super) {
    __extends(UpdateUsageTriggerRequest, _super);
    function UpdateUsageTriggerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateUsageTriggerRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateUsageTriggerPathParams)
    ], UpdateUsageTriggerRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", UpdateUsageTriggerUpdateUsageTriggerRequest)
    ], UpdateUsageTriggerRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateUsageTriggerSecurity)
    ], UpdateUsageTriggerRequest.prototype, "security", void 0);
    return UpdateUsageTriggerRequest;
}(SpeakeasyBase));
export { UpdateUsageTriggerRequest };
var UpdateUsageTriggerResponse = /** @class */ (function (_super) {
    __extends(UpdateUsageTriggerResponse, _super);
    function UpdateUsageTriggerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateUsageTriggerResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateUsageTriggerResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ApiV2010AccountUsageUsageTrigger)
    ], UpdateUsageTriggerResponse.prototype, "apiV2010AccountUsageUsageTrigger", void 0);
    return UpdateUsageTriggerResponse;
}(SpeakeasyBase));
export { UpdateUsageTriggerResponse };
