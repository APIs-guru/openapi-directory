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
var GetUsersIdsMergesPathParams = /** @class */ (function (_super) {
    __extends(GetUsersIdsMergesPathParams, _super);
    function GetUsersIdsMergesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ids" }),
        __metadata("design:type", String)
    ], GetUsersIdsMergesPathParams.prototype, "ids", void 0);
    return GetUsersIdsMergesPathParams;
}(SpeakeasyBase));
export { GetUsersIdsMergesPathParams };
var GetUsersIdsMergesQueryParams = /** @class */ (function (_super) {
    __extends(GetUsersIdsMergesQueryParams, _super);
    function GetUsersIdsMergesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], GetUsersIdsMergesQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], GetUsersIdsMergesQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetUsersIdsMergesQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pagesize" }),
        __metadata("design:type", Number)
    ], GetUsersIdsMergesQueryParams.prototype, "pagesize", void 0);
    return GetUsersIdsMergesQueryParams;
}(SpeakeasyBase));
export { GetUsersIdsMergesQueryParams };
var GetUsersIdsMergesRequest = /** @class */ (function (_super) {
    __extends(GetUsersIdsMergesRequest, _super);
    function GetUsersIdsMergesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetUsersIdsMergesPathParams)
    ], GetUsersIdsMergesRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetUsersIdsMergesQueryParams)
    ], GetUsersIdsMergesRequest.prototype, "queryParams", void 0);
    return GetUsersIdsMergesRequest;
}(SpeakeasyBase));
export { GetUsersIdsMergesRequest };
var GetUsersIdsMergesResponse = /** @class */ (function (_super) {
    __extends(GetUsersIdsMergesResponse, _super);
    function GetUsersIdsMergesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetUsersIdsMergesResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetUsersIdsMergesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetUsersIdsMergesResponse.prototype, "statusCode", void 0);
    return GetUsersIdsMergesResponse;
}(SpeakeasyBase));
export { GetUsersIdsMergesResponse };
