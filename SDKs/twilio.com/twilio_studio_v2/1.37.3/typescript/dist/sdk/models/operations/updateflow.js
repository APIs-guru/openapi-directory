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
export var UpdateFlowServerList = [
    "https://studio.twilio.com",
];
var UpdateFlowPathParams = /** @class */ (function (_super) {
    __extends(UpdateFlowPathParams, _super);
    function UpdateFlowPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], UpdateFlowPathParams.prototype, "sid", void 0);
    return UpdateFlowPathParams;
}(SpeakeasyBase));
export { UpdateFlowPathParams };
var UpdateFlowUpdateFlowRequest = /** @class */ (function (_super) {
    __extends(UpdateFlowUpdateFlowRequest, _super);
    function UpdateFlowUpdateFlowRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "form, name=CommitMessage;" }),
        __metadata("design:type", String)
    ], UpdateFlowUpdateFlowRequest.prototype, "commitMessage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Definition;" }),
        __metadata("design:type", Object)
    ], UpdateFlowUpdateFlowRequest.prototype, "definition", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=FriendlyName;" }),
        __metadata("design:type", String)
    ], UpdateFlowUpdateFlowRequest.prototype, "friendlyName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Status;" }),
        __metadata("design:type", String)
    ], UpdateFlowUpdateFlowRequest.prototype, "status", void 0);
    return UpdateFlowUpdateFlowRequest;
}(SpeakeasyBase));
export { UpdateFlowUpdateFlowRequest };
var UpdateFlowSecurity = /** @class */ (function (_super) {
    __extends(UpdateFlowSecurity, _super);
    function UpdateFlowSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], UpdateFlowSecurity.prototype, "accountSidAuthToken", void 0);
    return UpdateFlowSecurity;
}(SpeakeasyBase));
export { UpdateFlowSecurity };
var UpdateFlowRequest = /** @class */ (function (_super) {
    __extends(UpdateFlowRequest, _super);
    function UpdateFlowRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateFlowRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateFlowPathParams)
    ], UpdateFlowRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", UpdateFlowUpdateFlowRequest)
    ], UpdateFlowRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateFlowSecurity)
    ], UpdateFlowRequest.prototype, "security", void 0);
    return UpdateFlowRequest;
}(SpeakeasyBase));
export { UpdateFlowRequest };
var UpdateFlowResponse = /** @class */ (function (_super) {
    __extends(UpdateFlowResponse, _super);
    function UpdateFlowResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateFlowResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateFlowResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.StudioV2Flow)
    ], UpdateFlowResponse.prototype, "studioV2Flow", void 0);
    return UpdateFlowResponse;
}(SpeakeasyBase));
export { UpdateFlowResponse };
