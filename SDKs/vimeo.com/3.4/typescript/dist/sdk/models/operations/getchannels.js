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
export var GetChannelsDirectionEnum;
(function (GetChannelsDirectionEnum) {
    GetChannelsDirectionEnum["Asc"] = "asc";
    GetChannelsDirectionEnum["Desc"] = "desc";
})(GetChannelsDirectionEnum || (GetChannelsDirectionEnum = {}));
export var GetChannelsFilterEnum;
(function (GetChannelsFilterEnum) {
    GetChannelsFilterEnum["Featured"] = "featured";
})(GetChannelsFilterEnum || (GetChannelsFilterEnum = {}));
export var GetChannelsSortEnum;
(function (GetChannelsSortEnum) {
    GetChannelsSortEnum["Alphabetical"] = "alphabetical";
    GetChannelsSortEnum["Date"] = "date";
    GetChannelsSortEnum["Followers"] = "followers";
    GetChannelsSortEnum["Relevant"] = "relevant";
    GetChannelsSortEnum["Videos"] = "videos";
})(GetChannelsSortEnum || (GetChannelsSortEnum = {}));
var GetChannelsQueryParams = /** @class */ (function (_super) {
    __extends(GetChannelsQueryParams, _super);
    function GetChannelsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=direction" }),
        __metadata("design:type", String)
    ], GetChannelsQueryParams.prototype, "direction", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], GetChannelsQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetChannelsQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], GetChannelsQueryParams.prototype, "perPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" }),
        __metadata("design:type", String)
    ], GetChannelsQueryParams.prototype, "query", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], GetChannelsQueryParams.prototype, "sort", void 0);
    return GetChannelsQueryParams;
}(SpeakeasyBase));
export { GetChannelsQueryParams };
var GetChannelsRequest = /** @class */ (function (_super) {
    __extends(GetChannelsRequest, _super);
    function GetChannelsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetChannelsQueryParams)
    ], GetChannelsRequest.prototype, "queryParams", void 0);
    return GetChannelsRequest;
}(SpeakeasyBase));
export { GetChannelsRequest };
var GetChannelsResponse = /** @class */ (function (_super) {
    __extends(GetChannelsResponse, _super);
    function GetChannelsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetChannelsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetChannelsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.Channel }),
        __metadata("design:type", Array)
    ], GetChannelsResponse.prototype, "channels", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.LegacyError)
    ], GetChannelsResponse.prototype, "legacyError", void 0);
    return GetChannelsResponse;
}(SpeakeasyBase));
export { GetChannelsResponse };
