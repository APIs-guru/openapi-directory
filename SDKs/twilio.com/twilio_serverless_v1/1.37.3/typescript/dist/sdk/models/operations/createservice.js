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
export var CreateServiceServerList = [
    "https://serverless.twilio.com",
];
var CreateServiceCreateServiceRequest = /** @class */ (function (_super) {
    __extends(CreateServiceCreateServiceRequest, _super);
    function CreateServiceCreateServiceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "form, name=FriendlyName;" }),
        __metadata("design:type", String)
    ], CreateServiceCreateServiceRequest.prototype, "friendlyName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=IncludeCredentials;" }),
        __metadata("design:type", Boolean)
    ], CreateServiceCreateServiceRequest.prototype, "includeCredentials", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=UiEditable;" }),
        __metadata("design:type", Boolean)
    ], CreateServiceCreateServiceRequest.prototype, "uiEditable", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=UniqueName;" }),
        __metadata("design:type", String)
    ], CreateServiceCreateServiceRequest.prototype, "uniqueName", void 0);
    return CreateServiceCreateServiceRequest;
}(SpeakeasyBase));
export { CreateServiceCreateServiceRequest };
var CreateServiceSecurity = /** @class */ (function (_super) {
    __extends(CreateServiceSecurity, _super);
    function CreateServiceSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], CreateServiceSecurity.prototype, "accountSidAuthToken", void 0);
    return CreateServiceSecurity;
}(SpeakeasyBase));
export { CreateServiceSecurity };
var CreateServiceRequest = /** @class */ (function (_super) {
    __extends(CreateServiceRequest, _super);
    function CreateServiceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateServiceRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", CreateServiceCreateServiceRequest)
    ], CreateServiceRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateServiceSecurity)
    ], CreateServiceRequest.prototype, "security", void 0);
    return CreateServiceRequest;
}(SpeakeasyBase));
export { CreateServiceRequest };
var CreateServiceResponse = /** @class */ (function (_super) {
    __extends(CreateServiceResponse, _super);
    function CreateServiceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateServiceResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateServiceResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ServerlessV1Service)
    ], CreateServiceResponse.prototype, "serverlessV1Service", void 0);
    return CreateServiceResponse;
}(SpeakeasyBase));
export { CreateServiceResponse };
