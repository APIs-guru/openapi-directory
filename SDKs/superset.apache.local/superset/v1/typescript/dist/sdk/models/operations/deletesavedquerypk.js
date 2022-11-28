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
var DeleteSavedQueryPkPathParams = /** @class */ (function (_super) {
    __extends(DeleteSavedQueryPkPathParams, _super);
    function DeleteSavedQueryPkPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=pk" }),
        __metadata("design:type", Number)
    ], DeleteSavedQueryPkPathParams.prototype, "pk", void 0);
    return DeleteSavedQueryPkPathParams;
}(SpeakeasyBase));
export { DeleteSavedQueryPkPathParams };
var DeleteSavedQueryPkSecurity = /** @class */ (function (_super) {
    __extends(DeleteSavedQueryPkSecurity, _super);
    function DeleteSavedQueryPkSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeJwt)
    ], DeleteSavedQueryPkSecurity.prototype, "jwt", void 0);
    return DeleteSavedQueryPkSecurity;
}(SpeakeasyBase));
export { DeleteSavedQueryPkSecurity };
var DeleteSavedQueryPk200ApplicationJson = /** @class */ (function (_super) {
    __extends(DeleteSavedQueryPk200ApplicationJson, _super);
    function DeleteSavedQueryPk200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], DeleteSavedQueryPk200ApplicationJson.prototype, "message", void 0);
    return DeleteSavedQueryPk200ApplicationJson;
}(SpeakeasyBase));
export { DeleteSavedQueryPk200ApplicationJson };
var DeleteSavedQueryPk404ApplicationJson = /** @class */ (function (_super) {
    __extends(DeleteSavedQueryPk404ApplicationJson, _super);
    function DeleteSavedQueryPk404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], DeleteSavedQueryPk404ApplicationJson.prototype, "message", void 0);
    return DeleteSavedQueryPk404ApplicationJson;
}(SpeakeasyBase));
export { DeleteSavedQueryPk404ApplicationJson };
var DeleteSavedQueryPk422ApplicationJson = /** @class */ (function (_super) {
    __extends(DeleteSavedQueryPk422ApplicationJson, _super);
    function DeleteSavedQueryPk422ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], DeleteSavedQueryPk422ApplicationJson.prototype, "message", void 0);
    return DeleteSavedQueryPk422ApplicationJson;
}(SpeakeasyBase));
export { DeleteSavedQueryPk422ApplicationJson };
var DeleteSavedQueryPk500ApplicationJson = /** @class */ (function (_super) {
    __extends(DeleteSavedQueryPk500ApplicationJson, _super);
    function DeleteSavedQueryPk500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], DeleteSavedQueryPk500ApplicationJson.prototype, "message", void 0);
    return DeleteSavedQueryPk500ApplicationJson;
}(SpeakeasyBase));
export { DeleteSavedQueryPk500ApplicationJson };
var DeleteSavedQueryPkRequest = /** @class */ (function (_super) {
    __extends(DeleteSavedQueryPkRequest, _super);
    function DeleteSavedQueryPkRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteSavedQueryPkPathParams)
    ], DeleteSavedQueryPkRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteSavedQueryPkSecurity)
    ], DeleteSavedQueryPkRequest.prototype, "security", void 0);
    return DeleteSavedQueryPkRequest;
}(SpeakeasyBase));
export { DeleteSavedQueryPkRequest };
var DeleteSavedQueryPkResponse = /** @class */ (function (_super) {
    __extends(DeleteSavedQueryPkResponse, _super);
    function DeleteSavedQueryPkResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteSavedQueryPkResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteSavedQueryPk200ApplicationJson)
    ], DeleteSavedQueryPkResponse.prototype, "deleteSavedQueryPk200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteSavedQueryPk404ApplicationJson)
    ], DeleteSavedQueryPkResponse.prototype, "deleteSavedQueryPk404ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteSavedQueryPk422ApplicationJson)
    ], DeleteSavedQueryPkResponse.prototype, "deleteSavedQueryPk422ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteSavedQueryPk500ApplicationJson)
    ], DeleteSavedQueryPkResponse.prototype, "deleteSavedQueryPk500ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeleteSavedQueryPkResponse.prototype, "statusCode", void 0);
    return DeleteSavedQueryPkResponse;
}(SpeakeasyBase));
export { DeleteSavedQueryPkResponse };
