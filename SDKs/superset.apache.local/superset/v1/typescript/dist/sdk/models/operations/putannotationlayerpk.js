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
var PutAnnotationLayerPkPathParams = /** @class */ (function (_super) {
    __extends(PutAnnotationLayerPkPathParams, _super);
    function PutAnnotationLayerPkPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=pk" }),
        __metadata("design:type", Number)
    ], PutAnnotationLayerPkPathParams.prototype, "pk", void 0);
    return PutAnnotationLayerPkPathParams;
}(SpeakeasyBase));
export { PutAnnotationLayerPkPathParams };
var PutAnnotationLayerPkSecurity = /** @class */ (function (_super) {
    __extends(PutAnnotationLayerPkSecurity, _super);
    function PutAnnotationLayerPkSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeJwt)
    ], PutAnnotationLayerPkSecurity.prototype, "jwt", void 0);
    return PutAnnotationLayerPkSecurity;
}(SpeakeasyBase));
export { PutAnnotationLayerPkSecurity };
var PutAnnotationLayerPk200ApplicationJson = /** @class */ (function (_super) {
    __extends(PutAnnotationLayerPk200ApplicationJson, _super);
    function PutAnnotationLayerPk200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PutAnnotationLayerPk200ApplicationJson.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=result" }),
        __metadata("design:type", shared.AnnotationLayerRestApiPut)
    ], PutAnnotationLayerPk200ApplicationJson.prototype, "result", void 0);
    return PutAnnotationLayerPk200ApplicationJson;
}(SpeakeasyBase));
export { PutAnnotationLayerPk200ApplicationJson };
var PutAnnotationLayerPk400ApplicationJson = /** @class */ (function (_super) {
    __extends(PutAnnotationLayerPk400ApplicationJson, _super);
    function PutAnnotationLayerPk400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PutAnnotationLayerPk400ApplicationJson.prototype, "message", void 0);
    return PutAnnotationLayerPk400ApplicationJson;
}(SpeakeasyBase));
export { PutAnnotationLayerPk400ApplicationJson };
var PutAnnotationLayerPk401ApplicationJson = /** @class */ (function (_super) {
    __extends(PutAnnotationLayerPk401ApplicationJson, _super);
    function PutAnnotationLayerPk401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PutAnnotationLayerPk401ApplicationJson.prototype, "message", void 0);
    return PutAnnotationLayerPk401ApplicationJson;
}(SpeakeasyBase));
export { PutAnnotationLayerPk401ApplicationJson };
var PutAnnotationLayerPk404ApplicationJson = /** @class */ (function (_super) {
    __extends(PutAnnotationLayerPk404ApplicationJson, _super);
    function PutAnnotationLayerPk404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PutAnnotationLayerPk404ApplicationJson.prototype, "message", void 0);
    return PutAnnotationLayerPk404ApplicationJson;
}(SpeakeasyBase));
export { PutAnnotationLayerPk404ApplicationJson };
var PutAnnotationLayerPk500ApplicationJson = /** @class */ (function (_super) {
    __extends(PutAnnotationLayerPk500ApplicationJson, _super);
    function PutAnnotationLayerPk500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PutAnnotationLayerPk500ApplicationJson.prototype, "message", void 0);
    return PutAnnotationLayerPk500ApplicationJson;
}(SpeakeasyBase));
export { PutAnnotationLayerPk500ApplicationJson };
var PutAnnotationLayerPkRequest = /** @class */ (function (_super) {
    __extends(PutAnnotationLayerPkRequest, _super);
    function PutAnnotationLayerPkRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutAnnotationLayerPkPathParams)
    ], PutAnnotationLayerPkRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.AnnotationLayerRestApiPut)
    ], PutAnnotationLayerPkRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutAnnotationLayerPkSecurity)
    ], PutAnnotationLayerPkRequest.prototype, "security", void 0);
    return PutAnnotationLayerPkRequest;
}(SpeakeasyBase));
export { PutAnnotationLayerPkRequest };
var PutAnnotationLayerPkResponse = /** @class */ (function (_super) {
    __extends(PutAnnotationLayerPkResponse, _super);
    function PutAnnotationLayerPkResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PutAnnotationLayerPkResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutAnnotationLayerPk200ApplicationJson)
    ], PutAnnotationLayerPkResponse.prototype, "putAnnotationLayerPk200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutAnnotationLayerPk400ApplicationJson)
    ], PutAnnotationLayerPkResponse.prototype, "putAnnotationLayerPk400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutAnnotationLayerPk401ApplicationJson)
    ], PutAnnotationLayerPkResponse.prototype, "putAnnotationLayerPk401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutAnnotationLayerPk404ApplicationJson)
    ], PutAnnotationLayerPkResponse.prototype, "putAnnotationLayerPk404ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutAnnotationLayerPk500ApplicationJson)
    ], PutAnnotationLayerPkResponse.prototype, "putAnnotationLayerPk500ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PutAnnotationLayerPkResponse.prototype, "statusCode", void 0);
    return PutAnnotationLayerPkResponse;
}(SpeakeasyBase));
export { PutAnnotationLayerPkResponse };
