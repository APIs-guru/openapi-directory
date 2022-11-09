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
var GetWordListWordsPathParams = /** @class */ (function (_super) {
    __extends(GetWordListWordsPathParams, _super);
    function GetWordListWordsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=permalink" }),
        __metadata("design:type", String)
    ], GetWordListWordsPathParams.prototype, "permalink", void 0);
    return GetWordListWordsPathParams;
}(SpeakeasyBase));
export { GetWordListWordsPathParams };
export var GetWordListWordsSortByEnum;
(function (GetWordListWordsSortByEnum) {
    GetWordListWordsSortByEnum["CreateDate"] = "createDate";
    GetWordListWordsSortByEnum["Alpha"] = "alpha";
})(GetWordListWordsSortByEnum || (GetWordListWordsSortByEnum = {}));
var GetWordListWordsQueryParams = /** @class */ (function (_super) {
    __extends(GetWordListWordsQueryParams, _super);
    function GetWordListWordsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], GetWordListWordsQueryParams.prototype, "limit", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=skip" }),
        __metadata("design:type", Number)
    ], GetWordListWordsQueryParams.prototype, "skip", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=sortBy" }),
        __metadata("design:type", String)
    ], GetWordListWordsQueryParams.prototype, "sortBy", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=sortOrder" }),
        __metadata("design:type", String)
    ], GetWordListWordsQueryParams.prototype, "sortOrder", void 0);
    return GetWordListWordsQueryParams;
}(SpeakeasyBase));
export { GetWordListWordsQueryParams };
var GetWordListWordsHeaders = /** @class */ (function (_super) {
    __extends(GetWordListWordsHeaders, _super);
    function GetWordListWordsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=auth_token" }),
        __metadata("design:type", String)
    ], GetWordListWordsHeaders.prototype, "authToken", void 0);
    return GetWordListWordsHeaders;
}(SpeakeasyBase));
export { GetWordListWordsHeaders };
var GetWordListWordsRequest = /** @class */ (function (_super) {
    __extends(GetWordListWordsRequest, _super);
    function GetWordListWordsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetWordListWordsPathParams)
    ], GetWordListWordsRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetWordListWordsQueryParams)
    ], GetWordListWordsRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetWordListWordsHeaders)
    ], GetWordListWordsRequest.prototype, "headers", void 0);
    return GetWordListWordsRequest;
}(SpeakeasyBase));
export { GetWordListWordsRequest };
var GetWordListWordsResponse = /** @class */ (function (_super) {
    __extends(GetWordListWordsResponse, _super);
    function GetWordListWordsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetWordListWordsResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetWordListWordsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetWordListWordsResponse.prototype, "statusCode", void 0);
    return GetWordListWordsResponse;
}(SpeakeasyBase));
export { GetWordListWordsResponse };
