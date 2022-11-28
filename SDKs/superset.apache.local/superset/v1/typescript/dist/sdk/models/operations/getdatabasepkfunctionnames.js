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
var GetDatabasePkFunctionNamesPathParams = /** @class */ (function (_super) {
    __extends(GetDatabasePkFunctionNamesPathParams, _super);
    function GetDatabasePkFunctionNamesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=pk" }),
        __metadata("design:type", Number)
    ], GetDatabasePkFunctionNamesPathParams.prototype, "pk", void 0);
    return GetDatabasePkFunctionNamesPathParams;
}(SpeakeasyBase));
export { GetDatabasePkFunctionNamesPathParams };
var GetDatabasePkFunctionNamesSecurity = /** @class */ (function (_super) {
    __extends(GetDatabasePkFunctionNamesSecurity, _super);
    function GetDatabasePkFunctionNamesSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeJwt)
    ], GetDatabasePkFunctionNamesSecurity.prototype, "jwt", void 0);
    return GetDatabasePkFunctionNamesSecurity;
}(SpeakeasyBase));
export { GetDatabasePkFunctionNamesSecurity };
var GetDatabasePkFunctionNames401ApplicationJson = /** @class */ (function (_super) {
    __extends(GetDatabasePkFunctionNames401ApplicationJson, _super);
    function GetDatabasePkFunctionNames401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetDatabasePkFunctionNames401ApplicationJson.prototype, "message", void 0);
    return GetDatabasePkFunctionNames401ApplicationJson;
}(SpeakeasyBase));
export { GetDatabasePkFunctionNames401ApplicationJson };
var GetDatabasePkFunctionNames404ApplicationJson = /** @class */ (function (_super) {
    __extends(GetDatabasePkFunctionNames404ApplicationJson, _super);
    function GetDatabasePkFunctionNames404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetDatabasePkFunctionNames404ApplicationJson.prototype, "message", void 0);
    return GetDatabasePkFunctionNames404ApplicationJson;
}(SpeakeasyBase));
export { GetDatabasePkFunctionNames404ApplicationJson };
var GetDatabasePkFunctionNames500ApplicationJson = /** @class */ (function (_super) {
    __extends(GetDatabasePkFunctionNames500ApplicationJson, _super);
    function GetDatabasePkFunctionNames500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetDatabasePkFunctionNames500ApplicationJson.prototype, "message", void 0);
    return GetDatabasePkFunctionNames500ApplicationJson;
}(SpeakeasyBase));
export { GetDatabasePkFunctionNames500ApplicationJson };
var GetDatabasePkFunctionNamesRequest = /** @class */ (function (_super) {
    __extends(GetDatabasePkFunctionNamesRequest, _super);
    function GetDatabasePkFunctionNamesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDatabasePkFunctionNamesPathParams)
    ], GetDatabasePkFunctionNamesRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDatabasePkFunctionNamesSecurity)
    ], GetDatabasePkFunctionNamesRequest.prototype, "security", void 0);
    return GetDatabasePkFunctionNamesRequest;
}(SpeakeasyBase));
export { GetDatabasePkFunctionNamesRequest };
var GetDatabasePkFunctionNamesResponse = /** @class */ (function (_super) {
    __extends(GetDatabasePkFunctionNamesResponse, _super);
    function GetDatabasePkFunctionNamesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetDatabasePkFunctionNamesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.DatabaseFunctionNamesResponse)
    ], GetDatabasePkFunctionNamesResponse.prototype, "databaseFunctionNamesResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDatabasePkFunctionNames401ApplicationJson)
    ], GetDatabasePkFunctionNamesResponse.prototype, "getDatabasePkFunctionNames401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDatabasePkFunctionNames404ApplicationJson)
    ], GetDatabasePkFunctionNamesResponse.prototype, "getDatabasePkFunctionNames404ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDatabasePkFunctionNames500ApplicationJson)
    ], GetDatabasePkFunctionNamesResponse.prototype, "getDatabasePkFunctionNames500ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetDatabasePkFunctionNamesResponse.prototype, "statusCode", void 0);
    return GetDatabasePkFunctionNamesResponse;
}(SpeakeasyBase));
export { GetDatabasePkFunctionNamesResponse };
