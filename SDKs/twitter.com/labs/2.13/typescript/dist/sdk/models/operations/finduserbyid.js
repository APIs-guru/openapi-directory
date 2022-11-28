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
var FindUserByIdPathParams = /** @class */ (function (_super) {
    __extends(FindUserByIdPathParams, _super);
    function FindUserByIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], FindUserByIdPathParams.prototype, "id", void 0);
    return FindUserByIdPathParams;
}(SpeakeasyBase));
export { FindUserByIdPathParams };
var FindUserByIdQueryParams = /** @class */ (function (_super) {
    __extends(FindUserByIdQueryParams, _super);
    function FindUserByIdQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=expansions" }),
        __metadata("design:type", Array)
    ], FindUserByIdQueryParams.prototype, "expansions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=media.fields" }),
        __metadata("design:type", Array)
    ], FindUserByIdQueryParams.prototype, "mediaFields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=place.fields" }),
        __metadata("design:type", Array)
    ], FindUserByIdQueryParams.prototype, "placeFields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=poll.fields" }),
        __metadata("design:type", Array)
    ], FindUserByIdQueryParams.prototype, "pollFields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=tweet.fields" }),
        __metadata("design:type", Array)
    ], FindUserByIdQueryParams.prototype, "tweetFields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=user.fields" }),
        __metadata("design:type", Array)
    ], FindUserByIdQueryParams.prototype, "userFields", void 0);
    return FindUserByIdQueryParams;
}(SpeakeasyBase));
export { FindUserByIdQueryParams };
var FindUserByIdRequest = /** @class */ (function (_super) {
    __extends(FindUserByIdRequest, _super);
    function FindUserByIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FindUserByIdPathParams)
    ], FindUserByIdRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FindUserByIdQueryParams)
    ], FindUserByIdRequest.prototype, "queryParams", void 0);
    return FindUserByIdRequest;
}(SpeakeasyBase));
export { FindUserByIdRequest };
var FindUserByIdResponse = /** @class */ (function (_super) {
    __extends(FindUserByIdResponse, _super);
    function FindUserByIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FindUserByIdResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], FindUserByIdResponse.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], FindUserByIdResponse.prototype, "problem", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.SingleUserLookupResponse)
    ], FindUserByIdResponse.prototype, "singleUserLookupResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], FindUserByIdResponse.prototype, "statusCode", void 0);
    return FindUserByIdResponse;
}(SpeakeasyBase));
export { FindUserByIdResponse };
