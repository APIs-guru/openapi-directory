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
var ReleaseEventApiGetAlbumsPathParams = /** @class */ (function (_super) {
    __extends(ReleaseEventApiGetAlbumsPathParams, _super);
    function ReleaseEventApiGetAlbumsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=eventId" }),
        __metadata("design:type", Number)
    ], ReleaseEventApiGetAlbumsPathParams.prototype, "eventId", void 0);
    return ReleaseEventApiGetAlbumsPathParams;
}(SpeakeasyBase));
export { ReleaseEventApiGetAlbumsPathParams };
export var ReleaseEventApiGetAlbumsFieldsEnum;
(function (ReleaseEventApiGetAlbumsFieldsEnum) {
    ReleaseEventApiGetAlbumsFieldsEnum["None"] = "None";
    ReleaseEventApiGetAlbumsFieldsEnum["AdditionalNames"] = "AdditionalNames";
    ReleaseEventApiGetAlbumsFieldsEnum["Artists"] = "Artists";
    ReleaseEventApiGetAlbumsFieldsEnum["Description"] = "Description";
    ReleaseEventApiGetAlbumsFieldsEnum["Discs"] = "Discs";
    ReleaseEventApiGetAlbumsFieldsEnum["Identifiers"] = "Identifiers";
    ReleaseEventApiGetAlbumsFieldsEnum["MainPicture"] = "MainPicture";
    ReleaseEventApiGetAlbumsFieldsEnum["Names"] = "Names";
    ReleaseEventApiGetAlbumsFieldsEnum["PVs"] = "PVs";
    ReleaseEventApiGetAlbumsFieldsEnum["ReleaseEvent"] = "ReleaseEvent";
    ReleaseEventApiGetAlbumsFieldsEnum["Tags"] = "Tags";
    ReleaseEventApiGetAlbumsFieldsEnum["Tracks"] = "Tracks";
    ReleaseEventApiGetAlbumsFieldsEnum["WebLinks"] = "WebLinks";
})(ReleaseEventApiGetAlbumsFieldsEnum || (ReleaseEventApiGetAlbumsFieldsEnum = {}));
export var ReleaseEventApiGetAlbumsLangEnum;
(function (ReleaseEventApiGetAlbumsLangEnum) {
    ReleaseEventApiGetAlbumsLangEnum["Default"] = "Default";
    ReleaseEventApiGetAlbumsLangEnum["Japanese"] = "Japanese";
    ReleaseEventApiGetAlbumsLangEnum["Romaji"] = "Romaji";
    ReleaseEventApiGetAlbumsLangEnum["English"] = "English";
})(ReleaseEventApiGetAlbumsLangEnum || (ReleaseEventApiGetAlbumsLangEnum = {}));
var ReleaseEventApiGetAlbumsQueryParams = /** @class */ (function (_super) {
    __extends(ReleaseEventApiGetAlbumsQueryParams, _super);
    function ReleaseEventApiGetAlbumsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ReleaseEventApiGetAlbumsQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lang" }),
        __metadata("design:type", String)
    ], ReleaseEventApiGetAlbumsQueryParams.prototype, "lang", void 0);
    return ReleaseEventApiGetAlbumsQueryParams;
}(SpeakeasyBase));
export { ReleaseEventApiGetAlbumsQueryParams };
var ReleaseEventApiGetAlbumsRequest = /** @class */ (function (_super) {
    __extends(ReleaseEventApiGetAlbumsRequest, _super);
    function ReleaseEventApiGetAlbumsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ReleaseEventApiGetAlbumsPathParams)
    ], ReleaseEventApiGetAlbumsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ReleaseEventApiGetAlbumsQueryParams)
    ], ReleaseEventApiGetAlbumsRequest.prototype, "queryParams", void 0);
    return ReleaseEventApiGetAlbumsRequest;
}(SpeakeasyBase));
export { ReleaseEventApiGetAlbumsRequest };
var ReleaseEventApiGetAlbumsResponse = /** @class */ (function (_super) {
    __extends(ReleaseEventApiGetAlbumsResponse, _super);
    function ReleaseEventApiGetAlbumsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ elemType: shared.AlbumForApiContract }),
        __metadata("design:type", Array)
    ], ReleaseEventApiGetAlbumsResponse.prototype, "albumForApiContracts", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], ReleaseEventApiGetAlbumsResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ReleaseEventApiGetAlbumsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ReleaseEventApiGetAlbumsResponse.prototype, "statusCode", void 0);
    return ReleaseEventApiGetAlbumsResponse;
}(SpeakeasyBase));
export { ReleaseEventApiGetAlbumsResponse };
