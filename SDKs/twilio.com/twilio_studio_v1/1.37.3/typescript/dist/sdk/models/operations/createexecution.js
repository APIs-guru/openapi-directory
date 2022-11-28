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
export var CreateExecutionServerList = [
    "https://studio.twilio.com",
];
var CreateExecutionPathParams = /** @class */ (function (_super) {
    __extends(CreateExecutionPathParams, _super);
    function CreateExecutionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=FlowSid" }),
        __metadata("design:type", String)
    ], CreateExecutionPathParams.prototype, "flowSid", void 0);
    return CreateExecutionPathParams;
}(SpeakeasyBase));
export { CreateExecutionPathParams };
var CreateExecutionCreateExecutionRequest = /** @class */ (function (_super) {
    __extends(CreateExecutionCreateExecutionRequest, _super);
    function CreateExecutionCreateExecutionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "form, name=From;" }),
        __metadata("design:type", String)
    ], CreateExecutionCreateExecutionRequest.prototype, "from", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Parameters;" }),
        __metadata("design:type", Object)
    ], CreateExecutionCreateExecutionRequest.prototype, "parameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=To;" }),
        __metadata("design:type", String)
    ], CreateExecutionCreateExecutionRequest.prototype, "to", void 0);
    return CreateExecutionCreateExecutionRequest;
}(SpeakeasyBase));
export { CreateExecutionCreateExecutionRequest };
var CreateExecutionSecurity = /** @class */ (function (_super) {
    __extends(CreateExecutionSecurity, _super);
    function CreateExecutionSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], CreateExecutionSecurity.prototype, "accountSidAuthToken", void 0);
    return CreateExecutionSecurity;
}(SpeakeasyBase));
export { CreateExecutionSecurity };
var CreateExecutionRequest = /** @class */ (function (_super) {
    __extends(CreateExecutionRequest, _super);
    function CreateExecutionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateExecutionRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateExecutionPathParams)
    ], CreateExecutionRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", CreateExecutionCreateExecutionRequest)
    ], CreateExecutionRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateExecutionSecurity)
    ], CreateExecutionRequest.prototype, "security", void 0);
    return CreateExecutionRequest;
}(SpeakeasyBase));
export { CreateExecutionRequest };
var CreateExecutionResponse = /** @class */ (function (_super) {
    __extends(CreateExecutionResponse, _super);
    function CreateExecutionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateExecutionResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateExecutionResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.StudioV1FlowExecution)
    ], CreateExecutionResponse.prototype, "studioV1FlowExecution", void 0);
    return CreateExecutionResponse;
}(SpeakeasyBase));
export { CreateExecutionResponse };
