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
var StoryIdPutPathParams = /** @class */ (function (_super) {
    __extends(StoryIdPutPathParams, _super);
    function StoryIdPutPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], StoryIdPutPathParams.prototype, "id", void 0);
    return StoryIdPutPathParams;
}(SpeakeasyBase));
export { StoryIdPutPathParams };
var StoryIdPutQueryParams = /** @class */ (function (_super) {
    __extends(StoryIdPutQueryParams, _super);
    function StoryIdPutQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include_outline" }),
        __metadata("design:type", Boolean)
    ], StoryIdPutQueryParams.prototype, "includeOutline", void 0);
    return StoryIdPutQueryParams;
}(SpeakeasyBase));
export { StoryIdPutQueryParams };
var StoryIdPutRequest = /** @class */ (function (_super) {
    __extends(StoryIdPutRequest, _super);
    function StoryIdPutRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", StoryIdPutPathParams)
    ], StoryIdPutRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", StoryIdPutQueryParams)
    ], StoryIdPutRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.Story)
    ], StoryIdPutRequest.prototype, "request", void 0);
    return StoryIdPutRequest;
}(SpeakeasyBase));
export { StoryIdPutRequest };
var StoryIdPutResponse = /** @class */ (function (_super) {
    __extends(StoryIdPutResponse, _super);
    function StoryIdPutResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], StoryIdPutResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], StoryIdPutResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], StoryIdPutResponse.prototype, "problemDetail", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Story)
    ], StoryIdPutResponse.prototype, "story", void 0);
    return StoryIdPutResponse;
}(SpeakeasyBase));
export { StoryIdPutResponse };
