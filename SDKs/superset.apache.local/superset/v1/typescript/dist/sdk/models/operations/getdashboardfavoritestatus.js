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
var GetDashboardFavoriteStatusQueryParams = /** @class */ (function (_super) {
    __extends(GetDashboardFavoriteStatusQueryParams, _super);
    function GetDashboardFavoriteStatusQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, serialization=json;name=q" }),
        __metadata("design:type", Array)
    ], GetDashboardFavoriteStatusQueryParams.prototype, "q", void 0);
    return GetDashboardFavoriteStatusQueryParams;
}(SpeakeasyBase));
export { GetDashboardFavoriteStatusQueryParams };
var GetDashboardFavoriteStatusSecurity = /** @class */ (function (_super) {
    __extends(GetDashboardFavoriteStatusSecurity, _super);
    function GetDashboardFavoriteStatusSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeJwt)
    ], GetDashboardFavoriteStatusSecurity.prototype, "jwt", void 0);
    return GetDashboardFavoriteStatusSecurity;
}(SpeakeasyBase));
export { GetDashboardFavoriteStatusSecurity };
var GetDashboardFavoriteStatus400ApplicationJson = /** @class */ (function (_super) {
    __extends(GetDashboardFavoriteStatus400ApplicationJson, _super);
    function GetDashboardFavoriteStatus400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetDashboardFavoriteStatus400ApplicationJson.prototype, "message", void 0);
    return GetDashboardFavoriteStatus400ApplicationJson;
}(SpeakeasyBase));
export { GetDashboardFavoriteStatus400ApplicationJson };
var GetDashboardFavoriteStatus401ApplicationJson = /** @class */ (function (_super) {
    __extends(GetDashboardFavoriteStatus401ApplicationJson, _super);
    function GetDashboardFavoriteStatus401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetDashboardFavoriteStatus401ApplicationJson.prototype, "message", void 0);
    return GetDashboardFavoriteStatus401ApplicationJson;
}(SpeakeasyBase));
export { GetDashboardFavoriteStatus401ApplicationJson };
var GetDashboardFavoriteStatus404ApplicationJson = /** @class */ (function (_super) {
    __extends(GetDashboardFavoriteStatus404ApplicationJson, _super);
    function GetDashboardFavoriteStatus404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetDashboardFavoriteStatus404ApplicationJson.prototype, "message", void 0);
    return GetDashboardFavoriteStatus404ApplicationJson;
}(SpeakeasyBase));
export { GetDashboardFavoriteStatus404ApplicationJson };
var GetDashboardFavoriteStatus500ApplicationJson = /** @class */ (function (_super) {
    __extends(GetDashboardFavoriteStatus500ApplicationJson, _super);
    function GetDashboardFavoriteStatus500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetDashboardFavoriteStatus500ApplicationJson.prototype, "message", void 0);
    return GetDashboardFavoriteStatus500ApplicationJson;
}(SpeakeasyBase));
export { GetDashboardFavoriteStatus500ApplicationJson };
var GetDashboardFavoriteStatusRequest = /** @class */ (function (_super) {
    __extends(GetDashboardFavoriteStatusRequest, _super);
    function GetDashboardFavoriteStatusRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDashboardFavoriteStatusQueryParams)
    ], GetDashboardFavoriteStatusRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDashboardFavoriteStatusSecurity)
    ], GetDashboardFavoriteStatusRequest.prototype, "security", void 0);
    return GetDashboardFavoriteStatusRequest;
}(SpeakeasyBase));
export { GetDashboardFavoriteStatusRequest };
var GetDashboardFavoriteStatusResponse = /** @class */ (function (_super) {
    __extends(GetDashboardFavoriteStatusResponse, _super);
    function GetDashboardFavoriteStatusResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetDashboardFavoriteStatusResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDashboardFavoriteStatus400ApplicationJson)
    ], GetDashboardFavoriteStatusResponse.prototype, "getDashboardFavoriteStatus400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDashboardFavoriteStatus401ApplicationJson)
    ], GetDashboardFavoriteStatusResponse.prototype, "getDashboardFavoriteStatus401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDashboardFavoriteStatus404ApplicationJson)
    ], GetDashboardFavoriteStatusResponse.prototype, "getDashboardFavoriteStatus404ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDashboardFavoriteStatus500ApplicationJson)
    ], GetDashboardFavoriteStatusResponse.prototype, "getDashboardFavoriteStatus500ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GetFavStarIdsSchema)
    ], GetDashboardFavoriteStatusResponse.prototype, "getFavStarIdsSchema", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetDashboardFavoriteStatusResponse.prototype, "statusCode", void 0);
    return GetDashboardFavoriteStatusResponse;
}(SpeakeasyBase));
export { GetDashboardFavoriteStatusResponse };
