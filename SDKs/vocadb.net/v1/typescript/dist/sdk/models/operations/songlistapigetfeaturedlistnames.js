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
export var SongListApiGetFeaturedListNamesFeaturedCategoryEnum;
(function (SongListApiGetFeaturedListNamesFeaturedCategoryEnum) {
    SongListApiGetFeaturedListNamesFeaturedCategoryEnum["Nothing"] = "Nothing";
    SongListApiGetFeaturedListNamesFeaturedCategoryEnum["Concerts"] = "Concerts";
    SongListApiGetFeaturedListNamesFeaturedCategoryEnum["VocaloidRanking"] = "VocaloidRanking";
    SongListApiGetFeaturedListNamesFeaturedCategoryEnum["Pools"] = "Pools";
    SongListApiGetFeaturedListNamesFeaturedCategoryEnum["Other"] = "Other";
})(SongListApiGetFeaturedListNamesFeaturedCategoryEnum || (SongListApiGetFeaturedListNamesFeaturedCategoryEnum = {}));
export var SongListApiGetFeaturedListNamesNameMatchModeEnum;
(function (SongListApiGetFeaturedListNamesNameMatchModeEnum) {
    SongListApiGetFeaturedListNamesNameMatchModeEnum["Auto"] = "Auto";
    SongListApiGetFeaturedListNamesNameMatchModeEnum["Partial"] = "Partial";
    SongListApiGetFeaturedListNamesNameMatchModeEnum["StartsWith"] = "StartsWith";
    SongListApiGetFeaturedListNamesNameMatchModeEnum["Exact"] = "Exact";
    SongListApiGetFeaturedListNamesNameMatchModeEnum["Words"] = "Words";
})(SongListApiGetFeaturedListNamesNameMatchModeEnum || (SongListApiGetFeaturedListNamesNameMatchModeEnum = {}));
var SongListApiGetFeaturedListNamesQueryParams = /** @class */ (function (_super) {
    __extends(SongListApiGetFeaturedListNamesQueryParams, _super);
    function SongListApiGetFeaturedListNamesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=featuredCategory" }),
        __metadata("design:type", String)
    ], SongListApiGetFeaturedListNamesQueryParams.prototype, "featuredCategory", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], SongListApiGetFeaturedListNamesQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=nameMatchMode" }),
        __metadata("design:type", String)
    ], SongListApiGetFeaturedListNamesQueryParams.prototype, "nameMatchMode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" }),
        __metadata("design:type", String)
    ], SongListApiGetFeaturedListNamesQueryParams.prototype, "query", void 0);
    return SongListApiGetFeaturedListNamesQueryParams;
}(SpeakeasyBase));
export { SongListApiGetFeaturedListNamesQueryParams };
var SongListApiGetFeaturedListNamesRequest = /** @class */ (function (_super) {
    __extends(SongListApiGetFeaturedListNamesRequest, _super);
    function SongListApiGetFeaturedListNamesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SongListApiGetFeaturedListNamesQueryParams)
    ], SongListApiGetFeaturedListNamesRequest.prototype, "queryParams", void 0);
    return SongListApiGetFeaturedListNamesRequest;
}(SpeakeasyBase));
export { SongListApiGetFeaturedListNamesRequest };
var SongListApiGetFeaturedListNamesResponse = /** @class */ (function (_super) {
    __extends(SongListApiGetFeaturedListNamesResponse, _super);
    function SongListApiGetFeaturedListNamesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], SongListApiGetFeaturedListNamesResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SongListApiGetFeaturedListNamesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Array)
    ], SongListApiGetFeaturedListNamesResponse.prototype, "songListApiGetFeaturedListNames200ApplicationJsonStrings", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Array)
    ], SongListApiGetFeaturedListNamesResponse.prototype, "songListApiGetFeaturedListNames200ApplicationJsonpStrings", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Array)
    ], SongListApiGetFeaturedListNamesResponse.prototype, "songListApiGetFeaturedListNames200TextJsonStrings", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SongListApiGetFeaturedListNamesResponse.prototype, "statusCode", void 0);
    return SongListApiGetFeaturedListNamesResponse;
}(SpeakeasyBase));
export { SongListApiGetFeaturedListNamesResponse };
