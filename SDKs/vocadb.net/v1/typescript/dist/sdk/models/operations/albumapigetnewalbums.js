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
export var AlbumApiGetNewAlbumsFieldsEnum;
(function (AlbumApiGetNewAlbumsFieldsEnum) {
    AlbumApiGetNewAlbumsFieldsEnum["None"] = "None";
    AlbumApiGetNewAlbumsFieldsEnum["AdditionalNames"] = "AdditionalNames";
    AlbumApiGetNewAlbumsFieldsEnum["Artists"] = "Artists";
    AlbumApiGetNewAlbumsFieldsEnum["Description"] = "Description";
    AlbumApiGetNewAlbumsFieldsEnum["Discs"] = "Discs";
    AlbumApiGetNewAlbumsFieldsEnum["Identifiers"] = "Identifiers";
    AlbumApiGetNewAlbumsFieldsEnum["MainPicture"] = "MainPicture";
    AlbumApiGetNewAlbumsFieldsEnum["Names"] = "Names";
    AlbumApiGetNewAlbumsFieldsEnum["PVs"] = "PVs";
    AlbumApiGetNewAlbumsFieldsEnum["ReleaseEvent"] = "ReleaseEvent";
    AlbumApiGetNewAlbumsFieldsEnum["Tags"] = "Tags";
    AlbumApiGetNewAlbumsFieldsEnum["Tracks"] = "Tracks";
    AlbumApiGetNewAlbumsFieldsEnum["WebLinks"] = "WebLinks";
})(AlbumApiGetNewAlbumsFieldsEnum || (AlbumApiGetNewAlbumsFieldsEnum = {}));
export var AlbumApiGetNewAlbumsLanguagePreferenceEnum;
(function (AlbumApiGetNewAlbumsLanguagePreferenceEnum) {
    AlbumApiGetNewAlbumsLanguagePreferenceEnum["Default"] = "Default";
    AlbumApiGetNewAlbumsLanguagePreferenceEnum["Japanese"] = "Japanese";
    AlbumApiGetNewAlbumsLanguagePreferenceEnum["Romaji"] = "Romaji";
    AlbumApiGetNewAlbumsLanguagePreferenceEnum["English"] = "English";
})(AlbumApiGetNewAlbumsLanguagePreferenceEnum || (AlbumApiGetNewAlbumsLanguagePreferenceEnum = {}));
var AlbumApiGetNewAlbumsQueryParams = /** @class */ (function (_super) {
    __extends(AlbumApiGetNewAlbumsQueryParams, _super);
    function AlbumApiGetNewAlbumsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AlbumApiGetNewAlbumsQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=languagePreference" }),
        __metadata("design:type", String)
    ], AlbumApiGetNewAlbumsQueryParams.prototype, "languagePreference", void 0);
    return AlbumApiGetNewAlbumsQueryParams;
}(SpeakeasyBase));
export { AlbumApiGetNewAlbumsQueryParams };
var AlbumApiGetNewAlbumsRequest = /** @class */ (function (_super) {
    __extends(AlbumApiGetNewAlbumsRequest, _super);
    function AlbumApiGetNewAlbumsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AlbumApiGetNewAlbumsQueryParams)
    ], AlbumApiGetNewAlbumsRequest.prototype, "queryParams", void 0);
    return AlbumApiGetNewAlbumsRequest;
}(SpeakeasyBase));
export { AlbumApiGetNewAlbumsRequest };
var AlbumApiGetNewAlbumsResponse = /** @class */ (function (_super) {
    __extends(AlbumApiGetNewAlbumsResponse, _super);
    function AlbumApiGetNewAlbumsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ elemType: shared.AlbumForApiContract }),
        __metadata("design:type", Array)
    ], AlbumApiGetNewAlbumsResponse.prototype, "albumForApiContracts", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], AlbumApiGetNewAlbumsResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AlbumApiGetNewAlbumsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AlbumApiGetNewAlbumsResponse.prototype, "statusCode", void 0);
    return AlbumApiGetNewAlbumsResponse;
}(SpeakeasyBase));
export { AlbumApiGetNewAlbumsResponse };
