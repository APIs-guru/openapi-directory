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
var GetChartFavoriteStatusQueryParams = /** @class */ (function (_super) {
    __extends(GetChartFavoriteStatusQueryParams, _super);
    function GetChartFavoriteStatusQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, serialization=json;name=q" }),
        __metadata("design:type", Array)
    ], GetChartFavoriteStatusQueryParams.prototype, "q", void 0);
    return GetChartFavoriteStatusQueryParams;
}(SpeakeasyBase));
export { GetChartFavoriteStatusQueryParams };
var GetChartFavoriteStatusSecurity = /** @class */ (function (_super) {
    __extends(GetChartFavoriteStatusSecurity, _super);
    function GetChartFavoriteStatusSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeJwt)
    ], GetChartFavoriteStatusSecurity.prototype, "jwt", void 0);
    return GetChartFavoriteStatusSecurity;
}(SpeakeasyBase));
export { GetChartFavoriteStatusSecurity };
var GetChartFavoriteStatus400ApplicationJson = /** @class */ (function (_super) {
    __extends(GetChartFavoriteStatus400ApplicationJson, _super);
    function GetChartFavoriteStatus400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetChartFavoriteStatus400ApplicationJson.prototype, "message", void 0);
    return GetChartFavoriteStatus400ApplicationJson;
}(SpeakeasyBase));
export { GetChartFavoriteStatus400ApplicationJson };
var GetChartFavoriteStatus401ApplicationJson = /** @class */ (function (_super) {
    __extends(GetChartFavoriteStatus401ApplicationJson, _super);
    function GetChartFavoriteStatus401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetChartFavoriteStatus401ApplicationJson.prototype, "message", void 0);
    return GetChartFavoriteStatus401ApplicationJson;
}(SpeakeasyBase));
export { GetChartFavoriteStatus401ApplicationJson };
var GetChartFavoriteStatus404ApplicationJson = /** @class */ (function (_super) {
    __extends(GetChartFavoriteStatus404ApplicationJson, _super);
    function GetChartFavoriteStatus404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetChartFavoriteStatus404ApplicationJson.prototype, "message", void 0);
    return GetChartFavoriteStatus404ApplicationJson;
}(SpeakeasyBase));
export { GetChartFavoriteStatus404ApplicationJson };
var GetChartFavoriteStatus500ApplicationJson = /** @class */ (function (_super) {
    __extends(GetChartFavoriteStatus500ApplicationJson, _super);
    function GetChartFavoriteStatus500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetChartFavoriteStatus500ApplicationJson.prototype, "message", void 0);
    return GetChartFavoriteStatus500ApplicationJson;
}(SpeakeasyBase));
export { GetChartFavoriteStatus500ApplicationJson };
var GetChartFavoriteStatusRequest = /** @class */ (function (_super) {
    __extends(GetChartFavoriteStatusRequest, _super);
    function GetChartFavoriteStatusRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetChartFavoriteStatusQueryParams)
    ], GetChartFavoriteStatusRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetChartFavoriteStatusSecurity)
    ], GetChartFavoriteStatusRequest.prototype, "security", void 0);
    return GetChartFavoriteStatusRequest;
}(SpeakeasyBase));
export { GetChartFavoriteStatusRequest };
var GetChartFavoriteStatusResponse = /** @class */ (function (_super) {
    __extends(GetChartFavoriteStatusResponse, _super);
    function GetChartFavoriteStatusResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetChartFavoriteStatusResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetChartFavoriteStatus400ApplicationJson)
    ], GetChartFavoriteStatusResponse.prototype, "getChartFavoriteStatus400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetChartFavoriteStatus401ApplicationJson)
    ], GetChartFavoriteStatusResponse.prototype, "getChartFavoriteStatus401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetChartFavoriteStatus404ApplicationJson)
    ], GetChartFavoriteStatusResponse.prototype, "getChartFavoriteStatus404ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetChartFavoriteStatus500ApplicationJson)
    ], GetChartFavoriteStatusResponse.prototype, "getChartFavoriteStatus500ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GetFavStarIdsSchema)
    ], GetChartFavoriteStatusResponse.prototype, "getFavStarIdsSchema", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetChartFavoriteStatusResponse.prototype, "statusCode", void 0);
    return GetChartFavoriteStatusResponse;
}(SpeakeasyBase));
export { GetChartFavoriteStatusResponse };
