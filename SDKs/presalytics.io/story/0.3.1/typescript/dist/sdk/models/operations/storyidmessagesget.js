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
var StoryIdMessagesGetPathParams = /** @class */ (function (_super) {
    __extends(StoryIdMessagesGetPathParams, _super);
    function StoryIdMessagesGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], StoryIdMessagesGetPathParams.prototype, "id", void 0);
    return StoryIdMessagesGetPathParams;
}(SpeakeasyBase));
export { StoryIdMessagesGetPathParams };
var StoryIdMessagesGetRequest = /** @class */ (function (_super) {
    __extends(StoryIdMessagesGetRequest, _super);
    function StoryIdMessagesGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", StoryIdMessagesGetPathParams)
    ], StoryIdMessagesGetRequest.prototype, "pathParams", void 0);
    return StoryIdMessagesGetRequest;
}(SpeakeasyBase));
export { StoryIdMessagesGetRequest };
var StoryIdMessagesGetResponse = /** @class */ (function (_super) {
    __extends(StoryIdMessagesGetResponse, _super);
    function StoryIdMessagesGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], StoryIdMessagesGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], StoryIdMessagesGetResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Array)
    ], StoryIdMessagesGetResponse.prototype, "messages", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], StoryIdMessagesGetResponse.prototype, "problemDetail", void 0);
    return StoryIdMessagesGetResponse;
}(SpeakeasyBase));
export { StoryIdMessagesGetResponse };
