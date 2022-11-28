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
export var CreateFlowServerList = [
    "https://studio.twilio.com",
];
var CreateFlowCreateFlowRequest = /** @class */ (function (_super) {
    __extends(CreateFlowCreateFlowRequest, _super);
    function CreateFlowCreateFlowRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "form, name=CommitMessage;" }),
        __metadata("design:type", String)
    ], CreateFlowCreateFlowRequest.prototype, "commitMessage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Definition;" }),
        __metadata("design:type", Object)
    ], CreateFlowCreateFlowRequest.prototype, "definition", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=FriendlyName;" }),
        __metadata("design:type", String)
    ], CreateFlowCreateFlowRequest.prototype, "friendlyName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Status;" }),
        __metadata("design:type", String)
    ], CreateFlowCreateFlowRequest.prototype, "status", void 0);
    return CreateFlowCreateFlowRequest;
}(SpeakeasyBase));
export { CreateFlowCreateFlowRequest };
var CreateFlowSecurity = /** @class */ (function (_super) {
    __extends(CreateFlowSecurity, _super);
    function CreateFlowSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], CreateFlowSecurity.prototype, "accountSidAuthToken", void 0);
    return CreateFlowSecurity;
}(SpeakeasyBase));
export { CreateFlowSecurity };
var CreateFlowRequest = /** @class */ (function (_super) {
    __extends(CreateFlowRequest, _super);
    function CreateFlowRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateFlowRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", CreateFlowCreateFlowRequest)
    ], CreateFlowRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateFlowSecurity)
    ], CreateFlowRequest.prototype, "security", void 0);
    return CreateFlowRequest;
}(SpeakeasyBase));
export { CreateFlowRequest };
var CreateFlowResponse = /** @class */ (function (_super) {
    __extends(CreateFlowResponse, _super);
    function CreateFlowResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateFlowResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateFlowResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.StudioV2Flow)
    ], CreateFlowResponse.prototype, "studioV2Flow", void 0);
    return CreateFlowResponse;
}(SpeakeasyBase));
export { CreateFlowResponse };
