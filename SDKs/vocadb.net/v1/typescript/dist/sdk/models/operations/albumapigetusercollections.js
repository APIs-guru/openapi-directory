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
var AlbumApiGetUserCollectionsPathParams = /** @class */ (function (_super) {
    __extends(AlbumApiGetUserCollectionsPathParams, _super);
    function AlbumApiGetUserCollectionsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], AlbumApiGetUserCollectionsPathParams.prototype, "id", void 0);
    return AlbumApiGetUserCollectionsPathParams;
}(SpeakeasyBase));
export { AlbumApiGetUserCollectionsPathParams };
export var AlbumApiGetUserCollectionsLanguagePreferenceEnum;
(function (AlbumApiGetUserCollectionsLanguagePreferenceEnum) {
    AlbumApiGetUserCollectionsLanguagePreferenceEnum["Default"] = "Default";
    AlbumApiGetUserCollectionsLanguagePreferenceEnum["Japanese"] = "Japanese";
    AlbumApiGetUserCollectionsLanguagePreferenceEnum["Romaji"] = "Romaji";
    AlbumApiGetUserCollectionsLanguagePreferenceEnum["English"] = "English";
})(AlbumApiGetUserCollectionsLanguagePreferenceEnum || (AlbumApiGetUserCollectionsLanguagePreferenceEnum = {}));
var AlbumApiGetUserCollectionsQueryParams = /** @class */ (function (_super) {
    __extends(AlbumApiGetUserCollectionsQueryParams, _super);
    function AlbumApiGetUserCollectionsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=languagePreference" }),
        __metadata("design:type", String)
    ], AlbumApiGetUserCollectionsQueryParams.prototype, "languagePreference", void 0);
    return AlbumApiGetUserCollectionsQueryParams;
}(SpeakeasyBase));
export { AlbumApiGetUserCollectionsQueryParams };
var AlbumApiGetUserCollectionsRequest = /** @class */ (function (_super) {
    __extends(AlbumApiGetUserCollectionsRequest, _super);
    function AlbumApiGetUserCollectionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AlbumApiGetUserCollectionsPathParams)
    ], AlbumApiGetUserCollectionsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AlbumApiGetUserCollectionsQueryParams)
    ], AlbumApiGetUserCollectionsRequest.prototype, "queryParams", void 0);
    return AlbumApiGetUserCollectionsRequest;
}(SpeakeasyBase));
export { AlbumApiGetUserCollectionsRequest };
var AlbumApiGetUserCollectionsResponse = /** @class */ (function (_super) {
    __extends(AlbumApiGetUserCollectionsResponse, _super);
    function AlbumApiGetUserCollectionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ elemType: shared.AlbumForUserForApiContract }),
        __metadata("design:type", Array)
    ], AlbumApiGetUserCollectionsResponse.prototype, "albumForUserForApiContracts", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], AlbumApiGetUserCollectionsResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AlbumApiGetUserCollectionsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AlbumApiGetUserCollectionsResponse.prototype, "statusCode", void 0);
    return AlbumApiGetUserCollectionsResponse;
}(SpeakeasyBase));
export { AlbumApiGetUserCollectionsResponse };
