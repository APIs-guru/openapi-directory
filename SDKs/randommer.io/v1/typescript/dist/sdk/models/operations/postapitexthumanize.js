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
var PostApiTextHumanizeHeaders = /** @class */ (function (_super) {
    __extends(PostApiTextHumanizeHeaders, _super);
    function PostApiTextHumanizeHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Api-Key" }),
        __metadata("design:type", String)
    ], PostApiTextHumanizeHeaders.prototype, "xApiKey", void 0);
    return PostApiTextHumanizeHeaders;
}(SpeakeasyBase));
export { PostApiTextHumanizeHeaders };
var PostApiTextHumanizeRequests = /** @class */ (function (_super) {
    __extends(PostApiTextHumanizeRequests, _super);
    function PostApiTextHumanizeRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/*+json" }),
        __metadata("design:type", shared.TextDto)
    ], PostApiTextHumanizeRequests.prototype, "textDto", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.TextDto)
    ], PostApiTextHumanizeRequests.prototype, "textDto1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json-patch+json" }),
        __metadata("design:type", shared.TextDto)
    ], PostApiTextHumanizeRequests.prototype, "textDto2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/json" }),
        __metadata("design:type", shared.TextDto)
    ], PostApiTextHumanizeRequests.prototype, "textDto3", void 0);
    return PostApiTextHumanizeRequests;
}(SpeakeasyBase));
export { PostApiTextHumanizeRequests };
var PostApiTextHumanizeRequest = /** @class */ (function (_super) {
    __extends(PostApiTextHumanizeRequest, _super);
    function PostApiTextHumanizeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostApiTextHumanizeHeaders)
    ], PostApiTextHumanizeRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostApiTextHumanizeRequests)
    ], PostApiTextHumanizeRequest.prototype, "request", void 0);
    return PostApiTextHumanizeRequest;
}(SpeakeasyBase));
export { PostApiTextHumanizeRequest };
var PostApiTextHumanizeResponse = /** @class */ (function (_super) {
    __extends(PostApiTextHumanizeResponse, _super);
    function PostApiTextHumanizeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostApiTextHumanizeResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostApiTextHumanizeResponse.prototype, "statusCode", void 0);
    return PostApiTextHumanizeResponse;
}(SpeakeasyBase));
export { PostApiTextHumanizeResponse };
