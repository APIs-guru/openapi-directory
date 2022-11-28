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
var GetUsersIdsReputationHistoryPathParams = /** @class */ (function (_super) {
    __extends(GetUsersIdsReputationHistoryPathParams, _super);
    function GetUsersIdsReputationHistoryPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ids" }),
        __metadata("design:type", String)
    ], GetUsersIdsReputationHistoryPathParams.prototype, "ids", void 0);
    return GetUsersIdsReputationHistoryPathParams;
}(SpeakeasyBase));
export { GetUsersIdsReputationHistoryPathParams };
var GetUsersIdsReputationHistoryQueryParams = /** @class */ (function (_super) {
    __extends(GetUsersIdsReputationHistoryQueryParams, _super);
    function GetUsersIdsReputationHistoryQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], GetUsersIdsReputationHistoryQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], GetUsersIdsReputationHistoryQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetUsersIdsReputationHistoryQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pagesize" }),
        __metadata("design:type", Number)
    ], GetUsersIdsReputationHistoryQueryParams.prototype, "pagesize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=site" }),
        __metadata("design:type", String)
    ], GetUsersIdsReputationHistoryQueryParams.prototype, "site", void 0);
    return GetUsersIdsReputationHistoryQueryParams;
}(SpeakeasyBase));
export { GetUsersIdsReputationHistoryQueryParams };
var GetUsersIdsReputationHistoryRequest = /** @class */ (function (_super) {
    __extends(GetUsersIdsReputationHistoryRequest, _super);
    function GetUsersIdsReputationHistoryRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetUsersIdsReputationHistoryPathParams)
    ], GetUsersIdsReputationHistoryRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetUsersIdsReputationHistoryQueryParams)
    ], GetUsersIdsReputationHistoryRequest.prototype, "queryParams", void 0);
    return GetUsersIdsReputationHistoryRequest;
}(SpeakeasyBase));
export { GetUsersIdsReputationHistoryRequest };
var GetUsersIdsReputationHistoryResponse = /** @class */ (function (_super) {
    __extends(GetUsersIdsReputationHistoryResponse, _super);
    function GetUsersIdsReputationHistoryResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetUsersIdsReputationHistoryResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetUsersIdsReputationHistoryResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetUsersIdsReputationHistoryResponse.prototype, "statusCode", void 0);
    return GetUsersIdsReputationHistoryResponse;
}(SpeakeasyBase));
export { GetUsersIdsReputationHistoryResponse };
