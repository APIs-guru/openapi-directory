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
var PostCommentsIdEditPathParams = /** @class */ (function (_super) {
    __extends(PostCommentsIdEditPathParams, _super);
    function PostCommentsIdEditPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], PostCommentsIdEditPathParams.prototype, "id", void 0);
    return PostCommentsIdEditPathParams;
}(SpeakeasyBase));
export { PostCommentsIdEditPathParams };
var PostCommentsIdEditQueryParams = /** @class */ (function (_super) {
    __extends(PostCommentsIdEditQueryParams, _super);
    function PostCommentsIdEditQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=body" }),
        __metadata("design:type", String)
    ], PostCommentsIdEditQueryParams.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], PostCommentsIdEditQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], PostCommentsIdEditQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=preview" }),
        __metadata("design:type", Boolean)
    ], PostCommentsIdEditQueryParams.prototype, "preview", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=site" }),
        __metadata("design:type", String)
    ], PostCommentsIdEditQueryParams.prototype, "site", void 0);
    return PostCommentsIdEditQueryParams;
}(SpeakeasyBase));
export { PostCommentsIdEditQueryParams };
var PostCommentsIdEditRequest = /** @class */ (function (_super) {
    __extends(PostCommentsIdEditRequest, _super);
    function PostCommentsIdEditRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostCommentsIdEditPathParams)
    ], PostCommentsIdEditRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostCommentsIdEditQueryParams)
    ], PostCommentsIdEditRequest.prototype, "queryParams", void 0);
    return PostCommentsIdEditRequest;
}(SpeakeasyBase));
export { PostCommentsIdEditRequest };
var PostCommentsIdEditResponse = /** @class */ (function (_super) {
    __extends(PostCommentsIdEditResponse, _super);
    function PostCommentsIdEditResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PostCommentsIdEditResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostCommentsIdEditResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostCommentsIdEditResponse.prototype, "statusCode", void 0);
    return PostCommentsIdEditResponse;
}(SpeakeasyBase));
export { PostCommentsIdEditResponse };
