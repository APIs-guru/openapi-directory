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
var DeleteCssTemplatePkPathParams = /** @class */ (function (_super) {
    __extends(DeleteCssTemplatePkPathParams, _super);
    function DeleteCssTemplatePkPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=pk" }),
        __metadata("design:type", Number)
    ], DeleteCssTemplatePkPathParams.prototype, "pk", void 0);
    return DeleteCssTemplatePkPathParams;
}(SpeakeasyBase));
export { DeleteCssTemplatePkPathParams };
var DeleteCssTemplatePkSecurity = /** @class */ (function (_super) {
    __extends(DeleteCssTemplatePkSecurity, _super);
    function DeleteCssTemplatePkSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeJwt)
    ], DeleteCssTemplatePkSecurity.prototype, "jwt", void 0);
    return DeleteCssTemplatePkSecurity;
}(SpeakeasyBase));
export { DeleteCssTemplatePkSecurity };
var DeleteCssTemplatePk200ApplicationJson = /** @class */ (function (_super) {
    __extends(DeleteCssTemplatePk200ApplicationJson, _super);
    function DeleteCssTemplatePk200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], DeleteCssTemplatePk200ApplicationJson.prototype, "message", void 0);
    return DeleteCssTemplatePk200ApplicationJson;
}(SpeakeasyBase));
export { DeleteCssTemplatePk200ApplicationJson };
var DeleteCssTemplatePk404ApplicationJson = /** @class */ (function (_super) {
    __extends(DeleteCssTemplatePk404ApplicationJson, _super);
    function DeleteCssTemplatePk404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], DeleteCssTemplatePk404ApplicationJson.prototype, "message", void 0);
    return DeleteCssTemplatePk404ApplicationJson;
}(SpeakeasyBase));
export { DeleteCssTemplatePk404ApplicationJson };
var DeleteCssTemplatePk422ApplicationJson = /** @class */ (function (_super) {
    __extends(DeleteCssTemplatePk422ApplicationJson, _super);
    function DeleteCssTemplatePk422ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], DeleteCssTemplatePk422ApplicationJson.prototype, "message", void 0);
    return DeleteCssTemplatePk422ApplicationJson;
}(SpeakeasyBase));
export { DeleteCssTemplatePk422ApplicationJson };
var DeleteCssTemplatePk500ApplicationJson = /** @class */ (function (_super) {
    __extends(DeleteCssTemplatePk500ApplicationJson, _super);
    function DeleteCssTemplatePk500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], DeleteCssTemplatePk500ApplicationJson.prototype, "message", void 0);
    return DeleteCssTemplatePk500ApplicationJson;
}(SpeakeasyBase));
export { DeleteCssTemplatePk500ApplicationJson };
var DeleteCssTemplatePkRequest = /** @class */ (function (_super) {
    __extends(DeleteCssTemplatePkRequest, _super);
    function DeleteCssTemplatePkRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteCssTemplatePkPathParams)
    ], DeleteCssTemplatePkRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteCssTemplatePkSecurity)
    ], DeleteCssTemplatePkRequest.prototype, "security", void 0);
    return DeleteCssTemplatePkRequest;
}(SpeakeasyBase));
export { DeleteCssTemplatePkRequest };
var DeleteCssTemplatePkResponse = /** @class */ (function (_super) {
    __extends(DeleteCssTemplatePkResponse, _super);
    function DeleteCssTemplatePkResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteCssTemplatePkResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteCssTemplatePk200ApplicationJson)
    ], DeleteCssTemplatePkResponse.prototype, "deleteCssTemplatePk200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteCssTemplatePk404ApplicationJson)
    ], DeleteCssTemplatePkResponse.prototype, "deleteCssTemplatePk404ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteCssTemplatePk422ApplicationJson)
    ], DeleteCssTemplatePkResponse.prototype, "deleteCssTemplatePk422ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteCssTemplatePk500ApplicationJson)
    ], DeleteCssTemplatePkResponse.prototype, "deleteCssTemplatePk500ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeleteCssTemplatePkResponse.prototype, "statusCode", void 0);
    return DeleteCssTemplatePkResponse;
}(SpeakeasyBase));
export { DeleteCssTemplatePkResponse };
