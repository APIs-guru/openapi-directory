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
var AlbumApiGetOnePathParams = /** @class */ (function (_super) {
    __extends(AlbumApiGetOnePathParams, _super);
    function AlbumApiGetOnePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], AlbumApiGetOnePathParams.prototype, "id", void 0);
    return AlbumApiGetOnePathParams;
}(SpeakeasyBase));
export { AlbumApiGetOnePathParams };
export var AlbumApiGetOneFieldsEnum;
(function (AlbumApiGetOneFieldsEnum) {
    AlbumApiGetOneFieldsEnum["None"] = "None";
    AlbumApiGetOneFieldsEnum["AdditionalNames"] = "AdditionalNames";
    AlbumApiGetOneFieldsEnum["Artists"] = "Artists";
    AlbumApiGetOneFieldsEnum["Description"] = "Description";
    AlbumApiGetOneFieldsEnum["Discs"] = "Discs";
    AlbumApiGetOneFieldsEnum["Identifiers"] = "Identifiers";
    AlbumApiGetOneFieldsEnum["MainPicture"] = "MainPicture";
    AlbumApiGetOneFieldsEnum["Names"] = "Names";
    AlbumApiGetOneFieldsEnum["PVs"] = "PVs";
    AlbumApiGetOneFieldsEnum["ReleaseEvent"] = "ReleaseEvent";
    AlbumApiGetOneFieldsEnum["Tags"] = "Tags";
    AlbumApiGetOneFieldsEnum["Tracks"] = "Tracks";
    AlbumApiGetOneFieldsEnum["WebLinks"] = "WebLinks";
})(AlbumApiGetOneFieldsEnum || (AlbumApiGetOneFieldsEnum = {}));
export var AlbumApiGetOneLangEnum;
(function (AlbumApiGetOneLangEnum) {
    AlbumApiGetOneLangEnum["Default"] = "Default";
    AlbumApiGetOneLangEnum["Japanese"] = "Japanese";
    AlbumApiGetOneLangEnum["Romaji"] = "Romaji";
    AlbumApiGetOneLangEnum["English"] = "English";
})(AlbumApiGetOneLangEnum || (AlbumApiGetOneLangEnum = {}));
export var AlbumApiGetOneSongFieldsEnum;
(function (AlbumApiGetOneSongFieldsEnum) {
    AlbumApiGetOneSongFieldsEnum["None"] = "None";
    AlbumApiGetOneSongFieldsEnum["AdditionalNames"] = "AdditionalNames";
    AlbumApiGetOneSongFieldsEnum["Albums"] = "Albums";
    AlbumApiGetOneSongFieldsEnum["Artists"] = "Artists";
    AlbumApiGetOneSongFieldsEnum["Lyrics"] = "Lyrics";
    AlbumApiGetOneSongFieldsEnum["MainPicture"] = "MainPicture";
    AlbumApiGetOneSongFieldsEnum["Names"] = "Names";
    AlbumApiGetOneSongFieldsEnum["PVs"] = "PVs";
    AlbumApiGetOneSongFieldsEnum["ReleaseEvent"] = "ReleaseEvent";
    AlbumApiGetOneSongFieldsEnum["Tags"] = "Tags";
    AlbumApiGetOneSongFieldsEnum["ThumbUrl"] = "ThumbUrl";
    AlbumApiGetOneSongFieldsEnum["WebLinks"] = "WebLinks";
})(AlbumApiGetOneSongFieldsEnum || (AlbumApiGetOneSongFieldsEnum = {}));
var AlbumApiGetOneQueryParams = /** @class */ (function (_super) {
    __extends(AlbumApiGetOneQueryParams, _super);
    function AlbumApiGetOneQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AlbumApiGetOneQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lang" }),
        __metadata("design:type", String)
    ], AlbumApiGetOneQueryParams.prototype, "lang", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=songFields" }),
        __metadata("design:type", String)
    ], AlbumApiGetOneQueryParams.prototype, "songFields", void 0);
    return AlbumApiGetOneQueryParams;
}(SpeakeasyBase));
export { AlbumApiGetOneQueryParams };
var AlbumApiGetOneRequest = /** @class */ (function (_super) {
    __extends(AlbumApiGetOneRequest, _super);
    function AlbumApiGetOneRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AlbumApiGetOnePathParams)
    ], AlbumApiGetOneRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AlbumApiGetOneQueryParams)
    ], AlbumApiGetOneRequest.prototype, "queryParams", void 0);
    return AlbumApiGetOneRequest;
}(SpeakeasyBase));
export { AlbumApiGetOneRequest };
var AlbumApiGetOneResponse = /** @class */ (function (_super) {
    __extends(AlbumApiGetOneResponse, _super);
    function AlbumApiGetOneResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.AlbumForApiContract)
    ], AlbumApiGetOneResponse.prototype, "albumForApiContract", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], AlbumApiGetOneResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AlbumApiGetOneResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AlbumApiGetOneResponse.prototype, "statusCode", void 0);
    return AlbumApiGetOneResponse;
}(SpeakeasyBase));
export { AlbumApiGetOneResponse };
