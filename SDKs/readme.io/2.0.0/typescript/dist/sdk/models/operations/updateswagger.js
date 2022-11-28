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
var UpdateSwaggerPathParams = /** @class */ (function (_super) {
    __extends(UpdateSwaggerPathParams, _super);
    function UpdateSwaggerPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], UpdateSwaggerPathParams.prototype, "id", void 0);
    return UpdateSwaggerPathParams;
}(SpeakeasyBase));
export { UpdateSwaggerPathParams };
var UpdateSwaggerRequestBodySwagger = /** @class */ (function (_super) {
    __extends(UpdateSwaggerRequestBodySwagger, _super);
    function UpdateSwaggerRequestBodySwagger() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, content=true" }),
        __metadata("design:type", Uint8Array)
    ], UpdateSwaggerRequestBodySwagger.prototype, "content", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=swagger" }),
        __metadata("design:type", String)
    ], UpdateSwaggerRequestBodySwagger.prototype, "swagger", void 0);
    return UpdateSwaggerRequestBodySwagger;
}(SpeakeasyBase));
export { UpdateSwaggerRequestBodySwagger };
var UpdateSwaggerRequestBody = /** @class */ (function (_super) {
    __extends(UpdateSwaggerRequestBody, _super);
    function UpdateSwaggerRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, file=true" }),
        __metadata("design:type", UpdateSwaggerRequestBodySwagger)
    ], UpdateSwaggerRequestBody.prototype, "swagger", void 0);
    return UpdateSwaggerRequestBody;
}(SpeakeasyBase));
export { UpdateSwaggerRequestBody };
var UpdateSwaggerSecurity = /** @class */ (function (_super) {
    __extends(UpdateSwaggerSecurity, _super);
    function UpdateSwaggerSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], UpdateSwaggerSecurity.prototype, "apiKey", void 0);
    return UpdateSwaggerSecurity;
}(SpeakeasyBase));
export { UpdateSwaggerSecurity };
var UpdateSwaggerRequest = /** @class */ (function (_super) {
    __extends(UpdateSwaggerRequest, _super);
    function UpdateSwaggerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateSwaggerPathParams)
    ], UpdateSwaggerRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", UpdateSwaggerRequestBody)
    ], UpdateSwaggerRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateSwaggerSecurity)
    ], UpdateSwaggerRequest.prototype, "security", void 0);
    return UpdateSwaggerRequest;
}(SpeakeasyBase));
export { UpdateSwaggerRequest };
var UpdateSwaggerResponse = /** @class */ (function (_super) {
    __extends(UpdateSwaggerResponse, _super);
    function UpdateSwaggerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateSwaggerResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateSwaggerResponse.prototype, "statusCode", void 0);
    return UpdateSwaggerResponse;
}(SpeakeasyBase));
export { UpdateSwaggerResponse };
