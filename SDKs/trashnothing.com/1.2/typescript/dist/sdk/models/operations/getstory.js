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
var GetStoryPathParams = /** @class */ (function (_super) {
    __extends(GetStoryPathParams, _super);
    function GetStoryPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=story_id" }),
        __metadata("design:type", String)
    ], GetStoryPathParams.prototype, "storyId", void 0);
    return GetStoryPathParams;
}(SpeakeasyBase));
export { GetStoryPathParams };
var GetStoryQueryParams = /** @class */ (function (_super) {
    __extends(GetStoryQueryParams, _super);
    function GetStoryQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=device_pixel_ratio" }),
        __metadata("design:type", Number)
    ], GetStoryQueryParams.prototype, "devicePixelRatio", void 0);
    return GetStoryQueryParams;
}(SpeakeasyBase));
export { GetStoryQueryParams };
var GetStorySecurity = /** @class */ (function (_super) {
    __extends(GetStorySecurity, _super);
    function GetStorySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2Implicit)
    ], GetStorySecurity.prototype, "oauth2Implicit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2Code)
    ], GetStorySecurity.prototype, "oauth2Code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=query" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], GetStorySecurity.prototype, "apiKey", void 0);
    return GetStorySecurity;
}(SpeakeasyBase));
export { GetStorySecurity };
var GetStoryRequest = /** @class */ (function (_super) {
    __extends(GetStoryRequest, _super);
    function GetStoryRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetStoryPathParams)
    ], GetStoryRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetStoryQueryParams)
    ], GetStoryRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetStorySecurity)
    ], GetStoryRequest.prototype, "security", void 0);
    return GetStoryRequest;
}(SpeakeasyBase));
export { GetStoryRequest };
var GetStoryResponse = /** @class */ (function (_super) {
    __extends(GetStoryResponse, _super);
    function GetStoryResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetStoryResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetStoryResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Story)
    ], GetStoryResponse.prototype, "story", void 0);
    return GetStoryResponse;
}(SpeakeasyBase));
export { GetStoryResponse };
