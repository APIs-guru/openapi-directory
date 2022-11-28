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
var GetCategoryChannelsPathParams = /** @class */ (function (_super) {
    __extends(GetCategoryChannelsPathParams, _super);
    function GetCategoryChannelsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=category" }),
        __metadata("design:type", String)
    ], GetCategoryChannelsPathParams.prototype, "category", void 0);
    return GetCategoryChannelsPathParams;
}(SpeakeasyBase));
export { GetCategoryChannelsPathParams };
export var GetCategoryChannelsDirectionEnum;
(function (GetCategoryChannelsDirectionEnum) {
    GetCategoryChannelsDirectionEnum["Asc"] = "asc";
    GetCategoryChannelsDirectionEnum["Desc"] = "desc";
})(GetCategoryChannelsDirectionEnum || (GetCategoryChannelsDirectionEnum = {}));
export var GetCategoryChannelsSortEnum;
(function (GetCategoryChannelsSortEnum) {
    GetCategoryChannelsSortEnum["Alphabetical"] = "alphabetical";
    GetCategoryChannelsSortEnum["Date"] = "date";
    GetCategoryChannelsSortEnum["Followers"] = "followers";
    GetCategoryChannelsSortEnum["Videos"] = "videos";
})(GetCategoryChannelsSortEnum || (GetCategoryChannelsSortEnum = {}));
var GetCategoryChannelsQueryParams = /** @class */ (function (_super) {
    __extends(GetCategoryChannelsQueryParams, _super);
    function GetCategoryChannelsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=direction" }),
        __metadata("design:type", String)
    ], GetCategoryChannelsQueryParams.prototype, "direction", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetCategoryChannelsQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], GetCategoryChannelsQueryParams.prototype, "perPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" }),
        __metadata("design:type", String)
    ], GetCategoryChannelsQueryParams.prototype, "query", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], GetCategoryChannelsQueryParams.prototype, "sort", void 0);
    return GetCategoryChannelsQueryParams;
}(SpeakeasyBase));
export { GetCategoryChannelsQueryParams };
var GetCategoryChannelsRequest = /** @class */ (function (_super) {
    __extends(GetCategoryChannelsRequest, _super);
    function GetCategoryChannelsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetCategoryChannelsPathParams)
    ], GetCategoryChannelsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetCategoryChannelsQueryParams)
    ], GetCategoryChannelsRequest.prototype, "queryParams", void 0);
    return GetCategoryChannelsRequest;
}(SpeakeasyBase));
export { GetCategoryChannelsRequest };
var GetCategoryChannelsResponse = /** @class */ (function (_super) {
    __extends(GetCategoryChannelsResponse, _super);
    function GetCategoryChannelsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetCategoryChannelsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetCategoryChannelsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.Channel }),
        __metadata("design:type", Array)
    ], GetCategoryChannelsResponse.prototype, "channels", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.LegacyError)
    ], GetCategoryChannelsResponse.prototype, "legacyError", void 0);
    return GetCategoryChannelsResponse;
}(SpeakeasyBase));
export { GetCategoryChannelsResponse };
