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
var GetAnnotationLayerPkAnnotationPathParams = /** @class */ (function (_super) {
    __extends(GetAnnotationLayerPkAnnotationPathParams, _super);
    function GetAnnotationLayerPkAnnotationPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=pk" }),
        __metadata("design:type", Number)
    ], GetAnnotationLayerPkAnnotationPathParams.prototype, "pk", void 0);
    return GetAnnotationLayerPkAnnotationPathParams;
}(SpeakeasyBase));
export { GetAnnotationLayerPkAnnotationPathParams };
var GetAnnotationLayerPkAnnotationQueryParams = /** @class */ (function (_super) {
    __extends(GetAnnotationLayerPkAnnotationQueryParams, _super);
    function GetAnnotationLayerPkAnnotationQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, serialization=json;name=q" }),
        __metadata("design:type", shared.GetListSchema)
    ], GetAnnotationLayerPkAnnotationQueryParams.prototype, "q", void 0);
    return GetAnnotationLayerPkAnnotationQueryParams;
}(SpeakeasyBase));
export { GetAnnotationLayerPkAnnotationQueryParams };
var GetAnnotationLayerPkAnnotationSecurity = /** @class */ (function (_super) {
    __extends(GetAnnotationLayerPkAnnotationSecurity, _super);
    function GetAnnotationLayerPkAnnotationSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeJwt)
    ], GetAnnotationLayerPkAnnotationSecurity.prototype, "jwt", void 0);
    return GetAnnotationLayerPkAnnotationSecurity;
}(SpeakeasyBase));
export { GetAnnotationLayerPkAnnotationSecurity };
var GetAnnotationLayerPkAnnotation200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetAnnotationLayerPkAnnotation200ApplicationJson, _super);
    function GetAnnotationLayerPkAnnotation200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=count" }),
        __metadata("design:type", Number)
    ], GetAnnotationLayerPkAnnotation200ApplicationJson.prototype, "count", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ids" }),
        __metadata("design:type", Array)
    ], GetAnnotationLayerPkAnnotation200ApplicationJson.prototype, "ids", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=result", elemType: shared.AnnotationRestApiGetList }),
        __metadata("design:type", Array)
    ], GetAnnotationLayerPkAnnotation200ApplicationJson.prototype, "result", void 0);
    return GetAnnotationLayerPkAnnotation200ApplicationJson;
}(SpeakeasyBase));
export { GetAnnotationLayerPkAnnotation200ApplicationJson };
var GetAnnotationLayerPkAnnotation400ApplicationJson = /** @class */ (function (_super) {
    __extends(GetAnnotationLayerPkAnnotation400ApplicationJson, _super);
    function GetAnnotationLayerPkAnnotation400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetAnnotationLayerPkAnnotation400ApplicationJson.prototype, "message", void 0);
    return GetAnnotationLayerPkAnnotation400ApplicationJson;
}(SpeakeasyBase));
export { GetAnnotationLayerPkAnnotation400ApplicationJson };
var GetAnnotationLayerPkAnnotation401ApplicationJson = /** @class */ (function (_super) {
    __extends(GetAnnotationLayerPkAnnotation401ApplicationJson, _super);
    function GetAnnotationLayerPkAnnotation401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetAnnotationLayerPkAnnotation401ApplicationJson.prototype, "message", void 0);
    return GetAnnotationLayerPkAnnotation401ApplicationJson;
}(SpeakeasyBase));
export { GetAnnotationLayerPkAnnotation401ApplicationJson };
var GetAnnotationLayerPkAnnotation422ApplicationJson = /** @class */ (function (_super) {
    __extends(GetAnnotationLayerPkAnnotation422ApplicationJson, _super);
    function GetAnnotationLayerPkAnnotation422ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetAnnotationLayerPkAnnotation422ApplicationJson.prototype, "message", void 0);
    return GetAnnotationLayerPkAnnotation422ApplicationJson;
}(SpeakeasyBase));
export { GetAnnotationLayerPkAnnotation422ApplicationJson };
var GetAnnotationLayerPkAnnotation500ApplicationJson = /** @class */ (function (_super) {
    __extends(GetAnnotationLayerPkAnnotation500ApplicationJson, _super);
    function GetAnnotationLayerPkAnnotation500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetAnnotationLayerPkAnnotation500ApplicationJson.prototype, "message", void 0);
    return GetAnnotationLayerPkAnnotation500ApplicationJson;
}(SpeakeasyBase));
export { GetAnnotationLayerPkAnnotation500ApplicationJson };
var GetAnnotationLayerPkAnnotationRequest = /** @class */ (function (_super) {
    __extends(GetAnnotationLayerPkAnnotationRequest, _super);
    function GetAnnotationLayerPkAnnotationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAnnotationLayerPkAnnotationPathParams)
    ], GetAnnotationLayerPkAnnotationRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAnnotationLayerPkAnnotationQueryParams)
    ], GetAnnotationLayerPkAnnotationRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAnnotationLayerPkAnnotationSecurity)
    ], GetAnnotationLayerPkAnnotationRequest.prototype, "security", void 0);
    return GetAnnotationLayerPkAnnotationRequest;
}(SpeakeasyBase));
export { GetAnnotationLayerPkAnnotationRequest };
var GetAnnotationLayerPkAnnotationResponse = /** @class */ (function (_super) {
    __extends(GetAnnotationLayerPkAnnotationResponse, _super);
    function GetAnnotationLayerPkAnnotationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetAnnotationLayerPkAnnotationResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAnnotationLayerPkAnnotation200ApplicationJson)
    ], GetAnnotationLayerPkAnnotationResponse.prototype, "getAnnotationLayerPkAnnotation200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAnnotationLayerPkAnnotation400ApplicationJson)
    ], GetAnnotationLayerPkAnnotationResponse.prototype, "getAnnotationLayerPkAnnotation400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAnnotationLayerPkAnnotation401ApplicationJson)
    ], GetAnnotationLayerPkAnnotationResponse.prototype, "getAnnotationLayerPkAnnotation401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAnnotationLayerPkAnnotation422ApplicationJson)
    ], GetAnnotationLayerPkAnnotationResponse.prototype, "getAnnotationLayerPkAnnotation422ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAnnotationLayerPkAnnotation500ApplicationJson)
    ], GetAnnotationLayerPkAnnotationResponse.prototype, "getAnnotationLayerPkAnnotation500ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetAnnotationLayerPkAnnotationResponse.prototype, "statusCode", void 0);
    return GetAnnotationLayerPkAnnotationResponse;
}(SpeakeasyBase));
export { GetAnnotationLayerPkAnnotationResponse };
