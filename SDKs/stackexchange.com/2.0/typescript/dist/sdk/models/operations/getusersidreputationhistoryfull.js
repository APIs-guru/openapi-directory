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
var GetUsersIdReputationHistoryFullPathParams = /** @class */ (function (_super) {
    __extends(GetUsersIdReputationHistoryFullPathParams, _super);
    function GetUsersIdReputationHistoryFullPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], GetUsersIdReputationHistoryFullPathParams.prototype, "id", void 0);
    return GetUsersIdReputationHistoryFullPathParams;
}(SpeakeasyBase));
export { GetUsersIdReputationHistoryFullPathParams };
var GetUsersIdReputationHistoryFullQueryParams = /** @class */ (function (_super) {
    __extends(GetUsersIdReputationHistoryFullQueryParams, _super);
    function GetUsersIdReputationHistoryFullQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], GetUsersIdReputationHistoryFullQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], GetUsersIdReputationHistoryFullQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetUsersIdReputationHistoryFullQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pagesize" }),
        __metadata("design:type", Number)
    ], GetUsersIdReputationHistoryFullQueryParams.prototype, "pagesize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=site" }),
        __metadata("design:type", String)
    ], GetUsersIdReputationHistoryFullQueryParams.prototype, "site", void 0);
    return GetUsersIdReputationHistoryFullQueryParams;
}(SpeakeasyBase));
export { GetUsersIdReputationHistoryFullQueryParams };
var GetUsersIdReputationHistoryFullRequest = /** @class */ (function (_super) {
    __extends(GetUsersIdReputationHistoryFullRequest, _super);
    function GetUsersIdReputationHistoryFullRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetUsersIdReputationHistoryFullPathParams)
    ], GetUsersIdReputationHistoryFullRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetUsersIdReputationHistoryFullQueryParams)
    ], GetUsersIdReputationHistoryFullRequest.prototype, "queryParams", void 0);
    return GetUsersIdReputationHistoryFullRequest;
}(SpeakeasyBase));
export { GetUsersIdReputationHistoryFullRequest };
var GetUsersIdReputationHistoryFullResponse = /** @class */ (function (_super) {
    __extends(GetUsersIdReputationHistoryFullResponse, _super);
    function GetUsersIdReputationHistoryFullResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetUsersIdReputationHistoryFullResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetUsersIdReputationHistoryFullResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetUsersIdReputationHistoryFullResponse.prototype, "statusCode", void 0);
    return GetUsersIdReputationHistoryFullResponse;
}(SpeakeasyBase));
export { GetUsersIdReputationHistoryFullResponse };
