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
var GetHealthDashboardQueryParams = /** @class */ (function (_super) {
    __extends(GetHealthDashboardQueryParams, _super);
    function GetHealthDashboardQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=country" }),
        __metadata("design:type", String)
    ], GetHealthDashboardQueryParams.prototype, "country", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=unixTimestampSeconds" }),
        __metadata("design:type", String)
    ], GetHealthDashboardQueryParams.prototype, "unixTimestampSeconds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=unixtimezoneOffsetSeconds" }),
        __metadata("design:type", String)
    ], GetHealthDashboardQueryParams.prototype, "unixtimezoneOffsetSeconds", void 0);
    return GetHealthDashboardQueryParams;
}(SpeakeasyBase));
export { GetHealthDashboardQueryParams };
var GetHealthDashboardSecurity = /** @class */ (function (_super) {
    __extends(GetHealthDashboardSecurity, _super);
    function GetHealthDashboardSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], GetHealthDashboardSecurity.prototype, "apiKey", void 0);
    return GetHealthDashboardSecurity;
}(SpeakeasyBase));
export { GetHealthDashboardSecurity };
var GetHealthDashboardRequest = /** @class */ (function (_super) {
    __extends(GetHealthDashboardRequest, _super);
    function GetHealthDashboardRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetHealthDashboardQueryParams)
    ], GetHealthDashboardRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetHealthDashboardSecurity)
    ], GetHealthDashboardRequest.prototype, "security", void 0);
    return GetHealthDashboardRequest;
}(SpeakeasyBase));
export { GetHealthDashboardRequest };
var GetHealthDashboardResponse = /** @class */ (function (_super) {
    __extends(GetHealthDashboardResponse, _super);
    function GetHealthDashboardResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetHealthDashboardResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.Database }),
        __metadata("design:type", Array)
    ], GetHealthDashboardResponse.prototype, "databases", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetHealthDashboardResponse.prototype, "statusCode", void 0);
    return GetHealthDashboardResponse;
}(SpeakeasyBase));
export { GetHealthDashboardResponse };
