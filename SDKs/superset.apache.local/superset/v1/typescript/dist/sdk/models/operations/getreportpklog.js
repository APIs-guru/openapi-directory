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
var GetReportPkLogPathParams = /** @class */ (function (_super) {
    __extends(GetReportPkLogPathParams, _super);
    function GetReportPkLogPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=pk" }),
        __metadata("design:type", Number)
    ], GetReportPkLogPathParams.prototype, "pk", void 0);
    return GetReportPkLogPathParams;
}(SpeakeasyBase));
export { GetReportPkLogPathParams };
var GetReportPkLogQueryParams = /** @class */ (function (_super) {
    __extends(GetReportPkLogQueryParams, _super);
    function GetReportPkLogQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, serialization=json;name=q" }),
        __metadata("design:type", shared.GetListSchema)
    ], GetReportPkLogQueryParams.prototype, "q", void 0);
    return GetReportPkLogQueryParams;
}(SpeakeasyBase));
export { GetReportPkLogQueryParams };
var GetReportPkLogSecurity = /** @class */ (function (_super) {
    __extends(GetReportPkLogSecurity, _super);
    function GetReportPkLogSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeJwt)
    ], GetReportPkLogSecurity.prototype, "jwt", void 0);
    return GetReportPkLogSecurity;
}(SpeakeasyBase));
export { GetReportPkLogSecurity };
var GetReportPkLog200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetReportPkLog200ApplicationJson, _super);
    function GetReportPkLog200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=count" }),
        __metadata("design:type", Number)
    ], GetReportPkLog200ApplicationJson.prototype, "count", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ids" }),
        __metadata("design:type", Array)
    ], GetReportPkLog200ApplicationJson.prototype, "ids", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=result", elemType: shared.ReportExecutionLogRestApiGetList }),
        __metadata("design:type", Array)
    ], GetReportPkLog200ApplicationJson.prototype, "result", void 0);
    return GetReportPkLog200ApplicationJson;
}(SpeakeasyBase));
export { GetReportPkLog200ApplicationJson };
var GetReportPkLog400ApplicationJson = /** @class */ (function (_super) {
    __extends(GetReportPkLog400ApplicationJson, _super);
    function GetReportPkLog400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetReportPkLog400ApplicationJson.prototype, "message", void 0);
    return GetReportPkLog400ApplicationJson;
}(SpeakeasyBase));
export { GetReportPkLog400ApplicationJson };
var GetReportPkLog401ApplicationJson = /** @class */ (function (_super) {
    __extends(GetReportPkLog401ApplicationJson, _super);
    function GetReportPkLog401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetReportPkLog401ApplicationJson.prototype, "message", void 0);
    return GetReportPkLog401ApplicationJson;
}(SpeakeasyBase));
export { GetReportPkLog401ApplicationJson };
var GetReportPkLog422ApplicationJson = /** @class */ (function (_super) {
    __extends(GetReportPkLog422ApplicationJson, _super);
    function GetReportPkLog422ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetReportPkLog422ApplicationJson.prototype, "message", void 0);
    return GetReportPkLog422ApplicationJson;
}(SpeakeasyBase));
export { GetReportPkLog422ApplicationJson };
var GetReportPkLog500ApplicationJson = /** @class */ (function (_super) {
    __extends(GetReportPkLog500ApplicationJson, _super);
    function GetReportPkLog500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetReportPkLog500ApplicationJson.prototype, "message", void 0);
    return GetReportPkLog500ApplicationJson;
}(SpeakeasyBase));
export { GetReportPkLog500ApplicationJson };
var GetReportPkLogRequest = /** @class */ (function (_super) {
    __extends(GetReportPkLogRequest, _super);
    function GetReportPkLogRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetReportPkLogPathParams)
    ], GetReportPkLogRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetReportPkLogQueryParams)
    ], GetReportPkLogRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetReportPkLogSecurity)
    ], GetReportPkLogRequest.prototype, "security", void 0);
    return GetReportPkLogRequest;
}(SpeakeasyBase));
export { GetReportPkLogRequest };
var GetReportPkLogResponse = /** @class */ (function (_super) {
    __extends(GetReportPkLogResponse, _super);
    function GetReportPkLogResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetReportPkLogResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetReportPkLog200ApplicationJson)
    ], GetReportPkLogResponse.prototype, "getReportPkLog200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetReportPkLog400ApplicationJson)
    ], GetReportPkLogResponse.prototype, "getReportPkLog400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetReportPkLog401ApplicationJson)
    ], GetReportPkLogResponse.prototype, "getReportPkLog401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetReportPkLog422ApplicationJson)
    ], GetReportPkLogResponse.prototype, "getReportPkLog422ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetReportPkLog500ApplicationJson)
    ], GetReportPkLogResponse.prototype, "getReportPkLog500ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetReportPkLogResponse.prototype, "statusCode", void 0);
    return GetReportPkLogResponse;
}(SpeakeasyBase));
export { GetReportPkLogResponse };
