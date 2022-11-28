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
var GetApiUsersCurrentAlbumCollectionStatusesAlbumIdPathParams = /** @class */ (function (_super) {
    __extends(GetApiUsersCurrentAlbumCollectionStatusesAlbumIdPathParams, _super);
    function GetApiUsersCurrentAlbumCollectionStatusesAlbumIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=albumId" }),
        __metadata("design:type", Number)
    ], GetApiUsersCurrentAlbumCollectionStatusesAlbumIdPathParams.prototype, "albumId", void 0);
    return GetApiUsersCurrentAlbumCollectionStatusesAlbumIdPathParams;
}(SpeakeasyBase));
export { GetApiUsersCurrentAlbumCollectionStatusesAlbumIdPathParams };
var GetApiUsersCurrentAlbumCollectionStatusesAlbumIdRequest = /** @class */ (function (_super) {
    __extends(GetApiUsersCurrentAlbumCollectionStatusesAlbumIdRequest, _super);
    function GetApiUsersCurrentAlbumCollectionStatusesAlbumIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetApiUsersCurrentAlbumCollectionStatusesAlbumIdPathParams)
    ], GetApiUsersCurrentAlbumCollectionStatusesAlbumIdRequest.prototype, "pathParams", void 0);
    return GetApiUsersCurrentAlbumCollectionStatusesAlbumIdRequest;
}(SpeakeasyBase));
export { GetApiUsersCurrentAlbumCollectionStatusesAlbumIdRequest };
var GetApiUsersCurrentAlbumCollectionStatusesAlbumIdResponse = /** @class */ (function (_super) {
    __extends(GetApiUsersCurrentAlbumCollectionStatusesAlbumIdResponse, _super);
    function GetApiUsersCurrentAlbumCollectionStatusesAlbumIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.AlbumForUserForApiContract)
    ], GetApiUsersCurrentAlbumCollectionStatusesAlbumIdResponse.prototype, "albumForUserForApiContract", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetApiUsersCurrentAlbumCollectionStatusesAlbumIdResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetApiUsersCurrentAlbumCollectionStatusesAlbumIdResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetApiUsersCurrentAlbumCollectionStatusesAlbumIdResponse.prototype, "statusCode", void 0);
    return GetApiUsersCurrentAlbumCollectionStatusesAlbumIdResponse;
}(SpeakeasyBase));
export { GetApiUsersCurrentAlbumCollectionStatusesAlbumIdResponse };
