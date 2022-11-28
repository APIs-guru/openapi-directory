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
var ArtistApiGetOnePathParams = /** @class */ (function (_super) {
    __extends(ArtistApiGetOnePathParams, _super);
    function ArtistApiGetOnePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], ArtistApiGetOnePathParams.prototype, "id", void 0);
    return ArtistApiGetOnePathParams;
}(SpeakeasyBase));
export { ArtistApiGetOnePathParams };
export var ArtistApiGetOneFieldsEnum;
(function (ArtistApiGetOneFieldsEnum) {
    ArtistApiGetOneFieldsEnum["None"] = "None";
    ArtistApiGetOneFieldsEnum["AdditionalNames"] = "AdditionalNames";
    ArtistApiGetOneFieldsEnum["ArtistLinks"] = "ArtistLinks";
    ArtistApiGetOneFieldsEnum["ArtistLinksReverse"] = "ArtistLinksReverse";
    ArtistApiGetOneFieldsEnum["BaseVoicebank"] = "BaseVoicebank";
    ArtistApiGetOneFieldsEnum["Description"] = "Description";
    ArtistApiGetOneFieldsEnum["MainPicture"] = "MainPicture";
    ArtistApiGetOneFieldsEnum["Names"] = "Names";
    ArtistApiGetOneFieldsEnum["Tags"] = "Tags";
    ArtistApiGetOneFieldsEnum["WebLinks"] = "WebLinks";
})(ArtistApiGetOneFieldsEnum || (ArtistApiGetOneFieldsEnum = {}));
export var ArtistApiGetOneLangEnum;
(function (ArtistApiGetOneLangEnum) {
    ArtistApiGetOneLangEnum["Default"] = "Default";
    ArtistApiGetOneLangEnum["Japanese"] = "Japanese";
    ArtistApiGetOneLangEnum["Romaji"] = "Romaji";
    ArtistApiGetOneLangEnum["English"] = "English";
})(ArtistApiGetOneLangEnum || (ArtistApiGetOneLangEnum = {}));
export var ArtistApiGetOneRelationsEnum;
(function (ArtistApiGetOneRelationsEnum) {
    ArtistApiGetOneRelationsEnum["None"] = "None";
    ArtistApiGetOneRelationsEnum["LatestAlbums"] = "LatestAlbums";
    ArtistApiGetOneRelationsEnum["LatestEvents"] = "LatestEvents";
    ArtistApiGetOneRelationsEnum["LatestSongs"] = "LatestSongs";
    ArtistApiGetOneRelationsEnum["PopularAlbums"] = "PopularAlbums";
    ArtistApiGetOneRelationsEnum["PopularSongs"] = "PopularSongs";
    ArtistApiGetOneRelationsEnum["All"] = "All";
})(ArtistApiGetOneRelationsEnum || (ArtistApiGetOneRelationsEnum = {}));
var ArtistApiGetOneQueryParams = /** @class */ (function (_super) {
    __extends(ArtistApiGetOneQueryParams, _super);
    function ArtistApiGetOneQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ArtistApiGetOneQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lang" }),
        __metadata("design:type", String)
    ], ArtistApiGetOneQueryParams.prototype, "lang", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=relations" }),
        __metadata("design:type", String)
    ], ArtistApiGetOneQueryParams.prototype, "relations", void 0);
    return ArtistApiGetOneQueryParams;
}(SpeakeasyBase));
export { ArtistApiGetOneQueryParams };
var ArtistApiGetOneRequest = /** @class */ (function (_super) {
    __extends(ArtistApiGetOneRequest, _super);
    function ArtistApiGetOneRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ArtistApiGetOnePathParams)
    ], ArtistApiGetOneRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ArtistApiGetOneQueryParams)
    ], ArtistApiGetOneRequest.prototype, "queryParams", void 0);
    return ArtistApiGetOneRequest;
}(SpeakeasyBase));
export { ArtistApiGetOneRequest };
var ArtistApiGetOneResponse = /** @class */ (function (_super) {
    __extends(ArtistApiGetOneResponse, _super);
    function ArtistApiGetOneResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ArtistForApiContract)
    ], ArtistApiGetOneResponse.prototype, "artistForApiContract", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], ArtistApiGetOneResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ArtistApiGetOneResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ArtistApiGetOneResponse.prototype, "statusCode", void 0);
    return ArtistApiGetOneResponse;
}(SpeakeasyBase));
export { ArtistApiGetOneResponse };
