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
var GetChannelModeratorsPathParams = /** @class */ (function (_super) {
    __extends(GetChannelModeratorsPathParams, _super);
    function GetChannelModeratorsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=channel_id" }),
        __metadata("design:type", Number)
    ], GetChannelModeratorsPathParams.prototype, "channelId", void 0);
    return GetChannelModeratorsPathParams;
}(SpeakeasyBase));
export { GetChannelModeratorsPathParams };
export var GetChannelModeratorsDirectionEnum;
(function (GetChannelModeratorsDirectionEnum) {
    GetChannelModeratorsDirectionEnum["Asc"] = "asc";
    GetChannelModeratorsDirectionEnum["Desc"] = "desc";
})(GetChannelModeratorsDirectionEnum || (GetChannelModeratorsDirectionEnum = {}));
export var GetChannelModeratorsSortEnum;
(function (GetChannelModeratorsSortEnum) {
    GetChannelModeratorsSortEnum["Alphabetical"] = "alphabetical";
    GetChannelModeratorsSortEnum["Date"] = "date";
})(GetChannelModeratorsSortEnum || (GetChannelModeratorsSortEnum = {}));
var GetChannelModeratorsQueryParams = /** @class */ (function (_super) {
    __extends(GetChannelModeratorsQueryParams, _super);
    function GetChannelModeratorsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=direction" }),
        __metadata("design:type", String)
    ], GetChannelModeratorsQueryParams.prototype, "direction", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetChannelModeratorsQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], GetChannelModeratorsQueryParams.prototype, "perPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" }),
        __metadata("design:type", String)
    ], GetChannelModeratorsQueryParams.prototype, "query", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], GetChannelModeratorsQueryParams.prototype, "sort", void 0);
    return GetChannelModeratorsQueryParams;
}(SpeakeasyBase));
export { GetChannelModeratorsQueryParams };
var GetChannelModeratorsRequest = /** @class */ (function (_super) {
    __extends(GetChannelModeratorsRequest, _super);
    function GetChannelModeratorsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetChannelModeratorsPathParams)
    ], GetChannelModeratorsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetChannelModeratorsQueryParams)
    ], GetChannelModeratorsRequest.prototype, "queryParams", void 0);
    return GetChannelModeratorsRequest;
}(SpeakeasyBase));
export { GetChannelModeratorsRequest };
var GetChannelModeratorsResponse = /** @class */ (function (_super) {
    __extends(GetChannelModeratorsResponse, _super);
    function GetChannelModeratorsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetChannelModeratorsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetChannelModeratorsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.User }),
        __metadata("design:type", Array)
    ], GetChannelModeratorsResponse.prototype, "users", void 0);
    return GetChannelModeratorsResponse;
}(SpeakeasyBase));
export { GetChannelModeratorsResponse };
