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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
var GetApiV2PerformanceStatsHeaders = /** @class */ (function (_super) {
    __extends(GetApiV2PerformanceStatsHeaders, _super);
    function GetApiV2PerformanceStatsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-RapidApi-Key" }),
        __metadata("design:type", String)
    ], GetApiV2PerformanceStatsHeaders.prototype, "xRapidApiKey", void 0);
    return GetApiV2PerformanceStatsHeaders;
}(SpeakeasyBase));
export { GetApiV2PerformanceStatsHeaders };
var GetApiV2PerformanceStatsRequest = /** @class */ (function (_super) {
    __extends(GetApiV2PerformanceStatsRequest, _super);
    function GetApiV2PerformanceStatsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetApiV2PerformanceStatsHeaders)
    ], GetApiV2PerformanceStatsRequest.prototype, "headers", void 0);
    return GetApiV2PerformanceStatsRequest;
}(SpeakeasyBase));
export { GetApiV2PerformanceStatsRequest };
var GetApiV2PerformanceStats200ApplicationJsonDataAccuracy = /** @class */ (function (_super) {
    __extends(GetApiV2PerformanceStats200ApplicationJsonDataAccuracy, _super);
    function GetApiV2PerformanceStats200ApplicationJsonDataAccuracy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=last_14_days" }),
        __metadata("design:type", Number)
    ], GetApiV2PerformanceStats200ApplicationJsonDataAccuracy.prototype, "last14Days", void 0);
    __decorate([
        Metadata({ data: "json, name=last_30_days" }),
        __metadata("design:type", Number)
    ], GetApiV2PerformanceStats200ApplicationJsonDataAccuracy.prototype, "last30Days", void 0);
    __decorate([
        Metadata({ data: "json, name=last_7_days" }),
        __metadata("design:type", Number)
    ], GetApiV2PerformanceStats200ApplicationJsonDataAccuracy.prototype, "last7Days", void 0);
    __decorate([
        Metadata({ data: "json, name=yesterday" }),
        __metadata("design:type", Number)
    ], GetApiV2PerformanceStats200ApplicationJsonDataAccuracy.prototype, "yesterday", void 0);
    return GetApiV2PerformanceStats200ApplicationJsonDataAccuracy;
}(SpeakeasyBase));
export { GetApiV2PerformanceStats200ApplicationJsonDataAccuracy };
var GetApiV2PerformanceStats200ApplicationJsonDataDetailsLast14Days = /** @class */ (function (_super) {
    __extends(GetApiV2PerformanceStats200ApplicationJsonDataDetailsLast14Days, _super);
    function GetApiV2PerformanceStats200ApplicationJsonDataDetailsLast14Days() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=lost" }),
        __metadata("design:type", Number)
    ], GetApiV2PerformanceStats200ApplicationJsonDataDetailsLast14Days.prototype, "lost", void 0);
    __decorate([
        Metadata({ data: "json, name=pending" }),
        __metadata("design:type", Number)
    ], GetApiV2PerformanceStats200ApplicationJsonDataDetailsLast14Days.prototype, "pending", void 0);
    __decorate([
        Metadata({ data: "json, name=postponed" }),
        __metadata("design:type", Number)
    ], GetApiV2PerformanceStats200ApplicationJsonDataDetailsLast14Days.prototype, "postponed", void 0);
    __decorate([
        Metadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], GetApiV2PerformanceStats200ApplicationJsonDataDetailsLast14Days.prototype, "total", void 0);
    __decorate([
        Metadata({ data: "json, name=won" }),
        __metadata("design:type", Number)
    ], GetApiV2PerformanceStats200ApplicationJsonDataDetailsLast14Days.prototype, "won", void 0);
    return GetApiV2PerformanceStats200ApplicationJsonDataDetailsLast14Days;
}(SpeakeasyBase));
export { GetApiV2PerformanceStats200ApplicationJsonDataDetailsLast14Days };
var GetApiV2PerformanceStats200ApplicationJsonDataDetailsLast30Days = /** @class */ (function (_super) {
    __extends(GetApiV2PerformanceStats200ApplicationJsonDataDetailsLast30Days, _super);
    function GetApiV2PerformanceStats200ApplicationJsonDataDetailsLast30Days() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=lost" }),
        __metadata("design:type", Number)
    ], GetApiV2PerformanceStats200ApplicationJsonDataDetailsLast30Days.prototype, "lost", void 0);
    __decorate([
        Metadata({ data: "json, name=pending" }),
        __metadata("design:type", Number)
    ], GetApiV2PerformanceStats200ApplicationJsonDataDetailsLast30Days.prototype, "pending", void 0);
    __decorate([
        Metadata({ data: "json, name=postponed" }),
        __metadata("design:type", Number)
    ], GetApiV2PerformanceStats200ApplicationJsonDataDetailsLast30Days.prototype, "postponed", void 0);
    __decorate([
        Metadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], GetApiV2PerformanceStats200ApplicationJsonDataDetailsLast30Days.prototype, "total", void 0);
    __decorate([
        Metadata({ data: "json, name=won" }),
        __metadata("design:type", Number)
    ], GetApiV2PerformanceStats200ApplicationJsonDataDetailsLast30Days.prototype, "won", void 0);
    return GetApiV2PerformanceStats200ApplicationJsonDataDetailsLast30Days;
}(SpeakeasyBase));
export { GetApiV2PerformanceStats200ApplicationJsonDataDetailsLast30Days };
var GetApiV2PerformanceStats200ApplicationJsonDataDetailsLast7Days = /** @class */ (function (_super) {
    __extends(GetApiV2PerformanceStats200ApplicationJsonDataDetailsLast7Days, _super);
    function GetApiV2PerformanceStats200ApplicationJsonDataDetailsLast7Days() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=lost" }),
        __metadata("design:type", Number)
    ], GetApiV2PerformanceStats200ApplicationJsonDataDetailsLast7Days.prototype, "lost", void 0);
    __decorate([
        Metadata({ data: "json, name=pending" }),
        __metadata("design:type", Number)
    ], GetApiV2PerformanceStats200ApplicationJsonDataDetailsLast7Days.prototype, "pending", void 0);
    __decorate([
        Metadata({ data: "json, name=postponed" }),
        __metadata("design:type", Number)
    ], GetApiV2PerformanceStats200ApplicationJsonDataDetailsLast7Days.prototype, "postponed", void 0);
    __decorate([
        Metadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], GetApiV2PerformanceStats200ApplicationJsonDataDetailsLast7Days.prototype, "total", void 0);
    __decorate([
        Metadata({ data: "json, name=won" }),
        __metadata("design:type", Number)
    ], GetApiV2PerformanceStats200ApplicationJsonDataDetailsLast7Days.prototype, "won", void 0);
    return GetApiV2PerformanceStats200ApplicationJsonDataDetailsLast7Days;
}(SpeakeasyBase));
export { GetApiV2PerformanceStats200ApplicationJsonDataDetailsLast7Days };
var GetApiV2PerformanceStats200ApplicationJsonDataDetailsYesterday = /** @class */ (function (_super) {
    __extends(GetApiV2PerformanceStats200ApplicationJsonDataDetailsYesterday, _super);
    function GetApiV2PerformanceStats200ApplicationJsonDataDetailsYesterday() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=lost" }),
        __metadata("design:type", Number)
    ], GetApiV2PerformanceStats200ApplicationJsonDataDetailsYesterday.prototype, "lost", void 0);
    __decorate([
        Metadata({ data: "json, name=pending" }),
        __metadata("design:type", Number)
    ], GetApiV2PerformanceStats200ApplicationJsonDataDetailsYesterday.prototype, "pending", void 0);
    __decorate([
        Metadata({ data: "json, name=postponed" }),
        __metadata("design:type", Number)
    ], GetApiV2PerformanceStats200ApplicationJsonDataDetailsYesterday.prototype, "postponed", void 0);
    __decorate([
        Metadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], GetApiV2PerformanceStats200ApplicationJsonDataDetailsYesterday.prototype, "total", void 0);
    __decorate([
        Metadata({ data: "json, name=won" }),
        __metadata("design:type", Number)
    ], GetApiV2PerformanceStats200ApplicationJsonDataDetailsYesterday.prototype, "won", void 0);
    return GetApiV2PerformanceStats200ApplicationJsonDataDetailsYesterday;
}(SpeakeasyBase));
export { GetApiV2PerformanceStats200ApplicationJsonDataDetailsYesterday };
var GetApiV2PerformanceStats200ApplicationJsonDataDetails = /** @class */ (function (_super) {
    __extends(GetApiV2PerformanceStats200ApplicationJsonDataDetails, _super);
    function GetApiV2PerformanceStats200ApplicationJsonDataDetails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=last_14_days" }),
        __metadata("design:type", GetApiV2PerformanceStats200ApplicationJsonDataDetailsLast14Days)
    ], GetApiV2PerformanceStats200ApplicationJsonDataDetails.prototype, "last14Days", void 0);
    __decorate([
        Metadata({ data: "json, name=last_30_days" }),
        __metadata("design:type", GetApiV2PerformanceStats200ApplicationJsonDataDetailsLast30Days)
    ], GetApiV2PerformanceStats200ApplicationJsonDataDetails.prototype, "last30Days", void 0);
    __decorate([
        Metadata({ data: "json, name=last_7_days" }),
        __metadata("design:type", GetApiV2PerformanceStats200ApplicationJsonDataDetailsLast7Days)
    ], GetApiV2PerformanceStats200ApplicationJsonDataDetails.prototype, "last7Days", void 0);
    __decorate([
        Metadata({ data: "json, name=yesterday" }),
        __metadata("design:type", GetApiV2PerformanceStats200ApplicationJsonDataDetailsYesterday)
    ], GetApiV2PerformanceStats200ApplicationJsonDataDetails.prototype, "yesterday", void 0);
    return GetApiV2PerformanceStats200ApplicationJsonDataDetails;
}(SpeakeasyBase));
export { GetApiV2PerformanceStats200ApplicationJsonDataDetails };
var GetApiV2PerformanceStats200ApplicationJsonData = /** @class */ (function (_super) {
    __extends(GetApiV2PerformanceStats200ApplicationJsonData, _super);
    function GetApiV2PerformanceStats200ApplicationJsonData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=accuracy" }),
        __metadata("design:type", GetApiV2PerformanceStats200ApplicationJsonDataAccuracy)
    ], GetApiV2PerformanceStats200ApplicationJsonData.prototype, "accuracy", void 0);
    __decorate([
        Metadata({ data: "json, name=details" }),
        __metadata("design:type", GetApiV2PerformanceStats200ApplicationJsonDataDetails)
    ], GetApiV2PerformanceStats200ApplicationJsonData.prototype, "details", void 0);
    __decorate([
        Metadata({ data: "json, name=market" }),
        __metadata("design:type", String)
    ], GetApiV2PerformanceStats200ApplicationJsonData.prototype, "market", void 0);
    return GetApiV2PerformanceStats200ApplicationJsonData;
}(SpeakeasyBase));
export { GetApiV2PerformanceStats200ApplicationJsonData };
var GetApiV2PerformanceStats200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetApiV2PerformanceStats200ApplicationJson, _super);
    function GetApiV2PerformanceStats200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=data" }),
        __metadata("design:type", GetApiV2PerformanceStats200ApplicationJsonData)
    ], GetApiV2PerformanceStats200ApplicationJson.prototype, "data", void 0);
    return GetApiV2PerformanceStats200ApplicationJson;
}(SpeakeasyBase));
export { GetApiV2PerformanceStats200ApplicationJson };
var GetApiV2PerformanceStats404ApplicationJson = /** @class */ (function (_super) {
    __extends(GetApiV2PerformanceStats404ApplicationJson, _super);
    function GetApiV2PerformanceStats404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=errors" }),
        __metadata("design:type", Map)
    ], GetApiV2PerformanceStats404ApplicationJson.prototype, "errors", void 0);
    return GetApiV2PerformanceStats404ApplicationJson;
}(SpeakeasyBase));
export { GetApiV2PerformanceStats404ApplicationJson };
var GetApiV2PerformanceStatsResponse = /** @class */ (function (_super) {
    __extends(GetApiV2PerformanceStatsResponse, _super);
    function GetApiV2PerformanceStatsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetApiV2PerformanceStatsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetApiV2PerformanceStats200ApplicationJson)
    ], GetApiV2PerformanceStatsResponse.prototype, "getApiV2PerformanceStats200ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetApiV2PerformanceStats404ApplicationJson)
    ], GetApiV2PerformanceStatsResponse.prototype, "getApiV2PerformanceStats404ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetApiV2PerformanceStatsResponse.prototype, "statusCode", void 0);
    return GetApiV2PerformanceStatsResponse;
}(SpeakeasyBase));
export { GetApiV2PerformanceStatsResponse };
