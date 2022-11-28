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
var GetDatabasePkRelatedObjectsPathParams = /** @class */ (function (_super) {
    __extends(GetDatabasePkRelatedObjectsPathParams, _super);
    function GetDatabasePkRelatedObjectsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=pk" }),
        __metadata("design:type", Number)
    ], GetDatabasePkRelatedObjectsPathParams.prototype, "pk", void 0);
    return GetDatabasePkRelatedObjectsPathParams;
}(SpeakeasyBase));
export { GetDatabasePkRelatedObjectsPathParams };
var GetDatabasePkRelatedObjectsSecurity = /** @class */ (function (_super) {
    __extends(GetDatabasePkRelatedObjectsSecurity, _super);
    function GetDatabasePkRelatedObjectsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeJwt)
    ], GetDatabasePkRelatedObjectsSecurity.prototype, "jwt", void 0);
    return GetDatabasePkRelatedObjectsSecurity;
}(SpeakeasyBase));
export { GetDatabasePkRelatedObjectsSecurity };
var GetDatabasePkRelatedObjects401ApplicationJson = /** @class */ (function (_super) {
    __extends(GetDatabasePkRelatedObjects401ApplicationJson, _super);
    function GetDatabasePkRelatedObjects401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetDatabasePkRelatedObjects401ApplicationJson.prototype, "message", void 0);
    return GetDatabasePkRelatedObjects401ApplicationJson;
}(SpeakeasyBase));
export { GetDatabasePkRelatedObjects401ApplicationJson };
var GetDatabasePkRelatedObjects404ApplicationJson = /** @class */ (function (_super) {
    __extends(GetDatabasePkRelatedObjects404ApplicationJson, _super);
    function GetDatabasePkRelatedObjects404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetDatabasePkRelatedObjects404ApplicationJson.prototype, "message", void 0);
    return GetDatabasePkRelatedObjects404ApplicationJson;
}(SpeakeasyBase));
export { GetDatabasePkRelatedObjects404ApplicationJson };
var GetDatabasePkRelatedObjects500ApplicationJson = /** @class */ (function (_super) {
    __extends(GetDatabasePkRelatedObjects500ApplicationJson, _super);
    function GetDatabasePkRelatedObjects500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetDatabasePkRelatedObjects500ApplicationJson.prototype, "message", void 0);
    return GetDatabasePkRelatedObjects500ApplicationJson;
}(SpeakeasyBase));
export { GetDatabasePkRelatedObjects500ApplicationJson };
var GetDatabasePkRelatedObjectsRequest = /** @class */ (function (_super) {
    __extends(GetDatabasePkRelatedObjectsRequest, _super);
    function GetDatabasePkRelatedObjectsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDatabasePkRelatedObjectsPathParams)
    ], GetDatabasePkRelatedObjectsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDatabasePkRelatedObjectsSecurity)
    ], GetDatabasePkRelatedObjectsRequest.prototype, "security", void 0);
    return GetDatabasePkRelatedObjectsRequest;
}(SpeakeasyBase));
export { GetDatabasePkRelatedObjectsRequest };
var GetDatabasePkRelatedObjectsResponse = /** @class */ (function (_super) {
    __extends(GetDatabasePkRelatedObjectsResponse, _super);
    function GetDatabasePkRelatedObjectsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetDatabasePkRelatedObjectsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.DatabaseRelatedObjectsResponse)
    ], GetDatabasePkRelatedObjectsResponse.prototype, "databaseRelatedObjectsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDatabasePkRelatedObjects401ApplicationJson)
    ], GetDatabasePkRelatedObjectsResponse.prototype, "getDatabasePkRelatedObjects401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDatabasePkRelatedObjects404ApplicationJson)
    ], GetDatabasePkRelatedObjectsResponse.prototype, "getDatabasePkRelatedObjects404ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDatabasePkRelatedObjects500ApplicationJson)
    ], GetDatabasePkRelatedObjectsResponse.prototype, "getDatabasePkRelatedObjects500ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetDatabasePkRelatedObjectsResponse.prototype, "statusCode", void 0);
    return GetDatabasePkRelatedObjectsResponse;
}(SpeakeasyBase));
export { GetDatabasePkRelatedObjectsResponse };
