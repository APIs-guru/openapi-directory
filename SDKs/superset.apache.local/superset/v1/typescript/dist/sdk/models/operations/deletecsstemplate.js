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
var DeleteCssTemplateQueryParams = /** @class */ (function (_super) {
    __extends(DeleteCssTemplateQueryParams, _super);
    function DeleteCssTemplateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, serialization=json;name=q" }),
        __metadata("design:type", Array)
    ], DeleteCssTemplateQueryParams.prototype, "q", void 0);
    return DeleteCssTemplateQueryParams;
}(SpeakeasyBase));
export { DeleteCssTemplateQueryParams };
var DeleteCssTemplateSecurity = /** @class */ (function (_super) {
    __extends(DeleteCssTemplateSecurity, _super);
    function DeleteCssTemplateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeJwt)
    ], DeleteCssTemplateSecurity.prototype, "jwt", void 0);
    return DeleteCssTemplateSecurity;
}(SpeakeasyBase));
export { DeleteCssTemplateSecurity };
var DeleteCssTemplate200ApplicationJson = /** @class */ (function (_super) {
    __extends(DeleteCssTemplate200ApplicationJson, _super);
    function DeleteCssTemplate200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], DeleteCssTemplate200ApplicationJson.prototype, "message", void 0);
    return DeleteCssTemplate200ApplicationJson;
}(SpeakeasyBase));
export { DeleteCssTemplate200ApplicationJson };
var DeleteCssTemplate401ApplicationJson = /** @class */ (function (_super) {
    __extends(DeleteCssTemplate401ApplicationJson, _super);
    function DeleteCssTemplate401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], DeleteCssTemplate401ApplicationJson.prototype, "message", void 0);
    return DeleteCssTemplate401ApplicationJson;
}(SpeakeasyBase));
export { DeleteCssTemplate401ApplicationJson };
var DeleteCssTemplate404ApplicationJson = /** @class */ (function (_super) {
    __extends(DeleteCssTemplate404ApplicationJson, _super);
    function DeleteCssTemplate404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], DeleteCssTemplate404ApplicationJson.prototype, "message", void 0);
    return DeleteCssTemplate404ApplicationJson;
}(SpeakeasyBase));
export { DeleteCssTemplate404ApplicationJson };
var DeleteCssTemplate422ApplicationJson = /** @class */ (function (_super) {
    __extends(DeleteCssTemplate422ApplicationJson, _super);
    function DeleteCssTemplate422ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], DeleteCssTemplate422ApplicationJson.prototype, "message", void 0);
    return DeleteCssTemplate422ApplicationJson;
}(SpeakeasyBase));
export { DeleteCssTemplate422ApplicationJson };
var DeleteCssTemplate500ApplicationJson = /** @class */ (function (_super) {
    __extends(DeleteCssTemplate500ApplicationJson, _super);
    function DeleteCssTemplate500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], DeleteCssTemplate500ApplicationJson.prototype, "message", void 0);
    return DeleteCssTemplate500ApplicationJson;
}(SpeakeasyBase));
export { DeleteCssTemplate500ApplicationJson };
var DeleteCssTemplateRequest = /** @class */ (function (_super) {
    __extends(DeleteCssTemplateRequest, _super);
    function DeleteCssTemplateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteCssTemplateQueryParams)
    ], DeleteCssTemplateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteCssTemplateSecurity)
    ], DeleteCssTemplateRequest.prototype, "security", void 0);
    return DeleteCssTemplateRequest;
}(SpeakeasyBase));
export { DeleteCssTemplateRequest };
var DeleteCssTemplateResponse = /** @class */ (function (_super) {
    __extends(DeleteCssTemplateResponse, _super);
    function DeleteCssTemplateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteCssTemplateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteCssTemplate200ApplicationJson)
    ], DeleteCssTemplateResponse.prototype, "deleteCssTemplate200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteCssTemplate401ApplicationJson)
    ], DeleteCssTemplateResponse.prototype, "deleteCssTemplate401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteCssTemplate404ApplicationJson)
    ], DeleteCssTemplateResponse.prototype, "deleteCssTemplate404ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteCssTemplate422ApplicationJson)
    ], DeleteCssTemplateResponse.prototype, "deleteCssTemplate422ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteCssTemplate500ApplicationJson)
    ], DeleteCssTemplateResponse.prototype, "deleteCssTemplate500ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeleteCssTemplateResponse.prototype, "statusCode", void 0);
    return DeleteCssTemplateResponse;
}(SpeakeasyBase));
export { DeleteCssTemplateResponse };
