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
var DeleteAnnotationLayerPkAnnotationAnnotationIdPathParams = /** @class */ (function (_super) {
    __extends(DeleteAnnotationLayerPkAnnotationAnnotationIdPathParams, _super);
    function DeleteAnnotationLayerPkAnnotationAnnotationIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=annotation_id" }),
        __metadata("design:type", Number)
    ], DeleteAnnotationLayerPkAnnotationAnnotationIdPathParams.prototype, "annotationId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=pk" }),
        __metadata("design:type", Number)
    ], DeleteAnnotationLayerPkAnnotationAnnotationIdPathParams.prototype, "pk", void 0);
    return DeleteAnnotationLayerPkAnnotationAnnotationIdPathParams;
}(SpeakeasyBase));
export { DeleteAnnotationLayerPkAnnotationAnnotationIdPathParams };
var DeleteAnnotationLayerPkAnnotationAnnotationIdSecurity = /** @class */ (function (_super) {
    __extends(DeleteAnnotationLayerPkAnnotationAnnotationIdSecurity, _super);
    function DeleteAnnotationLayerPkAnnotationAnnotationIdSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeJwt)
    ], DeleteAnnotationLayerPkAnnotationAnnotationIdSecurity.prototype, "jwt", void 0);
    return DeleteAnnotationLayerPkAnnotationAnnotationIdSecurity;
}(SpeakeasyBase));
export { DeleteAnnotationLayerPkAnnotationAnnotationIdSecurity };
var DeleteAnnotationLayerPkAnnotationAnnotationId200ApplicationJson = /** @class */ (function (_super) {
    __extends(DeleteAnnotationLayerPkAnnotationAnnotationId200ApplicationJson, _super);
    function DeleteAnnotationLayerPkAnnotationAnnotationId200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], DeleteAnnotationLayerPkAnnotationAnnotationId200ApplicationJson.prototype, "message", void 0);
    return DeleteAnnotationLayerPkAnnotationAnnotationId200ApplicationJson;
}(SpeakeasyBase));
export { DeleteAnnotationLayerPkAnnotationAnnotationId200ApplicationJson };
var DeleteAnnotationLayerPkAnnotationAnnotationId404ApplicationJson = /** @class */ (function (_super) {
    __extends(DeleteAnnotationLayerPkAnnotationAnnotationId404ApplicationJson, _super);
    function DeleteAnnotationLayerPkAnnotationAnnotationId404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], DeleteAnnotationLayerPkAnnotationAnnotationId404ApplicationJson.prototype, "message", void 0);
    return DeleteAnnotationLayerPkAnnotationAnnotationId404ApplicationJson;
}(SpeakeasyBase));
export { DeleteAnnotationLayerPkAnnotationAnnotationId404ApplicationJson };
var DeleteAnnotationLayerPkAnnotationAnnotationId422ApplicationJson = /** @class */ (function (_super) {
    __extends(DeleteAnnotationLayerPkAnnotationAnnotationId422ApplicationJson, _super);
    function DeleteAnnotationLayerPkAnnotationAnnotationId422ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], DeleteAnnotationLayerPkAnnotationAnnotationId422ApplicationJson.prototype, "message", void 0);
    return DeleteAnnotationLayerPkAnnotationAnnotationId422ApplicationJson;
}(SpeakeasyBase));
export { DeleteAnnotationLayerPkAnnotationAnnotationId422ApplicationJson };
var DeleteAnnotationLayerPkAnnotationAnnotationId500ApplicationJson = /** @class */ (function (_super) {
    __extends(DeleteAnnotationLayerPkAnnotationAnnotationId500ApplicationJson, _super);
    function DeleteAnnotationLayerPkAnnotationAnnotationId500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], DeleteAnnotationLayerPkAnnotationAnnotationId500ApplicationJson.prototype, "message", void 0);
    return DeleteAnnotationLayerPkAnnotationAnnotationId500ApplicationJson;
}(SpeakeasyBase));
export { DeleteAnnotationLayerPkAnnotationAnnotationId500ApplicationJson };
var DeleteAnnotationLayerPkAnnotationAnnotationIdRequest = /** @class */ (function (_super) {
    __extends(DeleteAnnotationLayerPkAnnotationAnnotationIdRequest, _super);
    function DeleteAnnotationLayerPkAnnotationAnnotationIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteAnnotationLayerPkAnnotationAnnotationIdPathParams)
    ], DeleteAnnotationLayerPkAnnotationAnnotationIdRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteAnnotationLayerPkAnnotationAnnotationIdSecurity)
    ], DeleteAnnotationLayerPkAnnotationAnnotationIdRequest.prototype, "security", void 0);
    return DeleteAnnotationLayerPkAnnotationAnnotationIdRequest;
}(SpeakeasyBase));
export { DeleteAnnotationLayerPkAnnotationAnnotationIdRequest };
var DeleteAnnotationLayerPkAnnotationAnnotationIdResponse = /** @class */ (function (_super) {
    __extends(DeleteAnnotationLayerPkAnnotationAnnotationIdResponse, _super);
    function DeleteAnnotationLayerPkAnnotationAnnotationIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteAnnotationLayerPkAnnotationAnnotationIdResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteAnnotationLayerPkAnnotationAnnotationId200ApplicationJson)
    ], DeleteAnnotationLayerPkAnnotationAnnotationIdResponse.prototype, "deleteAnnotationLayerPkAnnotationAnnotationId200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteAnnotationLayerPkAnnotationAnnotationId404ApplicationJson)
    ], DeleteAnnotationLayerPkAnnotationAnnotationIdResponse.prototype, "deleteAnnotationLayerPkAnnotationAnnotationId404ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteAnnotationLayerPkAnnotationAnnotationId422ApplicationJson)
    ], DeleteAnnotationLayerPkAnnotationAnnotationIdResponse.prototype, "deleteAnnotationLayerPkAnnotationAnnotationId422ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteAnnotationLayerPkAnnotationAnnotationId500ApplicationJson)
    ], DeleteAnnotationLayerPkAnnotationAnnotationIdResponse.prototype, "deleteAnnotationLayerPkAnnotationAnnotationId500ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeleteAnnotationLayerPkAnnotationAnnotationIdResponse.prototype, "statusCode", void 0);
    return DeleteAnnotationLayerPkAnnotationAnnotationIdResponse;
}(SpeakeasyBase));
export { DeleteAnnotationLayerPkAnnotationAnnotationIdResponse };
