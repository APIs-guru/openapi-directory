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
export var AlbumApiGetTopAlbumsFieldsEnum;
(function (AlbumApiGetTopAlbumsFieldsEnum) {
    AlbumApiGetTopAlbumsFieldsEnum["None"] = "None";
    AlbumApiGetTopAlbumsFieldsEnum["AdditionalNames"] = "AdditionalNames";
    AlbumApiGetTopAlbumsFieldsEnum["Artists"] = "Artists";
    AlbumApiGetTopAlbumsFieldsEnum["Description"] = "Description";
    AlbumApiGetTopAlbumsFieldsEnum["Discs"] = "Discs";
    AlbumApiGetTopAlbumsFieldsEnum["Identifiers"] = "Identifiers";
    AlbumApiGetTopAlbumsFieldsEnum["MainPicture"] = "MainPicture";
    AlbumApiGetTopAlbumsFieldsEnum["Names"] = "Names";
    AlbumApiGetTopAlbumsFieldsEnum["PVs"] = "PVs";
    AlbumApiGetTopAlbumsFieldsEnum["ReleaseEvent"] = "ReleaseEvent";
    AlbumApiGetTopAlbumsFieldsEnum["Tags"] = "Tags";
    AlbumApiGetTopAlbumsFieldsEnum["Tracks"] = "Tracks";
    AlbumApiGetTopAlbumsFieldsEnum["WebLinks"] = "WebLinks";
})(AlbumApiGetTopAlbumsFieldsEnum || (AlbumApiGetTopAlbumsFieldsEnum = {}));
export var AlbumApiGetTopAlbumsLanguagePreferenceEnum;
(function (AlbumApiGetTopAlbumsLanguagePreferenceEnum) {
    AlbumApiGetTopAlbumsLanguagePreferenceEnum["Default"] = "Default";
    AlbumApiGetTopAlbumsLanguagePreferenceEnum["Japanese"] = "Japanese";
    AlbumApiGetTopAlbumsLanguagePreferenceEnum["Romaji"] = "Romaji";
    AlbumApiGetTopAlbumsLanguagePreferenceEnum["English"] = "English";
})(AlbumApiGetTopAlbumsLanguagePreferenceEnum || (AlbumApiGetTopAlbumsLanguagePreferenceEnum = {}));
var AlbumApiGetTopAlbumsQueryParams = /** @class */ (function (_super) {
    __extends(AlbumApiGetTopAlbumsQueryParams, _super);
    function AlbumApiGetTopAlbumsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AlbumApiGetTopAlbumsQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ignoreIds" }),
        __metadata("design:type", Array)
    ], AlbumApiGetTopAlbumsQueryParams.prototype, "ignoreIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=languagePreference" }),
        __metadata("design:type", String)
    ], AlbumApiGetTopAlbumsQueryParams.prototype, "languagePreference", void 0);
    return AlbumApiGetTopAlbumsQueryParams;
}(SpeakeasyBase));
export { AlbumApiGetTopAlbumsQueryParams };
var AlbumApiGetTopAlbumsRequest = /** @class */ (function (_super) {
    __extends(AlbumApiGetTopAlbumsRequest, _super);
    function AlbumApiGetTopAlbumsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AlbumApiGetTopAlbumsQueryParams)
    ], AlbumApiGetTopAlbumsRequest.prototype, "queryParams", void 0);
    return AlbumApiGetTopAlbumsRequest;
}(SpeakeasyBase));
export { AlbumApiGetTopAlbumsRequest };
var AlbumApiGetTopAlbumsResponse = /** @class */ (function (_super) {
    __extends(AlbumApiGetTopAlbumsResponse, _super);
    function AlbumApiGetTopAlbumsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ elemType: shared.AlbumForApiContract }),
        __metadata("design:type", Array)
    ], AlbumApiGetTopAlbumsResponse.prototype, "albumForApiContracts", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], AlbumApiGetTopAlbumsResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AlbumApiGetTopAlbumsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AlbumApiGetTopAlbumsResponse.prototype, "statusCode", void 0);
    return AlbumApiGetTopAlbumsResponse;
}(SpeakeasyBase));
export { AlbumApiGetTopAlbumsResponse };
