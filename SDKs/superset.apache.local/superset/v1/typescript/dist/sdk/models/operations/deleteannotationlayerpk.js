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
var DeleteAnnotationLayerPkPathParams = /** @class */ (function (_super) {
    __extends(DeleteAnnotationLayerPkPathParams, _super);
    function DeleteAnnotationLayerPkPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=pk" }),
        __metadata("design:type", Number)
    ], DeleteAnnotationLayerPkPathParams.prototype, "pk", void 0);
    return DeleteAnnotationLayerPkPathParams;
}(SpeakeasyBase));
export { DeleteAnnotationLayerPkPathParams };
var DeleteAnnotationLayerPkSecurity = /** @class */ (function (_super) {
    __extends(DeleteAnnotationLayerPkSecurity, _super);
    function DeleteAnnotationLayerPkSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeJwt)
    ], DeleteAnnotationLayerPkSecurity.prototype, "jwt", void 0);
    return DeleteAnnotationLayerPkSecurity;
}(SpeakeasyBase));
export { DeleteAnnotationLayerPkSecurity };
var DeleteAnnotationLayerPk200ApplicationJson = /** @class */ (function (_super) {
    __extends(DeleteAnnotationLayerPk200ApplicationJson, _super);
    function DeleteAnnotationLayerPk200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], DeleteAnnotationLayerPk200ApplicationJson.prototype, "message", void 0);
    return DeleteAnnotationLayerPk200ApplicationJson;
}(SpeakeasyBase));
export { DeleteAnnotationLayerPk200ApplicationJson };
var DeleteAnnotationLayerPk404ApplicationJson = /** @class */ (function (_super) {
    __extends(DeleteAnnotationLayerPk404ApplicationJson, _super);
    function DeleteAnnotationLayerPk404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], DeleteAnnotationLayerPk404ApplicationJson.prototype, "message", void 0);
    return DeleteAnnotationLayerPk404ApplicationJson;
}(SpeakeasyBase));
export { DeleteAnnotationLayerPk404ApplicationJson };
var DeleteAnnotationLayerPk422ApplicationJson = /** @class */ (function (_super) {
    __extends(DeleteAnnotationLayerPk422ApplicationJson, _super);
    function DeleteAnnotationLayerPk422ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], DeleteAnnotationLayerPk422ApplicationJson.prototype, "message", void 0);
    return DeleteAnnotationLayerPk422ApplicationJson;
}(SpeakeasyBase));
export { DeleteAnnotationLayerPk422ApplicationJson };
var DeleteAnnotationLayerPk500ApplicationJson = /** @class */ (function (_super) {
    __extends(DeleteAnnotationLayerPk500ApplicationJson, _super);
    function DeleteAnnotationLayerPk500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], DeleteAnnotationLayerPk500ApplicationJson.prototype, "message", void 0);
    return DeleteAnnotationLayerPk500ApplicationJson;
}(SpeakeasyBase));
export { DeleteAnnotationLayerPk500ApplicationJson };
var DeleteAnnotationLayerPkRequest = /** @class */ (function (_super) {
    __extends(DeleteAnnotationLayerPkRequest, _super);
    function DeleteAnnotationLayerPkRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteAnnotationLayerPkPathParams)
    ], DeleteAnnotationLayerPkRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteAnnotationLayerPkSecurity)
    ], DeleteAnnotationLayerPkRequest.prototype, "security", void 0);
    return DeleteAnnotationLayerPkRequest;
}(SpeakeasyBase));
export { DeleteAnnotationLayerPkRequest };
var DeleteAnnotationLayerPkResponse = /** @class */ (function (_super) {
    __extends(DeleteAnnotationLayerPkResponse, _super);
    function DeleteAnnotationLayerPkResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteAnnotationLayerPkResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteAnnotationLayerPk200ApplicationJson)
    ], DeleteAnnotationLayerPkResponse.prototype, "deleteAnnotationLayerPk200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteAnnotationLayerPk404ApplicationJson)
    ], DeleteAnnotationLayerPkResponse.prototype, "deleteAnnotationLayerPk404ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteAnnotationLayerPk422ApplicationJson)
    ], DeleteAnnotationLayerPkResponse.prototype, "deleteAnnotationLayerPk422ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteAnnotationLayerPk500ApplicationJson)
    ], DeleteAnnotationLayerPkResponse.prototype, "deleteAnnotationLayerPk500ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeleteAnnotationLayerPkResponse.prototype, "statusCode", void 0);
    return DeleteAnnotationLayerPkResponse;
}(SpeakeasyBase));
export { DeleteAnnotationLayerPkResponse };
