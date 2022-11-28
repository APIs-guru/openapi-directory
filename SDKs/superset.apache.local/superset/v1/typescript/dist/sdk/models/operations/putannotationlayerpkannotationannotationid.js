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
var PutAnnotationLayerPkAnnotationAnnotationIdPathParams = /** @class */ (function (_super) {
    __extends(PutAnnotationLayerPkAnnotationAnnotationIdPathParams, _super);
    function PutAnnotationLayerPkAnnotationAnnotationIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=annotation_id" }),
        __metadata("design:type", Number)
    ], PutAnnotationLayerPkAnnotationAnnotationIdPathParams.prototype, "annotationId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=pk" }),
        __metadata("design:type", Number)
    ], PutAnnotationLayerPkAnnotationAnnotationIdPathParams.prototype, "pk", void 0);
    return PutAnnotationLayerPkAnnotationAnnotationIdPathParams;
}(SpeakeasyBase));
export { PutAnnotationLayerPkAnnotationAnnotationIdPathParams };
var PutAnnotationLayerPkAnnotationAnnotationIdSecurity = /** @class */ (function (_super) {
    __extends(PutAnnotationLayerPkAnnotationAnnotationIdSecurity, _super);
    function PutAnnotationLayerPkAnnotationAnnotationIdSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeJwt)
    ], PutAnnotationLayerPkAnnotationAnnotationIdSecurity.prototype, "jwt", void 0);
    return PutAnnotationLayerPkAnnotationAnnotationIdSecurity;
}(SpeakeasyBase));
export { PutAnnotationLayerPkAnnotationAnnotationIdSecurity };
var PutAnnotationLayerPkAnnotationAnnotationId200ApplicationJson = /** @class */ (function (_super) {
    __extends(PutAnnotationLayerPkAnnotationAnnotationId200ApplicationJson, _super);
    function PutAnnotationLayerPkAnnotationAnnotationId200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PutAnnotationLayerPkAnnotationAnnotationId200ApplicationJson.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=result" }),
        __metadata("design:type", shared.AnnotationRestApiPut)
    ], PutAnnotationLayerPkAnnotationAnnotationId200ApplicationJson.prototype, "result", void 0);
    return PutAnnotationLayerPkAnnotationAnnotationId200ApplicationJson;
}(SpeakeasyBase));
export { PutAnnotationLayerPkAnnotationAnnotationId200ApplicationJson };
var PutAnnotationLayerPkAnnotationAnnotationId400ApplicationJson = /** @class */ (function (_super) {
    __extends(PutAnnotationLayerPkAnnotationAnnotationId400ApplicationJson, _super);
    function PutAnnotationLayerPkAnnotationAnnotationId400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PutAnnotationLayerPkAnnotationAnnotationId400ApplicationJson.prototype, "message", void 0);
    return PutAnnotationLayerPkAnnotationAnnotationId400ApplicationJson;
}(SpeakeasyBase));
export { PutAnnotationLayerPkAnnotationAnnotationId400ApplicationJson };
var PutAnnotationLayerPkAnnotationAnnotationId401ApplicationJson = /** @class */ (function (_super) {
    __extends(PutAnnotationLayerPkAnnotationAnnotationId401ApplicationJson, _super);
    function PutAnnotationLayerPkAnnotationAnnotationId401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PutAnnotationLayerPkAnnotationAnnotationId401ApplicationJson.prototype, "message", void 0);
    return PutAnnotationLayerPkAnnotationAnnotationId401ApplicationJson;
}(SpeakeasyBase));
export { PutAnnotationLayerPkAnnotationAnnotationId401ApplicationJson };
var PutAnnotationLayerPkAnnotationAnnotationId404ApplicationJson = /** @class */ (function (_super) {
    __extends(PutAnnotationLayerPkAnnotationAnnotationId404ApplicationJson, _super);
    function PutAnnotationLayerPkAnnotationAnnotationId404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PutAnnotationLayerPkAnnotationAnnotationId404ApplicationJson.prototype, "message", void 0);
    return PutAnnotationLayerPkAnnotationAnnotationId404ApplicationJson;
}(SpeakeasyBase));
export { PutAnnotationLayerPkAnnotationAnnotationId404ApplicationJson };
var PutAnnotationLayerPkAnnotationAnnotationId500ApplicationJson = /** @class */ (function (_super) {
    __extends(PutAnnotationLayerPkAnnotationAnnotationId500ApplicationJson, _super);
    function PutAnnotationLayerPkAnnotationAnnotationId500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PutAnnotationLayerPkAnnotationAnnotationId500ApplicationJson.prototype, "message", void 0);
    return PutAnnotationLayerPkAnnotationAnnotationId500ApplicationJson;
}(SpeakeasyBase));
export { PutAnnotationLayerPkAnnotationAnnotationId500ApplicationJson };
var PutAnnotationLayerPkAnnotationAnnotationIdRequest = /** @class */ (function (_super) {
    __extends(PutAnnotationLayerPkAnnotationAnnotationIdRequest, _super);
    function PutAnnotationLayerPkAnnotationAnnotationIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutAnnotationLayerPkAnnotationAnnotationIdPathParams)
    ], PutAnnotationLayerPkAnnotationAnnotationIdRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.AnnotationRestApiPut)
    ], PutAnnotationLayerPkAnnotationAnnotationIdRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutAnnotationLayerPkAnnotationAnnotationIdSecurity)
    ], PutAnnotationLayerPkAnnotationAnnotationIdRequest.prototype, "security", void 0);
    return PutAnnotationLayerPkAnnotationAnnotationIdRequest;
}(SpeakeasyBase));
export { PutAnnotationLayerPkAnnotationAnnotationIdRequest };
var PutAnnotationLayerPkAnnotationAnnotationIdResponse = /** @class */ (function (_super) {
    __extends(PutAnnotationLayerPkAnnotationAnnotationIdResponse, _super);
    function PutAnnotationLayerPkAnnotationAnnotationIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PutAnnotationLayerPkAnnotationAnnotationIdResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutAnnotationLayerPkAnnotationAnnotationId200ApplicationJson)
    ], PutAnnotationLayerPkAnnotationAnnotationIdResponse.prototype, "putAnnotationLayerPkAnnotationAnnotationId200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutAnnotationLayerPkAnnotationAnnotationId400ApplicationJson)
    ], PutAnnotationLayerPkAnnotationAnnotationIdResponse.prototype, "putAnnotationLayerPkAnnotationAnnotationId400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutAnnotationLayerPkAnnotationAnnotationId401ApplicationJson)
    ], PutAnnotationLayerPkAnnotationAnnotationIdResponse.prototype, "putAnnotationLayerPkAnnotationAnnotationId401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutAnnotationLayerPkAnnotationAnnotationId404ApplicationJson)
    ], PutAnnotationLayerPkAnnotationAnnotationIdResponse.prototype, "putAnnotationLayerPkAnnotationAnnotationId404ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutAnnotationLayerPkAnnotationAnnotationId500ApplicationJson)
    ], PutAnnotationLayerPkAnnotationAnnotationIdResponse.prototype, "putAnnotationLayerPkAnnotationAnnotationId500ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PutAnnotationLayerPkAnnotationAnnotationIdResponse.prototype, "statusCode", void 0);
    return PutAnnotationLayerPkAnnotationAnnotationIdResponse;
}(SpeakeasyBase));
export { PutAnnotationLayerPkAnnotationAnnotationIdResponse };
