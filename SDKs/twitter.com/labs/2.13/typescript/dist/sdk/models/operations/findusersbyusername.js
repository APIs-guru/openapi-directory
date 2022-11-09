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
var FindUsersByUsernameQueryParams = /** @class */ (function (_super) {
    __extends(FindUsersByUsernameQueryParams, _super);
    function FindUsersByUsernameQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=false;name=expansions" }),
        __metadata("design:type", Array)
    ], FindUsersByUsernameQueryParams.prototype, "expansions", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=false;name=media.fields" }),
        __metadata("design:type", Array)
    ], FindUsersByUsernameQueryParams.prototype, "mediaFields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=false;name=place.fields" }),
        __metadata("design:type", Array)
    ], FindUsersByUsernameQueryParams.prototype, "placeFields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=false;name=poll.fields" }),
        __metadata("design:type", Array)
    ], FindUsersByUsernameQueryParams.prototype, "pollFields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=false;name=tweet.fields" }),
        __metadata("design:type", Array)
    ], FindUsersByUsernameQueryParams.prototype, "tweetFields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=false;name=user.fields" }),
        __metadata("design:type", Array)
    ], FindUsersByUsernameQueryParams.prototype, "userFields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=false;name=usernames" }),
        __metadata("design:type", Array)
    ], FindUsersByUsernameQueryParams.prototype, "usernames", void 0);
    return FindUsersByUsernameQueryParams;
}(SpeakeasyBase));
export { FindUsersByUsernameQueryParams };
var FindUsersByUsernameRequest = /** @class */ (function (_super) {
    __extends(FindUsersByUsernameRequest, _super);
    function FindUsersByUsernameRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", FindUsersByUsernameQueryParams)
    ], FindUsersByUsernameRequest.prototype, "queryParams", void 0);
    return FindUsersByUsernameRequest;
}(SpeakeasyBase));
export { FindUsersByUsernameRequest };
var FindUsersByUsernameResponse = /** @class */ (function (_super) {
    __extends(FindUsersByUsernameResponse, _super);
    function FindUsersByUsernameResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], FindUsersByUsernameResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], FindUsersByUsernameResponse.prototype, "error", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], FindUsersByUsernameResponse.prototype, "problem", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], FindUsersByUsernameResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.UserLookupResponse)
    ], FindUsersByUsernameResponse.prototype, "userLookupResponse", void 0);
    return FindUsersByUsernameResponse;
}(SpeakeasyBase));
export { FindUsersByUsernameResponse };
