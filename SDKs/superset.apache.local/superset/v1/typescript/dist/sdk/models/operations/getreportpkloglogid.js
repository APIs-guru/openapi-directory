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
var GetReportPkLogLogIdPathParams = /** @class */ (function (_super) {
    __extends(GetReportPkLogLogIdPathParams, _super);
    function GetReportPkLogLogIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=log_id" }),
        __metadata("design:type", Number)
    ], GetReportPkLogLogIdPathParams.prototype, "logId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=pk" }),
        __metadata("design:type", Number)
    ], GetReportPkLogLogIdPathParams.prototype, "pk", void 0);
    return GetReportPkLogLogIdPathParams;
}(SpeakeasyBase));
export { GetReportPkLogLogIdPathParams };
var GetReportPkLogLogIdQueryParams = /** @class */ (function (_super) {
    __extends(GetReportPkLogLogIdQueryParams, _super);
    function GetReportPkLogLogIdQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, serialization=json;name=q" }),
        __metadata("design:type", shared.GetItemSchema)
    ], GetReportPkLogLogIdQueryParams.prototype, "q", void 0);
    return GetReportPkLogLogIdQueryParams;
}(SpeakeasyBase));
export { GetReportPkLogLogIdQueryParams };
var GetReportPkLogLogIdSecurity = /** @class */ (function (_super) {
    __extends(GetReportPkLogLogIdSecurity, _super);
    function GetReportPkLogLogIdSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeJwt)
    ], GetReportPkLogLogIdSecurity.prototype, "jwt", void 0);
    return GetReportPkLogLogIdSecurity;
}(SpeakeasyBase));
export { GetReportPkLogLogIdSecurity };
var GetReportPkLogLogId200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetReportPkLogLogId200ApplicationJson, _super);
    function GetReportPkLogLogId200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], GetReportPkLogLogId200ApplicationJson.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=result" }),
        __metadata("design:type", shared.ReportExecutionLogRestApiGet)
    ], GetReportPkLogLogId200ApplicationJson.prototype, "result", void 0);
    return GetReportPkLogLogId200ApplicationJson;
}(SpeakeasyBase));
export { GetReportPkLogLogId200ApplicationJson };
var GetReportPkLogLogId400ApplicationJson = /** @class */ (function (_super) {
    __extends(GetReportPkLogLogId400ApplicationJson, _super);
    function GetReportPkLogLogId400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetReportPkLogLogId400ApplicationJson.prototype, "message", void 0);
    return GetReportPkLogLogId400ApplicationJson;
}(SpeakeasyBase));
export { GetReportPkLogLogId400ApplicationJson };
var GetReportPkLogLogId401ApplicationJson = /** @class */ (function (_super) {
    __extends(GetReportPkLogLogId401ApplicationJson, _super);
    function GetReportPkLogLogId401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetReportPkLogLogId401ApplicationJson.prototype, "message", void 0);
    return GetReportPkLogLogId401ApplicationJson;
}(SpeakeasyBase));
export { GetReportPkLogLogId401ApplicationJson };
var GetReportPkLogLogId404ApplicationJson = /** @class */ (function (_super) {
    __extends(GetReportPkLogLogId404ApplicationJson, _super);
    function GetReportPkLogLogId404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetReportPkLogLogId404ApplicationJson.prototype, "message", void 0);
    return GetReportPkLogLogId404ApplicationJson;
}(SpeakeasyBase));
export { GetReportPkLogLogId404ApplicationJson };
var GetReportPkLogLogId422ApplicationJson = /** @class */ (function (_super) {
    __extends(GetReportPkLogLogId422ApplicationJson, _super);
    function GetReportPkLogLogId422ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetReportPkLogLogId422ApplicationJson.prototype, "message", void 0);
    return GetReportPkLogLogId422ApplicationJson;
}(SpeakeasyBase));
export { GetReportPkLogLogId422ApplicationJson };
var GetReportPkLogLogId500ApplicationJson = /** @class */ (function (_super) {
    __extends(GetReportPkLogLogId500ApplicationJson, _super);
    function GetReportPkLogLogId500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetReportPkLogLogId500ApplicationJson.prototype, "message", void 0);
    return GetReportPkLogLogId500ApplicationJson;
}(SpeakeasyBase));
export { GetReportPkLogLogId500ApplicationJson };
var GetReportPkLogLogIdRequest = /** @class */ (function (_super) {
    __extends(GetReportPkLogLogIdRequest, _super);
    function GetReportPkLogLogIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetReportPkLogLogIdPathParams)
    ], GetReportPkLogLogIdRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetReportPkLogLogIdQueryParams)
    ], GetReportPkLogLogIdRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetReportPkLogLogIdSecurity)
    ], GetReportPkLogLogIdRequest.prototype, "security", void 0);
    return GetReportPkLogLogIdRequest;
}(SpeakeasyBase));
export { GetReportPkLogLogIdRequest };
var GetReportPkLogLogIdResponse = /** @class */ (function (_super) {
    __extends(GetReportPkLogLogIdResponse, _super);
    function GetReportPkLogLogIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetReportPkLogLogIdResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetReportPkLogLogId200ApplicationJson)
    ], GetReportPkLogLogIdResponse.prototype, "getReportPkLogLogId200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetReportPkLogLogId400ApplicationJson)
    ], GetReportPkLogLogIdResponse.prototype, "getReportPkLogLogId400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetReportPkLogLogId401ApplicationJson)
    ], GetReportPkLogLogIdResponse.prototype, "getReportPkLogLogId401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetReportPkLogLogId404ApplicationJson)
    ], GetReportPkLogLogIdResponse.prototype, "getReportPkLogLogId404ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetReportPkLogLogId422ApplicationJson)
    ], GetReportPkLogLogIdResponse.prototype, "getReportPkLogLogId422ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetReportPkLogLogId500ApplicationJson)
    ], GetReportPkLogLogIdResponse.prototype, "getReportPkLogLogId500ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetReportPkLogLogIdResponse.prototype, "statusCode", void 0);
    return GetReportPkLogLogIdResponse;
}(SpeakeasyBase));
export { GetReportPkLogLogIdResponse };
