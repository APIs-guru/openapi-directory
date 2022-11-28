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
var DeleteVideoFromPortfolioAlt1PathParams = /** @class */ (function (_super) {
    __extends(DeleteVideoFromPortfolioAlt1PathParams, _super);
    function DeleteVideoFromPortfolioAlt1PathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=portfolio_id" }),
        __metadata("design:type", Number)
    ], DeleteVideoFromPortfolioAlt1PathParams.prototype, "portfolioId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=video_id" }),
        __metadata("design:type", Number)
    ], DeleteVideoFromPortfolioAlt1PathParams.prototype, "videoId", void 0);
    return DeleteVideoFromPortfolioAlt1PathParams;
}(SpeakeasyBase));
export { DeleteVideoFromPortfolioAlt1PathParams };
var DeleteVideoFromPortfolioAlt1Security = /** @class */ (function (_super) {
    __extends(DeleteVideoFromPortfolioAlt1Security, _super);
    function DeleteVideoFromPortfolioAlt1Security() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DeleteVideoFromPortfolioAlt1Security.prototype, "oauth2", void 0);
    return DeleteVideoFromPortfolioAlt1Security;
}(SpeakeasyBase));
export { DeleteVideoFromPortfolioAlt1Security };
var DeleteVideoFromPortfolioAlt1Request = /** @class */ (function (_super) {
    __extends(DeleteVideoFromPortfolioAlt1Request, _super);
    function DeleteVideoFromPortfolioAlt1Request() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteVideoFromPortfolioAlt1PathParams)
    ], DeleteVideoFromPortfolioAlt1Request.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteVideoFromPortfolioAlt1Security)
    ], DeleteVideoFromPortfolioAlt1Request.prototype, "security", void 0);
    return DeleteVideoFromPortfolioAlt1Request;
}(SpeakeasyBase));
export { DeleteVideoFromPortfolioAlt1Request };
var DeleteVideoFromPortfolioAlt1Response = /** @class */ (function (_super) {
    __extends(DeleteVideoFromPortfolioAlt1Response, _super);
    function DeleteVideoFromPortfolioAlt1Response() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteVideoFromPortfolioAlt1Response.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeleteVideoFromPortfolioAlt1Response.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.LegacyError)
    ], DeleteVideoFromPortfolioAlt1Response.prototype, "legacyError", void 0);
    return DeleteVideoFromPortfolioAlt1Response;
}(SpeakeasyBase));
export { DeleteVideoFromPortfolioAlt1Response };
