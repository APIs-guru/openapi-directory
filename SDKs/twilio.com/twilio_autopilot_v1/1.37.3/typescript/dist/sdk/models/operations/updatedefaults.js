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
export var UpdateDefaultsServerList = [
    "https://autopilot.twilio.com",
];
var UpdateDefaultsPathParams = /** @class */ (function (_super) {
    __extends(UpdateDefaultsPathParams, _super);
    function UpdateDefaultsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=AssistantSid" }),
        __metadata("design:type", String)
    ], UpdateDefaultsPathParams.prototype, "assistantSid", void 0);
    return UpdateDefaultsPathParams;
}(SpeakeasyBase));
export { UpdateDefaultsPathParams };
var UpdateDefaultsUpdateDefaultsRequest = /** @class */ (function (_super) {
    __extends(UpdateDefaultsUpdateDefaultsRequest, _super);
    function UpdateDefaultsUpdateDefaultsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Defaults;" }),
        __metadata("design:type", Object)
    ], UpdateDefaultsUpdateDefaultsRequest.prototype, "defaults", void 0);
    return UpdateDefaultsUpdateDefaultsRequest;
}(SpeakeasyBase));
export { UpdateDefaultsUpdateDefaultsRequest };
var UpdateDefaultsSecurity = /** @class */ (function (_super) {
    __extends(UpdateDefaultsSecurity, _super);
    function UpdateDefaultsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], UpdateDefaultsSecurity.prototype, "accountSidAuthToken", void 0);
    return UpdateDefaultsSecurity;
}(SpeakeasyBase));
export { UpdateDefaultsSecurity };
var UpdateDefaultsRequest = /** @class */ (function (_super) {
    __extends(UpdateDefaultsRequest, _super);
    function UpdateDefaultsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateDefaultsRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateDefaultsPathParams)
    ], UpdateDefaultsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", UpdateDefaultsUpdateDefaultsRequest)
    ], UpdateDefaultsRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateDefaultsSecurity)
    ], UpdateDefaultsRequest.prototype, "security", void 0);
    return UpdateDefaultsRequest;
}(SpeakeasyBase));
export { UpdateDefaultsRequest };
var UpdateDefaultsResponse = /** @class */ (function (_super) {
    __extends(UpdateDefaultsResponse, _super);
    function UpdateDefaultsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateDefaultsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateDefaultsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.AutopilotV1AssistantDefaults)
    ], UpdateDefaultsResponse.prototype, "autopilotV1AssistantDefaults", void 0);
    return UpdateDefaultsResponse;
}(SpeakeasyBase));
export { UpdateDefaultsResponse };
