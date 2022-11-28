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
export var PvApiGetListLangEnum;
(function (PvApiGetListLangEnum) {
    PvApiGetListLangEnum["Default"] = "Default";
    PvApiGetListLangEnum["Japanese"] = "Japanese";
    PvApiGetListLangEnum["Romaji"] = "Romaji";
    PvApiGetListLangEnum["English"] = "English";
})(PvApiGetListLangEnum || (PvApiGetListLangEnum = {}));
export var PvApiGetListServiceEnum;
(function (PvApiGetListServiceEnum) {
    PvApiGetListServiceEnum["NicoNicoDouga"] = "NicoNicoDouga";
    PvApiGetListServiceEnum["Youtube"] = "Youtube";
    PvApiGetListServiceEnum["SoundCloud"] = "SoundCloud";
    PvApiGetListServiceEnum["Vimeo"] = "Vimeo";
    PvApiGetListServiceEnum["Piapro"] = "Piapro";
    PvApiGetListServiceEnum["Bilibili"] = "Bilibili";
    PvApiGetListServiceEnum["File"] = "File";
    PvApiGetListServiceEnum["LocalFile"] = "LocalFile";
    PvApiGetListServiceEnum["Creofuga"] = "Creofuga";
    PvApiGetListServiceEnum["Bandcamp"] = "Bandcamp";
})(PvApiGetListServiceEnum || (PvApiGetListServiceEnum = {}));
var PvApiGetListQueryParams = /** @class */ (function (_super) {
    __extends(PvApiGetListQueryParams, _super);
    function PvApiGetListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=author" }),
        __metadata("design:type", String)
    ], PvApiGetListQueryParams.prototype, "author", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=getTotalCount" }),
        __metadata("design:type", Boolean)
    ], PvApiGetListQueryParams.prototype, "getTotalCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lang" }),
        __metadata("design:type", String)
    ], PvApiGetListQueryParams.prototype, "lang", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], PvApiGetListQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name" }),
        __metadata("design:type", String)
    ], PvApiGetListQueryParams.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=service" }),
        __metadata("design:type", String)
    ], PvApiGetListQueryParams.prototype, "service", void 0);
    return PvApiGetListQueryParams;
}(SpeakeasyBase));
export { PvApiGetListQueryParams };
var PvApiGetListRequest = /** @class */ (function (_super) {
    __extends(PvApiGetListRequest, _super);
    function PvApiGetListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PvApiGetListQueryParams)
    ], PvApiGetListRequest.prototype, "queryParams", void 0);
    return PvApiGetListRequest;
}(SpeakeasyBase));
export { PvApiGetListRequest };
var PvApiGetListResponse = /** @class */ (function (_super) {
    __extends(PvApiGetListResponse, _super);
    function PvApiGetListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PvApiGetListResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PvApiGetListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PartialFindResultPvForSongContract)
    ], PvApiGetListResponse.prototype, "partialFindResultPvForSongContract", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PvApiGetListResponse.prototype, "statusCode", void 0);
    return PvApiGetListResponse;
}(SpeakeasyBase));
export { PvApiGetListResponse };
