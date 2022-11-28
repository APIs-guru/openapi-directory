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
var AlbumApiGetTracksPathParams = /** @class */ (function (_super) {
    __extends(AlbumApiGetTracksPathParams, _super);
    function AlbumApiGetTracksPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], AlbumApiGetTracksPathParams.prototype, "id", void 0);
    return AlbumApiGetTracksPathParams;
}(SpeakeasyBase));
export { AlbumApiGetTracksPathParams };
export var AlbumApiGetTracksFieldsEnum;
(function (AlbumApiGetTracksFieldsEnum) {
    AlbumApiGetTracksFieldsEnum["None"] = "None";
    AlbumApiGetTracksFieldsEnum["AdditionalNames"] = "AdditionalNames";
    AlbumApiGetTracksFieldsEnum["Albums"] = "Albums";
    AlbumApiGetTracksFieldsEnum["Artists"] = "Artists";
    AlbumApiGetTracksFieldsEnum["Lyrics"] = "Lyrics";
    AlbumApiGetTracksFieldsEnum["MainPicture"] = "MainPicture";
    AlbumApiGetTracksFieldsEnum["Names"] = "Names";
    AlbumApiGetTracksFieldsEnum["PVs"] = "PVs";
    AlbumApiGetTracksFieldsEnum["ReleaseEvent"] = "ReleaseEvent";
    AlbumApiGetTracksFieldsEnum["Tags"] = "Tags";
    AlbumApiGetTracksFieldsEnum["ThumbUrl"] = "ThumbUrl";
    AlbumApiGetTracksFieldsEnum["WebLinks"] = "WebLinks";
})(AlbumApiGetTracksFieldsEnum || (AlbumApiGetTracksFieldsEnum = {}));
export var AlbumApiGetTracksLangEnum;
(function (AlbumApiGetTracksLangEnum) {
    AlbumApiGetTracksLangEnum["Default"] = "Default";
    AlbumApiGetTracksLangEnum["Japanese"] = "Japanese";
    AlbumApiGetTracksLangEnum["Romaji"] = "Romaji";
    AlbumApiGetTracksLangEnum["English"] = "English";
})(AlbumApiGetTracksLangEnum || (AlbumApiGetTracksLangEnum = {}));
var AlbumApiGetTracksQueryParams = /** @class */ (function (_super) {
    __extends(AlbumApiGetTracksQueryParams, _super);
    function AlbumApiGetTracksQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AlbumApiGetTracksQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lang" }),
        __metadata("design:type", String)
    ], AlbumApiGetTracksQueryParams.prototype, "lang", void 0);
    return AlbumApiGetTracksQueryParams;
}(SpeakeasyBase));
export { AlbumApiGetTracksQueryParams };
var AlbumApiGetTracksRequest = /** @class */ (function (_super) {
    __extends(AlbumApiGetTracksRequest, _super);
    function AlbumApiGetTracksRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AlbumApiGetTracksPathParams)
    ], AlbumApiGetTracksRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AlbumApiGetTracksQueryParams)
    ], AlbumApiGetTracksRequest.prototype, "queryParams", void 0);
    return AlbumApiGetTracksRequest;
}(SpeakeasyBase));
export { AlbumApiGetTracksRequest };
var AlbumApiGetTracksResponse = /** @class */ (function (_super) {
    __extends(AlbumApiGetTracksResponse, _super);
    function AlbumApiGetTracksResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], AlbumApiGetTracksResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AlbumApiGetTracksResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.SongInAlbumForApiContract }),
        __metadata("design:type", Array)
    ], AlbumApiGetTracksResponse.prototype, "songInAlbumForApiContracts", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AlbumApiGetTracksResponse.prototype, "statusCode", void 0);
    return AlbumApiGetTracksResponse;
}(SpeakeasyBase));
export { AlbumApiGetTracksResponse };
