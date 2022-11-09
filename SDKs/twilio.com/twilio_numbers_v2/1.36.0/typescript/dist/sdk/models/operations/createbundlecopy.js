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
export var CREATEBUNDLECOPY_SERVERS = [
    "https://numbers.twilio.com",
];
var CreateBundleCopyPathParams = /** @class */ (function (_super) {
    __extends(CreateBundleCopyPathParams, _super);
    function CreateBundleCopyPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=BundleSid" }),
        __metadata("design:type", String)
    ], CreateBundleCopyPathParams.prototype, "bundleSid", void 0);
    return CreateBundleCopyPathParams;
}(SpeakeasyBase));
export { CreateBundleCopyPathParams };
var CreateBundleCopyCreateBundleCopyRequest = /** @class */ (function (_super) {
    __extends(CreateBundleCopyCreateBundleCopyRequest, _super);
    function CreateBundleCopyCreateBundleCopyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "form, name=FriendlyName;" }),
        __metadata("design:type", String)
    ], CreateBundleCopyCreateBundleCopyRequest.prototype, "friendlyName", void 0);
    return CreateBundleCopyCreateBundleCopyRequest;
}(SpeakeasyBase));
export { CreateBundleCopyCreateBundleCopyRequest };
var CreateBundleCopySecurity = /** @class */ (function (_super) {
    __extends(CreateBundleCopySecurity, _super);
    function CreateBundleCopySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], CreateBundleCopySecurity.prototype, "accountSidAuthToken", void 0);
    return CreateBundleCopySecurity;
}(SpeakeasyBase));
export { CreateBundleCopySecurity };
var CreateBundleCopyRequest = /** @class */ (function (_super) {
    __extends(CreateBundleCopyRequest, _super);
    function CreateBundleCopyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CreateBundleCopyRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CreateBundleCopyPathParams)
    ], CreateBundleCopyRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", CreateBundleCopyCreateBundleCopyRequest)
    ], CreateBundleCopyRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CreateBundleCopySecurity)
    ], CreateBundleCopyRequest.prototype, "security", void 0);
    return CreateBundleCopyRequest;
}(SpeakeasyBase));
export { CreateBundleCopyRequest };
var CreateBundleCopyResponse = /** @class */ (function (_super) {
    __extends(CreateBundleCopyResponse, _super);
    function CreateBundleCopyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CreateBundleCopyResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], CreateBundleCopyResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.NumbersV2RegulatoryComplianceBundleBundleCopy)
    ], CreateBundleCopyResponse.prototype, "numbersV2RegulatoryComplianceBundleBundleCopy", void 0);
    return CreateBundleCopyResponse;
}(SpeakeasyBase));
export { CreateBundleCopyResponse };
