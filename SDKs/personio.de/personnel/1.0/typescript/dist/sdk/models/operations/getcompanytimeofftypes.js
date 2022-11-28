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
var GetCompanyTimeOffTypesQueryParams = /** @class */ (function (_super) {
    __extends(GetCompanyTimeOffTypesQueryParams, _super);
    function GetCompanyTimeOffTypesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], GetCompanyTimeOffTypesQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", Number)
    ], GetCompanyTimeOffTypesQueryParams.prototype, "offset", void 0);
    return GetCompanyTimeOffTypesQueryParams;
}(SpeakeasyBase));
export { GetCompanyTimeOffTypesQueryParams };
var GetCompanyTimeOffTypes200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetCompanyTimeOffTypes200ApplicationJson, _super);
    function GetCompanyTimeOffTypes200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data", elemType: shared.TimeOffTypeResource }),
        __metadata("design:type", Array)
    ], GetCompanyTimeOffTypes200ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=success" }),
        __metadata("design:type", Boolean)
    ], GetCompanyTimeOffTypes200ApplicationJson.prototype, "success", void 0);
    return GetCompanyTimeOffTypes200ApplicationJson;
}(SpeakeasyBase));
export { GetCompanyTimeOffTypes200ApplicationJson };
var GetCompanyTimeOffTypesRequest = /** @class */ (function (_super) {
    __extends(GetCompanyTimeOffTypesRequest, _super);
    function GetCompanyTimeOffTypesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetCompanyTimeOffTypesQueryParams)
    ], GetCompanyTimeOffTypesRequest.prototype, "queryParams", void 0);
    return GetCompanyTimeOffTypesRequest;
}(SpeakeasyBase));
export { GetCompanyTimeOffTypesRequest };
var GetCompanyTimeOffTypesResponse = /** @class */ (function (_super) {
    __extends(GetCompanyTimeOffTypesResponse, _super);
    function GetCompanyTimeOffTypesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetCompanyTimeOffTypesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetCompanyTimeOffTypes200ApplicationJson)
    ], GetCompanyTimeOffTypesResponse.prototype, "getCompanyTimeOffTypes200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetCompanyTimeOffTypesResponse.prototype, "statusCode", void 0);
    return GetCompanyTimeOffTypesResponse;
}(SpeakeasyBase));
export { GetCompanyTimeOffTypesResponse };
