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
var FindUserByUsernamePathParams = /** @class */ (function (_super) {
    __extends(FindUserByUsernamePathParams, _super);
    function FindUserByUsernamePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=username" }),
        __metadata("design:type", String)
    ], FindUserByUsernamePathParams.prototype, "username", void 0);
    return FindUserByUsernamePathParams;
}(SpeakeasyBase));
export { FindUserByUsernamePathParams };
var FindUserByUsernameQueryParams = /** @class */ (function (_super) {
    __extends(FindUserByUsernameQueryParams, _super);
    function FindUserByUsernameQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=expansions" }),
        __metadata("design:type", Array)
    ], FindUserByUsernameQueryParams.prototype, "expansions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=media.fields" }),
        __metadata("design:type", Array)
    ], FindUserByUsernameQueryParams.prototype, "mediaFields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=place.fields" }),
        __metadata("design:type", Array)
    ], FindUserByUsernameQueryParams.prototype, "placeFields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=poll.fields" }),
        __metadata("design:type", Array)
    ], FindUserByUsernameQueryParams.prototype, "pollFields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=tweet.fields" }),
        __metadata("design:type", Array)
    ], FindUserByUsernameQueryParams.prototype, "tweetFields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=user.fields" }),
        __metadata("design:type", Array)
    ], FindUserByUsernameQueryParams.prototype, "userFields", void 0);
    return FindUserByUsernameQueryParams;
}(SpeakeasyBase));
export { FindUserByUsernameQueryParams };
var FindUserByUsernameRequest = /** @class */ (function (_super) {
    __extends(FindUserByUsernameRequest, _super);
    function FindUserByUsernameRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FindUserByUsernamePathParams)
    ], FindUserByUsernameRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FindUserByUsernameQueryParams)
    ], FindUserByUsernameRequest.prototype, "queryParams", void 0);
    return FindUserByUsernameRequest;
}(SpeakeasyBase));
export { FindUserByUsernameRequest };
var FindUserByUsernameResponse = /** @class */ (function (_super) {
    __extends(FindUserByUsernameResponse, _super);
    function FindUserByUsernameResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FindUserByUsernameResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], FindUserByUsernameResponse.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], FindUserByUsernameResponse.prototype, "problem", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.SingleUserLookupResponse)
    ], FindUserByUsernameResponse.prototype, "singleUserLookupResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], FindUserByUsernameResponse.prototype, "statusCode", void 0);
    return FindUserByUsernameResponse;
}(SpeakeasyBase));
export { FindUserByUsernameResponse };
