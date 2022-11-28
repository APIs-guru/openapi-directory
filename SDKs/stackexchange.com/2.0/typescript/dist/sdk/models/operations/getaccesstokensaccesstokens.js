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
var GetAccessTokensAccessTokensPathParams = /** @class */ (function (_super) {
    __extends(GetAccessTokensAccessTokensPathParams, _super);
    function GetAccessTokensAccessTokensPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accessTokens" }),
        __metadata("design:type", String)
    ], GetAccessTokensAccessTokensPathParams.prototype, "accessTokens", void 0);
    return GetAccessTokensAccessTokensPathParams;
}(SpeakeasyBase));
export { GetAccessTokensAccessTokensPathParams };
var GetAccessTokensAccessTokensQueryParams = /** @class */ (function (_super) {
    __extends(GetAccessTokensAccessTokensQueryParams, _super);
    function GetAccessTokensAccessTokensQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], GetAccessTokensAccessTokensQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], GetAccessTokensAccessTokensQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetAccessTokensAccessTokensQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pagesize" }),
        __metadata("design:type", Number)
    ], GetAccessTokensAccessTokensQueryParams.prototype, "pagesize", void 0);
    return GetAccessTokensAccessTokensQueryParams;
}(SpeakeasyBase));
export { GetAccessTokensAccessTokensQueryParams };
var GetAccessTokensAccessTokensRequest = /** @class */ (function (_super) {
    __extends(GetAccessTokensAccessTokensRequest, _super);
    function GetAccessTokensAccessTokensRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAccessTokensAccessTokensPathParams)
    ], GetAccessTokensAccessTokensRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAccessTokensAccessTokensQueryParams)
    ], GetAccessTokensAccessTokensRequest.prototype, "queryParams", void 0);
    return GetAccessTokensAccessTokensRequest;
}(SpeakeasyBase));
export { GetAccessTokensAccessTokensRequest };
var GetAccessTokensAccessTokensResponse = /** @class */ (function (_super) {
    __extends(GetAccessTokensAccessTokensResponse, _super);
    function GetAccessTokensAccessTokensResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetAccessTokensAccessTokensResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetAccessTokensAccessTokensResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetAccessTokensAccessTokensResponse.prototype, "statusCode", void 0);
    return GetAccessTokensAccessTokensResponse;
}(SpeakeasyBase));
export { GetAccessTokensAccessTokensResponse };
