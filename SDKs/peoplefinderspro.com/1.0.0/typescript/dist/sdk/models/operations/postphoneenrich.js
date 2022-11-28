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
var PostPhoneEnrichHeaders = /** @class */ (function (_super) {
    __extends(PostPhoneEnrichHeaders, _super);
    function PostPhoneEnrichHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=galaxy-ap-name" }),
        __metadata("design:type", String)
    ], PostPhoneEnrichHeaders.prototype, "galaxyApName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=galaxy-ap-password" }),
        __metadata("design:type", String)
    ], PostPhoneEnrichHeaders.prototype, "galaxyApPassword", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=galaxy-search-type" }),
        __metadata("design:type", String)
    ], PostPhoneEnrichHeaders.prototype, "galaxySearchType", void 0);
    return PostPhoneEnrichHeaders;
}(SpeakeasyBase));
export { PostPhoneEnrichHeaders };
var PostPhoneEnrichRequestBody = /** @class */ (function (_super) {
    __extends(PostPhoneEnrichRequestBody, _super);
    function PostPhoneEnrichRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Phone" }),
        __metadata("design:type", String)
    ], PostPhoneEnrichRequestBody.prototype, "phone", void 0);
    return PostPhoneEnrichRequestBody;
}(SpeakeasyBase));
export { PostPhoneEnrichRequestBody };
var PostPhoneEnrichRequest = /** @class */ (function (_super) {
    __extends(PostPhoneEnrichRequest, _super);
    function PostPhoneEnrichRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostPhoneEnrichHeaders)
    ], PostPhoneEnrichRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PostPhoneEnrichRequestBody)
    ], PostPhoneEnrichRequest.prototype, "request", void 0);
    return PostPhoneEnrichRequest;
}(SpeakeasyBase));
export { PostPhoneEnrichRequest };
var PostPhoneEnrichResponse = /** @class */ (function (_super) {
    __extends(PostPhoneEnrichResponse, _super);
    function PostPhoneEnrichResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostPhoneEnrichResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostPhoneEnrichResponse.prototype, "statusCode", void 0);
    return PostPhoneEnrichResponse;
}(SpeakeasyBase));
export { PostPhoneEnrichResponse };
