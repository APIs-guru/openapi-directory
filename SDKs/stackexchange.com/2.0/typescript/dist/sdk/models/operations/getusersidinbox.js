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
var GetUsersIdInboxPathParams = /** @class */ (function (_super) {
    __extends(GetUsersIdInboxPathParams, _super);
    function GetUsersIdInboxPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], GetUsersIdInboxPathParams.prototype, "id", void 0);
    return GetUsersIdInboxPathParams;
}(SpeakeasyBase));
export { GetUsersIdInboxPathParams };
var GetUsersIdInboxQueryParams = /** @class */ (function (_super) {
    __extends(GetUsersIdInboxQueryParams, _super);
    function GetUsersIdInboxQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], GetUsersIdInboxQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], GetUsersIdInboxQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetUsersIdInboxQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pagesize" }),
        __metadata("design:type", Number)
    ], GetUsersIdInboxQueryParams.prototype, "pagesize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=site" }),
        __metadata("design:type", String)
    ], GetUsersIdInboxQueryParams.prototype, "site", void 0);
    return GetUsersIdInboxQueryParams;
}(SpeakeasyBase));
export { GetUsersIdInboxQueryParams };
var GetUsersIdInboxRequest = /** @class */ (function (_super) {
    __extends(GetUsersIdInboxRequest, _super);
    function GetUsersIdInboxRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetUsersIdInboxPathParams)
    ], GetUsersIdInboxRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetUsersIdInboxQueryParams)
    ], GetUsersIdInboxRequest.prototype, "queryParams", void 0);
    return GetUsersIdInboxRequest;
}(SpeakeasyBase));
export { GetUsersIdInboxRequest };
var GetUsersIdInboxResponse = /** @class */ (function (_super) {
    __extends(GetUsersIdInboxResponse, _super);
    function GetUsersIdInboxResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetUsersIdInboxResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetUsersIdInboxResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetUsersIdInboxResponse.prototype, "statusCode", void 0);
    return GetUsersIdInboxResponse;
}(SpeakeasyBase));
export { GetUsersIdInboxResponse };
