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
export var UpdateMediaProcessorServerList = [
    "https://media.twilio.com",
];
var UpdateMediaProcessorPathParams = /** @class */ (function (_super) {
    __extends(UpdateMediaProcessorPathParams, _super);
    function UpdateMediaProcessorPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], UpdateMediaProcessorPathParams.prototype, "sid", void 0);
    return UpdateMediaProcessorPathParams;
}(SpeakeasyBase));
export { UpdateMediaProcessorPathParams };
var UpdateMediaProcessorUpdateMediaProcessorRequest = /** @class */ (function (_super) {
    __extends(UpdateMediaProcessorUpdateMediaProcessorRequest, _super);
    function UpdateMediaProcessorUpdateMediaProcessorRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Status;" }),
        __metadata("design:type", String)
    ], UpdateMediaProcessorUpdateMediaProcessorRequest.prototype, "status", void 0);
    return UpdateMediaProcessorUpdateMediaProcessorRequest;
}(SpeakeasyBase));
export { UpdateMediaProcessorUpdateMediaProcessorRequest };
var UpdateMediaProcessorSecurity = /** @class */ (function (_super) {
    __extends(UpdateMediaProcessorSecurity, _super);
    function UpdateMediaProcessorSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], UpdateMediaProcessorSecurity.prototype, "accountSidAuthToken", void 0);
    return UpdateMediaProcessorSecurity;
}(SpeakeasyBase));
export { UpdateMediaProcessorSecurity };
var UpdateMediaProcessorRequest = /** @class */ (function (_super) {
    __extends(UpdateMediaProcessorRequest, _super);
    function UpdateMediaProcessorRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateMediaProcessorRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateMediaProcessorPathParams)
    ], UpdateMediaProcessorRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", UpdateMediaProcessorUpdateMediaProcessorRequest)
    ], UpdateMediaProcessorRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateMediaProcessorSecurity)
    ], UpdateMediaProcessorRequest.prototype, "security", void 0);
    return UpdateMediaProcessorRequest;
}(SpeakeasyBase));
export { UpdateMediaProcessorRequest };
var UpdateMediaProcessorResponse = /** @class */ (function (_super) {
    __extends(UpdateMediaProcessorResponse, _super);
    function UpdateMediaProcessorResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateMediaProcessorResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateMediaProcessorResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.MediaV1MediaProcessor)
    ], UpdateMediaProcessorResponse.prototype, "mediaV1MediaProcessor", void 0);
    return UpdateMediaProcessorResponse;
}(SpeakeasyBase));
export { UpdateMediaProcessorResponse };
