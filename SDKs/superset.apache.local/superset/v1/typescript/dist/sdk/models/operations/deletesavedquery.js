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
var DeleteSavedQueryQueryParams = /** @class */ (function (_super) {
    __extends(DeleteSavedQueryQueryParams, _super);
    function DeleteSavedQueryQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, serialization=json;name=q" }),
        __metadata("design:type", Array)
    ], DeleteSavedQueryQueryParams.prototype, "q", void 0);
    return DeleteSavedQueryQueryParams;
}(SpeakeasyBase));
export { DeleteSavedQueryQueryParams };
var DeleteSavedQuerySecurity = /** @class */ (function (_super) {
    __extends(DeleteSavedQuerySecurity, _super);
    function DeleteSavedQuerySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeJwt)
    ], DeleteSavedQuerySecurity.prototype, "jwt", void 0);
    return DeleteSavedQuerySecurity;
}(SpeakeasyBase));
export { DeleteSavedQuerySecurity };
var DeleteSavedQuery200ApplicationJson = /** @class */ (function (_super) {
    __extends(DeleteSavedQuery200ApplicationJson, _super);
    function DeleteSavedQuery200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], DeleteSavedQuery200ApplicationJson.prototype, "message", void 0);
    return DeleteSavedQuery200ApplicationJson;
}(SpeakeasyBase));
export { DeleteSavedQuery200ApplicationJson };
var DeleteSavedQuery401ApplicationJson = /** @class */ (function (_super) {
    __extends(DeleteSavedQuery401ApplicationJson, _super);
    function DeleteSavedQuery401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], DeleteSavedQuery401ApplicationJson.prototype, "message", void 0);
    return DeleteSavedQuery401ApplicationJson;
}(SpeakeasyBase));
export { DeleteSavedQuery401ApplicationJson };
var DeleteSavedQuery404ApplicationJson = /** @class */ (function (_super) {
    __extends(DeleteSavedQuery404ApplicationJson, _super);
    function DeleteSavedQuery404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], DeleteSavedQuery404ApplicationJson.prototype, "message", void 0);
    return DeleteSavedQuery404ApplicationJson;
}(SpeakeasyBase));
export { DeleteSavedQuery404ApplicationJson };
var DeleteSavedQuery422ApplicationJson = /** @class */ (function (_super) {
    __extends(DeleteSavedQuery422ApplicationJson, _super);
    function DeleteSavedQuery422ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], DeleteSavedQuery422ApplicationJson.prototype, "message", void 0);
    return DeleteSavedQuery422ApplicationJson;
}(SpeakeasyBase));
export { DeleteSavedQuery422ApplicationJson };
var DeleteSavedQuery500ApplicationJson = /** @class */ (function (_super) {
    __extends(DeleteSavedQuery500ApplicationJson, _super);
    function DeleteSavedQuery500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], DeleteSavedQuery500ApplicationJson.prototype, "message", void 0);
    return DeleteSavedQuery500ApplicationJson;
}(SpeakeasyBase));
export { DeleteSavedQuery500ApplicationJson };
var DeleteSavedQueryRequest = /** @class */ (function (_super) {
    __extends(DeleteSavedQueryRequest, _super);
    function DeleteSavedQueryRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteSavedQueryQueryParams)
    ], DeleteSavedQueryRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteSavedQuerySecurity)
    ], DeleteSavedQueryRequest.prototype, "security", void 0);
    return DeleteSavedQueryRequest;
}(SpeakeasyBase));
export { DeleteSavedQueryRequest };
var DeleteSavedQueryResponse = /** @class */ (function (_super) {
    __extends(DeleteSavedQueryResponse, _super);
    function DeleteSavedQueryResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteSavedQueryResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteSavedQuery200ApplicationJson)
    ], DeleteSavedQueryResponse.prototype, "deleteSavedQuery200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteSavedQuery401ApplicationJson)
    ], DeleteSavedQueryResponse.prototype, "deleteSavedQuery401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteSavedQuery404ApplicationJson)
    ], DeleteSavedQueryResponse.prototype, "deleteSavedQuery404ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteSavedQuery422ApplicationJson)
    ], DeleteSavedQueryResponse.prototype, "deleteSavedQuery422ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteSavedQuery500ApplicationJson)
    ], DeleteSavedQueryResponse.prototype, "deleteSavedQuery500ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeleteSavedQueryResponse.prototype, "statusCode", void 0);
    return DeleteSavedQueryResponse;
}(SpeakeasyBase));
export { DeleteSavedQueryResponse };
