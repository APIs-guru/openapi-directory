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
var GetDatabaseAvailableSecurity = /** @class */ (function (_super) {
    __extends(GetDatabaseAvailableSecurity, _super);
    function GetDatabaseAvailableSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeJwt)
    ], GetDatabaseAvailableSecurity.prototype, "jwt", void 0);
    return GetDatabaseAvailableSecurity;
}(SpeakeasyBase));
export { GetDatabaseAvailableSecurity };
var GetDatabaseAvailable200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetDatabaseAvailable200ApplicationJson, _super);
    function GetDatabaseAvailable200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=available_drivers" }),
        __metadata("design:type", Array)
    ], GetDatabaseAvailable200ApplicationJson.prototype, "availableDrivers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=default_driver" }),
        __metadata("design:type", String)
    ], GetDatabaseAvailable200ApplicationJson.prototype, "defaultDriver", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=engine" }),
        __metadata("design:type", String)
    ], GetDatabaseAvailable200ApplicationJson.prototype, "engine", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GetDatabaseAvailable200ApplicationJson.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=parameters" }),
        __metadata("design:type", Map)
    ], GetDatabaseAvailable200ApplicationJson.prototype, "parameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=preferred" }),
        __metadata("design:type", Boolean)
    ], GetDatabaseAvailable200ApplicationJson.prototype, "preferred", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sqlalchemy_uri_placeholder" }),
        __metadata("design:type", String)
    ], GetDatabaseAvailable200ApplicationJson.prototype, "sqlalchemyUriPlaceholder", void 0);
    return GetDatabaseAvailable200ApplicationJson;
}(SpeakeasyBase));
export { GetDatabaseAvailable200ApplicationJson };
var GetDatabaseAvailable400ApplicationJson = /** @class */ (function (_super) {
    __extends(GetDatabaseAvailable400ApplicationJson, _super);
    function GetDatabaseAvailable400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetDatabaseAvailable400ApplicationJson.prototype, "message", void 0);
    return GetDatabaseAvailable400ApplicationJson;
}(SpeakeasyBase));
export { GetDatabaseAvailable400ApplicationJson };
var GetDatabaseAvailable500ApplicationJson = /** @class */ (function (_super) {
    __extends(GetDatabaseAvailable500ApplicationJson, _super);
    function GetDatabaseAvailable500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetDatabaseAvailable500ApplicationJson.prototype, "message", void 0);
    return GetDatabaseAvailable500ApplicationJson;
}(SpeakeasyBase));
export { GetDatabaseAvailable500ApplicationJson };
var GetDatabaseAvailableRequest = /** @class */ (function (_super) {
    __extends(GetDatabaseAvailableRequest, _super);
    function GetDatabaseAvailableRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDatabaseAvailableSecurity)
    ], GetDatabaseAvailableRequest.prototype, "security", void 0);
    return GetDatabaseAvailableRequest;
}(SpeakeasyBase));
export { GetDatabaseAvailableRequest };
var GetDatabaseAvailableResponse = /** @class */ (function (_super) {
    __extends(GetDatabaseAvailableResponse, _super);
    function GetDatabaseAvailableResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetDatabaseAvailableResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: GetDatabaseAvailable200ApplicationJson }),
        __metadata("design:type", Array)
    ], GetDatabaseAvailableResponse.prototype, "getDatabaseAvailable200ApplicationJsonObjects", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDatabaseAvailable400ApplicationJson)
    ], GetDatabaseAvailableResponse.prototype, "getDatabaseAvailable400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDatabaseAvailable500ApplicationJson)
    ], GetDatabaseAvailableResponse.prototype, "getDatabaseAvailable500ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetDatabaseAvailableResponse.prototype, "statusCode", void 0);
    return GetDatabaseAvailableResponse;
}(SpeakeasyBase));
export { GetDatabaseAvailableResponse };
