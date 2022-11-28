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
var DeleteAnnotationLayerQueryParams = /** @class */ (function (_super) {
    __extends(DeleteAnnotationLayerQueryParams, _super);
    function DeleteAnnotationLayerQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, serialization=json;name=q" }),
        __metadata("design:type", Array)
    ], DeleteAnnotationLayerQueryParams.prototype, "q", void 0);
    return DeleteAnnotationLayerQueryParams;
}(SpeakeasyBase));
export { DeleteAnnotationLayerQueryParams };
var DeleteAnnotationLayerSecurity = /** @class */ (function (_super) {
    __extends(DeleteAnnotationLayerSecurity, _super);
    function DeleteAnnotationLayerSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeJwt)
    ], DeleteAnnotationLayerSecurity.prototype, "jwt", void 0);
    return DeleteAnnotationLayerSecurity;
}(SpeakeasyBase));
export { DeleteAnnotationLayerSecurity };
var DeleteAnnotationLayer200ApplicationJson = /** @class */ (function (_super) {
    __extends(DeleteAnnotationLayer200ApplicationJson, _super);
    function DeleteAnnotationLayer200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], DeleteAnnotationLayer200ApplicationJson.prototype, "message", void 0);
    return DeleteAnnotationLayer200ApplicationJson;
}(SpeakeasyBase));
export { DeleteAnnotationLayer200ApplicationJson };
var DeleteAnnotationLayer401ApplicationJson = /** @class */ (function (_super) {
    __extends(DeleteAnnotationLayer401ApplicationJson, _super);
    function DeleteAnnotationLayer401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], DeleteAnnotationLayer401ApplicationJson.prototype, "message", void 0);
    return DeleteAnnotationLayer401ApplicationJson;
}(SpeakeasyBase));
export { DeleteAnnotationLayer401ApplicationJson };
var DeleteAnnotationLayer404ApplicationJson = /** @class */ (function (_super) {
    __extends(DeleteAnnotationLayer404ApplicationJson, _super);
    function DeleteAnnotationLayer404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], DeleteAnnotationLayer404ApplicationJson.prototype, "message", void 0);
    return DeleteAnnotationLayer404ApplicationJson;
}(SpeakeasyBase));
export { DeleteAnnotationLayer404ApplicationJson };
var DeleteAnnotationLayer422ApplicationJson = /** @class */ (function (_super) {
    __extends(DeleteAnnotationLayer422ApplicationJson, _super);
    function DeleteAnnotationLayer422ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], DeleteAnnotationLayer422ApplicationJson.prototype, "message", void 0);
    return DeleteAnnotationLayer422ApplicationJson;
}(SpeakeasyBase));
export { DeleteAnnotationLayer422ApplicationJson };
var DeleteAnnotationLayer500ApplicationJson = /** @class */ (function (_super) {
    __extends(DeleteAnnotationLayer500ApplicationJson, _super);
    function DeleteAnnotationLayer500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], DeleteAnnotationLayer500ApplicationJson.prototype, "message", void 0);
    return DeleteAnnotationLayer500ApplicationJson;
}(SpeakeasyBase));
export { DeleteAnnotationLayer500ApplicationJson };
var DeleteAnnotationLayerRequest = /** @class */ (function (_super) {
    __extends(DeleteAnnotationLayerRequest, _super);
    function DeleteAnnotationLayerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteAnnotationLayerQueryParams)
    ], DeleteAnnotationLayerRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteAnnotationLayerSecurity)
    ], DeleteAnnotationLayerRequest.prototype, "security", void 0);
    return DeleteAnnotationLayerRequest;
}(SpeakeasyBase));
export { DeleteAnnotationLayerRequest };
var DeleteAnnotationLayerResponse = /** @class */ (function (_super) {
    __extends(DeleteAnnotationLayerResponse, _super);
    function DeleteAnnotationLayerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteAnnotationLayerResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteAnnotationLayer200ApplicationJson)
    ], DeleteAnnotationLayerResponse.prototype, "deleteAnnotationLayer200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteAnnotationLayer401ApplicationJson)
    ], DeleteAnnotationLayerResponse.prototype, "deleteAnnotationLayer401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteAnnotationLayer404ApplicationJson)
    ], DeleteAnnotationLayerResponse.prototype, "deleteAnnotationLayer404ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteAnnotationLayer422ApplicationJson)
    ], DeleteAnnotationLayerResponse.prototype, "deleteAnnotationLayer422ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteAnnotationLayer500ApplicationJson)
    ], DeleteAnnotationLayerResponse.prototype, "deleteAnnotationLayer500ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeleteAnnotationLayerResponse.prototype, "statusCode", void 0);
    return DeleteAnnotationLayerResponse;
}(SpeakeasyBase));
export { DeleteAnnotationLayerResponse };
