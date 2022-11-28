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
var PostEmailEnrichHeaders = /** @class */ (function (_super) {
    __extends(PostEmailEnrichHeaders, _super);
    function PostEmailEnrichHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=galaxy-ap-name" }),
        __metadata("design:type", String)
    ], PostEmailEnrichHeaders.prototype, "galaxyApName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=galaxy-ap-password" }),
        __metadata("design:type", String)
    ], PostEmailEnrichHeaders.prototype, "galaxyApPassword", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=galaxy-search-type" }),
        __metadata("design:type", String)
    ], PostEmailEnrichHeaders.prototype, "galaxySearchType", void 0);
    return PostEmailEnrichHeaders;
}(SpeakeasyBase));
export { PostEmailEnrichHeaders };
var PostEmailEnrichRequestBody = /** @class */ (function (_super) {
    __extends(PostEmailEnrichRequestBody, _super);
    function PostEmailEnrichRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Email" }),
        __metadata("design:type", String)
    ], PostEmailEnrichRequestBody.prototype, "email", void 0);
    return PostEmailEnrichRequestBody;
}(SpeakeasyBase));
export { PostEmailEnrichRequestBody };
var PostEmailEnrichRequest = /** @class */ (function (_super) {
    __extends(PostEmailEnrichRequest, _super);
    function PostEmailEnrichRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostEmailEnrichHeaders)
    ], PostEmailEnrichRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PostEmailEnrichRequestBody)
    ], PostEmailEnrichRequest.prototype, "request", void 0);
    return PostEmailEnrichRequest;
}(SpeakeasyBase));
export { PostEmailEnrichRequest };
var PostEmailEnrichResponse = /** @class */ (function (_super) {
    __extends(PostEmailEnrichResponse, _super);
    function PostEmailEnrichResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostEmailEnrichResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostEmailEnrichResponse.prototype, "statusCode", void 0);
    return PostEmailEnrichResponse;
}(SpeakeasyBase));
export { PostEmailEnrichResponse };
