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
var UpdateApiSpecificationPathParams = /** @class */ (function (_super) {
    __extends(UpdateApiSpecificationPathParams, _super);
    function UpdateApiSpecificationPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], UpdateApiSpecificationPathParams.prototype, "id", void 0);
    return UpdateApiSpecificationPathParams;
}(SpeakeasyBase));
export { UpdateApiSpecificationPathParams };
var UpdateApiSpecificationRequestBodySpec = /** @class */ (function (_super) {
    __extends(UpdateApiSpecificationRequestBodySpec, _super);
    function UpdateApiSpecificationRequestBodySpec() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "multipart_form, content=true" }),
        __metadata("design:type", Uint8Array)
    ], UpdateApiSpecificationRequestBodySpec.prototype, "content", void 0);
    __decorate([
        Metadata({ data: "multipart_form, name=spec" }),
        __metadata("design:type", String)
    ], UpdateApiSpecificationRequestBodySpec.prototype, "spec", void 0);
    return UpdateApiSpecificationRequestBodySpec;
}(SpeakeasyBase));
export { UpdateApiSpecificationRequestBodySpec };
var UpdateApiSpecificationRequestBody = /** @class */ (function (_super) {
    __extends(UpdateApiSpecificationRequestBody, _super);
    function UpdateApiSpecificationRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "multipart_form, file=true" }),
        __metadata("design:type", UpdateApiSpecificationRequestBodySpec)
    ], UpdateApiSpecificationRequestBody.prototype, "spec", void 0);
    return UpdateApiSpecificationRequestBody;
}(SpeakeasyBase));
export { UpdateApiSpecificationRequestBody };
var UpdateApiSpecificationSecurity = /** @class */ (function (_super) {
    __extends(UpdateApiSpecificationSecurity, _super);
    function UpdateApiSpecificationSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], UpdateApiSpecificationSecurity.prototype, "apiKey", void 0);
    return UpdateApiSpecificationSecurity;
}(SpeakeasyBase));
export { UpdateApiSpecificationSecurity };
var UpdateApiSpecificationRequest = /** @class */ (function (_super) {
    __extends(UpdateApiSpecificationRequest, _super);
    function UpdateApiSpecificationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateApiSpecificationPathParams)
    ], UpdateApiSpecificationRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", UpdateApiSpecificationRequestBody)
    ], UpdateApiSpecificationRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateApiSpecificationSecurity)
    ], UpdateApiSpecificationRequest.prototype, "security", void 0);
    return UpdateApiSpecificationRequest;
}(SpeakeasyBase));
export { UpdateApiSpecificationRequest };
var UpdateApiSpecificationResponse = /** @class */ (function (_super) {
    __extends(UpdateApiSpecificationResponse, _super);
    function UpdateApiSpecificationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], UpdateApiSpecificationResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], UpdateApiSpecificationResponse.prototype, "statusCode", void 0);
    return UpdateApiSpecificationResponse;
}(SpeakeasyBase));
export { UpdateApiSpecificationResponse };
