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
var GetAnnotationLayerPkAnnotationAnnotationIdPathParams = /** @class */ (function (_super) {
    __extends(GetAnnotationLayerPkAnnotationAnnotationIdPathParams, _super);
    function GetAnnotationLayerPkAnnotationAnnotationIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=annotation_id" }),
        __metadata("design:type", Number)
    ], GetAnnotationLayerPkAnnotationAnnotationIdPathParams.prototype, "annotationId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=pk" }),
        __metadata("design:type", Number)
    ], GetAnnotationLayerPkAnnotationAnnotationIdPathParams.prototype, "pk", void 0);
    return GetAnnotationLayerPkAnnotationAnnotationIdPathParams;
}(SpeakeasyBase));
export { GetAnnotationLayerPkAnnotationAnnotationIdPathParams };
var GetAnnotationLayerPkAnnotationAnnotationIdQueryParams = /** @class */ (function (_super) {
    __extends(GetAnnotationLayerPkAnnotationAnnotationIdQueryParams, _super);
    function GetAnnotationLayerPkAnnotationAnnotationIdQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, serialization=json;name=q" }),
        __metadata("design:type", shared.GetItemSchema)
    ], GetAnnotationLayerPkAnnotationAnnotationIdQueryParams.prototype, "q", void 0);
    return GetAnnotationLayerPkAnnotationAnnotationIdQueryParams;
}(SpeakeasyBase));
export { GetAnnotationLayerPkAnnotationAnnotationIdQueryParams };
var GetAnnotationLayerPkAnnotationAnnotationIdSecurity = /** @class */ (function (_super) {
    __extends(GetAnnotationLayerPkAnnotationAnnotationIdSecurity, _super);
    function GetAnnotationLayerPkAnnotationAnnotationIdSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeJwt)
    ], GetAnnotationLayerPkAnnotationAnnotationIdSecurity.prototype, "jwt", void 0);
    return GetAnnotationLayerPkAnnotationAnnotationIdSecurity;
}(SpeakeasyBase));
export { GetAnnotationLayerPkAnnotationAnnotationIdSecurity };
var GetAnnotationLayerPkAnnotationAnnotationId200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetAnnotationLayerPkAnnotationAnnotationId200ApplicationJson, _super);
    function GetAnnotationLayerPkAnnotationAnnotationId200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], GetAnnotationLayerPkAnnotationAnnotationId200ApplicationJson.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=result" }),
        __metadata("design:type", shared.AnnotationRestApiGet)
    ], GetAnnotationLayerPkAnnotationAnnotationId200ApplicationJson.prototype, "result", void 0);
    return GetAnnotationLayerPkAnnotationAnnotationId200ApplicationJson;
}(SpeakeasyBase));
export { GetAnnotationLayerPkAnnotationAnnotationId200ApplicationJson };
var GetAnnotationLayerPkAnnotationAnnotationId400ApplicationJson = /** @class */ (function (_super) {
    __extends(GetAnnotationLayerPkAnnotationAnnotationId400ApplicationJson, _super);
    function GetAnnotationLayerPkAnnotationAnnotationId400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetAnnotationLayerPkAnnotationAnnotationId400ApplicationJson.prototype, "message", void 0);
    return GetAnnotationLayerPkAnnotationAnnotationId400ApplicationJson;
}(SpeakeasyBase));
export { GetAnnotationLayerPkAnnotationAnnotationId400ApplicationJson };
var GetAnnotationLayerPkAnnotationAnnotationId401ApplicationJson = /** @class */ (function (_super) {
    __extends(GetAnnotationLayerPkAnnotationAnnotationId401ApplicationJson, _super);
    function GetAnnotationLayerPkAnnotationAnnotationId401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetAnnotationLayerPkAnnotationAnnotationId401ApplicationJson.prototype, "message", void 0);
    return GetAnnotationLayerPkAnnotationAnnotationId401ApplicationJson;
}(SpeakeasyBase));
export { GetAnnotationLayerPkAnnotationAnnotationId401ApplicationJson };
var GetAnnotationLayerPkAnnotationAnnotationId404ApplicationJson = /** @class */ (function (_super) {
    __extends(GetAnnotationLayerPkAnnotationAnnotationId404ApplicationJson, _super);
    function GetAnnotationLayerPkAnnotationAnnotationId404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetAnnotationLayerPkAnnotationAnnotationId404ApplicationJson.prototype, "message", void 0);
    return GetAnnotationLayerPkAnnotationAnnotationId404ApplicationJson;
}(SpeakeasyBase));
export { GetAnnotationLayerPkAnnotationAnnotationId404ApplicationJson };
var GetAnnotationLayerPkAnnotationAnnotationId422ApplicationJson = /** @class */ (function (_super) {
    __extends(GetAnnotationLayerPkAnnotationAnnotationId422ApplicationJson, _super);
    function GetAnnotationLayerPkAnnotationAnnotationId422ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetAnnotationLayerPkAnnotationAnnotationId422ApplicationJson.prototype, "message", void 0);
    return GetAnnotationLayerPkAnnotationAnnotationId422ApplicationJson;
}(SpeakeasyBase));
export { GetAnnotationLayerPkAnnotationAnnotationId422ApplicationJson };
var GetAnnotationLayerPkAnnotationAnnotationId500ApplicationJson = /** @class */ (function (_super) {
    __extends(GetAnnotationLayerPkAnnotationAnnotationId500ApplicationJson, _super);
    function GetAnnotationLayerPkAnnotationAnnotationId500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetAnnotationLayerPkAnnotationAnnotationId500ApplicationJson.prototype, "message", void 0);
    return GetAnnotationLayerPkAnnotationAnnotationId500ApplicationJson;
}(SpeakeasyBase));
export { GetAnnotationLayerPkAnnotationAnnotationId500ApplicationJson };
var GetAnnotationLayerPkAnnotationAnnotationIdRequest = /** @class */ (function (_super) {
    __extends(GetAnnotationLayerPkAnnotationAnnotationIdRequest, _super);
    function GetAnnotationLayerPkAnnotationAnnotationIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAnnotationLayerPkAnnotationAnnotationIdPathParams)
    ], GetAnnotationLayerPkAnnotationAnnotationIdRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAnnotationLayerPkAnnotationAnnotationIdQueryParams)
    ], GetAnnotationLayerPkAnnotationAnnotationIdRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAnnotationLayerPkAnnotationAnnotationIdSecurity)
    ], GetAnnotationLayerPkAnnotationAnnotationIdRequest.prototype, "security", void 0);
    return GetAnnotationLayerPkAnnotationAnnotationIdRequest;
}(SpeakeasyBase));
export { GetAnnotationLayerPkAnnotationAnnotationIdRequest };
var GetAnnotationLayerPkAnnotationAnnotationIdResponse = /** @class */ (function (_super) {
    __extends(GetAnnotationLayerPkAnnotationAnnotationIdResponse, _super);
    function GetAnnotationLayerPkAnnotationAnnotationIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetAnnotationLayerPkAnnotationAnnotationIdResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAnnotationLayerPkAnnotationAnnotationId200ApplicationJson)
    ], GetAnnotationLayerPkAnnotationAnnotationIdResponse.prototype, "getAnnotationLayerPkAnnotationAnnotationId200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAnnotationLayerPkAnnotationAnnotationId400ApplicationJson)
    ], GetAnnotationLayerPkAnnotationAnnotationIdResponse.prototype, "getAnnotationLayerPkAnnotationAnnotationId400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAnnotationLayerPkAnnotationAnnotationId401ApplicationJson)
    ], GetAnnotationLayerPkAnnotationAnnotationIdResponse.prototype, "getAnnotationLayerPkAnnotationAnnotationId401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAnnotationLayerPkAnnotationAnnotationId404ApplicationJson)
    ], GetAnnotationLayerPkAnnotationAnnotationIdResponse.prototype, "getAnnotationLayerPkAnnotationAnnotationId404ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAnnotationLayerPkAnnotationAnnotationId422ApplicationJson)
    ], GetAnnotationLayerPkAnnotationAnnotationIdResponse.prototype, "getAnnotationLayerPkAnnotationAnnotationId422ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAnnotationLayerPkAnnotationAnnotationId500ApplicationJson)
    ], GetAnnotationLayerPkAnnotationAnnotationIdResponse.prototype, "getAnnotationLayerPkAnnotationAnnotationId500ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetAnnotationLayerPkAnnotationAnnotationIdResponse.prototype, "statusCode", void 0);
    return GetAnnotationLayerPkAnnotationAnnotationIdResponse;
}(SpeakeasyBase));
export { GetAnnotationLayerPkAnnotationAnnotationIdResponse };
