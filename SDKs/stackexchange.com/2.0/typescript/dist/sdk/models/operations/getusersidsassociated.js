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
var GetUsersIdsAssociatedPathParams = /** @class */ (function (_super) {
    __extends(GetUsersIdsAssociatedPathParams, _super);
    function GetUsersIdsAssociatedPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ids" }),
        __metadata("design:type", String)
    ], GetUsersIdsAssociatedPathParams.prototype, "ids", void 0);
    return GetUsersIdsAssociatedPathParams;
}(SpeakeasyBase));
export { GetUsersIdsAssociatedPathParams };
var GetUsersIdsAssociatedQueryParams = /** @class */ (function (_super) {
    __extends(GetUsersIdsAssociatedQueryParams, _super);
    function GetUsersIdsAssociatedQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], GetUsersIdsAssociatedQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], GetUsersIdsAssociatedQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetUsersIdsAssociatedQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pagesize" }),
        __metadata("design:type", Number)
    ], GetUsersIdsAssociatedQueryParams.prototype, "pagesize", void 0);
    return GetUsersIdsAssociatedQueryParams;
}(SpeakeasyBase));
export { GetUsersIdsAssociatedQueryParams };
var GetUsersIdsAssociatedRequest = /** @class */ (function (_super) {
    __extends(GetUsersIdsAssociatedRequest, _super);
    function GetUsersIdsAssociatedRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetUsersIdsAssociatedPathParams)
    ], GetUsersIdsAssociatedRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetUsersIdsAssociatedQueryParams)
    ], GetUsersIdsAssociatedRequest.prototype, "queryParams", void 0);
    return GetUsersIdsAssociatedRequest;
}(SpeakeasyBase));
export { GetUsersIdsAssociatedRequest };
var GetUsersIdsAssociatedResponse = /** @class */ (function (_super) {
    __extends(GetUsersIdsAssociatedResponse, _super);
    function GetUsersIdsAssociatedResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetUsersIdsAssociatedResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetUsersIdsAssociatedResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetUsersIdsAssociatedResponse.prototype, "statusCode", void 0);
    return GetUsersIdsAssociatedResponse;
}(SpeakeasyBase));
export { GetUsersIdsAssociatedResponse };
