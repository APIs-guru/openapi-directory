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
var PostAddressAutocompleteHeaders = /** @class */ (function (_super) {
    __extends(PostAddressAutocompleteHeaders, _super);
    function PostAddressAutocompleteHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=galaxy-ap-name" }),
        __metadata("design:type", String)
    ], PostAddressAutocompleteHeaders.prototype, "galaxyApName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=galaxy-ap-password" }),
        __metadata("design:type", String)
    ], PostAddressAutocompleteHeaders.prototype, "galaxyApPassword", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=galaxy-search-type" }),
        __metadata("design:type", String)
    ], PostAddressAutocompleteHeaders.prototype, "galaxySearchType", void 0);
    return PostAddressAutocompleteHeaders;
}(SpeakeasyBase));
export { PostAddressAutocompleteHeaders };
var PostAddressAutocompleteRequestBody = /** @class */ (function (_super) {
    __extends(PostAddressAutocompleteRequestBody, _super);
    function PostAddressAutocompleteRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Input" }),
        __metadata("design:type", String)
    ], PostAddressAutocompleteRequestBody.prototype, "input", void 0);
    return PostAddressAutocompleteRequestBody;
}(SpeakeasyBase));
export { PostAddressAutocompleteRequestBody };
var PostAddressAutocompleteRequest = /** @class */ (function (_super) {
    __extends(PostAddressAutocompleteRequest, _super);
    function PostAddressAutocompleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostAddressAutocompleteHeaders)
    ], PostAddressAutocompleteRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PostAddressAutocompleteRequestBody)
    ], PostAddressAutocompleteRequest.prototype, "request", void 0);
    return PostAddressAutocompleteRequest;
}(SpeakeasyBase));
export { PostAddressAutocompleteRequest };
var PostAddressAutocompleteResponse = /** @class */ (function (_super) {
    __extends(PostAddressAutocompleteResponse, _super);
    function PostAddressAutocompleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostAddressAutocompleteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostAddressAutocompleteResponse.prototype, "statusCode", void 0);
    return PostAddressAutocompleteResponse;
}(SpeakeasyBase));
export { PostAddressAutocompleteResponse };
