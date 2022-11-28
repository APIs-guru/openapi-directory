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
var DeleteAnnotationLayerPkAnnotationPathParams = /** @class */ (function (_super) {
    __extends(DeleteAnnotationLayerPkAnnotationPathParams, _super);
    function DeleteAnnotationLayerPkAnnotationPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=pk" }),
        __metadata("design:type", Number)
    ], DeleteAnnotationLayerPkAnnotationPathParams.prototype, "pk", void 0);
    return DeleteAnnotationLayerPkAnnotationPathParams;
}(SpeakeasyBase));
export { DeleteAnnotationLayerPkAnnotationPathParams };
var DeleteAnnotationLayerPkAnnotationQueryParams = /** @class */ (function (_super) {
    __extends(DeleteAnnotationLayerPkAnnotationQueryParams, _super);
    function DeleteAnnotationLayerPkAnnotationQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, serialization=json;name=q" }),
        __metadata("design:type", Array)
    ], DeleteAnnotationLayerPkAnnotationQueryParams.prototype, "q", void 0);
    return DeleteAnnotationLayerPkAnnotationQueryParams;
}(SpeakeasyBase));
export { DeleteAnnotationLayerPkAnnotationQueryParams };
var DeleteAnnotationLayerPkAnnotationSecurity = /** @class */ (function (_super) {
    __extends(DeleteAnnotationLayerPkAnnotationSecurity, _super);
    function DeleteAnnotationLayerPkAnnotationSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeJwt)
    ], DeleteAnnotationLayerPkAnnotationSecurity.prototype, "jwt", void 0);
    return DeleteAnnotationLayerPkAnnotationSecurity;
}(SpeakeasyBase));
export { DeleteAnnotationLayerPkAnnotationSecurity };
var DeleteAnnotationLayerPkAnnotation200ApplicationJson = /** @class */ (function (_super) {
    __extends(DeleteAnnotationLayerPkAnnotation200ApplicationJson, _super);
    function DeleteAnnotationLayerPkAnnotation200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], DeleteAnnotationLayerPkAnnotation200ApplicationJson.prototype, "message", void 0);
    return DeleteAnnotationLayerPkAnnotation200ApplicationJson;
}(SpeakeasyBase));
export { DeleteAnnotationLayerPkAnnotation200ApplicationJson };
var DeleteAnnotationLayerPkAnnotation401ApplicationJson = /** @class */ (function (_super) {
    __extends(DeleteAnnotationLayerPkAnnotation401ApplicationJson, _super);
    function DeleteAnnotationLayerPkAnnotation401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], DeleteAnnotationLayerPkAnnotation401ApplicationJson.prototype, "message", void 0);
    return DeleteAnnotationLayerPkAnnotation401ApplicationJson;
}(SpeakeasyBase));
export { DeleteAnnotationLayerPkAnnotation401ApplicationJson };
var DeleteAnnotationLayerPkAnnotation404ApplicationJson = /** @class */ (function (_super) {
    __extends(DeleteAnnotationLayerPkAnnotation404ApplicationJson, _super);
    function DeleteAnnotationLayerPkAnnotation404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], DeleteAnnotationLayerPkAnnotation404ApplicationJson.prototype, "message", void 0);
    return DeleteAnnotationLayerPkAnnotation404ApplicationJson;
}(SpeakeasyBase));
export { DeleteAnnotationLayerPkAnnotation404ApplicationJson };
var DeleteAnnotationLayerPkAnnotation422ApplicationJson = /** @class */ (function (_super) {
    __extends(DeleteAnnotationLayerPkAnnotation422ApplicationJson, _super);
    function DeleteAnnotationLayerPkAnnotation422ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], DeleteAnnotationLayerPkAnnotation422ApplicationJson.prototype, "message", void 0);
    return DeleteAnnotationLayerPkAnnotation422ApplicationJson;
}(SpeakeasyBase));
export { DeleteAnnotationLayerPkAnnotation422ApplicationJson };
var DeleteAnnotationLayerPkAnnotation500ApplicationJson = /** @class */ (function (_super) {
    __extends(DeleteAnnotationLayerPkAnnotation500ApplicationJson, _super);
    function DeleteAnnotationLayerPkAnnotation500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], DeleteAnnotationLayerPkAnnotation500ApplicationJson.prototype, "message", void 0);
    return DeleteAnnotationLayerPkAnnotation500ApplicationJson;
}(SpeakeasyBase));
export { DeleteAnnotationLayerPkAnnotation500ApplicationJson };
var DeleteAnnotationLayerPkAnnotationRequest = /** @class */ (function (_super) {
    __extends(DeleteAnnotationLayerPkAnnotationRequest, _super);
    function DeleteAnnotationLayerPkAnnotationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteAnnotationLayerPkAnnotationPathParams)
    ], DeleteAnnotationLayerPkAnnotationRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteAnnotationLayerPkAnnotationQueryParams)
    ], DeleteAnnotationLayerPkAnnotationRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteAnnotationLayerPkAnnotationSecurity)
    ], DeleteAnnotationLayerPkAnnotationRequest.prototype, "security", void 0);
    return DeleteAnnotationLayerPkAnnotationRequest;
}(SpeakeasyBase));
export { DeleteAnnotationLayerPkAnnotationRequest };
var DeleteAnnotationLayerPkAnnotationResponse = /** @class */ (function (_super) {
    __extends(DeleteAnnotationLayerPkAnnotationResponse, _super);
    function DeleteAnnotationLayerPkAnnotationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteAnnotationLayerPkAnnotationResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteAnnotationLayerPkAnnotation200ApplicationJson)
    ], DeleteAnnotationLayerPkAnnotationResponse.prototype, "deleteAnnotationLayerPkAnnotation200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteAnnotationLayerPkAnnotation401ApplicationJson)
    ], DeleteAnnotationLayerPkAnnotationResponse.prototype, "deleteAnnotationLayerPkAnnotation401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteAnnotationLayerPkAnnotation404ApplicationJson)
    ], DeleteAnnotationLayerPkAnnotationResponse.prototype, "deleteAnnotationLayerPkAnnotation404ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteAnnotationLayerPkAnnotation422ApplicationJson)
    ], DeleteAnnotationLayerPkAnnotationResponse.prototype, "deleteAnnotationLayerPkAnnotation422ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteAnnotationLayerPkAnnotation500ApplicationJson)
    ], DeleteAnnotationLayerPkAnnotationResponse.prototype, "deleteAnnotationLayerPkAnnotation500ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeleteAnnotationLayerPkAnnotationResponse.prototype, "statusCode", void 0);
    return DeleteAnnotationLayerPkAnnotationResponse;
}(SpeakeasyBase));
export { DeleteAnnotationLayerPkAnnotationResponse };
