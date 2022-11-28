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
var GetApiMembersSearchHistoricalQueryParams = /** @class */ (function (_super) {
    __extends(GetApiMembersSearchHistoricalQueryParams, _super);
    function GetApiMembersSearchHistoricalQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=dateToSearchFor" }),
        __metadata("design:type", Date)
    ], GetApiMembersSearchHistoricalQueryParams.prototype, "dateToSearchFor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name" }),
        __metadata("design:type", String)
    ], GetApiMembersSearchHistoricalQueryParams.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=skip" }),
        __metadata("design:type", Number)
    ], GetApiMembersSearchHistoricalQueryParams.prototype, "skip", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=take" }),
        __metadata("design:type", Number)
    ], GetApiMembersSearchHistoricalQueryParams.prototype, "take", void 0);
    return GetApiMembersSearchHistoricalQueryParams;
}(SpeakeasyBase));
export { GetApiMembersSearchHistoricalQueryParams };
var GetApiMembersSearchHistoricalRequest = /** @class */ (function (_super) {
    __extends(GetApiMembersSearchHistoricalRequest, _super);
    function GetApiMembersSearchHistoricalRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetApiMembersSearchHistoricalQueryParams)
    ], GetApiMembersSearchHistoricalRequest.prototype, "queryParams", void 0);
    return GetApiMembersSearchHistoricalRequest;
}(SpeakeasyBase));
export { GetApiMembersSearchHistoricalRequest };
var GetApiMembersSearchHistoricalResponse = /** @class */ (function (_super) {
    __extends(GetApiMembersSearchHistoricalResponse, _super);
    function GetApiMembersSearchHistoricalResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetApiMembersSearchHistoricalResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetApiMembersSearchHistoricalResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.MemberMembersServiceSearchResult)
    ], GetApiMembersSearchHistoricalResponse.prototype, "memberMembersServiceSearchResult", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetApiMembersSearchHistoricalResponse.prototype, "statusCode", void 0);
    return GetApiMembersSearchHistoricalResponse;
}(SpeakeasyBase));
export { GetApiMembersSearchHistoricalResponse };
