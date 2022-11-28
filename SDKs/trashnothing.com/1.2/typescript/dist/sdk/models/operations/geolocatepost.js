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
var GeolocatePostPathParams = /** @class */ (function (_super) {
    __extends(GeolocatePostPathParams, _super);
    function GeolocatePostPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=post_id" }),
        __metadata("design:type", String)
    ], GeolocatePostPathParams.prototype, "postId", void 0);
    return GeolocatePostPathParams;
}(SpeakeasyBase));
export { GeolocatePostPathParams };
var GeolocatePostRequestBody = /** @class */ (function (_super) {
    __extends(GeolocatePostRequestBody, _super);
    function GeolocatePostRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=latitude" }),
        __metadata("design:type", Number)
    ], GeolocatePostRequestBody.prototype, "latitude", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=location" }),
        __metadata("design:type", String)
    ], GeolocatePostRequestBody.prototype, "location", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=longitude" }),
        __metadata("design:type", Number)
    ], GeolocatePostRequestBody.prototype, "longitude", void 0);
    return GeolocatePostRequestBody;
}(SpeakeasyBase));
export { GeolocatePostRequestBody };
var GeolocatePostRequest = /** @class */ (function (_super) {
    __extends(GeolocatePostRequest, _super);
    function GeolocatePostRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GeolocatePostPathParams)
    ], GeolocatePostRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", GeolocatePostRequestBody)
    ], GeolocatePostRequest.prototype, "request", void 0);
    return GeolocatePostRequest;
}(SpeakeasyBase));
export { GeolocatePostRequest };
var GeolocatePostResponse = /** @class */ (function (_super) {
    __extends(GeolocatePostResponse, _super);
    function GeolocatePostResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GeolocatePostResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Post)
    ], GeolocatePostResponse.prototype, "post", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GeolocatePostResponse.prototype, "statusCode", void 0);
    return GeolocatePostResponse;
}(SpeakeasyBase));
export { GeolocatePostResponse };
