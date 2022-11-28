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
var HealthCheckHeaders = /** @class */ (function (_super) {
    __extends(HealthCheckHeaders, _super);
    function HealthCheckHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Accept-Language" }),
        __metadata("design:type", String)
    ], HealthCheckHeaders.prototype, "acceptLanguage", void 0);
    return HealthCheckHeaders;
}(SpeakeasyBase));
export { HealthCheckHeaders };
var HealthCheck200ApplicationJson = /** @class */ (function (_super) {
    __extends(HealthCheck200ApplicationJson, _super);
    function HealthCheck200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=allGood" }),
        __metadata("design:type", Boolean)
    ], HealthCheck200ApplicationJson.prototype, "allGood", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=capiOk" }),
        __metadata("design:type", Boolean)
    ], HealthCheck200ApplicationJson.prototype, "capiOk", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dbOk" }),
        __metadata("design:type", Boolean)
    ], HealthCheck200ApplicationJson.prototype, "dbOk", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=memcachedOk" }),
        __metadata("design:type", Boolean)
    ], HealthCheck200ApplicationJson.prototype, "memcachedOk", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], HealthCheck200ApplicationJson.prototype, "message", void 0);
    return HealthCheck200ApplicationJson;
}(SpeakeasyBase));
export { HealthCheck200ApplicationJson };
var HealthCheckRequest = /** @class */ (function (_super) {
    __extends(HealthCheckRequest, _super);
    function HealthCheckRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", HealthCheckHeaders)
    ], HealthCheckRequest.prototype, "headers", void 0);
    return HealthCheckRequest;
}(SpeakeasyBase));
export { HealthCheckRequest };
var HealthCheckResponse = /** @class */ (function (_super) {
    __extends(HealthCheckResponse, _super);
    function HealthCheckResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], HealthCheckResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], HealthCheckResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", HealthCheck200ApplicationJson)
    ], HealthCheckResponse.prototype, "healthCheck200ApplicationJsonObject", void 0);
    return HealthCheckResponse;
}(SpeakeasyBase));
export { HealthCheckResponse };
