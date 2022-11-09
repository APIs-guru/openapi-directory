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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
var StoryPostFileJsonQueryParams = /** @class */ (function (_super) {
    __extends(StoryPostFileJsonQueryParams, _super);
    function StoryPostFileJsonQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=include_outline" }),
        __metadata("design:type", Boolean)
    ], StoryPostFileJsonQueryParams.prototype, "includeOutline", void 0);
    return StoryPostFileJsonQueryParams;
}(SpeakeasyBase));
export { StoryPostFileJsonQueryParams };
var StoryPostFileJsonRequest = /** @class */ (function (_super) {
    __extends(StoryPostFileJsonRequest, _super);
    function StoryPostFileJsonRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", StoryPostFileJsonQueryParams)
    ], StoryPostFileJsonRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Object)
    ], StoryPostFileJsonRequest.prototype, "request", void 0);
    return StoryPostFileJsonRequest;
}(SpeakeasyBase));
export { StoryPostFileJsonRequest };
var StoryPostFileJsonResponse = /** @class */ (function (_super) {
    __extends(StoryPostFileJsonResponse, _super);
    function StoryPostFileJsonResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], StoryPostFileJsonResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], StoryPostFileJsonResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], StoryPostFileJsonResponse.prototype, "problemDetail", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.Story)
    ], StoryPostFileJsonResponse.prototype, "story", void 0);
    return StoryPostFileJsonResponse;
}(SpeakeasyBase));
export { StoryPostFileJsonResponse };
