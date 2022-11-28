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
var GetPhotosByIdsQueryParams = /** @class */ (function (_super) {
    __extends(GetPhotosByIdsQueryParams, _super);
    function GetPhotosByIdsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=device_pixel_ratio" }),
        __metadata("design:type", Number)
    ], GetPhotosByIdsQueryParams.prototype, "devicePixelRatio", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=photo_ids" }),
        __metadata("design:type", String)
    ], GetPhotosByIdsQueryParams.prototype, "photoIds", void 0);
    return GetPhotosByIdsQueryParams;
}(SpeakeasyBase));
export { GetPhotosByIdsQueryParams };
var GetPhotosByIdsRequest = /** @class */ (function (_super) {
    __extends(GetPhotosByIdsRequest, _super);
    function GetPhotosByIdsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPhotosByIdsQueryParams)
    ], GetPhotosByIdsRequest.prototype, "queryParams", void 0);
    return GetPhotosByIdsRequest;
}(SpeakeasyBase));
export { GetPhotosByIdsRequest };
var GetPhotosByIdsResponse = /** @class */ (function (_super) {
    __extends(GetPhotosByIdsResponse, _super);
    function GetPhotosByIdsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetPhotosByIdsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.PhotoResult }),
        __metadata("design:type", Array)
    ], GetPhotosByIdsResponse.prototype, "photoResults", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetPhotosByIdsResponse.prototype, "statusCode", void 0);
    return GetPhotosByIdsResponse;
}(SpeakeasyBase));
export { GetPhotosByIdsResponse };
